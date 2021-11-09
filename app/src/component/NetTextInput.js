import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, TextInput, Image, Platform} from 'react-native';
// Library
import DropDownPicker from 'react-native-dropdown-picker';

import {Strings} from '../../res/strings/Strings';
import {fontFamily} from '../utils/fontFamily';
import {Colors} from '../../res/colors/Colors';
import {Images} from '../../res/ImageConstant/Images';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../utils/Size';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const NetTextInput = props => {
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <View style={{flexDirection: 'row', marginStart: responsiveWidth(4)}}>
        {props.firstIcon === '' ? null : (
          <Image
            source={props.firstIcon}
            style={[style.downArraowimageStyle, {}, props.firstIconstyle]}
            resizeMode="contain"
          />
        )}
        {props.title === '' ? null : (
          <Text style={[style.textStyle, {}, props.textStyle]}>
            {props.title}
          </Text>
        )}
        {props.secondIcon === '' ? null : (
          <Image
            source={props.secondIcon}
            style={style.downArraowimageStyle}
            resizeMode="contain"
          />
        )}
      </View>
      <TextInput
       maxLength= {props.maxLength}
        keyboardType={props.keyboardType}
        onSubmit={() => ref.onSubmit}
        ref={props.ref}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.LineGray}
        value={props.value}
        onChangeText={props.onChangeText}
        style={[
          style.textInput,
          {
            height:
              Platform.OS === 'ios' ? responsiveWidth(12) : responsiveWidth(13),
            marginTop:
              props.title === '' ? responsiveWidth(0) : responsiveWidth(4),
            borderColor: props.error === '' ? 'transparent' : Colors.Red,
          },
          props.textInput,
        ]}
      />
      {props.error === '' ? null : (
        <Text
          numberOfLines={1}
          style={[style.errorStyle, {}, props.errorStyle]}>
          {props.error}
        </Text>
      )}
    </View>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  errorStyle: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.5),
    color: Colors.Red,
    marginStart: responsiveWidth(8.5),
    marginTop: responsiveWidth(2),
    width: '78%',
  },
  textStyle: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.7),
    color: Colors.Text_Black,
    marginStart: responsiveWidth(4),
    marginTop: responsiveWidth(5),
    width: '38%',
  },
  textInput: {
    backgroundColor: Colors.gray,
    width: '91%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(6),
    paddingStart: responsiveWidth(4),
    borderWidth: responsiveWidth(0.3),
  },
  downArraowimageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.Black,
    marginTop: responsiveHeight(2.5),
  },
});
export default NetTextInput;
