import React from 'react'
import {View, views, Text, StyleSheet,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Header(){
  return(
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={require('spotifyChallenge/assets/images/highklassified.jpg')} ></Image>
      <Text style={styles.title}>High Klassified</Text>
    </View>
      <View style ={styles.backButton}>
        <Icon name="chevron-circle-left" size={50} color='black'/>
      </View>
      
        
  </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 5.7,
    alignItems: 'center',
    backgroundColor: 'red',
    width: 600,
    height: 500,
   
  },
  title:{
    //fontFamily: 'spotifyChallenge/ios/Fonts/circular-std-medium-500',
     position: 'absolute',
     color: 'white',
     bottom:2,
     fontWeight: 'bold',
     fontSize: 48,
     left: 200,
  },
  imageContainer:{
    //alignItems: 'flex-end',
    right: 120,
    bottom: 60,
  },

  backButton:{
    position: 'absolute',
    left: 15,
    top: 40,
    opacity: 0.5,
  },
  

});

