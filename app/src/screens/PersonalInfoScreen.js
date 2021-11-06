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

//------------------------------------------------Main Call-----------------------------------------------------------------------
const PersonalInfoScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [isFixed, setisFixed] = React.useState(2);
  const [value, setValue] = React.useState(true);
  const [value1, setValue1] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [maritial, setmaritial] = React.useState('');
  const [educationlevel, seteducationlevel] = React.useState('');
  const [membership, setmembership] = React.useState('');
  const [childern, setchildern] = React.useState('');
  const [car, setcar] = React.useState('');
  const [errorvalue, seterrorvalue] = React.useState('');
  const [errorvalue1, seterrorvalue1] = React.useState('');
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(false);
    setExpanded1(false);
    setValue(value);
    setValue1(value1);
  };
  const checkValidation = () => {
    if (value === '') {
      seterrorvalue('Please select  education level');
    } else if (value1 === '') {
      seterrorvalue1('Please select  bank');
    } else {
      navigation.navigate('WorkinformationScreen');
    }
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
            onPress={() => setisFixed(0)}
            style={[
              style.switchStyle,
              {
                backgroundColor:
                  isFixed === 0 ? Colors.Black : Colors.TextInput_Background,
                color: isFixed === 0 ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Married
          </Text>
          <Text
            onPress={() => setisFixed(1)}
            style={[
              style.switchStyle,
              {
                backgroundColor:
                  isFixed === 1 ? Colors.Black : Colors.TextInput_Background,
                color: isFixed === 1 ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Have partner
          </Text>
          <Text
            onPress={() => setisFixed(2)}
            style={[
              style.switchStyle,
              {
                backgroundColor:
                  isFixed === 2 ? Colors.Black : Colors.TextInput_Background,
                color: isFixed === 2 ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Single
          </Text>
        </View>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {}]}>
          <Text style={style.personalText}>{Strings.PersonalInformation}</Text>
          <Text
            style={[
              style.personalStringText,
              {color: Colors.White, alignSelf: 'center', textAlign: 'center'},
            ]}>
            {Strings.PersonalString}
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
            <Text style={style.personalStringTextBold}>Marital Status</Text>
            {switchview()}
            <View
              style={{
                justifyContent: 'center',
                marginTop: responsiveWidth(10),
                marginStart: responsiveWidth(3),
              }}>
              <DropDownPicker
                placeholder={'Choose your eduction level'}
                items={educationArray}
                style={{
                  width: responsiveWidth(83),
                  borderWidth: 1,
                  borderColor: Colors.Black,
                  borderRadius: responsiveWidth(3),
                }}
                zIndexInverse={10000}
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
              {errorvalue != '' ? (
                <Text
                  style={{
                    fontFamily: fontFamily.Roboto_Regular,
                    fontSize: responsiveFontSize(1.5),
                    color: Colors.Red,
                    marginTop: responsiveWidth(-6),
                    marginBottom: responsiveWidth(6),
                    width: '78%',
                  }}>
                  {errorvalue}
                </Text>
              ) : null}
            </View>
            <View
              style={{
                justifyContent: 'center',
                marginTop: responsiveWidth(3),
                marginStart: responsiveWidth(3),
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
                value={value1}
                open={expanded1}
                setOpen={setExpanded1}
                setValue={setValue1}
              />
              {errorvalue1 != '' ? (
                <Text
                  style={{
                    fontFamily: fontFamily.Roboto_Regular,
                    fontSize: responsiveFontSize(1.5),
                    color: Colors.Red,
                    marginTop: responsiveWidth(-6),
                    marginBottom: responsiveWidth(6),
                    width: '78%',
                  }}>
                  {errorvalue1}
                </Text>
              ) : null}
            </View>
            <Text style={style.personalStringTextBold}>
              How many children under 18 year in the household?
            </Text>
            <Progress.Bar
              progress={0.3}
              width={325}
              color={Colors.Dark_Gray}
              unfilledColor={'#F6F5F3'}
              style={{alignSelf: 'center', marginTop: responsiveWidth(5)}}
            />
            <Text style={style.personalStringTextBold}>
              How many cars in the household?
            </Text>
            <Progress.Bar
              progress={0.3}
              width={325}
              color={Colors.Dark_Gray}
              unfilledColor={'#F6F5F3'}
              style={{alignSelf: 'center', marginTop: responsiveWidth(5)}}
            />
            <View style={style.bottomView}>
              <View style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </View>
              <NetButton
                onPress={() => checkValidation()}
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
    marginTop: responsiveWidth(8),
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
  },
  personalStringTextBold: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
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
    width: '68%',
    height: '100%',
    borderRadius: responsiveWidth(2),
    paddingTop: responsiveWidth(3.5),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.6),
  },
});
export default PersonalInfoScreen;
