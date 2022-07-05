import { StatusBar } from 'expo-status-bar';
import {KeyboardAvoidingView,StyleSheet,Text,View,TextInput,TouchableOpacity,Keyboard,ScrollView,} from "react-native";
import Task from './components/Task';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
