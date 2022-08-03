import {
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import myStyles from '../../css/myStyles';
import {RotationGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/rotationGesture';
import CustomDialogPop from '../../components/CustomDialogPop';
import Icon from 'react-native-vector-icons/AntDesign';

const PaginationScreen = props => {
  const [offset, setOffSet] = useState(1);
  const [dataSource, setDataSoure] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modelVisible, setModelVisible] = useState(false);
  const [isOpen, setOpen] = useState(false);
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
        setOffSet(offset + 1);
        setDataSoure([...dataSource, ...responseJson.results]);
        setLoading(false);
      })
      .catch(error => {
        console.log('====> Error: ', error);
      });
  };

  // const CustomModalView = props => {
  //   {
  //     console.log('====================');
  //   }
  //   const {
  //     yesButto = true,
  //     noButton = false,
  //     yesText = 'Ok',
  //     noText = 'No',
  //     title = 'Nilesh',
  //     contentMessage = 'Value',
  //     visible = false,
  //   } = props;
  //   {
  //     console.log('======Loading customDialog');
  //   }
  //   return (
  //     <Modal animationType="fade" transparent={true} visible={visible}>
  //       <View
  //         style={{
  //           flex: 1,
  //           justifyContent: 'center',
  //           backgroundColor: 'rgba(52, 52, 52, 0.6)',
  //           alignItems: 'center',
  //         }}>
  //         <View
  //           style={{
  //             margin: 20,
  //             backgroundColor: 'white',
  //             borderRadius: 20,
  //             padding: 35,
  //             alignItems: 'center',
  //             shadowColor: '#000',
  //             shadowOffset: {
  //               width: 0,
  //               height: 2,
  //             },
  //             shadowOpacity: 0.25,
  //             shadowRadius: 4,
  //             elevation: 5,
  //           }}>
  //           <Text>{title}</Text>
  //           <Pressable onPress={() => setModelVisible(!visible)}>
  //             <Text
  //               style={{
  //                 fontSize: 14,
  //                 backgroundColor: 'blue',
  //                 color: 'white',
  //                 padding: 8,
  //                 marginTop: 10,
  //                 borderRadius: 10,
  //               }}>
  //               Close
  //             </Text>
  //           </Pressable>
  //         </View>
  //       </View>
  //     </Modal>
  //   );
  // };

  const onItemClick = item => {
    console.log('========== Modal Show');
  };

  const ItemRender = ({item}) => {
    return (
      <>
        <TouchableOpacity
          style={{width: '100%', padding: 5}}
          onPress={() => (
            <CustomDialogPop
              title={item.title}
              contentMessage={item.completed}
              visible={true}
              {...props}
            />
          )}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              borderColor: '#000',
              borderWidth: 0.8,
              alignItems: 'center',
            }}>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 15,
                padding: 5,
                width: '92%',
              }}>
              {item.id}
              {'.'} {item.title}
            </Text>
            <Icon
              onPress={() => Alert.alert(item.title)}
              style={{marginRight: 5}}
              name={isOpen ? 'caretdown' : 'caretup'}
              color="black"
              size={20}
            />
          </View>
        </TouchableOpacity>
      </>
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modelVisible}
        onRequestClose={() => setModelVisible(!modelVisible)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(52, 52, 52, 0.6)',
            alignItems: 'center',
          }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text>Hi Team</Text>
            <Pressable onPress={() => setModelVisible(!modelVisible)}>
              <Text
                style={{
                  fontSize: 14,
                  backgroundColor: 'blue',
                  color: 'white',
                  padding: 8,
                  marginTop: 10,
                  borderRadius: 10,
                }}>
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
