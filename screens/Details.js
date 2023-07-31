import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Image, TouchableOpacity, Modal} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {deviceHeight, deviceWidth} from '../src/Dimensions';
import {API_KEY} from '../src/Constants';

const Details = (props) => {
  const {name} = props.route.params;
  const [data, WeatherData] = useState();

  const cityName = data?.name;
  const temprature = data?.main?.temp;

  const wind = data?.wind?.speed;
  const visibility = data?.visibility;
  const pressure = data?.main?.pressure;
  const humidity = data?.main?.humidity;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`,
    )
      .then(res => res.json())
      .then(data => {
        WeatherData(data);
      })
      .catch(err => {
        console.log('Error:', err);
      });
  }, []);

  const Data = props => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{color: 'grey', fontSize: 22}}>{props.title}</Text>
      <Text style={{color: 'white', fontSize: 22}}>{props.value} {props.unit}</Text>
    </View>
  );

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
            <TouchableOpacity onPress={()=> props.navigation.navigate('home')}>
            <Icon name="arrow-back" size={46} color="white" />
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

        {data && wind ? (
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              height: deviceHeight - 100,
            }}>
            <View>
              <Text style={{color: 'white', fontSize: 40}}>{cityName}</Text>
              <Text style={{fontSize: 22, color: 'white', textAlign: 'center'}}>
                {data['weather'][0]['main']}
              </Text>
            </View>

            <Text style={{fontSize: 30, color: 'white'}}>
              {(temprature - 273).toFixed(1)}&deg; C
            </Text>

            <Text style={{fontSize: 22, color: 'white'}}>Weather Details</Text>

            <View style={{width: deviceWidth - 60}}>
              <Data title="Wind" value={wind} unit="KMh" />
              <Data title="Humidity" value={humidity} unit="" />
              <Data title="Pressure" value={pressure}  unit="N/m²"/>
              <Data title="Visibility" value={visibility} unit=""/>
            </View>
          </View>
        ) : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '60%',
            }}>
            <Text style={{fontSize: 28, color: 'white'}}>
              Oops... such a empty
            </Text>
            <Text style={{fontSize: 18, color: 'white', marginTop: 5}}>
              Invalid City name
            </Text>
          
            <View style={{marginTop: '5%', marginBottom: '3%'}}>
              <ImageBackground
                source={require('../assets/images/confused.png')}
                style={{height: deviceHeight / 5, width: deviceWidth/2}}
              />
               
            </View>
            <Text style={{fontSize: 16, color: 'white'}}>
              {' '}
              try again with a valid city name{' '}
            </Text>
          </View>
        )}

      </View>
    </View>
  );
};

export default Details;
