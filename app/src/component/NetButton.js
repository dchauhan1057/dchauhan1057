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
const NetButton = props => {
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <TouchableOpacity
        onPress={props.onPress}
        style={[style.touchableStyle, props.touchableStyle, {}]}>
        <Text style={[style.textStyle, props.textStyle, {}]}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  touchableStyle: {
    backgroundColor: Colors.Dark_Gray,
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    borderRadius: responsiveWidth(8),
    justifyContent: 'center',
    marginStart: responsiveWidth(10),
    marginTop: responsiveHeight(8),
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.White,
    alignSelf: 'center',

    // marginStart: responsiveWidth(4),
  },
});
export default NetButton;
