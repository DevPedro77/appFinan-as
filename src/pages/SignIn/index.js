import React from "react";
import { View, Text, Platform} from "react-native";
import {
  Background,
  Container,
  AreaInput,
  Input,
  Logo,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles'
import {useNavigation} from '@react-navigation/native'

export default function SignIn(){
  const navigation = useNavigation();
  return(
    <Background>
      <Container 
        behavior={ Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo
          source={require('../../../assets/images/Logo.png')}
        />

        <AreaInput>
          <Input
            placeholder= 'Digite seu email'
            keyboardType="email-address"
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder= 'Digite sua senha'
            keyboardType="default"
            
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={ () => navigation.navigate('SignUp')}> 
          <LinkText>Criar conta</LinkText>
        </Link>
      </Container>
    </Background>
  )
}