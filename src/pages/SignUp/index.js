import React, {useContext, useState} from "react";
import { View, Text, Platform } from "react-native";
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
} from '../SignIn/styles'

import {AuthContext} from '../../contexts/auth'

export default function SignUp(){

  const {signUp} = useContext(AuthContext);
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSignUp(){
    signUp( email, password, nome);
  }
  return(
    <Background>
      <Container>
        <AreaInput>
          <Input 
            placeholder="Digite seu nome"
            keyboardType="default"
            value={nome}
            onChangeText={ (text) => setNome(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Digite seu email"
            keyboardType="email-address"
            value={email}
            onChangeText={ (text) => setEmail(text)}
          />
        </AreaInput>

        <AreaInput>
          <Input 
            placeholder="Digite sua senha"
            value={password}
            onChangeText={ (text) => setPassword(text)}
            secureTextEntry = {true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
        
      </Container>
    </Background>
  )
}