import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {githubData} from './githubData';

const App = () => {
  const renderITemFunc = ({item}) => {
    return (
      <View>
        <Text>{item.login}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={githubData} renderItem={renderITemFunc} />
    </View>
  );
};

export default App;
