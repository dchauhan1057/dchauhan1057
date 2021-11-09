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
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
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
const SubscribeScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Function Call-----------------------------------------------------------------------

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: Colors.Black,
              height: '40%',
              padding: responsiveWidth(5),
              borderBottomEndRadius: responsiveWidth(20),
              borderBottomStartRadius: responsiveWidth(20),
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={Images.Close_Icon}
                style={{
                  height: responsiveWidth(5),
                  width: responsiveWidth(5),
                  alignSelf: 'flex-end',
                  tintColor: Colors.White,
                  marginTop: responsiveWidth(5),
                }}
              />
            </TouchableOpacity>
            <Text
              style={[styles.titleStringText, {marginTop: responsiveWidth(5)}]}>
              Welcome onboard
            </Text>
            <Text style={styles.personalText}>
              Clinsj is now looking after your mortgage and we will ensure that
              you always get a fair deal.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.gray,
              height: '60%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '85%',
                alignSelf: 'center',
                marginTop: responsiveWidth(-20),
                paddingTop: responsiveWidth(10),
                paddingBottom: responsiveWidth(10),
                borderRadius: responsiveWidth(3),
                backgroundColor: Colors.White,
              }}>
              <Text
                style={[
                  styles.middleText,
                  {color: Colors.Gray_7f, width: responsiveWidth(55)},
                ]}>
                {
                  'Lorem ipsum is a common placeholder text\n•\nLorem ipsum is a common placeholder text\n•\nLorem ipsum is a common placeholder text\n•\nLorem ipsum is a common placeholder text'
                }
              </Text>
            </View>
            <Text
              style={[
                styles.personalText,
                {color: Colors.Gray_7f, marginTop: responsiveWidth(10)},
              ]}>
              Get 3 months for free – and thereafter only NOK99 per month -
              first 12 months fixed. We only charge you when you actually made a
              saving
            </Text>
            <NetButton
              onPress={() => navigation.navigate('PaymentScreen')}
              text={Strings.Subscribe}
              touchableStyle={styles.nextbutton}
              textStyle={styles.nexttext}
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
    backgroundColor: Colors.gray,
  },
  personalText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.4),
    alignSelf: 'center',
    width: responsiveWidth(80),
    color: Colors.White,
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },
  middleText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(30),
    color: Colors.Dark_Gray,
    textAlign: 'center',
  },
  titleStringText: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(3),
    paddingStart: responsiveWidth(3),
    color: Colors.White,
    width: '80%',
    alignSelf: 'center',
  },
  titleasecondText: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    paddingStart: responsiveWidth(3),
    color: Colors.White,
    width: '75%',
    alignSelf: 'center',
    marginTop: responsiveWidth(4),
  },
  nextbutton: {
    marginTop: responsiveWidth(18),
    backgroundColor: Colors.Black,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(80),
  },
  nexttext: {
    color: Colors.White,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
});
export default SubscribeScreen;
