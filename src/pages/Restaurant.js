import React, {useState,useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {RestaurantItem , SearchBar} from '../components';

import {res} from '../Styles';

let originalRestaurantList = [];

const Restaurant = (props) => {
    const [list, setList] = useState() ;
    const dispatch = useDispatch()


    const fetchData = () => {
        axios.get('https://opentable.herokuapp.com/api/restaurants?state=IL')
        .then((response) => {
            setList(response.data.restaurants)
            originalRestaurantList = [...response.data.restaurants]
        })
        .catch((error) => response(error))
    }
    

    const searchRestaurant = (search) => { 
        const filteredRestaurants = originalRestaurantList.filter(restaurant =>{
            const text = search.toUpperCase() ;
            const restaurantName = restaurant.name.toUpperCase() ;

            return restaurantName.indexOf(text) > -1;

        })
        setList(filteredRestaurants)        
    }
    

    const renderData = ({item}) => {
        return (
            <RestaurantItem 
                item = {item} 
                onDetail={() => props.navigation.navigate(
                    'details' ,
                    {item : item}                
                )} 
                onData={() => dispatch({
                    type : "ADD_FAV" , 
                    payload : {selectedRestaurant : item}
                })} 
                />
        )
    }

    useEffect(() => {
        fetchData()
    }, [])
  return (
    <View>
      <View style={res.title}>
        <Text style={res.titleText}>Restaurant</Text>
      </View>
      <SearchBar onSearch={value => searchRestaurant(value)}/>
      <FlatList
        keyExtractor = {(item, index) => index.toString()}
        data={list}
        renderItem={renderData}
      />
    </View>
  );
};

export {Restaurant};

