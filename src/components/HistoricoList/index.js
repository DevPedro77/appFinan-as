import React from "react";
import {
  Container,
  TipoTexto,
  IconView,
  Tipo,
  ValorTexto
} from './style';

import Feather from '@expo/vector-icons/Feather';
export default function HistoricoList({data}){
  return(
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
  )
}