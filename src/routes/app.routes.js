import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from '../pages/Home'
import RegisterForm from "../pages/Register";
import Profile from "../pages/Profile";

import CustomDrawer from "../components/CustomDrawer";
const AppDrawer = createDrawerNavigator();

function AppRoutes() { 
  return(
    <AppDrawer.Navigator
    drawerContent={ (props) => <CustomDrawer {...props}/>}
    screenOptions={{
      headerShown:false,

      drawerStyle:{
        backgroundColor: '#FFF',
        paddingTop: 20,
      },

      drawerActiveBackgroundColor:'green',
      drawerActiveTintColor: '#FFF',

      drawerInactiveBackgroundColor: '#F0F2FF',
      drawerInactiveTintColor: '#121212',

      drawerItemStyle: {
        marginVertical: 5,
      },

    }}
    >
      <AppDrawer.Screen
        name='Home'
        component={Home}
      />

      <AppDrawer.Screen
        name='Registrar'
        component={RegisterForm}
      />
      
      <AppDrawer.Screen
        name='Perfil'
        component={Profile}
      />

    </AppDrawer.Navigator>
  )
}

export default AppRoutes;

