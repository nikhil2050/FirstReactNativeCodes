import { useState } from "react";
import {View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal} from "react-native";

/**
 * <Modal> Component:
 * It is a screen that overlays the app content to provide important info/prompt the user for decisopm.
 * Since they are purposefully interruptive make sure you use them only when necessary.
 * 
 * To close Modal using physical BACK button, use "onRequestClose"
 */
export default function Ex07_ModalComponent() {
    const [openModalFlag, setOpenModalFlag] = useState(false);
    return (
        <View style={{flex:1, backgroundColor:'plum', padding:60}}>
            <Button title="Press" 
                    onPress={ ()=> {
                            setOpenModalFlag(true);
                        }
                    } 
                    color='black'
                    />
            <Modal 
                    visible={openModalFlag}
                    onRequestClose={() => setOpenModalFlag(false)}              // To handle using physical BACK button
                    style={{paddingLeft:100, marginRight:100}}>
                <View style={{flex:1, backgroundColor:'green', padding:50}}>
                    <Text>Modal content</Text>
                    <Button title='Close' 
                        color='blue' 
                        onPress={ () => {
                            setOpenModalFlag(false)
                        }}/>
                </View>
            </Modal>
        </View>
    );
}