import {View, Text} from "react-native";

export default function Ex02_TextComponent() {
  return <View style={{backgroundColor:"plum", flex:1, padding:60}}>
    <Text>
        <Text style={{color:'white'}}>Hello</Text>
        World
    </Text>
  </View>;
}