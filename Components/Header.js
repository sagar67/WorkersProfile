import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Header = ({categories, onSearch, onSelectCategory}) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        onSelectCategory(item.id);
        navigation.navigate('Categories');
      }}>
      <Image source={{uri: item.icon}} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Workers..."
        value={searchText}
        onChangeText={text => {
          setSearchText(text);
          onSearch(text);
        }}
      />
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  carousel: {
    marginVertical: 10,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
});

export default Header;
