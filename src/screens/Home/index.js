/* eslint-disable prettier/prettier */

import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';

import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';
import Banner from '../../components/Banner';

export default function Home() {
    return (
        <Wrapper>
            <Container>

                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>

                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>

                <Suggestions />

                <Activities />

                <Tips />

                <Banner />
            </Container>
        </Wrapper>
    );
}
