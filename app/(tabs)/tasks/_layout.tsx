import { Text } from 'components';
import { Stack } from 'expo-router';

export default () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <Text>Aaa</Text>
    </>
  );
};
