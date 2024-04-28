import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiKey = "929f8c0fd71fd4b4e49519de30553269"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setWeather(null); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Get Weather" onPress={fetchWeather} />
      {weather && (
        <View style={styles.weatherInfo}>
          <Text style={styles.text}>Temperature: {weather.main.temp}°C</Text>
          <Text style={styles.text}>Feels Like: {weather.main.feels_like}°C</Text>
          <Text style={styles.text}>Humidity: {weather.main.humidity}%</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    width: '80%',
  },
  weatherInfo: {
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default WeatherScreen;
