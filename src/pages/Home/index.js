import React, {useContext} from "react";
import {View, Text} from 'react-native'

import { AuthContext } from "../../contexts/auth";
import Header from '../../components/Header';
import {Background} from './styles';

export default function Home() {
  return(
    <Background>
      <Header
        title= 'Movimentações'
      />
    </Background>
  )
}