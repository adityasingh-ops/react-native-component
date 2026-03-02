import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenListType } from '@/types/screen_list'
import { useRouter } from 'expo-router'
export default function ScreenList({name, link}: ScreenListType) {
    const router = useRouter();
  return (
    <Pressable
    onPress={()=> router.navigate(link)}
     style={styles.mainView}>
      <Text>{name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    mainView:{
        marginTop:4,
        borderRadius:12,
        shadowColor:'black',
        backgroundColor:'grey',
        padding:24
    }
})