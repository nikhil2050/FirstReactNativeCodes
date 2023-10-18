import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable} from "react-native";
//const logoImg = require("../assets/adaptive-icon.png")

export default function mainscreen() {
  return (
    <View style={{flex:1, backgroundColor:'plum', padding:60}}>
        <Pressable onPress={ ()=>console.log("Image1 pressed") } >
            <Image style={{width:300, height:300}} source={logoImg}></Image>
        </Pressable>

        <Pressable onPress={ ()=>console.log("Image2 pressed") } >
            <Image style={{width:150, height:150}} source={{uri:"https://picsum.photos/300"}}></Image>
        </Pressable>

        <Pressable onPress={ ()=>console.log("Text pressed") } >
            <Text style={{fontSize:50, color:'yellow'}}>IMAGE TEXT</Text>
        </Pressable>

    </View>
    );
}