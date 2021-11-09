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
const RequestScreen = props => {
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
          <Text style={styles.titleStringText}>{Strings.Request}</Text>
          <Text style={styles.personalStringText}>{Strings.coborrower}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoanScreen')}
            style={{flex: 1}}>
            <Image
              source={Images.Image_Icon}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <Text style={styles.textStyle}>{Strings.RequestDetail}</Text>
          </TouchableOpacity>
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
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'center',
    width: responsiveWidth(83),
    color: Colors.Dark_Gray,
    marginTop: responsiveHeight(1),
  },
  textStyle: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(70),
    color: Colors.Dark_Gray,
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(10),
    textAlign: 'center',
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(5),
    paddingStart: responsiveWidth(3),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    width: '90%',
    alignSelf: 'center',
  },
  imageStyle: {
    height: responsiveWidth(30),
    width: responsiveWidth(50),
    tintColor: Colors.Light_Gray,
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
});
export default RequestScreen;
