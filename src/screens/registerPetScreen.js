import React, { useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, Button, Alert } from 'react-native';

const RegisterPetScreen = () => {
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = () => {
    Alert.alert(
      "Mascota registrada",
      `${name} - ${specie} - ${breed} - ${age} - ${weight}`
    );
  };

  const handleClear = () => {
    setName('');
    setSpecie('');
    setBreed('');
    setAge('');
    setWeight('');
  };

  return (
    <SafeAreaView>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      <TextInput placeholder="Especie" value={specie} onChangeText={setSpecie} />
      <TextInput placeholder="Raza" value={breed} onChangeText={setBreed} />
      <TextInput placeholder="Edad" value={age} onChangeText={setAge} />
      <TextInput placeholder="Peso" value={weight} onChangeText={setWeight} />

      <Button title="Registrar" onPress={handleSubmit} />
      <Button title="Limpiar" onPress={handleClear} />
    </SafeAreaView>
  );
};

export default RegisterPetScreen;