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
const IntroductionScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.headerView}>
              <Text style={styles.personalText}>LOGO</Text>
            </View>
            <View style={styles.headerView}>
              <Text style={[styles.personalText, {alignSelf: 'flex-end'}]}>
                MENU
              </Text>
            </View>
          </View>
          <Text style={styles.titleStringText}>
            {Strings.IntroductionTitle}
          </Text>
          <Text style={styles.personalStringText}>
            {Strings.IntroductionDescription}
          </Text>
          <View style={styles.borderView}>
            <View style={styles.rowStyle}>
              <View style={styles.blueBoxStyle} />
            </View>
            <View style={styles.rowNextView}>
              <Text style={styles.textMain}>{Strings.BANKID}</Text>
              <Text style={styles.textDesc}>{Strings.BankString}</Text>
            </View>
          </View>
          <View style={styles.borderView}>
            <View style={styles.rowStyle}>
              <View style={styles.blueBoxStyle} />
            </View>
            <View style={styles.rowNextView}>
              <Text style={styles.textMain}>{Strings.BankIDWWithNum}</Text>
              <Text style={styles.textDesc}>{Strings.BankString2}</Text>
            </View>
          </View>
          <Text style={styles.textStyle}>{Strings.SaveContinue}</Text>
          <View style={styles.textView}>
            <View style={styles.dotView}>
              <Image
                source={Images.Dot_Icon}
                style={styles.dotStyle}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '95%'}}>
              <Text style={styles.textStyle2}>{Strings.IntroString1}</Text>
            </View>
          </View>
          <View style={styles.textView}>
            <View style={styles.dotView}>
              <Image
                source={Images.Dot_Icon}
                style={styles.dotStyle}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '95%'}}>
              <Text style={styles.textStyle2}>{Strings.IntroString2}</Text>
            </View>
          </View>
          <View style={styles.textView}>
            <View style={styles.dotView}>
              <Image
                source={Images.Dot_Icon}
                style={styles.dotStyle}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '95%'}}>
              <Text style={styles.textStyle2}>{Strings.IntroString3}</Text>
            </View>
          </View>

          <View style={styles.bottomView}>
            <View style={styles.roundView}>
              <Image
                source={Images.Right_Arrow}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </View>
            <NetButton
              onPress={() => navigation.navigate('AgreementScreen')}
              text={Strings.NextStep}
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
    textAlign: 'center',
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(2.5),
    paddingStart: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.6),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
    marginTop: responsiveWidth(5),
    textAlign: 'center',
  },
  textStyle1: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
    marginTop: responsiveWidth(5),
    textAlign: 'center',
  },
  textStyle2: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.Dark_Gray,
  },
  bottomView: {
    flexDirection: 'row',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.Dark_Gray,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(8),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.White,
  },
  dotStyle: {
    height: responsiveWidth(1),
    width: responsiveWidth(1),
    alignSelf: 'center',
  },
  borderView: {
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.1),
    borderRadius: responsiveWidth(10),
    padding: responsiveWidth(2),
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    margin: responsiveWidth(5),
  },
  rowStyle: {
    width: '30%',
    justifyContent: 'center',
  },
  blueBoxStyle: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    backgroundColor: Colors.BlueShade,
    alignSelf: 'center',
  },
  rowNextView: {width: '70%', alignContent: 'center'},
  textMain: {
    fontSize: responsiveFontSize(2.5),
    color: Colors.BorderGray,
    fontFamily: fontFamily.Roboto_Bold,
  },
  textDesc: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.BorderGray,
    fontFamily: fontFamily.Roboto_Medium,
  },
  dotView: {
    width: '10%',
    marginTop: responsiveWidth(2),
  },
  textView: {
    flexDirection: 'row',
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: responsiveWidth(4),
    marginBottom: responsiveWidth(4),
  },
});
export default IntroductionScreen;
