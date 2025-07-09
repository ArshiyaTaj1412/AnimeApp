import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import styles from './HomeScreen.styles';
import ProfileIcon from '../components/ProfileIcon';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: NavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [content, setContent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

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
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
    fetchContent();
  }, []);

  const handleCardPress = () => {
    navigation.navigate('Details', { content });
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" testID="loader" />
      </View>
    );
  }

  if (!content) {
    return (
      <View style={styles.center}>
        <Text>No content found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.header}>Today</Text>
        </View>
        <ProfileIcon />
      </View>

      {/* Content Card */}
      <TouchableOpacity onPress={handleCardPress} style={styles.card}>
        <Image
          source={{ uri: content.thumbNailImage }}
          style={styles.thumbnail}
        />

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
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
