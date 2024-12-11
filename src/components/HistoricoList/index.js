import React from "react";
import {
  Container,
  TipoTexto,
  IconView,
  Tipo,
  ValorTexto
} from './style';

import {TouchableWithoutFeedback, Alert} from 'react-native'

import Feather from '@expo/vector-icons/Feather';
export default function HistoricoList({data, deleteItem}){

  function handleDeleteItem(){
    Alert.alert(
      'Atenção',
      'Você tem certeza que deseja deletar esse registro',
      [
        {
          text:'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => deleteItem(data.id)
        }
      ]
    )
  }
  return(
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
        <Container>
        <Tipo>
            <IconView tipo={data.type}>
              <Feather
                name={data.type === 'despesa' ? 'arrow-down': 'arrow-up'}
                size={20}
                color="#fff"
                />
              <TipoTexto>{data.type}</TipoTexto>
            </IconView>
        </Tipo>

      <ValorTexto>
        R$ {data.value} 
      </ValorTexto>
    </Container>
    </TouchableWithoutFeedback>
    
  )
}