import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importer l'icône Ionicons
import cour1 from './../../assets/images/cour1.png';
import cour2 from './../../assets/images/cour2.png';
import cour3 from './../../assets/images/cour3.png';

const SauvegaderScreen = () => {
  const [messages, setMessages] = useState({ cour1: [], cour2: [], cour3: [] });
  const [newMessage, setNewMessage] = useState('');
  const [likes, setLikes] = useState({ cour1: 0, cour2: 0, cour3: 0 });

  const handleSendMessage = (courseId) => {
    if (newMessage.trim()) {
      setMessages(prev => ({
        ...prev,
        [courseId]: [...prev[courseId], { text: newMessage, likes: 0 }]
      }));
      setNewMessage('');
    }
  };

  const handleLikeMessage = (courseId, index) => {
    const updatedMessages = messages[courseId].map((msg, i) => {
      if (i === index) {
        return { ...msg, likes: msg.likes + 1 };
      }
      return msg;
    });
    setMessages(prev => ({
      ...prev,
      [courseId]: updatedMessages
    }));
  };

  const renderMessageItem = (courseId) => ({ item, index }) => (
    <View style={styles.messageItem}>
      <Text style={styles.messageText}>{item.text}</Text>
      <TouchableOpacity onPress={() => handleLikeMessage(courseId, index)} style={styles.likeButton}>
        <Icon name="heart" size={20} color="red" />
        <Text style={styles.likeCount}>{item.likes}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.header}>Mes Cours Sauvegardés</Text>

      <View style={styles.courseContainer}>
        <Image source={cour1} style={styles.courseImage} />
        <Text style={styles.description}>Ce cours AWS vous apprend les bases de l'utilisation des services cloud d'Amazon Web Services.</Text>
        <Text style={styles.date}>Date de lecture : 01/05/2024</Text>
        <FlatList
          data={messages.cour1}
          renderItem={renderMessageItem('cour1')}
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          style={styles.input}
          placeholder="Écrivez un message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={() => handleSendMessage('cour1')} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseContainer}>
        <Image source={cour2} style={styles.courseImage} />
        <Text style={styles.description}>Ce cours Figma couvre les fondamentaux du design d'interface utilisateur avec Figma.</Text>
        <Text style={styles.date}>Date de lecture : 05/05/2024</Text>
        <FlatList
          data={messages.cour2}
          renderItem={renderMessageItem('cour2')}
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          style={styles.input}
          placeholder="Écrivez un message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={() => handleSendMessage('cour2')} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.courseContainer}>
        <Image source={cour3} style={styles.courseImage} />
        <Text style={styles.description}>Apprenez à utiliser GitHub, une plateforme de développement collaborative.</Text>
        <Text style={styles.date}>Date de lecture : 05/05/2024</Text>
        <FlatList
          data={messages.cour3}
          renderItem={renderMessageItem('cour3')}
          keyExtractor={(item, index) => index.toString()}
        />
        <TextInput
          style={styles.input}
          placeholder="Écrivez un message..."
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity onPress={() => handleSendMessage('cour3')} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FBF9EA',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  courseContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  messageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  messageText: {
    flex: 1,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
  },
});

export default SauvegaderScreen;
