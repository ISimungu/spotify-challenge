import React from 'react'
import {View, views, Text, StyleSheet, Image, SafeAreaView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function PopularSong(){
  return(
  <View style={styles.container}>
        <Image style={styles.Image} source={require('spotifyChallenge/assets/images/artistLoved.png')}></Image>
        <View style={styles.detailedText}>
            <Text style={styles.mainText}> Izingoma Ezithandiwe</Text>
            <Text style={styles.secondText}> 5 izingoma • High klassified</Text>
        </View>
        <Text style={styles.chevronImage}><Icon name="angle-right" size={30} color="#FFFFFF" /></Text>
  </View>
    
    )

}

const styles = StyleSheet.create({
  container:{
    flex: 1.5,
    flexDirection: "row",
   backgroundColor: 'black',
},

    //ITEM STYLES


  mainText:{
    flexDirection: 'column',
    //fontFamily: 'spotifyChallenge/assets/images/fonts/circular-std-medium-500.ttf',
    fontSize: 20,
    top: 19, 
    paddingVertical: 10,
    color: 'white',

  },
  Image:{
    width: 60,
    height: 60,
    margin: 20,
  },

  detailedText: {
    flexDirection: 'column',
 },

 secondText: {
   //fontFamily: 'spotifyChallenge/assets/images/fonts/FontAwesome.ttf',
    color: "gray", 
    top: 20,  
 },
 arrow: {
    position: 'absolute',
    paddingVertical: 40,
    right: 2,
    color: "white",
},

chevronImage:{
  flexDirection: 'column',
  top: 35,
  left: 55,
},
  

});

