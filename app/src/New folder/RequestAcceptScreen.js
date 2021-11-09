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
const RequestAcceptScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {padding: responsiveWidth(4)}]}>
          <View style={{flex: 1}}>
            <Text style={style.titleStringText}>{Strings.Request}</Text>
            <Text style={style.personalStringText}>
              {Strings.ForCoborrower}
            </Text>
            <Text style={style.personalStringText}>
              {Strings.RequestString}
            </Text>
            <View style={style.viewStyle}>
              <TouchableOpacity style={style.touchableStyle}>
                <Image />
              </TouchableOpacity>
              <Text style={style.personalStringText}>{Strings.AgreeText}</Text>
            </View>
            <NetButton
              onPress={() => navigation.navigate('WelcomeToApp')}
              text={Strings.Agree}
              touchableStyle={{
                width: '85%',
              }}
            />
            <NetButton
              onPress={() => navigation.navigate('WelcomeToApp')}
              text={Strings.Reject}
              touchableStyle={{
                marginTop: responsiveWidth(4),
                width: '85%',
                backgroundColor: Colors.White,
              }}
              textStyle={{color: Colors.Text_Black}}
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
    backgroundColor: Colors.Background_Blue,
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
    marginTop: responsiveWidth(10),
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(70),
    marginTop: responsiveWidth(10),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(5),
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
