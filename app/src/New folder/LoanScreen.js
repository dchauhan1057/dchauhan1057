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
const LoanScreen = ({props, route}) => {
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
              <Text style={style.personalStringText}>MENU</Text>
            </View>
          </View>
          <Text style={style.titleStringText}>{Strings.LoanTitle}</Text>
          <Text style={style.personalStringText}>{Strings.Correctthem}</Text>
          <Text style={style.personalStringText}>{Strings.LoanDetail}</Text>
          <Text
            style={[
              style.personalStringText,
              {fontWeight: 'bold', marginTop: responsiveWidth(3)},
            ]}>
            {Strings.CurrentMortgage}
          </Text>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Text style={style.bankStringText}>{'Bank name 1'}</Text>
            <Image
              source={Images.Down_Arrow}
              style={style.downArraowimageStyle}
              resizeMode="contain"
            />
          </View>

          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '90%'}}>
              <NetTextInput
                title={Strings.OutstandingLoanamount}
                onChangeText={() => alert('Called')}
              />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'center',
                marginTop: responsiveWidth(12),
              }}>
              <Image
                source={Images.Question}
                style={style.questionimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '90%'}}>
              <NetTextInput
                title={Strings.CurrentInterestRate}
                onChangeText={() => alert('Called')}
              />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'center',
                marginTop: responsiveWidth(12),
              }}>
              <Image
                source={Images.Question}
                style={style.questionimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>

          <NetImageTextButton
            onPress={() => alert('Called')}
            text={Strings.Addloan}
            image={Images.Plus_Arrow}
          />
          <Text
            style={[
              style.personalStringText,
              {fontWeight: 'bold', marginTop: responsiveWidth(3)},
            ]}>
            {Strings.CurrentUnsecuredloans}
          </Text>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Text style={style.bankStringText}>{'Bank name 1'}</Text>
            <Image
              source={Images.Down_Arrow}
              style={style.downArraowimageStyle}
              resizeMode="contain"
            />
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '90%'}}>
              <NetTextInput
                title={Strings.OutstandingLoanamount}
                onChangeText={() => alert('Called')}
              />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'center',
                marginTop: responsiveWidth(12),
              }}>
              <Image
                source={Images.Question}
                style={style.questionimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '90%'}}>
              <NetTextInput
                title={Strings.CurrentInterestRate}
                onChangeText={() => alert('Called')}
              />
            </View>
            <View
              style={{
                width: '10%',
                justifyContent: 'center',
                marginTop: responsiveWidth(12),
              }}>
              <Image
                source={Images.Question}
                style={style.questionimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <NetImageTextButton
            onPress={() => alert('Called')}
            text={Strings.Addloan}
            image={Images.Plus_Arrow}
          />
          <View style={style.totalView}>
            <Text style={style.totalStringText}>{Strings.Total}</Text>
            <Text style={[style.totalStringText, {fontWeight: '100'}]}>
              {'18. 000 mill.kr'}
            </Text>
          </View>
          <View style={style.bottomView}>
            <View style={style.roundView}>
              <Image
                source={Images.Right_Arrow}
                style={style.imageStyle}
                resizeMode="contain"
              />
            </View>
            <NetButton
              onPress={() => navigation.navigate('MarketValue')}
              text={Strings.NextStep}
            />
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
    width: responsiveWidth(83),
    marginTop: responsiveHeight(1),
    color: Colors.Dark_Gray,
  },
  bankStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(23),
    marginTop: responsiveHeight(1),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.Dark_Gray,
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.6),
    color: '#212B36',
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
  lineView: {
    width: '85%',
    height: responsiveWidth(0.5),
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    alignSelf: 'center',
    backgroundColor: Colors.LineGray,
  },
  totalView: {
    flexDirection: 'row',
    width: '100%',
    paddingStart: responsiveWidth(5),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.White,
  },
  questionimageStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
    tintColor: Colors.Black,
  },
  downArraowimageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.Black,
    marginTop: responsiveHeight(1.5),
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
  totalStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
  },
});
export default LoanScreen;
