import { createAsyncThunk, createSlice ,PayloadAction} from '@reduxjs/toolkit';
import { Alert } from 'react-native';
import { BaseUrl, userIDkey } from '../../utils/userID';

interface PhotoList{
  id:string,
  width:number,
  height:number,
  user:{
    id:string,
    username:string,
    profile_image:{
      small:string,
      medium:string,
      large:string
    },
  },
  urls:{
    small:string,
    raw:string,
    full:string,
    regular:string
  }
}[]

interface TopicList{
  title:string
}

interface initState{
  photo:{
    photoList:PhotoList[],
    photoInitPage:number,
    isfetchingPhotos:boolean
  },
  topics:{
    topicList:TopicList[],
    topicInitPage:number,
    isfetchingTopics:boolean
  }
}

const initialState = {
  photo:{
    photoList:[],
    photoInitPage:1,
    isfetchingPhotos:false
  },
  topics:{
    topicList:[],
    topicInitPage:1,
    isfetchingTopics:false
  }
} as initState

interface responseType{
  body:{
    email:string,
    token:string,
    name:string
  },
  status:number
}

export const fetchPhotosList = createAsyncThunk(
  'fetch/fetchPhotosList',
  async (page:number) => {
    return fetch(`${BaseUrl}/photos?page=${page}&per_page=${10}`,{
      method:'GET',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'Authorization':`${userIDkey}`
      },
    }).then(res=>{
      if(res.status===200) return res.json()
      else Alert.alert("Notification","Error Occured while fetching Data")
    }).catch(err=>Alert.alert("Notification","Error Occured while fetching Data"))
  },
);

export const searchPhoto = createAsyncThunk(
  'fetch/searchPhoto',
  async (query:string) => {
    return fetch(`${BaseUrl}/topics?query=${query}`,{
      method:'GET',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'Authorization':`${userIDkey}`
      },
    }).then(res=>{
      if(res.status===200) return res.json()
      else Alert.alert("Notification","Error Occured while fetching Data")
    })
   
  },
);

export const fetchTopics = createAsyncThunk(
  'fetch/fetchTopics',
  async (page:number) => {
    return fetch(`${BaseUrl}/topics?qpage=${page}&per_page=${10}`,{
      method:'GET',
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'Authorization':`${userIDkey}`
      },
    }).then(res=>{
      if(res.status===200) return res.json()
      else Alert.alert("Notification","Error Occured while fetching Data")
    })
   
  },
);

const Reducer = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    incrementPhotolistPage: state => {
      state.photo.photoInitPage+=1
    },
    incrementTopiclistPage: state => {
      state.topics.topicInitPage+=1
    },
  },
  extraReducers: builder => {
     //builder function for fetching photos
    builder.addCase(fetchPhotosList.pending, (state) => {
     state.photo.isfetchingPhotos=true
    });
    builder.addCase(fetchPhotosList.fulfilled, (state, {payload}) => {
      state.photo.isfetchingPhotos=false
      
      state.photo.photoList.push(...payload)
    }),
    builder.addCase(fetchPhotosList.rejected,(state,{payload})=>{
      state.photo.isfetchingPhotos=false
    }),
    //builder function for searching photo
    builder.addCase(searchPhoto.pending, (state) => {
      state.photo.isfetchingPhotos=true
     });
    builder.addCase(searchPhoto.fulfilled, (state, {payload}) => {
      state.photo.isfetchingPhotos=false
      state.photo.photoList=payload.result
    }),
    builder.addCase(searchPhoto.rejected,(state,{payload})=>{
      state.photo.isfetchingPhotos=false
    }),
     //builder function for fetching topics
     builder.addCase(fetchTopics.pending, (state) => {
      state.topics.isfetchingTopics=true
     });
    builder.addCase(fetchTopics.fulfilled, (state, {payload}) => {
      console.log("payload is",payload)
      state.topics.isfetchingTopics=false
      state.topics.topicList.push(...payload)
    }),
    builder.addCase(fetchTopics.rejected,(state,{payload})=>{
      state.topics.isfetchingTopics=false
    })
  },
})

export const { incrementPhotolistPage,incrementTopiclistPage} = Reducer.actions;
export default Reducer.reducer;