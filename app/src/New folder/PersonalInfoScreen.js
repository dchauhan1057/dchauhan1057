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

//------------------------------------------------Main Call-----------------------------------------------------------------------
const PersonalInfoScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {padding: responsiveWidth(6)}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.headerView}>
              <Text style={style.personalStringText}>LOGO</Text>
            </View>
            <View style={style.headerView}>
              <Text style={style.personalStringText}>MENU</Text>
            </View>
          </View>
          <Text style={style.personalText}>{Strings.PersonalInformation}</Text>
          <Text style={style.personalStringText}>{Strings.PersonalString}</Text>

          <Dropdown question={Strings.Question1} data={childrensArray} />
          <Dropdown question={Strings.Question2} data={carsArray} />
          <Dropdown question={Strings.Question3} data={educationArray} />
          
          <Dropdown question={Strings.Question4} data={maritalArray} />
          <Dropdown question={Strings.Question5} data={memberArray} />

          <View style={style.bottomView}>
            <View style={style.roundView}>
              <Image
                source={Images.Right_Arrow}
                style={style.imageStyle}
                resizeMode="contain"
              />
            </View>
            <NetButton
              onPress={() => navigation.navigate('MortgageScreen')}
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
    backgroundColor: Colors.Dark_Gray,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(8),
  },
});
export default PersonalInfoScreen;
