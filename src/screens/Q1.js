import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native';

const API_KEY_YELP = 'qvxQGxx0E8hfu6vG_XcC1x4pQ7_JgcDA6RvNeU0lY7rsMeV0MT30rDK8YwFd-nYS3pcc7z8yDufhY87z-dtGPC51C_83VhlZCPLOAJ6-zB5924b4NxGYLv5wg0GNYHYx';
const API_KEY_OPENWEATHERMAP = '929f8c0fd71fd4b4e49519de30553269';

const SearchScreen = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const yelpResponse = await fetch(`https://api.yelp.com/v3/businesses/search?location=New York&categories=restaurants`, {
          headers: {
            Authorization: `Bearer ${API_KEY_YELP}`,
          },
        });
        if (!yelpResponse.ok) {
          throw new Error('Failed to fetch restaurant data from Yelp API');
        }
        const yelpData = await yelpResponse.json();

        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${API_KEY_OPENWEATHERMAP}&units=metric`);
        if (!weatherResponse.ok) {
          throw new Error('Failed to fetch weather data from OpenWeatherMap API');
        }
        const weatherData = await weatherResponse.json();
        const weatherDescription = weatherData.weather[0].description;

        let sortedRestaurants = yelpData.businesses.sort((a, b) => a.distance - b.distance);
        if (weatherDescription.includes('rain')) {
          sortedRestaurants = sortedRestaurants.sort((a, b) => {
            return (b.price || '').length - (a.price || '').length;
          });
        }

        setRestaurants(sortedRestaurants);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}>
      <View style={styles.restaurantItem}>
        <Image source={{ uri: item.image_url }} style={styles.restaurantImage} />
        <Text style={styles.restaurantName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.restaurantList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restaurantList: {
    padding: 10,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
  },
  restaurantImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
