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
import * as Progress from 'react-native-progress';
import DropDownPicker from 'react-native-dropdown-picker';
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
import {memberArray, educationArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const Co_Borrower = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [isFixed, setisFixed] = React.useState(false);
  const [value, setValue] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(false);
    setValue(value);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  const switchview = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(88),
          alignSelf: 'center',
          marginStart: responsiveWidth(8),
          marginTop: responsiveWidth(-4),
        }}>
        <View style={style.switchView}>
          <Text
            onPress={() => setisFixed(false)}
            style={[
              style.switchStyle,
              {
                backgroundColor: !isFixed
                  ? Colors.Black
                  : Colors.TextInput_Background,
                color: !isFixed ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Private
          </Text>
          <Text
            onPress={() => setisFixed(true)}
            style={[
              style.switchStyle,
              {
                backgroundColor: isFixed
                  ? Colors.Black
                  : Colors.TextInput_Background,
                color: isFixed ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Public
          </Text>
        </View>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container]}>
          <Text style={style.personalText}>{Strings.CoBorrower}</Text>
          <Text
            style={[
              style.personalStringText,
              {color: Colors.White, textAlign: 'center'},
            ]}>
            {Strings.CoBorrowerString}
          </Text>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              marginTop: responsiveWidth(4),
              borderTopLeftRadius: responsiveWidth(10),
              borderTopRightRadius: responsiveWidth(10),
              flex: 1,
              padding: responsiveWidth(6),
            }}>
            <Text
              style={[
                style.personalStringTextBold,
                {marginTop: responsiveWidth(2)},
              ]}>
              Education Level
            </Text>
            <View
              style={{
                width: '90%',
                marginStart: responsiveWidth(3),
                paddingTop: responsiveWidth(5),
              }}>
              <DropDownPicker
                placeholder={'Choose education level'}
                items={educationArray}
                style={{
                  width: responsiveWidth(83),
                  borderWidth: 1,
                  borderColor: Colors.Black,
                  borderRadius: responsiveWidth(3),
                }}
                zIndexInverse={1000}
                defaultIndex={0}
                dropDownStyle={{
                  borderRadius: 10,
                  height: responsiveWidth(20),
                  width: responsiveWidth(83),
                }}
                containerStyle={{
                  height: responsiveWidth(20),
                  width: responsiveWidth(83),
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  marginStart: responsiveWidth(5),
                  fontSize: responsiveFontSize(1.5),
                }}
                value={value}
                open={expanded}
                setOpen={setExpanded}
                setValue={setValue}
              />
            </View>
            <Text style={style.personalStringTextBold}>Membership</Text>
            <View
              style={{
                width: '90%',
                marginStart: responsiveWidth(3),
                paddingTop: responsiveWidth(5),
              }}>
              <DropDownPicker
                placeholder={'Choose'}
                items={memberArray}
                style={{
                  width: responsiveWidth(83),
                  borderWidth: 1,
                  borderColor: Colors.Black,
                  borderRadius: responsiveWidth(3),
                }}
                zIndexInverse={1000}
                defaultIndex={0}
                dropDownStyle={{
                  borderRadius: 10,
                  height: responsiveWidth(20),
                  width: responsiveWidth(83),
                }}
                containerStyle={{
                  height: responsiveWidth(20),
                  width: responsiveWidth(83),
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  marginStart: responsiveWidth(5),
                  fontSize: responsiveFontSize(1.5),
                }}
                value={value}
                open={expanded}
                setOpen={setExpanded}
                setValue={setValue}
              />
            </View>
            <Text style={style.personalStringTextBold}>Work type</Text>
            <View
              style={{
                width: '90%',
                marginStart: responsiveWidth(3),
                paddingTop: responsiveWidth(5),
              }}>
              <DropDownPicker
                placeholder={'Choose'}
                items={memberArray}
                style={{
                  width: responsiveWidth(83),
                  borderWidth: 1,
                  borderColor: Colors.Black,
                  borderRadius: responsiveWidth(3),
                }}
                zIndexInverse={1000}
                defaultIndex={0}
                dropDownStyle={{
                  borderRadius: 10,
                  height: responsiveWidth(20),
                  width: responsiveWidth(83),
                }}
                containerStyle={{
                  height: responsiveWidth(20),
                  width: responsiveWidth(83),
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  marginStart: responsiveWidth(5),
                  fontSize: responsiveFontSize(1.5),
                }}
                value={value}
                open={expanded}
                setOpen={setExpanded}
                setValue={setValue}
              />
            </View>
            <Text style={style.personalStringTextBold}>Sector</Text>
            {switchview()}
            <Text style={style.personalStringTextBold}>Time</Text>
            {switchview()}

            <View style={style.bottomView}>
              <View style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </View>
              <NetButton
                onPress={() => navigation.navigate('SettingScreen')}
                text={Strings.Skip}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </View>
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
    backgroundColor: Colors.Black,
  },
  headerView: {
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    color: Colors.White,
    marginTop: responsiveWidth(10),
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
  },
  personalStringTextBold: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(-2),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.White,
  },
  bottomView: {
    flexDirection: 'row',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.Gray_CC,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(10),
  },
  nextbutton: {
    marginTop: responsiveWidth(18),
    backgroundColor: Colors.Gray_CC,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nexttext: {
    color: Colors.Gray_7f,
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  switchView: {
    flexDirection: 'row',
    backgroundColor: Colors.TextInput_Background,
    width: '45%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
  switchStyle: {
    width: '100%',
    height: '100%',
    borderRadius: responsiveWidth(2),
    paddingTop: responsiveWidth(3.5),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.6),
  },
});
export default Co_Borrower;
