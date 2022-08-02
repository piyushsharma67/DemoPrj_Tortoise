import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Types/NavigationTypes/RootStackScreens'
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store/store'
import HomeScreen from '../Screens/Home'
import { Image, View } from 'react-native'
import Header from '../Components/header/header'

const Stack=createNativeStackNavigator<RootStackParamList>()

const RootNavigation=()=>{

    return (
        <Stack.Navigator >
           <Stack.Screen 
           name="HomeScreen" 
           component={HomeScreen} 
           options={{header:()=>{
                return <Header />
           }
            }}
           />
        </Stack.Navigator>
    )
}

export default RootNavigation