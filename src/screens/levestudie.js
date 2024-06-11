import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function Levestudie() {
  const tailwind = useTailwind();
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
  };

  return (
    <View style={tailwind('flex-1 justify-center items-center bg-yellow-50')}>
      <View style={tailwind('w-11/12 p-5 bg-white rounded-lg shadow')}>
        <View style={tailwind('mb-5')}>
          <Text style={tailwind('text-2xl text-gray-900')}>Quel est votre niveau d'étude?</Text>
        </View>
        <View style={tailwind('mb-5')}>
          <TouchableOpacity
            style={tailwind(`p-2 mb-2 rounded ${selectedLevel === 'collégien' ? 'bg-blue-600' : 'bg-gray-200'}`)}
            onPress={() => handleLevelClick('collégien')}
          >
            <Text style={tailwind(`${selectedLevel === 'collégien' ? 'text-white' : 'text-black'}`)}>Collégien(ne)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(`p-2 mb-2 rounded ${selectedLevel === 'lycéen' ? 'bg-blue-600' : 'bg-gray-200'}`)}
            onPress={() => handleLevelClick('lycéen')}
          >
            <Text style={tailwind(`${selectedLevel === 'lycéen' ? 'text-white' : 'text-black'}`)}>Lycéen(ne)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tailwind(`p-2 rounded ${selectedLevel === 'étudiant' ? 'bg-blue-600' : 'bg-gray-200'}`)}
            onPress={() => handleLevelClick('étudiant')}
          >
            <Text style={tailwind(`${selectedLevel === 'étudiant' ? 'text-white' : 'text-black'}`)}>Étudiant(e)</Text>
          </TouchableOpacity>
        </View>
        <View style={tailwind('mt-4 flex-row justify-between')}>
          <TouchableOpacity style={tailwind('bg-blue-600 p-2 rounded')}>
            <Text style={tailwind('text-white')}>Suivant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tailwind('bg-blue-600 p-2 rounded')}>
            <Text style={tailwind('text-white')}>Passer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
