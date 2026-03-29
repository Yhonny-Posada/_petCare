import React, { useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, TouchableOpacity } from 'react-native';

import tipsData from '../data/tipsData';

const TipsScreen = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tipsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView>
      <Text>{tipsData[index]}</Text>
      <Text>{index + 1} de {tipsData.length}</Text>

      <TouchableOpacity onPress={() => setIndex((index + 1) % tipsData.length)}>
        <Text>Siguiente</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TipsScreen;