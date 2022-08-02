import React, { Dispatch, SetStateAction,  } from 'react';
import {View, Text, StyleSheet, TextInput, TextInputProps} from 'react-native';
import { theme } from '../../utils/commonTheme';

interface Props extends TextInputProps {
  labelName?: string;
  tag:string;
  onChangevalue:(val:string,key:string)=>void,
  isLabel:boolean
}

const InputBoxWithLabel = (props: Props) => {
  
  return (
    (
      <View style={[styles.inputBoxContainer, props.style]}>
        {props.isLabel && <View style={styles.labelContainer}>
          <Text style={{color: theme.PRIMARY_COLOR}}>{props.labelName}</Text>
        </View>}
        <View style={[styles.inputContainer,{borderRadius:props.isLabel ? 0 : 8}]}>
          <TextInput
            placeholder={props.placeholder}
            style={{color: '#000'}}
            value={props.value}
            placeholderTextColor="grey"
            onChangeText={(val)=>props.onChangevalue(val,props.tag)}
            {...props}
          />
        </View>
      </View>
    )
  )
}
const styles = StyleSheet.create({
  inputBoxContainer: {marginVertical: 5, width: '100%'},

  labelContainer: {
    backgroundColor: 'white', // Same color as background
    alignSelf: 'flex-start', // Have View be same width as Text inside
    paddingHorizontal: 3, // Amount of spacing between border and first/last letter
    marginStart: 10, // How far right do you want the label to start
    zIndex: 1, // Label must overlap border
    elevation: 1, // Needed for android
    shadowColor: 'white', // Same as background color because elevation: 1 creates a shadow that we don't want
    position: 'absolute', // Needed to be able to precisely overlap label with border
    top: -12, // Vertical position of label. Eyeball it to see where label intersects border.
  },
  inputContainer: {
    borderWidth: 1, // Create border
    borderRadius: 8, // Not needed. Just make it look nicer.
    padding: 5, // Also used to make it look nicer
    zIndex: 0, // Ensure border has z-index of 0
    color: '#000',
    borderColor:theme.PRIMARY_COLOR,
    height: 52,
  },
});
export default React.memo(InputBoxWithLabel);
