import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export const Home = () => {
  const navigation: any = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
