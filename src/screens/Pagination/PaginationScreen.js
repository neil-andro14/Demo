import {
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import myStyles from '../../css/myStyles';
import {RotationGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture';

const PaginationScreen = () => {
  const [offset, setOffSet] = useState(1);
  const [dataSource, setDataSoure] = useState([]);
  const [loading, setLoading] = useState(true);
  let callURL = 'https://aboutreact.herokuapp.com/getpost.php?offset=';

  useEffect(() => {
    console.log('first');
    getAPIData();
  }, []);

  const getAPIData = () => {
    console.log('================= Call', offset);
    setLoading(true);
    fetch(callURL + offset)
      .then(response => response.json())
      .then(responseJson => {
        // console.log('=======', responseJson.results);
        setOffSet(offset + 1);

        setDataSoure([...dataSource, ...responseJson.results]);
        // console.log('====> DataSoure', dataSource);
        setLoading(false);
      })
      .catch(error => {
        console.log('====> Error: ', error);
      });
  };
  const ItemRender = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={{width: '100%', padding: 5}}>
          <Text
            style={{
              fontSize: 15,
              borderColor: '#000',
              borderWidth: 0.8,
              padding: 5,
            }}>
            {item.id}
            {'.'} {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const footerForListView = () => {
    return (
      <View>
        {loading ? <ActivityIndicator color="black" size="large" /> : null}
      </View>
    );
  };
  return (
    <View style={myStyles.container}>
      <StatusBar style="auto"></StatusBar>
      <Text style={{fontSize: 15, fontWeight: '800'}}>Pagination Screen</Text>
      <FlatList
        data={dataSource}
        renderItem={ItemRender}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => getAPIData()}
        onEndReachedThreshold={0.3}
        ListFooterComponent={footerForListView}
      />
    </View>
  );
};

export default PaginationScreen;
