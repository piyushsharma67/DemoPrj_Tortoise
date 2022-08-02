import React from 'react'
import {View,Text, FlatList, TouchableOpacity} from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopics, incrementTopiclistPage } from '../../Redux/reducers/Reducer'
import { RootState } from '../../Redux/store/store'

function ListHeaderComponent(){

    const {topicList,topicInitPage}=useSelector((state:RootState)=>state.ReducerStore.topics)
    const dispatch=useDispatch<any>()

    console.log("topics",topicList)

    return (
        <FlatList
            data={topicList}
            keyExtractor={(item,index)=>index+""}
            renderItem={({item,index})=>{
                return (
                    <TouchableOpacity style={{marginHorizontal:10,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'black',fontSize:16}}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            onEndReachedThreshold={0.7}
            onEndReached={()=>{
                dispatch(incrementTopiclistPage())
                dispatch(fetchTopics(topicInitPage))
            }}
            
        />
    )
}

export default ListHeaderComponent