import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Button, Alert } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import travail from '../../assets/images/pro2.png';
import axios from "../../utils/axios";

export default function Register({ navigation }) {
  const tailwind = useTailwind();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    if (!email.length) {
      Alert.alert('Email is required', 'You must add your email.');
      return;
    }

    if (!password.length) {
      Alert.alert('Password is required', 'You must add your password.');
      return;
    }

    if (!passwordConfirmation.length) {
      Alert.alert('Password confirmation is required', 'You must add your password.');
      return;
    }

    if (!loading) {
      setLoading(true);
      axios.post('/auth/register', {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        lastname: lastname,
        firstname: firstname,
      })
        .then((data) => {
          Alert.alert('Register', JSON.stringify(data.response));
        })
        .catch((error) => {
          Alert.alert('Error', JSON.stringify([error.message, error.response]));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <View style={tailwind('flex-1 bg-white')}>
      <View style={tailwind('flex-1 items-center p-4')}>
        <Image source={travail} style={tailwind('w-32 h-32 mb-8')} />
        <Text style={tailwind('text-2xl font-bold mb-8')}>Inscription</Text>
        <View style={tailwind('w-full')}>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Nom:
            </Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Nom" value={lastname}
                       onChangeText={setLastname} />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Prénom:
            </Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Prénom" value={firstname}
                       onChangeText={setFirstname} />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Email:
            </Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Email" value={email}
                       onChangeText={setEmail} keyboardType="email-address" />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Mot de passe:
            </Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Mot de passe"
                       value={password} onChangeText={setPassword} secureTextEntry />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Confirmer le mot de passe:
            </Text>
            <TextInput style={tailwind('border p-2 rounded')} placeholder="Mot de passe"
                       value={passwordConfirmation} onChangeText={setPasswordConfirmation} secureTextEntry />
          </View>
          <View style={tailwind('mt-4 flex gap-3 items-center')}>
            <TouchableOpacity style={tailwind('bg-blue-600 rounded-full overflow-hidden w-48')}>
              <Button title={"S'inscrire"} style={tailwind('bg-blue-600 text-white p-2')}
                      onPress={() => handleRegister()} />
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('mt-8 rounded-full overflow-hidden w-48')}>
              <Button title={'Se connecter'} style={tailwind('bg-blue-600 text-white p-2')}
                      onPress={() => navigation.navigate('Login')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
