import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const PaymentScreen = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [otherDetails, setOtherDetails] = useState('');

  const handlePaymentMethod = (method) => {
    setSelectedMethod(method);
  };

  const renderPaymentDetails = () => {
    if (selectedMethod === 'card') {
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
    } else if (selectedMethod === 'paypal') {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email PayPal"
            value={paypalEmail}
            onChangeText={setPaypalEmail}
            keyboardType="email-address"
          />
        </View>
      );
    } else if (selectedMethod === 'other') {
      return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Détails du paiement"
            value={otherDetails}
            onChangeText={setOtherDetails}
          />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choisissez la méthode de paiement</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => handlePaymentMethod('paypal')}
          style={[
            styles.button,
            selectedMethod === 'paypal' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePaymentMethod('card')}
          style={[
            styles.button,
            selectedMethod === 'card' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Carte Bancaire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlePaymentMethod('other')}
          style={[
            styles.button,
            selectedMethod === 'other' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Autre</Text>
        </TouchableOpacity>
      </View>
      {renderPaymentDetails()}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Soumettre</Text>
      </TouchableOpacity>
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

export default PaymentScreen;
