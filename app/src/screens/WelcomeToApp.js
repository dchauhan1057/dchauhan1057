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
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.container, {padding: responsiveWidth(4)}]}>
          <View style={styles.slide}>
            <Text style={styles.bigtext}>Sign up</Text>
            <Text style={styles.textsmall}>
              We use{' '}
              <Text
                style={[
                  styles.textsmall,
                  {
                    marginStart: responsiveWidth(3),
                    color: '#FF3A33',
                    textDecorationLine: 'underline',
                  },
                ]}>
                {'BankID'}
              </Text>{' '}
              for security and to make it easier to complete necessary
              information.
            </Text>
          </View>
          <NetButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.Createaccount}
            touchableStyle={{
              backgroundColor: Colors.Black,
              width: '85%',
              marginTop: responsiveWidth(40),
            }}
            textStyle={{color: Colors.White}}
          />
          <NetButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.SignUpMobile}
            touchableStyle={{
              backgroundColor: Colors.White,
              width: '85%',
              marginTop: responsiveWidth(5),
              marginBottom: responsiveWidth(6),
              borderColor: Colors.BorderGray,
              borderWidth: responsiveWidth(0.2),
            }}
            textStyle={{color: Colors.Text_Black}}
          />
          <Text style={styles.textsmall}>
            By pressing signing up you accept the
            <Text
              style={[styles.textsmall, {fontFamily: fontFamily.Roboto_Bold}]}>
              {' Terms of Mortgage Club'}
            </Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={[styles.textsmall]}>
              Already have an account?
              <Text
                onPress={() => navigation.navigate('LoginScreen')}
                style={[
                  styles.textsmall,
                  {
                    marginStart: responsiveWidth(3),
                    color: '#FF3A33',
                    fontFamily: fontFamily.Roboto_Medium,
                  },
                ]}>
                {'  Log in'}
              </Text>
            </Text>
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
    backgroundColor: Colors.White,
  },
  slide: {
    // justifyContent: 'center',
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
    marginTop: responsiveWidth(20),
  },
  bigtext: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(3),
    fontFamily: fontFamily.Roboto_Bold,
    marginTop: responsiveWidth(20),
  },
  textsmall: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Roboto_Regular,
    marginTop: responsiveWidth(5),
    width: responsiveWidth(80),
    textAlign: 'center',
    alignSelf: 'center',
  },
  imagestyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    tintColor: Colors.LineGray,
  },
});
export default WelcomeToApp;
