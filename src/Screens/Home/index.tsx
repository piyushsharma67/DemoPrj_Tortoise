import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useEffect } from 'react'
import {View,Text,FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../Components/Loader/Loader'
import { fetchPhotosList, fetchTopics, incrementPhotolistPage } from '../../Redux/reducers/Reducer'
import { RootState } from '../../Redux/store/store'
import { theme } from '../../utils/commonTheme'
import { height, width } from '../../utils/dimension'
import RenderListFunction from './List'
import ListHeaderComponent from './ListHeaderComponent'

function HomeScreen(){

    const {photo,topics}=useSelector((state:RootState)=>state.ReducerStore)
    const dispatch=useDispatch<any>()
    console.log("page is",photo.photoInitPage)

    useEffect(()=>{
        dispatch(fetchPhotosList(photo.photoInitPage))
        dispatch(fetchTopics(topics.topicInitPage))
    },[])

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',width:width,height:height,backgroundColor:'white'}}>
            <Loader loading={photo.isfetchingPhotos || topics.isfetchingTopics}/>
            <FlatList 
                data={photo.photoList}
                keyExtractor={(item,index)=>index+""}
                renderItem={({item,index})=>{
                    return <RenderListFunction index={index}/>
                }}
                showsVerticalScrollIndicator={false}
                onEndReachedThreshold={0.7}
                onEndReached={()=>{
                    dispatch(incrementPhotolistPage())
                    dispatch(fetchPhotosList(photo.photoInitPage))
                }}
                ListHeaderComponent={()=>{
                    console.log('i am called')
                return <ListHeaderComponent/>}}
                ListHeaderComponentStyle={{width:'100%',marginVertical:5}}
            />
        </View>
    )
}

export default HomeScreen