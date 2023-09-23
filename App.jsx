import {useState} from 'react';
import {Text, View} from 'react-native';

function App() {
  const [data, setData] = useState('ABCD_File');
  return (
    <View>
      <HomeScreen dataABC={data} />
    </View>
  );
}
export default App;

const HomeScreen = ({dataABC}) => {
  const [data, setData] = useState('ABCD_File');

  return (
    <View>
      <Text>Screen_1</Text>
      <Text>Data: {data}</Text>
    </View>
  );
};
