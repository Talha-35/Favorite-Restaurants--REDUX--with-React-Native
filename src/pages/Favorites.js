import React from 'react';
import {Text, View, FlatList , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {fav} from '../Styles';

const Favorites = () => {
   const selectedRestaurant = useSelector((state) => state.favList);

  return (
    <View style={fav.container}>
      <View style={fav.title}>
        <Text style={fav.titleText}>Favorite Restaurants</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={selectedRestaurant}
        renderItem={({item}) => {
          if (item.price == 1) {
            return <Text style={fav.name}>{'❤  ' + item.name}</Text>;
          } else if (item.price == 2) {
            return <Text style={fav.name}>{'🧡  ' + item.name}</Text>;
          } else if (item.price == 3) {
            return <Text style={fav.name}>{'💚  ' + item.name}</Text>;
          } else if (item.price == 4) {
            return <Text style={fav.name}>{'💙  ' + item.name}</Text>;
          } else {
            return <Text style={fav.name}>{'🖤  ' + item.name}</Text>;
          }
        }}
        ListEmptyComponent={() => (
          <Text style={fav.empty}>Nothing on fav....</Text>
        )}
        // liste ekranı boş iken ekran da yazan yazı
        //  ItemSeparatorComponent={() => <View style={fav.seperator} />}
      />
      {/* <TouchableOpacity
        onPress={() => null }
        style={fav.touch}>
        <Text style={fav.touchText}>Delete All</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export {Favorites};

