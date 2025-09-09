import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { StatusBar } from 'react-native';

import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { Text, View } from '@/components/Themed';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = "light" as "light" | "dark";

  return (
    <>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "#fff", borderTopWidth: 0, elevation: 0, height: 90, paddingTop: 12 }, // Fundo da barra inferior
          tabBarActiveTintColor: "#00A651",            // Ícone/texto ativo
          tabBarInactiveTintColor: "#000",          // Ícone/texto inativo
          headerShown: false,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Octicons name="home" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Carrinho',
            tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="three"
          options={{
            title: 'Chat',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chat-outline" size={24} color={color} />,
          }}
        />
        <Tabs.Screen
          name="four"
          options={{
            title: 'Conta',
            tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account-circle-outline" size={24} color={color} />,
          }}
        />
      </Tabs>
    </>
  );
}