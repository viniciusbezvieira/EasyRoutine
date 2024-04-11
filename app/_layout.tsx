import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Text } from 'components';
import { useFonts } from 'expo-font';
import { Redirect, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito: require('../assets/fonts/Nunito-Regular.ttf'),
    NunitoMedium: require('../assets/fonts/Nunito-Medium.ttf'),
    NunitoBold: require('../assets/fonts/Nunito-Bold.ttf'),
    ...FontAwesome.font,
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <Text>RootLayout</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
