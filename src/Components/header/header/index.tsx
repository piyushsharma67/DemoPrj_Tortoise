import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {View,StyleSheet,Image, TextInput, TouchableOpacity} from 'react-native'
import { Icon } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import { searchPhoto } from '../../../Redux/reducers/Reducer'
import { theme } from '../../../utils/commonTheme'
import { width } from '../../../utils/dimension'

const Header=()=>{

    const [searchtext,setSearchtext]=useState<string>("")

    const dispatch=useDispatch()

    function searchText(){
        if(searchtext!==""){
            // @ts-ignore
            dispatch(searchPhoto(searchtext))
        }
    }

    const navigation=useNavigation()

    return (
        <View style={style.container}>
            {/* @ts-ignore */}
            <TouchableOpacity style={style.imageContainer} onPress={()=>navigation.navigate("HomeScreen")}>
                <Image 
                source={require('../../../../assets/logo.png')}
                style={{width:'100%',height:'80%',justifyContent:'center',alignItems:'center'}}
                resizeMode="contain"
                />
            </TouchableOpacity>
            <View style={style.searchContainer}>
                <View style={{width:'15%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Icon tvParallaxProperties name="search" type="feather" size={20}/>
                </View>
               <View style={{width:'80%',height:'100%',justifyContent:'center',alignItems:'flex-start'}}>
                <TextInput 
                    placeholder='Search photos'
                    placeholderTextColor={theme.GREY}
                    style={{fontSize:16}}
                    value={searchtext}
                    onChangeText={setSearchtext}
                    onEndEditing={searchText}
                    />
               </View>
            </View>
            <View style={{width:'10%',justifyContent:'center',alignItems:'center',marginRight:5}}>
                <TouchableOpacity>
                    <Icon name="menu" type="feather" size={25} tvParallaxProperties color={theme.GREY}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        width:width,
        height:60,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white'
    },
    imageContainer:{
        width:'10%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    searchContainer:{
        width:'70%',
        height:'90%',
        justifyContent:'center',
        flexDirection:'row',
        backgroundColor:'#F0F0F0',
        borderRadius:30,
        alignItems:'center'
    }
})

export default Header