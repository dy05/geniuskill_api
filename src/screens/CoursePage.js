import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

const CoursePage = () => {
  const tailwind = useTailwind();
  const courseProgress = 0.7; // 70% de progression

  return (
    <View style={tailwind('flex-1 bg-white p-4')}>
      <Image source={{ uri: 'https://via.placeholder.com/93x12' }} style={styles.headerImage} />
      <Text style={styles.courseTitle}>Anglais</Text>
      <Text style={styles.courseDescription}>
        Par : CeDox
      </Text>
      <Text style={styles.courseInfo}>
        5 cours - 2 h de cours au total
      </Text>
     
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTime}>04h:40</Text>
        <Text style={styles.sectionNumber}>1</Text>
        <TouchableOpacity style={styles.playButton}>
          <Icon name="ios-play-circle" size={30} color="#1E90FF" />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 93,
    height: 12,
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  courseInfo: {
    fontSize: 16,
    marginBottom: 20,
  },
  courseSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseSectionDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTime: {
    fontSize: 16,
    marginRight: 10,
  },
  sectionNumber: {
    fontSize: 16,
    marginRight: 10,
  },
  playButton: {
    marginLeft: 'auto',
  },
  progressContainer: {
    height: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1E90FF',
  },
});

export default CoursePage;
