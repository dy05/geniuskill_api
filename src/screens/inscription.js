import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function Inscription() {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1 justify-center items-center bg-yellow-50')}>
      <View style={tailwind('w-11/12 p-5 bg-white rounded-lg shadow')}>
        <View style={tailwind('mb-5')}>
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
