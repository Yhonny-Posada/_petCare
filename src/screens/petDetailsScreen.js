import React, { useState, useEffect } from "react";

import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles/PetDetailStyles';

const PetDetailScreen = ({ route, navigation }) => {

  const { pet } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    navigation.setOptions({ title: pet.petName });
  }, [pet]);

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.label}>Nombre</Text>
      <Text style={styles.value}>{pet.petName}</Text>

      <Text style={styles.label}>Especie</Text>
      <Text style={styles.value}>{pet.specie}</Text>

      <Text style={styles.label}>Raza</Text>
      <Text style={styles.value}>{pet.breed}</Text>

      <Text style={styles.label}>Edad</Text>
      <Text style={styles.value}>{pet.age}</Text>

      <Text style={styles.label}>Peso</Text>
      <Text style={styles.value}>{pet.weight}</Text>

      <TouchableOpacity
        onPress={() => setIsFavorite(!isFavorite)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {isFavorite ? 'Favorita' : 'Marcar como favorita'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default PetDetailScreen;