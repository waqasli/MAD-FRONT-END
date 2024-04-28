import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
export default function ImageScreen(props) {
 return (
    <View>
    <Image source = {props.imageSource}>
    </Image>
    <Text>
    {props.title}
    </Text>
    </View>
);
}
const styles = StyleSheet.create({
});
