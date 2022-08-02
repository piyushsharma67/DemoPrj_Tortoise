import React from 'react'
import {View,Text,TouchableOpacity,TouchableOpacityProps, StyleSheet} from 'react-native'
import { theme } from '../../utils/commonTheme'

interface buttonProps extends TouchableOpacityProps{
    text:string,
    onPress:()=>void,

}

function ButtonCustom(props:buttonProps){
    return (
        <TouchableOpacity 
            style={[style.container,{backgroundColor:!props.disabled===true || props.disabled===undefined ? theme.PRIMARY_COLOR : "grey" }]} 
            onPress={props.onPress} 
            disabled={props.disabled}
        >
            <View style={style.textContainer}>
                <Text style={style.text}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )

}
 
const style=StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
    },
    textContainer:{
        width:'60%',
        height:'80%',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    text:{
        fontSize:theme.FONT_MEDIUM,
        color:'white'
    }
})

export default React.memo(ButtonCustom)