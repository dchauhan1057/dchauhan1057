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
import axios from 'axios';
import {LogDisplay} from './LogDisplay';
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
import {getApi, postApi} from '../utils/Webservices';

// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
import LinearGradient from 'react-native-linear-gradient';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const HomeScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  useEffect(async () => {}, []);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const loanView = () => {
    return (
      <View>
        <View style={styles.rowView}>
          <Text style={styles.loantext}>Your loan</Text>
          <Text style={styles.seealltext}>See all</Text>
        </View>
        <View style={styles.loanview}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '60%'}}>
              <Text
                style={[
                  styles.loantext,
                  {
                    textAlign: 'left',
                    fontFamily: fontFamily.Poppins_Regular,
                    color: Colors.Light_Black,
                  },
                ]}>
                Bank Name
              </Text>
              <Text style={[styles.loantext, {textAlign: 'left'}]}>
                100 000 000 NOK
              </Text>
              <Text
                style={[
                  styles.seealltext,
                  {fontFamily: fontFamily.Poppins_Regular, textAlign: 'left'},
                ]}>
                4.2% • Floating • 5 years
              </Text>
            </View>
            <View style={{width: '40%'}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#FF8D69', '#FF3A33', '#FF3A33']}
                style={{
                  width: '95%',
                  alignSelf: 'center',
                  borderRadius: responsiveWidth(5),
                  padding: responsiveWidth(2),
                }}>
                <Text
                  style={[
                    styles.loantext1,
                    {
                      textAlign: 'left',
                      fontFamily: fontFamily.Poppins_Regular,
                      color: Colors.White,
                      alignSelf: 'center',
                    },
                  ]}>
                  Renegotiated
                </Text>
              </LinearGradient>
            </View>
          </View>
          <View
            style={[
              styles.loanview,
              {width: '95%', backgroundColor: Colors.White},
            ]}>
            <View style={[styles.rowView, {margin: responsiveWidth(1)}]}>
              <Text
                style={[
                  styles.loantext,
                  {fontFamily: fontFamily.Poppins_SemiBold},
                ]}>
                Your loan
              </Text>
              <Text style={styles.seealltext}>See all</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '30%'}}>
                <View style={styles.roundview}>
                  <Image
                    source={Images.shopping}
                    style={styles.shoppingimage}
                  />
                </View>
              </View>
              <View style={{width: '70%'}}>
                <Text
                  style={[
                    styles.loantext1,
                    {
                      textAlign: 'left',
                      fontFamily: fontFamily.Poppins_Regular,
                      color: Colors.Light_Black,
                    },
                  ]}>
                  Flat • 50m2
                </Text>
                <Text style={[styles.loantext1, {textAlign: 'left'}]}>
                  156 000 000 NOK
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const newsView = () => {
    return (
      <View>
        <View style={styles.rowView}>
          <Text style={styles.loantext}>News</Text>
          <Text style={styles.seealltext}>See all</Text>
        </View>
        {newRender()}
      </View>
    );
  };
  const newRender = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          backgroundColor: Colors.gray,
          borderRadius: responsiveWidth(4),
          padding: responsiveWidth(3),
          marginTop: responsiveWidth(4),
        }}>
        <View style={{width: '70%'}}>
          <Text
            style={{
              fontFamily: fontFamily.Poppins_SemiBold,
              fontSize: responsiveFontSize(1.6),
              color: Colors.Orange,
            }}>
            Capital
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.Poppins_Regular,
              fontSize: responsiveFontSize(1.4),
              color: Colors.BlackText,
            }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate...
          </Text>
        </View>
        <View style={{width: '30%'}}>
          <Image
            source={Images.pic}
            style={{
              width: responsiveWidth(20),
              height: responsiveWidth(20),
              alignSelf: 'flex-end',
            }}></Image>
        </View>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Text style={styles.hometext}>Home</Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FF8D69', '#FF3A33', '#FF3A33']}
            style={{
              paddingBottom: responsiveWidth(5),
              width: '90%',
              alignSelf: 'center',
              borderRadius: responsiveWidth(4),
            }}>
            <Text style={styles.gradientTitle}>Your loan was renegotiated</Text>
            <Text style={styles.gradientdescription}>
              Here's a checklist of the next steps required.
            </Text>
            <NetButton
              onPress={() => navigation.navigate('SettingScreen')}
              text={Strings.OpenChecklist}
              touchableStyle={styles.nextbutton}
              textStyle={styles.nexttext}
            />
          </LinearGradient>
          {loanView()}
          {newsView()}
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
    backgroundColor: Colors.White,
  },
  hometext: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(3),
    color: Colors.Black,
    marginStart: responsiveWidth(3),
    marginTop: responsiveWidth(6),
  },
  nextbutton: {
    marginTop: responsiveWidth(10),
    backgroundColor: Colors.White,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nexttext: {
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
    marginTop: responsiveWidth(1),
  },
  gradientTitle: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(2),
    color: Colors.White,
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
  gradientdescription: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    color: Colors.White,
    alignSelf: 'center',
    width: '80%',
    textAlign: 'center',
  },
  loantext: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.8),
    color: Colors.Black,
    textAlign: 'center',
  },
  loantext1: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.6),
    color: Colors.Black,
    textAlign: 'center',
  },
  seealltext: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.6),
    color: Colors.grayText,
    textAlign: 'center',
  },
  rowView: {
    flexDirection: 'row',
    margin: responsiveWidth(5),
    justifyContent: 'space-between',
  },
  loanview: {
    backgroundColor: Colors.gray,
    borderRadius: responsiveWidth(4),
    width: '90%',
    alignSelf: 'center',
    padding: responsiveWidth(3),
  },
  roundview: {
    backgroundColor: Colors.gray,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: responsiveWidth(15) / 2,
    justifyContent: 'center',
  },
  shoppingimage: {
    alignSelf: 'center',
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  },
});
export default HomeScreen;
