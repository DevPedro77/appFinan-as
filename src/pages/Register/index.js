import React from 'react';

import { Background, Input, SubmitButton, SubmitText } from './style';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from '../../components/Header'

export default function RegisterForm(){
  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
      <Background>
        <Header title="Registrando" />

        <SafeAreaView style={{marginTop: 14, alignItems: 'center' }}>
          <Input
            placeholder="Descrição desse registro"
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>

        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}