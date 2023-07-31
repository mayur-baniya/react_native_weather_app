import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {deviceHeight, deviceWidth} from '../src/Dimensions';

const Cards = ({name, image, navigation}) => {
  return (
    <TouchableOpacity style={{marginHorizontal: 10}}  onPress={()=> navigation.navigate('details', {name}) } >
      <ImageBackground
        source={image}
        style={{height: deviceHeight / 5, width: deviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 15}}
      />
        <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text style={{
            fontSize: 20,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: '#F3F015',
            fontWeight: 'bold',
        }}>{name}</Text>
        </View>
        
    </TouchableOpacity>
  );
};

export default Cards;
