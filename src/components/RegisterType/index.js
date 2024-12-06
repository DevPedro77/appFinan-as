import React, {useState} from "react";
import {RegisterContainer, RegisterTypeButton, RegisterLabel} from './styles';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RegisterType({type, sendTypeChanged}){
  const [typeChecked, setTypeChecked] = useState(type)

  function changeType(name){
    if(name === 'receita'){
      setTypeChecked('receita');
      sendTypeChanged('receita');
    }else {
      setTypeChecked('despesa');
      sendTypeChanged('despesa');
    }
  }
  return(
    <RegisterContainer>
      <RegisterTypeButton
      checked={typeChecked === 'receita' ? true : false}
      onPress={ () => changeType('receita')}
      >
        <AntDesign name="arrowup" size={24} color="black" />
      <RegisterLabel>
        Receita
      </RegisterLabel>
      </RegisterTypeButton>

      <RegisterTypeButton
      checked={typeChecked === 'despesa' ? true : false}
      onPress={() => changeType('despesa')}
      >
        <AntDesign name="arrowdown" size={24} color="black" />
      <RegisterLabel>
        Despesas
      </RegisterLabel>
      </RegisterTypeButton>
    </RegisterContainer>
  )
}