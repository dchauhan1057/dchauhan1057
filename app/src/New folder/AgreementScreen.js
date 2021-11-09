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
const AgreementScreen = props => {
  //-----------AgreementScreen-------------------------------------Variable Call-----------------------------------------------------------------------
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
          <Text style={styles.titleStringText}>{Strings.AgreementScreen}</Text>

          <View style={styles.rowView}>
            <View style={styles.imageView}>
              <Image
                source={Images.Right_Arrow}
                style={styles.dotStyle}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textStyle}>{Strings.AgreementDetail}</Text>
            </View>
          </View>
          <View style={styles.pdfView}>
            <View style={styles.imageView}>
              <Image
                source={Images.Right_Arrow}
                style={[styles.dotStyle, {marginTop: responsiveWidth(1)}]}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textMain}>{'Name PDF'}</Text>
            </View>
          </View>
          <View style={styles.pdfView}>
            <View style={styles.imageView}>
              <Image
                source={Images.Right_Arrow}
                style={[styles.dotStyle, {marginTop: responsiveWidth(1)}]}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textMain}>{'Name PDF'}</Text>
            </View>
          </View>
          <View style={styles.pdfView}>
            <View style={styles.imageView}>
              <Image
                source={Images.Right_Arrow}
                style={[styles.dotStyle, {marginTop: responsiveWidth(1)}]}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textMain}>{'Name PDF'}</Text>
            </View>
          </View>
          <View style={styles.pdfView}>
            <View style={styles.imageView}>
              <Image
                source={Images.Right_Arrow}
                style={[styles.dotStyle, {marginTop: responsiveWidth(1)}]}
                resizeMode="contain"
              />
            </View>
            <View style={{width: '85%'}}>
              <Text style={styles.textMain}>{'Name PDF'}</Text>
            </View>
          </View>
          <Text style={styles.personalStringText}>
            {Strings.AgreementDescription}
          </Text>

          <View style={styles.bottomView}>
          <TouchableOpacity
                onPress={() => navigation.goBack()} style={styles.roundView}>
              <Image
                source={Images.Right_Arrow}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <NetButton
              onPress={() => navigation.navigate('BankBorrowerScreen')}
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.7),
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',
    width: responsiveWidth(83),
    marginTop: responsiveHeight(4),
    color: Colors.Dark_Gray,
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    paddingStart: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  textStyle: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(1),
    textAlign: 'center',
    width: '80%',
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
    height: responsiveWidth(4),
    width: responsiveWidth(4),
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
  rowView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveWidth(5),
  },
  imageView: {width: '6%', marginStart: responsiveWidth(5)},
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
    fontSize: responsiveFontSize(2),
    color: Colors.White,
    fontFamily: fontFamily.Poppins_Bold,
    marginStart: responsiveWidth(4),
  },
  textDesc: {
    fontSize: responsiveFontSize(1.6),
    color: Colors.BorderGray,
    fontFamily: fontFamily.Poppins_Medium,
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
  pdfView: {
    backgroundColor: Colors.BlueShade,
    padding: responsiveWidth(2),
    alignContent: 'center',
    flexDirection: 'row',
    width: '85%',
    alignSelf: 'center',
    marginTop: responsiveWidth(5),
  },
});
export default AgreementScreen;
