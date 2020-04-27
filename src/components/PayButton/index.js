/* eslint-disable prettier/prettier */
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Label } from './style';

export default function PayButton({ onPress, focused }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>

            <LinearGradient
                colors={
                    focused 
                        ? ['#fff', '#ccc'] 
                        : ['#00fc6c', '#00ac4a']
                }
                start={{ x: 1, y: 0.2 }}
                style={styles.linearGradient}
            >

                <MaterialIcons
                    name="attach-money"
                    size={30}
                    color={focused ? '#000' : '#fff'}
                />
                <Label focused={focused}>Pagar</Label>

            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    linearGradient: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
});