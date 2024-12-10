import React, {useContext, useEffect, useState} from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import { AuthContext } from "../../contexts/auth";
import Header from '../../components/Header';
import {
  Background,
  ListBalance,
  Area,
  Title,
  List
  }from './styles';
import {format} from 'date-fns'
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import HistoricoList from "../../components/HistoricoList";

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalace, setListBalace] = useState([])
  const [dateMovements, setDateMovements] = useState(new Date())
  const [movements, setMovements] = useState([])

  useEffect( ()=>{
    let isActive = true;

    async function getMoviments() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')
      const receives = await api.get('/receives',{
        params:{
          date: dateFormated
        }
      })

      const balance = await api.get('/balance',{
        params: {
          date: dateFormated
        }
      })

      if(isActive){
        setMovements(receives.data)
        setListBalace(balance.data)
      }
    }

    getMoviments();

    return( () => isActive = false);
  },[isFocused])


  return(
    <Background>
      <Header
        title= 'Movimentações'
      />

      <ListBalance
        data={listBalace}
        horizontal={true}
        showsHorizontalScrollIndicator ={false}
        keyExtractor={item => item.tag}
        renderItem={ ({item}) => (<BalanceItem data={item}/>)}
      />

      <Area>
        <TouchableOpacity>
        <MaterialCommunityIcons name="calendar-month-outline" size={30  } color="black" />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => <HistoricoList data={item}/> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ {paddingBottom: 20}}
      />
    </Background>
  )
}