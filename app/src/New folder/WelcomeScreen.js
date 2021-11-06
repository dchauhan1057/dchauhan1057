import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Switch,
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
import {childrensArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const WelcomeScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container]}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.headerView}>
              <Text style={style.personalText}>LOGO</Text>
            </View>
            <View style={style.headerView}>
              <Text style={[style.personalText, {alignSelf: 'flex-end'}]}>
                MENU
              </Text>
            </View>
          </View>
          <Text style={style.titleStringText}>{Strings.WelcomeTitle}</Text>
          <Text style={style.personalStringText}>{Strings.WelcomeTest1}</Text>
          <Text style={style.welcomestring2}>{Strings.WelcomeTest2}</Text>

          <NetButton
            onPress={() => navigation.navigate('SliderScreen')}
            text={Strings.WelcomeButton}
            touchableStyle={{width: '80%', backgroundColor: Colors.Dark_Gray}}
          />
          <View
            style={{
              backgroundColor: Colors.TextInput_Background,
              marginTop: responsiveWidth(8),
              padding: responsiveWidth(10),
            }}>
            <Text style={style.welcomestring3}>{Strings.WelcomeTest3}</Text>
            <Text style={style.welcomestring3}>{Strings.WelcomeTest4}</Text>
          </View>
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
    width: '50%',
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
    marginTop: responsiveWidth(2),
    padding: responsiveWidth(3),
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',
    width: responsiveWidth(83),
    marginTop: responsiveHeight(4),
    color: Colors.Dark_Gray,
  },
  welcomestring3: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'center',
    width: responsiveWidth(83),
    marginTop: responsiveHeight(4),
    color: Colors.Dark_Gray,
  },
  welcomestring2: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(78),
    marginTop: responsiveHeight(4),
    color: Colors.Dark_Gray,
    textAlign: 'center',
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(5),
    paddingStart: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    textDecorationLine: 'underline',
    textDecorationColor: '#979797',
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.6),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
    marginTop: responsiveWidth(5),
  },
  textInput: {
    backgroundColor: Colors.TextInput_Background,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(6),
    marginTop: responsiveWidth(5),
  },
  addloanBtn: {
    backgroundColor: '#3C7EAE',
    width: responsiveWidth(55),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(6),
    justifyContent: 'center',
    marginTop: responsiveHeight(8),
    marginStart: responsiveWidth(5),
  },
});
export default WelcomeScreen;
