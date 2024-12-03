import React from "react";
import {Container, Title, ButtonMenu} from './styles';
import Entypo from '@expo/vector-icons/Entypo';

import { useNavigation } from "@react-navigation/native";

export default function Header( {title}){
  const navigate = useNavigation();

  return(
    <Container>
      <ButtonMenu onPress={ () => navigate.openDrawer()}>
      <Entypo name="menu" size={35} color="black" />
      </ButtonMenu>
      {title && (
        <Title>
          {title}
        </Title>
      )}
    </Container>
  )
}
