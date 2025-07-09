import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProfileImage from '../Assets/Images/ProfileImage.jpg';

const ProfileIcon = () => {
  return (
    <View style={styles.container}>
     <Image source={ProfileImage} style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ProfileIcon;
