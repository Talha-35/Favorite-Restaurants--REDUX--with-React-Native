import React, {useState,useEffect} from 'react';
import {Text, View, FlatList , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

import {fav} from '../Styles';

import { SearchBar} from '../components';

const Favorites = () => {
  const [list, setList] = useState() ;
   const selectedRestaurant = useSelector((state) => state.favList);
  //  const selectedRestaurant = originalRestaurantList

   const searchRestaurant = (search) => { 
    const filteredRestaurants = selectedRestaurant.filter(restaurant =>{
        const text = search.toUpperCase() ;
        const restaurantName = restaurant.name.toUpperCase() ;

        return restaurantName.indexOf(text) > -1;

    })
    setList(filteredRestaurants)        
}


useEffect(() => {
    setList(selectedRestaurant)
}, [])

  return (
    <View style={fav.container}>
      <View style={fav.title}>
        <Text style={fav.titleText}>Favorite Restaurants</Text>
      </View>
      <SearchBar onSearch={value => searchRestaurant(value)}/>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={list}
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
      <TouchableOpacity
        onPress={() => setList([]) }
        style={fav.touch}>
        <Text style={fav.touchText}>Delete All</Text>
      </TouchableOpacity>
    </View>
  );
};

export {Favorites};

