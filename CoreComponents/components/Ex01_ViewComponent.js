import {View} from "react-native";

export default function Ex01_ViewComponent() {
  return <View style={{backgroundColor:"plum", flex:1}}>
    <View style={{width:200, height:200, backgroundColor:"lightblue"}}></View>
    <View style={{width:200, height:200, backgroundColor:"red"}}></View>
  </View>;
}