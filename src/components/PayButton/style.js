/* eslint-disable prettier/prettier */

import styled from 'styled-components/native';

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ focused }) => focused ? '#000' : '#fff'};
`;