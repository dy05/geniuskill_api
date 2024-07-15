import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Import de Feather icons depuis @expo/vector-icons
import { useTailwind } from 'tailwind-rn'; // Utilisation de Tailwind CSS pour les styles

export default function Inscription({ navigation }) {
  const tailwind = useTailwind();

  // Fonction pour gérer le retour en arrière
  const handleGoBack = () => {
    navigation.goBack(); // Utilisation de navigation.goBack() pour retourner en arrière
  };

  return (
    <View style={tailwind('flex-1 justify-center items-center bg-yellow-50')}>
      <View style={tailwind('w-11/12 p-5 bg-white rounded-lg shadow')}>
        <View style={tailwind('mb-5')}>
          {/* TouchableOpacity pour le bouton retour avec icône de flèche */}
          <TouchableOpacity onPress={handleGoBack} style={tailwind('absolute top-2 left-2')}>
            <Feather name="arrow-left" size={24} color="black" /> {/* Icône de flèche pour retourner en arrière */}
          </TouchableOpacity>
          <Text style={tailwind('text-2xl text-gray-900')}>Mot de passe oublié</Text>
        </View>
        <View style={tailwind('mb-4')}>
          <Text style={tailwind('font-bold mb-2')}>Nom</Text>
          <TextInput style={tailwind('border p-2 rounded w-full')} placeholder="Nom" />
        </View>
        <View style={tailwind('mb-4')}>
          <Text style={tailwind('font-bold mb-2')}>Nouveau mot de passe</Text>
          <TextInput style={tailwind('border p-2 rounded w-full')} placeholder="Nouveau mot de passe" secureTextEntry />
        </View>
        <View style={tailwind('mb-4')}>
          <Text style={tailwind('font-bold mb-2')}>Confirmer mot de passe</Text>
          <TextInput style={tailwind('border p-2 rounded w-full')} placeholder="Confirmer mot de passe" secureTextEntry />
        </View>
        <View style={tailwind('mt-4 items-center')}>
          <TouchableOpacity style={tailwind('bg-blue-600 p-2 rounded')}>
            <Text style={tailwind('text-white')}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
