import React, { useState, useContext } from 'react';
import { Alert, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import travail from '../../assets/images/pro1.png';
import { login, setAuthToken, setAuthUser } from '../services/authService';
import Icon from 'react-native-vector-icons/Ionicons'; // Importer l'icône Ionicons

// Créez un contexte pour stocker les informations de l'utilisateur
export const UserContext = React.createContext();

export default function Login({ navigation }) {
  const tailwind = useTailwind();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [authUser, setLocalAuthUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // État pour gérer l'affichage du mot de passe

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = async () => {
    if (!email.length) {
      setErrorMessage('Veuillez entrer votre email.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Veuillez entrer une adresse email valide.');
      return;
    }

    if (!password.length) {
      setErrorMessage('Veuillez entrer votre mot de passe.');
      return;
    }

    if (!loading) {
      setLoading(true);
      setErrorMessage(''); // Clear the error message before starting login

      login(email, password)
        .then(async (response) => {
          setAuthToken(response.data.token);
          setAuthUser(response.data.user);
          setToken(response.data.token);
          setAuthUser(response.data.user);
          handleLoginToken(response.data.user); // Passez les informations de l'utilisateur à la fonction handleLoginToken
        })
        .catch((error) => {
          setErrorMessage('Erreur lors de la connexion. Veuillez réessayer.');
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
          {errorMessage ? (
            <Text style={tailwind('text-red-500 text-center mb-4')}>
              {errorMessage}
            </Text>
          ) : null}
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Email:
            </Text>
            <TextInput 
              style={tailwind('border p-2 rounded')} 
              placeholder="Email" 
              value={email}
              onChangeText={setEmail} 
            />
          </View>
          <View style={tailwind('mb-4')}>
            <Text style={tailwind('font-bold mb-1')}>
              Mot de passe:
            </Text>
            <View style={tailwind('flex-row items-center border p-2 rounded')}>
              <TextInput 
                value={password} 
                onChangeText={setPassword}
                style={tailwind('flex-1')} 
                placeholder="Mot de passe"
                secureTextEntry={!showPassword} // Utilise l'état pour afficher/cacher le mot de passe
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon name={showPassword ? "eye-off" : "eye"} size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={tailwind('mt-4 flex items-center')}>
            <TouchableOpacity 
              style={tailwind('mt-1 rounded-full overflow-hidden rounded-full w-48 bg-blue-600')}
              onPress={handleLogin}
              disabled={loading || !email || !password}
            >
              <Button 
                title={'Se connecter'} 
                style={tailwind('text-white font-bold text-center p-2 rounded-full w-48')}
                onPress={handleLogin} 
              />
            </TouchableOpacity>
            <View style={tailwind('my-4')}>
              <Text style={tailwind('text-blue-600')} onPress={() => navigation.navigate('PasswordReset')}>
                Mot de passe oublié?
              </Text>
              <Text style={tailwind('text-gray-500 mt-3 text-center')}onPress={() => handleLoginToken()}>
                Ou
              </Text>
            </View>
            <TouchableOpacity style={tailwind('mt-1 rounded-full overflow-hidden rounded-full w-48 bg-blue-600')}>
              <Button title={"S'inscrire"} style={tailwind('text-white font-bold text-center p-2')}
                      onPress={() => navigation.navigate('Register')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
