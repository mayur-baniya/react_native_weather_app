import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
  View,
} from 'react-native';
import {deviceHeight, deviceWidth} from '../src/Dimensions';
import Icon from 'react-native-vector-icons/Ionicons';
import Cards from './Cards';
import {ToastAndroid} from 'react-native';

const Home = props => {
  const [city, setCity] = useState('');
  const [modal, showModal] = useState(false);

  const showToast = msg => {
    const message = msg;
    const duration = ToastAndroid.SHORT; // or ToastAndroid.LONG

    ToastAndroid.show(message, duration);
  };

  const cities = [
    {
      name: 'Delhi',
      image: require('../assets/images/delhi.jpeg'),
    },
    {
      name: 'Tokyo',
      image: require('../assets/images/tokyo.jpeg'),
    },
    {
      name: 'Berlin',
      image: require('../assets/images/berlin.jpeg'),
    },
    {
      name: 'Mumbai',
      image: require('../assets/images/mumbai.jpeg'),
    },
    {
      name: 'Shenzhen',
      image: require('../assets/images/shenzhen.jpg'),
    },
    {
      name: 'New York',
      image: require('../assets/images/newyork.jpg'),
    },
  ];

    const validate = () =>{
        if(city == ''){
          showModal(true);
        }
    }
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/bg.png')}
        style={{height: deviceHeight, width: deviceWidth}}
        imageStyle={{opacity: 0.6, backgroundColor: 'black'}}
        blurRadius={60}
      />
      <View
        style={{
          position: 'absolute',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: deviceWidth - 25,
          }}>
          <TouchableOpacity onPress={() => showToast('soon..')}>
            <Icon name="menu" size={46} color="white" />
          </TouchableOpacity>

          <Image
            source={require('../assets/images/user.png')}
            style={{
              height: 45,
              width: 45,
              borderRadius: 50,
              alignSelf: 'flex-end',
            }}
          />
        </View>

        <View style={{marginTop: 100, paddingHorizontal: 10}}>
          <Text style={{fontSize: 40, color: '#15F391'}}>Greatings!</Text>
          <Text
            style={{
              fontSize: 20,
              color: '#09F78E',
              fontWeight: 'bold',
              paddingHorizontal: 10,
              marginBottom: 5,
            }}>
            Enter the city name to get weather
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: 'white',
              borderRadius: 230,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
            }}>
            <TextInput
              placeholder="Enter City"
              placeholderTextColor="white"
              style={{
                width: '90%',
                fontSize: 16,
              }}
              onChangeText={val => setCity(val)}
              value={city}
            />
            <TouchableOpacity
              onPress={() => {
                if(city == ''){
                  showModal(true);
                }else{
                  props.navigation.navigate('details', {name: city}), setCity('');
                }
                
              }}>
              <Icon name="search" size={22} color="cyan" />
            </TouchableOpacity>
          </View>

          <Text
            style={{fontSize: 20, color: 'white', marginTop: deviceHeight / 3}}>
            My Locations
          </Text>

          <FlatList
            data={cities}
            horizontal
            renderItem={({item}) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>

        <Modal transparent visible={modal} >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '70%',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent:'center',
                width: '60%',
                height: '50%',
                shadowColor: 'white',
                elevation: 20,
                
              borderWidth: 1,
              borderRadius: 15
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>City name shouldn't be empty</Text>

              <View style={{justifyContent: 'flex-end', marginTop: 20}}>
              <Button title="GO BACK" onPress={()=>showModal(false)}  />
              </View>
                
              
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Home;
