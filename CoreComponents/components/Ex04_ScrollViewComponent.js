import {View, Text, Image, ImageBackground, ScrollView} from "react-native";
const logoImg = require("../assets/adaptive-icon.png")

/**
 * <ScrollView>
 * 
 * Note: To avoid overlap with Notification bar, use ScrollView inside View(padding:60)
 */
export default function Ex04_ScrollViewComponent() {
  return (
    <ScrollView style={{flex:1, backgroundColor:'plum', padding:60}}>
        <Image style={{width:300, height:500}} source={logoImg} />
        <Image style={{width:150, height:550}} source={{uri:"https://picsum.photos/301"}}></Image>
    </ScrollView>
    );
}