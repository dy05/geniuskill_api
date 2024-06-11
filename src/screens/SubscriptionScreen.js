import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const SubscriptionScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubscriptionPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const renderPaymentDetails = () => {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Numéro de la carte bancaire"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Date d'expiration (MM/AA)"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
          secureTextEntry={true}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez votre plan d'abonnement</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handleSubscriptionPlan('basic')}
          style={[
            styles.button,
            selectedPlan === 'basic' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Basique</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSubscriptionPlan('premium')}
          style={[
            styles.button,
            selectedPlan === 'premium' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSubscriptionPlan('pro')}
          style={[
            styles.button,
            selectedPlan === 'pro' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Pro</Text>
        </TouchableOpacity>
      </View>
      {selectedPlan && renderPaymentDetails()}
      {selectedPlan && (
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>S'abonner</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FBF9EA',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#d3d3d3',
  },
  buttonText: {
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SubscriptionScreen;