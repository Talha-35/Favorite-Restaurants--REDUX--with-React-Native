import React from 'react'
import {View ,TextInput } from 'react-native'

import {search} from '../Styles';

const SearchBar = (props) => {
    return (
        <View style={search.container}>
            <TextInput 
                placeholder='Type Restaurant Name'
                onChangeText={(value) => props.onSearch(value)}
                style={search.input}
            />
        </View>
    )
}

export {SearchBar}
