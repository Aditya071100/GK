import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Splash = () => {
    const navigation= useNavigation();
    const route= useRoute();
    
    
    useEffect(()=>{
     
     
            setTimeout(() => {
                navigation.replace('Home'); 
              }, 2000); 
        
    },[])
  return (
    <View style={{flex:1,backgroundColor:"#e5f6c1",justifyContent:"center",alignItems:"center"}}>
      <Image source={require("../images/splash.jpeg")} style={{height:"40%",width:300,borderRadius:150}}/>
    </View>
  )
}

export default Splash