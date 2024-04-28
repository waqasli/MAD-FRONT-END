import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function InputSearch() {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [data, setData] = useState([]);

    const handleSubmit = () => {

        const exists = data.some(item => item.name === name && item.fatherName === fatherName && item.rollNumber === rollNumber);
        if (!exists) {
            setData([...data, { name, fatherName, rollNumber }]);
        }

        setName('');
        setFatherName('');
        setRollNumber('');
    };

    return (
        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Father Name"
                value={fatherName}
                onChangeText={text => setFatherName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Roll No"
                value={rollNumber}
                onChangeText={text => setRollNumber(text)}
                keyboardType="numeric"
            />
            <Button title="Submit" onPress={handleSubmit} />
            <FlatList
                style={styles.list}
                data={data}
                renderItem={({ item }) => (
                    <Text>{`Name: ${item.name}, Father's Name: ${item.fatherName}, Roll Number: ${item.rollNumber}`}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    
        container: {
          flex: 1,
          paddingVertical: 20, 
          paddingHorizontal: 15, 
          backgroundColor: 'lightgray', 
        },
        input: {
          height: 40, 
          borderColor: 'black',
          borderWidth: 1, 
          marginBottom: 10, 
          paddingHorizontal: 10,
          borderRadius: 5, 
          backgroundColor: 'white', 
        },
        list: {
          marginTop: 20, // Decreased marginTop
          paddingHorizontal: 5, // Decreased paddingHorizontal
        },
});