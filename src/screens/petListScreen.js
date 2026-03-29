import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, Text, TouchableOpacity } from 'react-native';

import petsData from '../data/petsData';
import styles from '../styles/PetListStyles';

const PetListScreen = ({ navigation }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    setPets(petsData);
  }, []);

  const handlePress = (pet) => {
    navigation.navigate('PetDetail', { pet });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.petId}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.name}>
              {item.icon} {item.petName}
            </Text>
            <Text style={styles.specie}>{item.specie}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default PetListScreen;