/* eslint-disable prettier/prettier */

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './Navigation';

export default function navinext() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#131418" />
            <Navigation />
        </NavigationContainer>
    );
}
