import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native'


const Songs = [
    {
        songNumber: 1,
        name: 'Im fine - Imanu Remix',
        image: '',
        playCount: '823,428'
    },
    {
        songNumber: 2,
        name: 'Im fine',
        image: 'spotifyChallenge/assets/images/greaterThan.jpg',
        playCount: '104,283'
    },
];

function Item({ songNumber, name, image, playCount }) {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.songNumber}>{songNumber}</Text>
            <Image style={styles.Image} source={require('spotifyChallenge/assets/images/songArt.jpeg')}></Image>
            <View style={styles.text}>
                <Text style={styles.listName}>{name}</Text>
                <Text style={styles.playCount}>{playCount}</Text>
            </View>
            <Text style={styles.dots}>•••</Text>
        </View>

    );
}

export default function SongListArea() {
    return (
        <SafeAreaView styles={styles.container}>
            <Text style={styles.headerText}>Okudumile</Text>
            <FlatList
                data={Songs}
                renderItem={({ item }) => (
                    <Item songNumber={item.songNumber} name={item.name} image={item.image} playCount={item.playCount} />
                )}
            >/</FlatList>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    headerText: {
        height: 40,
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'left',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'black',
    },
    dots: {
            position: "absolute",
            right: 10,
            color: "white",
    },
   

    // Item styles

    itemContainer:{
        flexDirection: "row",
        backgroundColor: "black",

    }, songNumber: {
        width: 50,
        fontSize: 19,
        color: "white",
         textAlign: 'center',
         fontWeight: 'normal',
     },
     listName: {
         fontSize: 19,
         flexDirection: 'row',
         alignItems: "flex-start",
         marginBottom: 5,
         color: "white",
     },
     playCount: {
        color: "white",
         justifyContent: 'flex-end',
         color: 'gray',
     },
     Image: {
         width: 50,
         height: 50,
         marginRight: 20,
     },

});

