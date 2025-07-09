import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Share,
  ActivityIndicator,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styles from './DetailScreen.styles';
import { RootStackParamList } from '../navigation/types';

type Props = StackScreenProps<RootStackParamList, 'Details'>;

const DetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { content: initialContent } = route.params;
  const screenWidth = Dimensions.get('window').width;

  const [content, setContent] = useState<any>(initialContent || null);
  const [loading, setLoading] = useState(!initialContent);

  const stripHtml = (html: string): string => html.replace(/<[^>]+>/g, '');

  const fetchContent = async () => {
    try {
      setLoading(true);

      const tokenRes = await fetch(
        'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: 'arshiyataj1412@gmail.com' }),
        },
      );
      const { token } = await tokenRes.json();

      const contentRes = await fetch(
        'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent',
        {
          method: 'GET',
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      const { content: newContent } = await contentRes.json();
      setContent(newContent);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!initialContent) {
      fetchContent();
    }
  }, []);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${content.title}\n\n${stripHtml(content.text)}`,
      });
    } catch (error) {
      console.error('Error sharing content:', error);
    }
  };

  if (loading || !content) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Main Image */}
        <Image
          source={{ uri: content.mainImage }}
          style={[styles.image, { width: screenWidth }]}
        />

        {/* Header Section */}
        <View style={styles.cardHeaderRow}>
          <Image source={{ uri: content.logo }} style={styles.logo} />

          <View style={styles.textContainerHeader}>
            <Text style={styles.title}>{content.title}</Text>
            <Text style={styles.subtitle}>{content.subTitle}</Text>
          </View>

          <TouchableOpacity onPress={fetchContent} style={styles.refreshButton}>
            <Text style={styles.refreshText}>REFRESH</Text>
          </TouchableOpacity>
        </View>

        {/* Body Text */}
        <View style={styles.textBlock}>
          <Text style={styles.text}>{stripHtml(content.text)}</Text>
        </View>

        {/* Meta Section */}
        <View style={styles.metaBlock}>
          <Image source={{ uri: content.logo }} style={styles.metaLogo} />
          <Text style={styles.metaTitle}>{content.title}</Text>
          <Text style={styles.metaSubtitle}>{content.subTitle}</Text>

          <TouchableOpacity
            onPress={fetchContent}
            style={styles.metaRefreshButton}
          >
            <Text style={styles.metaRefreshText}>REFRESH</Text>
          </TouchableOpacity>
        </View>

        {/* Share Button */}
        <View style={styles.shareWrapper}>
          <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
            <Text style={styles.buttonText}>Share Story</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
