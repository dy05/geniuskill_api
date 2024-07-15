import React, { useState, useContext } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import travail from '../../assets/images/pro1.png';
import axios from "../../utils/axios";

// Créez un contexte pour stocker les informations de l'utilisateur
export const UserContext = React.createContext();

export default function Login({ navigation }) {
  const tailwind = useTailwind();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    if (!email.length) {
      Alert.alert('Email is required', 'You must add your email.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }

    if (!password.length) {
      Alert.alert('Password is required', 'You must add your password.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Weak Password', 'Password must be at least 6 characters long.');
      return;
    }

    if (!loading) {
      setLoading(true);
      
      axios.post('/auth/login', {
        email: email,
        password: password,
      })
        .then((response) => {
          setToken(response.data.token);
          setAuthUser(response.data.user);
          handleLoginToken(response.data.user); // Passez les informations de l'utilisateur à la fonction handleLoginToken
        })
        .catch((error) => {
          Alert.alert('Error', JSON.stringify([error.message, error.response]));
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleLoginToken = (user) => {
    // Naviguez vers l'écran principal et passez les informations de l'utilisateur
    navigation.navigate('Main', { screen: 'Home', params: { user } });
  };

  return (
    <View style={tailwind('flex-1 bg-white items-center')}>
      <View style={tailwind('flex-1 items-center p-4 mt-24 w-4/5')}>
        <Image source={travail} style={tailwind('w-32 h-32')} />
        <View style={tailwind('flex-row justify-between')}>
          <Text style={tailwind('text-xl font-bold')}>
            Connexion
          </Text>
        </View>
        <View style={tailwind('w-full')}>
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
            <TextInput value={password} onChangeText={setPassword}
                       style={tailwind('border p-2 rounded')} placeholder="Mot de passe"
                       secureTextEntry />
          </View>
          <View style={tailwind('mt-4 flex items-center')}>
            <TouchableOpacity style={tailwind('mt-1 rounded-full overflow-hidden rounded-full w-48 bg-blue-600')}>
              <Button title={'Se connecter'} style={tailwind('text-white text-center p-2 rounded-full w-48')}
                      onPress={() => handleLogin()} />
            </TouchableOpacity>
            <View style={tailwind('my-4')}>
              <Text style={tailwind('text-blue-600')} onPress={() => navigation.navigate('PasswordReset')}>
                Mot de passe oublié?
              </Text>
              <Text style={tailwind('text-gray-500 mt-3 text-center')} onPress={() => handleLoginToken()}>
                Ou
              </Text>
            </View>
            <TouchableOpacity style={tailwind('mt-1 rounded-full overflow-hidden rounded-full w-48 bg-blue-600')}>
              <Button title={"S'inscrire"} style={tailwind('text-white text-center p-2')}
                      onPress={() => navigation.navigate('Register')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
