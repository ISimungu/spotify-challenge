import React from 'react';
import {View, views, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default function Stats() {
  return (
    
    <LinearGradient colors={['#2a2a2a','#000000']} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.topText}>Abalaleli benyanga anbangu - 166,307</Text>
        <View style={styles.textContainer2}>
          <View style={styles.textContainer3}>
          <Text style={styles.bottomText}>OBALANDELAYO</Text>
          </View>
          <Text style={styles.dots}>•••</Text>
        </View>
      </View>
        <View style={styles.playImage}><Icon styles={{backgroundColor: 'white', color: 'white'}}name="play" size={35} color="white"/></View>
        <View style={styles.shuffleImage}><Icon name="random" size={20} color="#1bb956"/></View>
      </LinearGradient>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.37,
    flexDirection: 'row',
    backgroundColor: 'black',
    alignItems: 'center',
  },

  textContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '',
  },

  textContainer2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },

  textContainer3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },


  topText: {
    flexDirection: 'row',
    fontSize: 13,
    color: '#a2a2a2',
    paddingHorizontal: 8,
    paddingVertical: 8,
    top:1 ,
    marginLeft: 10,
  },

  bottomText: {
    flex: 5,
    fontSize: 14,
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    borderLeftWidth: 8,
    borderRightWidth: 14,
    marginBottom: 32,
    paddingVertical: 10,
    top: 10,
    marginLeft: 14,
    
    
  },
  dots: {
    flex: 1,
    right: 10,
    fontSize: 17,
    color: 'gray',
    marginLeft: 42,
    top: 17,
  },

  Image: {
    flex: 1,
    width: 30,
    height: 80,
    bottom: 2,
  },

  playImage:{
    top: 5,
    right: 10,
    backgroundColor: '#1bb956',
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  
    
  },
  shuffleImage:{
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 5,
    bottom: 3,
    backgroundColor: 'white',
    width: 28,
    height: 28,
    borderRadius: 16,
  },
});
