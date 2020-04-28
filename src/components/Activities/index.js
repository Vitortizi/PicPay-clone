/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */

import React from 'react';

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { 
    Container,
    Header,
    Title,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Description,
    Bold,
    UserName,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@yasminS2</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Vitor Tomazini</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$: 18,00</Value>
                        <Divider />

                        <Feather name="lock" size={14} color="#FFF" />
                        <Date>há 2 anos</Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}
