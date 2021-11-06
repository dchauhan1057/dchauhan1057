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
              height: '25%',
              backgroundColor: Colors.Black,
              justifyContent: 'center',
            }}>
            <Text style={styles.titleStringText}>
              {Strings.SubscribeScreen}
            </Text>
            <Text style={styles.titleasecondText}>
              {Strings.SubscribeString}
            </Text>
          </View>
          <View
            style={{
              height: '45%',
              backgroundColor: Colors.White,
              justifyContent: 'center',
              borderTopStartRadius: responsiveWidth(5),
              borderTopEndRadius: responsiveWidth(5),
            }}>
            <Text style={styles.middleText}>
              24/7 support Advanced analytics Something else Some other bonus of
              subscription
            </Text>
          </View>
          <View
            style={{
              height: '30%',
              backgroundColor: Colors.Black,
              padding: responsiveWidth(5),
            }}>
            <Text style={styles.personalText}>
              Get 3 months for free – and thereafter only 99 per month. You only
              pay if we are able to create a saving for you.
            </Text>
            <NetButton
              onPress={() => navigation.navigate('ShareResultScreen')}
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
    backgroundColor: Colors.Black,
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.4),
    alignSelf: 'center',
    width: responsiveWidth(70),
    color: Colors.White,
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },
  middleText: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(30),
    color: Colors.Dark_Gray,
    textAlign: 'center',
  },
  titleStringText: {
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(3),
    paddingStart: responsiveWidth(3),
    color: Colors.White,
    width: '80%',
    alignSelf: 'center',
  },
  titleasecondText: {
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    paddingStart: responsiveWidth(3),
    color: Colors.White,
    width: '75%',
    alignSelf: 'center',
    marginTop: responsiveWidth(4),
  },
  nextbutton: {
    marginTop: responsiveWidth(18),
    backgroundColor: Colors.White,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(70),
  },
  nexttext: {
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
});
export default SubscribeScreen;
