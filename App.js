
/*
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import TextScreen from "./src/screens/TextScreen";
import FlatScreen from "./src/screens/FlatScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";
import { SearchScreen2 } from "./src/screens/SearchScreen2";
import FormScreen from "./src/screens/FormScreen";
import WeatherScreen from "./src/screens/WeatherScreen";
import Quiz from "./src/screens/Quiz";
import Search from "./src/screens/Search";
import Q1 from "./src/screens/Q1";
import {db} from "./src/screens/firebase.js";
import {collection,setDoc,doc,getDoc} from "firebase/firestore";
import React, {useState} from 'react';
import { TextInput } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();

const [email,setEmail]=useState("");
const [name,setName]=useState("");

function createU() {
  setDoc(doc(db,"users",email),{

    name:name,
    email:email,
  }.then(()=>alert("User Created"))).catch((err)=>alert("Error"))
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Image" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Flat" component={FlatScreen} />
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen2} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Q1" component={Q1} />
    
      </Stack.Navigator>

      <TextInput
      placeholder="UserName"
      value={name}
      onChangeText={text=>setName(text)}
      />

<TextInput
      placeholder="Email Address"
      value={email}
      onChangeText={text=>setName(text)}
      />
    </NavigationContainer>
    
  );
}

export default App;
*/

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { TextInput, View } from "react-native";
import React, { useState } from 'react';
import { createDoc, getFirestore, doc } from "firebase/firestore";
import { db } from "./src/screens/firebase.js";

const Stack = createNativeStackNavigator();

function App() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  function createU() {
    createDoc(doc(db, "users", email), {
      name: name,
      email: email,
    })
      .then(() => alert("User Created"))
      .catch((err) => alert("Error"));
  }

  return (

      <View>
        <TextInput
          placeholder="UserName"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
  );
}
export default App;
