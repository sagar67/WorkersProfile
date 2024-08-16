import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import workersData from './data/workers.json';
import categoriesData from './data/categories.json';
import WorkerProfile from './WorkerProfile';
import Header from './Header';

const CategoriesScreen = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workersData);

  const handleSearch = text => {
    const filtered = workersData.filter(worker =>
      worker.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredWorkers(filtered);
  };

  const handleSelectCategory = categoryId => {
    const filtered = workersData.filter(
      worker => worker.categoryId === categoryId,
    );
    setFilteredWorkers(filtered);
  };

  return (
    <View style={styles.container}>
      <Header
        categories={categoriesData}
        onSearch={handleSearch}
        onSelectCategory={handleSelectCategory}
      />
      <FlatList
        data={filteredWorkers}
        renderItem={({item}) => <WorkerProfile profile={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:'white'
  },
});

export default CategoriesScreen;
