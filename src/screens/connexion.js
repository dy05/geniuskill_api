import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import {useTailwind} from 'tailwind-rn';
import travail from './../../assets/images/profill.png';

export default function Connexion() {
  const tailwind = useTailwind();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  }

  return (
    <View style={tailwind('flex-1 bg-yellow-50')}>
      <View style={tailwind('p-4 bg-white shadow-md')}>
        <View style={tailwind('flex-row justify-between')}>
          <Text style={tailwind('text-xl font-bold')}>Nav</Text>
        </View>
      </View>
      <View style={tailwind('flex-1 justify-center items-center p-4')}>
        <Image source={travail} style={tailwind('w-32 h-32')} />
        <View style={tailwind('w-full')}>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>Nom:</Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Nom" />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>Prénom:</Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Prénom" />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>Email:</Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Email" value={username} onChange={handleUsernameInput} keyboardType="email-address" />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>Mot de passe:</Text>
            <TextInput style={tailwind('border p-2 rounded')} value="{password}" onChange={handlePasswordInput} placeholder="Mot de passe" secureTextEntry />
          </View>
          <View style={tailwind('mt-4 flex-row justify-between')}>
            <TouchableOpacity style={tailwind('bg-blue-600 p-2 rounded')}>
              <Text style={tailwind('text-white')}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('bg-blue-600 p-2 rounded')}>
              <Text style={tailwind('text-white')}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind('mt-4')}>
            <Text style={tailwind('text-blue-600')}>Mot de passe oublié?</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
