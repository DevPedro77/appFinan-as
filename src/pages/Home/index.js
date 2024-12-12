import React, {useContext, useEffect, useState} from "react";
import {View, Text, TouchableOpacity, Modal} from 'react-native'
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
import CalendarModal from "../../components/CalendarModal";

export default function Home() {
  const isFocused = useIsFocused();
  const [listBalace, setListBalace] = useState([])
  const [dateMovements, setDateMovements] = useState(new Date())
  const [movements, setMovements] = useState([])
  const [modalVisible, setModalVisible] = useState(false); 

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
  },[isFocused, dateMovements])

  async function handleDelete(id) {
    try{
        await api.delete('/receives/delete',{
          params: {
            item_id: id
          }
        })
        setDateMovements(new Date())
    }catch(err){
      console.log(err)
    }
  }

  function filterDateMovements(dateSelected){
    setDateMovements(dateSelected)
  }



  return(
    <Background>
      <Header
        title= ' Minhas movimentações'
      />

      <ListBalance
        data={listBalace}
        horizontal={true}
        showsHorizontalScrollIndicator ={false}
        keyExtractor={item => item.tag}
        renderItem={ ({item}) => (<BalanceItem data={item}/>)}
      />

      <Area>
        <TouchableOpacity onPress={ ()=> setModalVisible(true) }>
        <MaterialCommunityIcons name="calendar-month-outline" size={30 } color="black" />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>

      <List
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) => <HistoricoList data={item} deleteItem={handleDelete}/> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={ {paddingBottom: 20}}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <CalendarModal
        setVisible={() =>setModalVisible(false)}
        handleFilter={filterDateMovements}
        />
      </Modal>
    </Background>
  )
}