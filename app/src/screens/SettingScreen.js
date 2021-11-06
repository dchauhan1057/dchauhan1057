import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
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
const SettingScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------render Call-----------------------------------------------------------------------
  const borderView = (image, title) => {
    return (
      <View style={style.borderView}>
        <Image
          resizeMode="contain"
          source={image}
          style={style.imageViewstyle}
        />
        <Text
          style={[
            style.personalStringText,
            {
              width: '78%',
              textAlign: 'left',
              paddingStart: responsiveWidth(4),
            },
          ]}>
          {title}
        </Text>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Image source={Images.Close_Icon} style={style.imagestyle} />
          <View style={style.roundView}>
            <Image source={Images.Image_Icon} style={style.imageIconstyle} />
          </View>
          <View style={style.banktextview}>
            <Text style={[style.personalStringText, {color: Colors.White}]}>
              Connected with Bank ID
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ContactInfoScreen')}>
            {borderView(Images.profile, 'Contact Information')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Called')}>
            {borderView(Images.profile, 'Co-borrower')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Called')}>
            {borderView(Images.agreement, 'Subscription')}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Called')}>
            {borderView(Images.star, 'Agreements')}
          </TouchableOpacity>
          <View style={[style.borderView, {marginTop: responsiveWidth(40)}]}>
            <Text style={style.personalStringText}>Logout</Text>
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
    backgroundColor: Colors.White,
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.Text_Black,
  },
  imagestyle: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    tintColor: Colors.Black,
    alignSelf: 'flex-end',
    margin: responsiveWidth(10),
  },
  imageViewstyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(6),
    tintColor: '#FF3a33',
    alignSelf: 'center',
  },
  imageIconstyle: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    tintColor: Colors.Gray_7f,
    alignSelf: 'center',
  },
  roundView: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    borderRadius: responsiveWidth(30) / 2,
    backgroundColor: Colors.Gray_CC,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  banktextview: {
    backgroundColor: Colors.Black,
    width: responsiveWidth(60),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(5),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: responsiveWidth(5),
    marginBottom: responsiveWidth(10),
  },
  borderView: {
    height: responsiveWidth(12),
    width: responsiveWidth(80),
    backgroundColor: Colors.gray,
    borderRadius: responsiveWidth(5),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: responsiveWidth(3),
    flexDirection: 'row',
  },
});
export default SettingScreen;
