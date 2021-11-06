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
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.container]}>
          <View style={styles.slide}>
            <Text style={styles.bigtext}>Clinsj</Text>
            <Text style={styles.bigtext}>
              Do you want to cheсk and look after this for you?
            </Text>
            <Text style={styles.text}>
              Do you want to cheсk and look after this for you?
            </Text>
            <Text style={styles.textsmall}>
              Mortgage are often complicated. We negotiate on your behalf and do
              not take commission from banks. We are fully on your side!
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.Light_Gray,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textsmall}>
              Get 3 months for free – and thereafter only 99 per month. You only
              pay if we are able to create a saving for you.
            </Text>
            <Text style={styles.textsmall}>
              Get 3 months for free – and thereafter only 99 per month. You only
              pay if we are able to create a saving for you.
            </Text>
            <NetButton
              onPress={() => navigation.navigate('LoginScreen')}
              text={Strings.Letstart}
              touchableStyle={{
                backgroundColor: Colors.TextInput_Background,
                width: responsiveWidth(80),
                marginTop: responsiveWidth(10),
                backgroundColor: '#565656',
              }}
              textStyle={{color: Colors.White}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
  slide: {
    height: responsiveWidth(120),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  skipText: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Roboto_Medium,
  },
  text: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.Roboto_Bold,
    marginTop: responsiveWidth(10),
    width: responsiveWidth(70),
    textAlign: 'center',
  },
  bigtext: {
    color: Colors.Text_Black,
    marginTop: responsiveWidth(10),
    fontSize: responsiveFontSize(3),
    fontFamily: fontFamily.Roboto_Bold,
    width: responsiveWidth(70),
    textAlign: 'center',
  },
  textsmall: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.7),
    fontFamily: fontFamily.Roboto_Regular,
    marginTop: responsiveWidth(5),
    width: responsiveWidth(70),
    textAlign: 'center',
  },
  imagestyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    tintColor: Colors.LineGray,
  },
});
export default WelcomeScreen;
