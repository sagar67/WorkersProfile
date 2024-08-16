import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

// Import local fallback image
import profilepic from './assets/profilepic.png';

const WorkerProfile = ({profile}) => {
  const [imageUri, setImageUri] = useState(profile.profileImage);

  // Handle image load error
  const handleImageError = () => {
    setImageUri(null); // Fallback to local image
  };

  // Determine the source of the profile image
  const imageSource = imageUri ? {uri: imageUri} : profilepic;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          onError={handleImageError}
          style={styles.image}
        />
        {profile.countryFlag && (
          <Image source={{uri: profile.countryFlag}} style={styles.flag} />
        )}
      </View>
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.country}>{profile.country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  imageContainer: {
    position: 'relative', // Required for absolute positioning of the flag
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  flag: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 30, // Adjust size as needed
    height: 30, // Adjust size as needed
    borderRadius: 15, // Make it circular
    borderWidth: 2, // Optional border for better visibility
    borderColor: 'white', // Optional border color
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    color: 'tomato',
  },
  country: {
    fontSize: 14,
    color: '#888',
  },
});

export default WorkerProfile;
