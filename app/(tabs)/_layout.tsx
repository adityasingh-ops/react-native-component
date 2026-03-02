import React from 'react'
import { Tabs } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import AppHeader from '@/components/common/header'

export default function TabLayout() {
  return (
    <Tabs
    >
        <Tabs.Screen
        name='index'
        options={{
            title:'home',
            tabBarIcon:({color}) => <MaterialIcons name='home' size={28} color={color}/>,
            header:()=><AppHeader title={"Home"}/>
        }}
        />
        <Tabs.Screen
        name='examples'
        options={{
            tabBarIcon: ({color}) => <MaterialIcons name='book' size={28} color={color}/>
        }}
        />
    </Tabs>
  )
}
