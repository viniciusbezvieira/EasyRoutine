import { Text } from 'components';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <>
      {/*<Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="tasks"
          options={{
            tabBarLabel: 'Tasks',
            title: 'Tasks',
          }}
        />
        <Tabs.Screen
          name="training"
          options={{
            tabBarLabel: 'Training',
            title: 'Training',
          }}
        />
        <Tabs.Screen
          name="nutrition"
          options={{
            tabBarLabel: 'Nutrition',
            title: 'Nutrition',
          }}
        />
        </Tabs>*/}
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="home" />
      </Tabs>
      <Text>Aaaa</Text>
    </>
  );
}
