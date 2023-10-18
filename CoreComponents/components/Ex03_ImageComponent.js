import {View, Text, Image, ImageBackground} from "react-native";
const logoImg = require("../assets/adaptive-icon.png")

/**
 * <Image> and <ImageBackground>
 */
export default function Ex03_ImageComponent() {
  return <View style={{backgroundColor:"plum", flex:1, padding:60}}>
    <ImageBackground source={{uri:"https://picsum.photos/3500"}} style={{flex:1}}>
        <Image style={{width:300, height:300}} source={logoImg}></Image>
        <Image style={{width:150, height:150}} source={{uri:"https://picsum.photos/300"}}></Image>
        <Text style={{fontSize:50, color:'yellow'}}>IMAGE TEXT</Text>
    </ImageBackground>
  </View>;
}