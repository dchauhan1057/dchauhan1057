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
import CustomAnimationProgress from '../component/CustomAnimationProgress';
import NetTextInput from '../component/NetTextInput';
import NetImageTextButton from '../component/NetImageTextButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const ResultScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={style.headerView}>
              <Text style={style.personalText}>LOGO</Text>
            </View>
            <View style={style.headerView}>
              <Text style={[style.personalText, {alignSelf: 'flex-end'}]}>
                MENU
              </Text>
            </View>
          </View>
          <View style={style.titleView}>
            <Text style={style.titleStringText}>{Strings.YourResults}</Text>
            <Image
              style={style.questionimagestyle}
              source={Images.Question}
              resizeMode={'contain'}
            />
          </View>
          <Text style={style.personalStringText}>Your Equity level</Text>
          <View style={style.gradientView}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#3C7EAE', '#DFF6FD', '#DF5555']}
              style={[style.gradientstyle, {width: '50%'}]}></LinearGradient>
          </View>
          <View style={style.smileView}>
            <Image
              style={style.smileyImage}
              source={Images.Sad_Icon}
              resizeMode={'contain'}
            />
            <Image
              style={style.smileyImage}
              source={Images.Happy_Icon}
              resizeMode={'contain'}
            />
          </View>
          <Text style={style.personalStringText}>Income vs loan amount</Text>
          <View style={style.gradientView}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#3C7EAE', '#DFF6FD', '#DF5555']}
              style={[style.gradientstyle, {width: '30%'}]}></LinearGradient>
          </View>
          <View style={style.smileView}>
            <Image
              style={style.smileyImage}
              source={Images.Sad_Icon}
              resizeMode={'contain'}
            />
            <Image
              style={style.smileyImage}
              source={Images.Happy_Icon}
              resizeMode={'contain'}
            />
          </View>
          <Text style={style.personalStringText}>
            How competitive is your current rate?
          </Text>
          <View style={style.gradientView}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#3C7EAE', '#DFF6FD', '#DF5555']}
              style={[style.gradientstyle, {width: '80%'}]}></LinearGradient>
          </View>
          <View style={style.smileView}>
            <Image
              style={style.smileyImage}
              source={Images.Sad_Icon}
              resizeMode={'contain'}
            />
            <Image
              style={style.smileyImage}
              source={Images.Happy_Icon}
              resizeMode={'contain'}
            />
          </View>
          <Image
            style={style.bigimagestyle}
            source={Images.Image_Icon}
            resizeMode={'contain'}
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
              onPress={() => navigation.navigate('IncomeInformationScreen')}
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
    width: '50%',
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
    marginTop: responsiveWidth(2),
    padding: responsiveWidth(3),
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'center',
    width: responsiveWidth(83),
    marginTop: responsiveHeight(4),
    color: Colors.Dark_Gray,
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(2.5),
    paddingStart: responsiveWidth(5),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
    alignSelf: 'center',
    textAlign: 'center',
  },
  questionimagestyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    tintColor: Colors.Black,
    marginTop: responsiveWidth(11),
    marginStart: responsiveWidth(3),
  },
  smileyImage: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    tintColor: Colors.Black,
    marginTop: responsiveWidth(3),
  },
  bigimagestyle: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    tintColor: Colors.TextInput_Background,
    marginTop: responsiveWidth(11),
    marginStart: responsiveWidth(3),
    alignSelf: 'center',
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
  totalStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
  },
  smileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(85),
    alignSelf: 'center',
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
  gradientstyle: {
    height: responsiveWidth(4),
    borderRadius: responsiveWidth(5),
    borderColor: Colors.White,
    borderWidth: responsiveWidth(0.5),
    margin: responsiveWidth(0.5),
  },
  gradientView: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: Colors.Dark_Gray,
    borderRadius: responsiveWidth(5),
    marginTop: responsiveWidth(5),
  },
});
export default ResultScreen;
