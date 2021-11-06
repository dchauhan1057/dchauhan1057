import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
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
const NetImageTextButton = props => {
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}  style={[style.touchableStyle, props.touchableStyle, {}]}>
        <View style={{flexDirection: 'row'}}>
          <Image source={props.image} style={[style.imagestyle, props.imagestyle, {}]}/>
          <Text style={[style.textStyle, props.textStyle, {}]}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  touchableStyle: {
    backgroundColor: Colors.Ocean_Blue,
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(8),
    justifyContent: 'center',
    marginStart: responsiveWidth(5),
    marginTop: responsiveHeight(8),
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.White,
    alignSelf: 'center',
    marginStart: responsiveWidth(4),
  },
  imagestyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    marginStart: responsiveWidth(8),
    alignSelf: 'center',
    tintColor: Colors.White,
  },
});
export default NetImageTextButton;
