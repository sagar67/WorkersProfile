import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconSelector, { ICON_TYPE } from './common/Icons';

const Header = ({categories, onSearch, onSelectCategory}) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        onSelectCategory(item.id);
        navigation.navigate('Categories');
      }}
      style={styles.itemContainer}>
      <Image source={{uri: item.icon}} style={styles.icon} />
      <Text style={styles.itemText}>{item.Worker_Role}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
      />
      <View style={styles.searchContainer}>
        <View style={styles.searchIcon}>
          <IconSelector
            type={ICON_TYPE.Ionicons}
            name="search"
            size={20}
            color="black"
          />
        </View>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            onSearch(text);
          }}
          placeholderTextColor="black" // Change placeholder text color to red
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    color: 'black',
    flex: 1, // Takes up remaining space,
    paddingLeft:40,
  },
  searchIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 10,
    zIndex:1,
    top:10,
  },
  carousel: {
    paddingVertical: 10,
    backgroundColor: '#eae5de',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    paddingHorizontal:5,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemText: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
  },
});

export default Header;
