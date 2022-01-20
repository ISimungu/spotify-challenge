import React from 'react'
import {View, views, Text, StyleSheet} from 'react-native'
import Header from './components/Header';
import PopularSong from './components/PopularSong';
import SongListArea from './components/SongListArea';
import Stats from './components/Stats';
import MainContainer from './navigation/MainContainer';


//Calling js folders
export default function App(){
  return(
  <View style={styles.container}>
    <Header/>
    <Stats/>
    <PopularSong/>
    <SongListArea/>
    <MainContainer/>
    
  </View>
    )

}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  }

});

