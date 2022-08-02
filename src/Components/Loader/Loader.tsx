import React from 'react'
import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native'
import { height, width } from '../../utils/dimension'
import {theme} from '../../utils/commonTheme'

interface loaderProps{
    loading:boolean
}

function Loader(props:loaderProps){
    return (
        <Modal
        transparent
        animationType="none"
        visible={props.loading}
        onRequestClose={() => { ('close modal')}}>
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
              <ActivityIndicator
                animating={props.loading}
                color="#2E9E92"
                size="large" />
              <Text style={{color:'black'}}>Please Wait!!</Text>
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
modalBackground: {
  flex: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-around',
  backgroundColor: '#00000020',
  borderRadius:5
},
activityIndicatorWrapper: {
  backgroundColor: '#FFFFFF',
  height: 0.07*height,
  width: width*0.42,
  // borderRadius: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexDirection:'row'
}
});

export default Loader