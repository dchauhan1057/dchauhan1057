import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Constant files
import {Strings} from '../../res/strings/Strings';
import {fontFamily} from '../utils/fontFamily';
import {Colors} from '../../res/colors/Colors';
import {Images} from '../../res/ImageConstant/Images';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../utils/Size';
import {
  carsArray,
  memberArray,
  maritalArray,
  childrensArray,
  educationArray,
} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
import NetImageTextButton from '../component/NetImageTextButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const WelcomeToApp = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {padding: responsiveWidth(4)}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.headerView}>
              <Text style={style.personalStringText}>LOGO</Text>
            </View>
            <View style={style.headerView}>
              <Text
                style={[
                  style.personalStringText,
                  {paddingStart: responsiveWidth(3)},
                ]}>
                Menu
              </Text>
            </View>
          </View>
          <Text
            style={[style.titleStringText, {textDecorationLine: 'underline'}]}>
            {Strings.Thankyou}
          </Text>
          <Text
            style={[
              style.personalStringText,
              {
                width: responsiveWidth(40),
                alignSelf: 'flex-start',
                marginStart: responsiveWidth(5),
                fontSize: responsiveFontSize(2),
              },
            ]}>
            {Strings.CoBorrow}
          </Text>
          <Text
            style={[
              style.personalStringText,
              {
                textDecorationLine: 'underline',
                marginStart: responsiveWidth(65),
                marginTop: responsiveWidth(30),
                fontSize: responsiveFontSize(2),
              },
            ]}>
            {Strings.LOGIN}
          </Text>
          <NetButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.Yes}
            touchableStyle={{
              width: '85%',
              backgroundColor: '#5595C3',
            }}
          />
          <NetButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.GOTOAPP}
            touchableStyle={{
              backgroundColor: Colors.TextInput_Background,
              width: '85%',
              marginTop: responsiveWidth(18),
              backgroundColor: '#565656',
            }}
            textStyle={{color: Colors.White}}
          />
          <NetButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.GOTOGOOGLE}
            touchableStyle={{
              backgroundColor: Colors.TextInput_Background,
              width: '85%',
              marginTop: responsiveWidth(3),
              marginBottom: responsiveWidth(6),
              backgroundColor: '#565656',
            }}
            textStyle={{color: Colors.White}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
  headerView: {
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    color: Colors.Dark_Gray,
    marginBottom: responsiveWidth(4),
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
    alignSelf: 'flex-start',
    marginBottom: responsiveWidth(4),
  },
});
export default WelcomeToApp;
