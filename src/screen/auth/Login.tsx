import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const Login = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Button
        title="home"
        onPress={() => {
          navigation.navigate('home');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
