import React from 'react'
import {Image, InteractionManager, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store/store'
import { width,height } from '../../utils/dimension'
import {theme} from '../../utils/commonTheme'
import { Icon } from 'react-native-elements'


interface propType{
    index:number
}
const RenderListFunction=(prop:propType)=>{

    const {index}=prop

    const {photoList}=useSelector((state:RootState)=>state.ReducerStore.photo)
    const aspectRatio=photoList[index].width/photoList[index].height
    const Imageheight=width*aspectRatio
    

    return (
        <View style={[style.container,{height:(Imageheight)+120}]}>
            <View style={style.profileImageHeaderContainer}>
                <View style={style.profileImageContainer}>
                    <Image 
                    source={{uri:`${photoList[index]?.user?.profile_image?.small}`}} 
                    style={{width:'100%',height:'100%',borderRadius:30}} 
                    resizeMode="contain"
                    />
                </View>
                <View style={style.nameContainer}>
                   <Text style={style.name}>{photoList[index]?.user?.username}</Text>
                </View>
            </View>
            <View style={{width:width,height:Imageheight}}>
                <Image 
                    source={{uri:`${photoList[index]?.urls?.regular}`}} 
                    style={{width:'100%',height:'100%'}} 
                    resizeMode='cover'
                />
            </View>
            <View style={style.buttonContainer}>
                <View style={style.likeMainContainer}>
                    <View style={style.likeShareContainer}>
                        <TouchableOpacity>
                            <Icon name="heart" type="feather" size={30} tvParallaxProperties color="grey"/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.likeShareContainer}>
                        <TouchableOpacity>
                            <Icon name="plus" type="feather" size={30} tvParallaxProperties color="grey"/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={style.downloadButtonCOntainer}> 
                    <View style={{width:'70%',justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:17,color:theme.GREY}}>Download</Text>
                    </View>
                    <TouchableOpacity style={{width:'25%',justifyContent:'center',alignItems:'center',borderWidth:1,height:'100%',borderTopRightRadius:4,borderBottomRightRadius:4}}>
                        <Icon name="chevron-down" type="feather" tvParallaxProperties size={30} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const style=StyleSheet.create({
    container:{
        width:width,
        justifyContent:'center',
        alignContent:'center'
    },
    profileImageHeaderContainer:{
        height:60,
        width:width,
        flexDirection:'row'
    },
    profileImageContainer:{
        width:'15%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    nameContainer:{
        width:'85%',
        height:'100%',
        justifyContent:'center',
        padding:10,
        backgroundColor:'white'
    },
    name:{
        fontSize:theme.FONT_MEDIUM,
        color:theme.PRIMARY_COLOR,
        textAlign:'left'
    },
    buttonContainer:{
        width:'100%',
        flexDirection:'row',
        paddingHorizontal:10,
        height:50,
        justifyContent:'space-between',
        alignItems:'center'
    },
    likeMainContainer:{width:'25%',justifyContent:'space-between',alignItems:'center',height:'100%',flexDirection:'row'},
    likeShareContainer:{width:'45%',justifyContent:'center',height:'80%',alignItems:'center',borderWidth:1,borderColor:'grey',borderRadius:3},
    downloadButtonCOntainer:{
        alignItems:'center',
        justifyContent:'flex-end',
        borderWidth:1,
        width:'40%',
        height:'80%',
        flexDirection:'row',
        borderColor:theme.GREY,
        borderRadius:4
    }
})

export default RenderListFunction