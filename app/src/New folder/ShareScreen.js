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
const ShareScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <View style={style.grayView}>
            <Image
              style={style.imagestyle}
              source={Images.Image_Icon}
              resizeMode={'contain'}
            />
            <Text style={style.titleStringText}>{Strings.ThanksForAnswer}</Text>
            <Text style={style.personalStringText}>
              {Strings.ThanksForAnswer1}
            </Text>
          </View>
          <NetButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.Recommend}
            touchableStyle={style.recomendtext}
          />
          <NetImageTextButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.ShareResult}
            touchableStyle={style.sharebutton}
            textStyle={style.sharetext}
            image={Images.Left_Arrow}
            imagestyle={{tintColor: Colors.Black}}
          />
          <NetImageTextButton
            onPress={() => navigation.navigate('LoginScreen')}
            text={Strings.ShareResult}
            touchableStyle={style.sharebutton}
            textStyle={style.sharetext}
            image={Images.Left_Arrow}
            imagestyle={{tintColor: Colors.Black}}
          />
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
  personalStringText: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(70),
    color: Colors.Dark_Gray,
    marginBottom: responsiveWidth(4),
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(45),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    marginStart: responsiveWidth(10),
    alignSelf: 'flex-start',
    marginBottom: responsiveWidth(4),
  },
  imagestyle: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    tintColor: Colors.Light_Gray,
    alignSelf: 'center',
    marginTop: responsiveWidth(20),
    marginBottom: responsiveWidth(8),
  },
  grayView: {
    height: '60%',
    backgroundColor: Colors.TextInput_Background,
    padding: responsiveWidth(4),
  },
  recomendtext: {
    width: '85%',
    backgroundColor: Colors.Dark_Gray,
  },
  sharebutton: {
    backgroundColor: Colors.TextInput_Background,
    width: '85%',
    marginTop: responsiveWidth(3),
    backgroundColor: Colors.TextInput_Background,
    alignSelf: 'center',
  },
  sharetext: {
    marginStart: responsiveWidth(20),
    color: Colors.Text_Black,
  },
});
export default ShareScreen;
