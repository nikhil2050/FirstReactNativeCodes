import {View, Text, Image, ImageBackground, ScrollView, Button} from "react-native";
const logoImg = require("../assets/adaptive-icon.png")

/**
 * <Button>
 * 
 */
export default function Ex05_ButtonComponent() {
  return (
    <View style={{flex:1, backgroundColor:'plum', padding:60}}>
      <Button title="Press" onPress={ ()=>{console.log("Button pressed")} } color='green' />

      <Button 
          title="Disabled Press" 
          onPress={ ()=>{console.log("Button pressed")} } 
          color='green' 
          disabled />
    </View>
    );
}