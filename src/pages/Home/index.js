import React, {useContext, useEffect, useState} from "react";
import {View, Text} from 'react-native'
import { AuthContext } from "../../contexts/auth";
import Header from '../../components/Header';
import {Background, ListBalance } from './styles';
import {format} from 'date-fns'
import api from "../../services/api";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalace, setListBalace] = useState([])
  const [dateMovements, setDateMovements] = useState(new Date())

  useEffect( ()=>{
    let isActive = true;

    async function getMoviments() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy')

      const balance = await api.get('/balance',{
        params: {
          date: dateFormated
        }
      })

      if(isActive){
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
    </Background>
  )
}