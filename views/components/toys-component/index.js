import React from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import toy1 from '../../assets/images/toy1.jpg';
const ToyStoreApp = () => {
  const data = [
    {
      name: 'Taddy Bear',
      id: 1,
      price: '10$',
      image: toy1,
    },
    {
      name: 'Taddy Bear2',
      id: 2,
      price: '15$',
      image: toy1,
    },
    {
      name: 'Taddy Bear3',
      id: 3,
      price: '11$',
      image: toy1,
    },
    {
      name: 'Taddy Bear4',
      id: 4,
      price: '12$',
      image: toy1,
    },
    {
      name: 'Taddy Bear5',
      id: 5,
      price: '17$',
      image: toy1,
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map(item => {
        return (
          <View key={item.id}>
            <Text style={styles.title}>Toy Store</Text>
            <View style={styles.toyCard}>
              <Image source={item.image} style={styles.toyImage} />
              <Text style={styles.toyName}>{item.name}</Text>
              <Text style={styles.toyDescription}>Toy Description</Text>
              <Text style={styles.toyPrice}>${item.price}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  toyCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  toyImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  toyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  toyDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  toyPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 8,
  },
});

export default ToyStoreApp;
