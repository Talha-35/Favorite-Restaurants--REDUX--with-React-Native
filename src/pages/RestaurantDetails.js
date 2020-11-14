import React from 'react';
import {Text, View, Image, TouchableOpacity, Linking} from 'react-native';

import {RestaurantItem} from '../components';

import {detail} from '../Styles';

const RestaurantDetails = (props) => {
  const {item} = props.route.params;


  return (
    <View style={detail.container}>
      <View style={detail.title}>
        <Text style={detail.titleText}>Restaurant Details</Text>
      </View>
      <Text style={detail.name}>{item.name}</Text>
      <Image style={detail.image} source={{uri: 'https://www.augustiner-restaurant.com/fileadmin/user_upload/Bildwechsel/Startseite/008.jpg'}} />
      <Text style={detail.city}>{item.city}</Text>
      <Text style={detail.phone}>{item.phone}</Text>
      <Text style={detail.area}>{item.area}</Text>
      <Text
        style={[ detail.price,
          {
            backgroundColor: item.price > 2 ? '#ef5350' : 'white',
            color: item.price > 2 ? 'white' : 'black',
          }]}>
        {item.price > 2 ? 'Expensive     💰💰💰' : 'Cheap'}
      </Text>
      
      <TouchableOpacity
        onPress={() => Linking.openURL(item.reserve_url)}
        style={detail.touch}>
        <Text style={detail.touchText}>Go To Reserve</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={detail.touch2}>
        <Text style={detail.touchText2}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export {RestaurantDetails};

// address: "2024 North Halsted St."
// area: "Chicago / Illinois"
// city: "Chicago"
// country: "US"
// id: 1162
// image_url: "https://www.opentable.com/img/restimages/1162.jpg"
// lat: 41.918677
// lng: -87.648811
// mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=1162"
// name: "Café Ba-Ba-Reeba"
// phone: "7739355000x"
// postal_code: "60614"
// price: 2
// reserve_url: "http://www.opentable.com/single.aspx?rid=1162"
// state: "IL"
// __proto__: Object
