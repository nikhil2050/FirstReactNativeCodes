import { useState } from "react";
import { Button, View } from "react-native";
import { StyleSheet, StatusBar, TextInput, Text } from "react-native";
import {SafeAreaView} from "react-native";

export default function Mainscreen() {

    const [input, setInput] = useState();
    const [output, setOutput] = useState("The output is : ");

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text1}> Input: </Text>
            <TextInput style={styles.input} 
                        value={input} 
                        onChangeText={setInput} 
                        onEndEditing={ () => {setOutput("The output is : "+input) }}/>
            {/* <Text style={styles.text1} > My name is {name}</Text> */}

            <View style={{padding:10}}>
                <Button 
                    title="Submit.." 
                    onPress={ ()=>{
                                    console.log("The output is : "+input); 
                                    setOutput("The output is : "+input)} } 
                    style={{padding: 30}}
                    color='blue' />
            </View>
            <Text style={styles.text1}> Output: </Text>
            <TextInput style={styles.output} 
                        value={output} 
                        editable={false}
                        />
            {/* <Text style={styles.text1} > My name is {name}</Text> */}

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        paddingTop: StatusBar.currentHeight,
    },
    input: {
        fontSize: 25,
        height: 40,
        margin: 12,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1
    },
    output: {
        fontSize: 25,
        height: 40,
        margin: 12,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1
    },
    text1: {
        fontSize: 30,
        paddingTop: 10,
        paddingBottom: 1,
        paddingLeft: 8
    }
});
