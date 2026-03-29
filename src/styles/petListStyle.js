import { StyleSheet, Text, View } from 'react-native';

import { StyleSheet } from 'react-native';
 
const PetListStyles = StyleSheet.create
(
    {
        container:
        {
            flex: 1,
            backgroundColor: '#fff',
        },

        card: 
        {
            padding: 16,
            marginVertical: 8,
            marginHorizontal: 16,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
        },

        name: 
        {
            fontSize: 18,
            fontWeight: 'bold',
        },

        specie:
        {
            fontSize: 14,
            color: '#555',
        },

    }

);
 
export default PetListStyles;
 