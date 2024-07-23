import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importez les icônes AntDesign depuis expo/vector-icons

const NotificationScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [selectedDays, setSelectedDays] = useState({
    lundi: false,
    mardi: false,
    mercredi: false,
    jeudi: false,
    vendredi: false,
    samedi: false,
    dimanche: false,
  });

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const toggleDaySelection = (day) => {
    setSelectedDays({
      ...selectedDays,
      [day]: !selectedDays[day],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête avec titre et flèche de retour */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: 'blue' }]}>Notifications</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>
          Activez les notifications pour vous rappeler de suivre vos cours et les compléter. Personnalisez également la fréquence de vos notifications.
        </Text>

        <View style={styles.row}>
          <Text style={styles.notificationText}>Notifications</Text>
          <TouchableOpacity onPress={toggleNotifications} style={styles.toggleButton}>
            <AntDesign name={notificationsEnabled ? 'checkcircle' : 'closecircle'} size={24} color={notificationsEnabled ? 'green' : 'red'} />
          </TouchableOpacity>
        </View>

        <View style={styles.daysContainer}>
          {Object.keys(selectedDays).map((day) => (
            <TouchableOpacity key={day} onPress={() => toggleDaySelection(day)} style={styles.dayRow}>
              <Text style={styles.dayText}>{day.charAt(0).toUpperCase() + day.slice(1)}</Text>
              <AntDesign name={selectedDays[day] ? 'checkcircle' : 'closecircle'} size={24} color={selectedDays[day] ? 'green' : 'red'} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.timesContainer}>
          <Text style={styles.timeText}>Heure:</Text>
          <Text style={styles.timeValue}>08:00</Text>

          <Text style={styles.timeText}>Matin:</Text>
          <Text style={styles.timeValue}>08:00 - 12:00</Text>

          <Text style={styles.timeText}>Après-midi:</Text>
          <Text style={styles.timeValue}>12:00 - 18:00</Text>

          <Text style={styles.timeText}>Soir:</Text>
          <Text style={styles.timeValue}>18:00 - 22:00</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FBF9EA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  notificationText: {
    fontSize: 18,
  },
  toggleButton: {
    padding: 10,
  },
  daysContainer: {
    width: '100%',
    marginBottom: 20,
  },
  dayRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dayText: {
    fontSize: 16,
  },
  timesContainer: {
    width: '100%',
  },
  timeText: {
    fontSize: 16,
    marginBottom: 10,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default NotificationScreen;
