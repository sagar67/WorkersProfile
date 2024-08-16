import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import profilepic from './assets/profilepic.png';

const WorkerProfile = ({profile}) => {
  const [imageUri, setImageUri] = useState(profile.profileImage);

  const handleImageError = () => {
    setImageUri(null);
  };

  const imageSource = imageUri ? {uri: imageUri} : profilepic;
const firstName = profile.name.split(' ')[0];
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
      <Text style={styles.name}>{firstName}</Text>
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
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  flag: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25, 
    height: 25, 
    borderRadius: 15, 
    borderWidth: 2, 
    borderColor: 'white',
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
