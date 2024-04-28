import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import ImageDetail from "../components/ImageDetail"
import ColorChanger from '../components/ColorChanger';

export default function Assignment3() {
    const initialColors = [0, 0, 0]; 
    const [colors, setColors] = useState(initialColors);

    const Color_Increment = 15;

    const setColor = (index, change) => {
        const newColors = [...colors];
        newColors[index] = Math.min(Math.max(newColors[index] + change, 0), 255); 
        setColors(newColors);
    };

    return (
        <View>
            <Text>Welcome to Assignment3 </Text>

            <ColorChanger
                color="Red"
                onIncrease={() => setColor(0, Color_Increment)}
                onDecrease={() => setColor(0, -1 * Color_Increment)}
            />
            <ColorChanger
                color="Green"
                onIncrease={() => setColor(1, Color_Increment)}
                onDecrease={() => setColor(1, -1 * Color_Increment)}
            />
            <ColorChanger
                color="Blue"
                onIncrease={() => setColor(2, Color_Increment)}
                onDecrease={() => setColor(2, -1 * Color_Increment)}
            />
            <View style={{ margin: 20, height: 100, width: 100, backgroundColor: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})` }}></View>
        </View>
    );
}

const styles = StyleSheet.create({});