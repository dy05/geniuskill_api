import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import {useRoute} from "@react-navigation/native";

const CourseDetails = ({navigation, route}) => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!loading) {
      setCourse({id: route.params?.id});
    } else {
      setLoading(false);
    }
  }, [route, loading]);

  const handleSave = () => {
    // Code pour sauvegarder les modifications du profil
  };

  const handleChangePassword = () => {
    // Naviguer vers l'écran de changement de mot de passe
    navigation.navigate('PasswordReset');
  };

  return (
    <View style={styles.container}>
      {/* Photo de profil */}
      <Image
        source={require('../../assets/images/profill.png')}
        style={styles.profileImage}
      />

      {/* Champ Nom */}
      <Text style={styles.label}>Course details</Text>
      <Text style={styles.label}>{course?.id ?? 'Null'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  roundedButton: {
    borderRadius: 20,
  },
});

export default CourseDetails;
