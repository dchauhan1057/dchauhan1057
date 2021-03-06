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
const RequestAcceptScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {padding: responsiveWidth(4)}]}>
          <View style={{flex: 1}}>
            <Image
              source={Images.Happy_Icon}
              style={{
                height: responsiveWidth(40),
                width: responsiveWidth(40),
                marginTop: responsiveWidth(30),
                marginBottom: responsiveWidth(30),
                alignSelf: 'center',
              }}
            />
            <Text style={style.titleStringText}>{Strings.title}</Text>
            <Text style={style.personalStringText}>
              {Strings.RequestString}
            </Text>
            <NetButton
              onPress={() => navigation.navigate('ProfileScreen')}
              text={Strings.Reject}
              touchableStyle={{
                marginTop: responsiveWidth(20),
                width: '85%',
                backgroundColor: Colors.White,
                borderColor: Colors.BorderGray,
                borderWidth: responsiveWidth(0.3),
              }}
              textStyle={{
                fontFamily: fontFamily.Poppins_Bold,
                fontSize: responsiveFontSize(1.8),
                color: Colors.Black,
                alignSelf: 'center',
              }}
            />
            <NetButton
              onPress={() => navigation.navigate('ProfileScreen')}
              text={Strings.Agree}
              touchableStyle={{
                width: '85%',
                marginTop: responsiveWidth(4),
                backgroundColor: Colors.Black,
              }}
              textStyle={{
                fontFamily: fontFamily.Poppins_Bold,
                fontSize: responsiveFontSize(1.8),
                color: Colors.White,
                alignSelf: 'center',
              }}
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidth(80),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
    marginTop: responsiveWidth(2),
    textAlign: 'center',
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    width: responsiveWidth(80),
    marginTop: responsiveWidth(5),
    color: Colors.Text_Black,
    marginStart: responsiveWidth(5),
    textAlign: 'center',
  },
  touchableStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    borderColor: Colors.Black,
    borderWidth: responsiveWidth(0.5),
    alignSelf: 'center',
    marginTop: responsiveWidth(10),
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingStart: responsiveWidth(8),
  },
});
export default RequestAcceptScreen;
