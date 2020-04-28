/* eslint-disable prettier/prettier */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PayButton from './components/PayButton';

import HomeScreen from './screens/Home';
import WalletScreen from './screens/Wallet';
import PayScreen from './screens/Pay';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Wallet"
            screenOptions={({ route, navigation }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    if (route.name === 'Pay') {
                        return (
                            <PayButton
                                onPress={() => navigation.navigate('Pay')}
                                focused={focused}
                            />
                        );
                    }

                    if (route.name === 'Home') {
                        return <AntDesign name='home' size={size} color={color} />
                    }

                    if (route.name === 'Wallet') {
                        return <AntDesign name='creditcard' size={size} color={color} />
                    }

                    if (route.name === 'Notifications') {
                        return <Ionicons name='ios-notifications-outline' size={size} color={color} />
                    }

                    if (route.name === 'Settings') {
                        return <AntDesign name='setting' size={size} color={color} />
                    }
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                    borderTopColor: 'rgba(255, 255, 255, 0.2)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Início',
                }}
            />

            <Tab.Screen
                name="Wallet"
                component={WalletScreen}
                options={{
                    title: 'Carteira',
                }}
            />
            <Tab.Screen
                name="Pay"
                component={PayScreen}
                options={{
                    title: '',
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={PayScreen}
                options={{
                    title: 'Notificações',
                }}
            />
            <Tab.Screen
                name="Settings"
                component={PayScreen}
                options={{
                    title: 'Ajustes',
                }}
            />
        </Tab.Navigator>
    );
}