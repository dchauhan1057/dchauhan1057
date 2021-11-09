import React, {useState, useEffect} from 'react';
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
import {childrensArray} from '../utils/Constant';

// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const ProfileScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const renderView = (image, text, onclick) => {
    return (
      <TouchableOpacity onPress={() => onclick} style={styles.renderview}>
        <Image source={image} style={styles.renderImage} />
        <Text style={styles.renderText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#505868', '#0C1217', '#0C1217']}
          style={{height: '100%'}}>
          <View style={styles.firstview}>
            <Image source={Images.menu} style={styles.menustyle} />
            <Image source={Images.user_profile} style={styles.userImage} />
            <Text style={styles.userText}>Name Surname</Text>
          </View>
          <View style={styles.secondStyle}>
            <View style={styles.rowView}>
              {renderView(Images.home, 'Mortgages')}
              {renderView(Images.loan, 'Loans')}
              {renderView(Images.income, 'Income')}
            </View>
            <View style={styles.infoView}>
              {renderView(
                Images.user_profile,
                'Personal Info',
                navigation.navigate('SettingScreen'),
              )}
            </View>
          </View>
        </LinearGradient>
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
    backgroundColor: Colors.Black,
  },
  renderView: {
    backgroundColor: '#F3F4F6',
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(3),
  },
  renderImage: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    alignSelf: 'center',
    marginTop: responsiveWidth(5),
  },
  renderText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.6),
    color: Colors.Black,
    alignSelf: 'center',
    marginTop: responsiveWidth(4),
  },
  firstview: {height: '35%', width: '100%'},
  menustyle: {
    height: responsiveWidth(1),
    width: responsiveWidth(6),
    alignSelf: 'flex-end',
    margin: responsiveWidth(5),
    marginTop: responsiveWidth(8),
  },
  userImage: {
    height: responsiveWidth(30),
    width: responsiveWidth(30),
    alignSelf: 'center',
    marginTop: responsiveWidth(5),
  },
  userText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    color: Colors.White,
    alignSelf: 'center',
    marginTop: responsiveWidth(4),
  },
  secondStyle: {
    height: '65%',
    width: '100%',
    backgroundColor: Colors.White,
    borderTopStartRadius: responsiveWidth(8),
    borderTopEndRadius: responsiveWidth(8),
    paddingTop: responsiveWidth(10),
  },
  rowView: {flexDirection: 'row', justifyContent: 'space-around'},
  infoView: {
    marginStart: responsiveWidth(10),
    marginTop: responsiveWidth(5),
    alignSelf: 'flex-start',
  },
});
export default ProfileScreen;
