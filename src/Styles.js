import {StyleSheet, Dimensions} from 'react-native';

export const res = StyleSheet.create({
  title: {
    backgroundColor: '#ad1457',
    padding: 8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  title: {
    backgroundColor: '#ad1457',
    padding: 8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },

  name: {
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#b0bec5',
    fontSize: 18,
    padding: 10,
  },
});
export const fav = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfd8dc',
  },
  title: {
    backgroundColor: '#ad1457',
    padding: 8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#b0bec5',
    fontSize: 16,
    padding: 10,
  },
  empty: {
    fontSize: 23,
    marginTop: 300,
    alignSelf: 'center',
  },
  touch1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  icon1: {
    paddingLeft: 5,
    paddingTop: 14,
  },
  touch: {
    marginTop: 30,
    backgroundColor: '#002424',
    marginHorizontal: 110,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  touchText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
export const detail = StyleSheet.create({
  container: {},
  title: {
    backgroundColor: '#ad1457',
    padding: 8,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  touch: {
    marginTop: 30,
    backgroundColor: '#002424',
    marginHorizontal: 110,
    padding: 5,
    borderRadius: 10,
    marginTop: 20,
  },
  touchText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  touch2: {
    marginTop: 10,
    backgroundColor: '#002424',
    marginHorizontal: 150,
    padding: 5,
    borderRadius: 10,
    // marginVertical: 20,
  },
  touchText2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 25,
    marginTop: 10,
    paddingVertical: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#cfd8dc',
  },
  city: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cfd8dc',
    fontSize: 18,
    padding: 10,
  },
  phone: {
    borderBottomWidth: 1,
    fontSize: 18,
    borderColor: '#cfd8dc',
    padding: 10,
  },
  area: {
    borderBottomWidth: 1,
    borderColor: '#cfd8dc',
    fontSize: 18,
    padding: 10,
  },
  price: {
    borderBottomWidth: 1,
    borderColor: '#cfd8dc',
    fontSize: 18,
    padding: 10,
  },
  priceContainer: {
    flexDirection: 'row',
  },
  icon1: {
    position: 'absolute',
    right: 5,
    top: 10,
    color: 'black',
  },
});
export const ritem = StyleSheet.create({
  touch1: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  touchText: {
    padding: 10,
    fontSize: 16,
  },
  icon1: {
    paddingLeft: 5,
    paddingTop: 14,
  },
  touch2: {
    position: 'absolute',
    right: 5,
  },
  icon2: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
});
export const search = StyleSheet.create({
  container: {
    backgroundColor : '#eceff1' ,
    borderRadius : 5 ,
    margin : 2 ,
    // padding : 3 ,
    borderWidth : 1 ,
    borderColor : 'gray'
  },
  input: {
    fontSize : 17 ,
  },
});
