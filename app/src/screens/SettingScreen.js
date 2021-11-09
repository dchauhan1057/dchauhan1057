import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
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
const SettingScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [infoModal, setinfoModal] = React.useState(false);
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
  const logoutCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={infoModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setinfoModal(!infoModal);
        }}>
        <View
          style={{
            backgroundColor: '#000000CC',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignSelf: 'center',
              width: '80%',
              paddingTop: responsiveWidth(10),
              paddingBottom: responsiveWidth(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(4),
              backgroundColor: Colors.White,
            }}>
            <Text style={[style.titleStringText, {marginTop: 0}]}>
              Are you sure you want to log out?
            </Text>
            <Text
              style={[
                style.modalStringText,
                {fontFamily: fontFamily.Poppins_Regular},
              ]}>
              Lorem ipsum is a common placeholder.
            </Text>
            <TouchableOpacity onPress={() => setinfoModal(false)}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#505868', '#0C1217', '#0C1217']}
                style={[style.gotitButton, {marginTop: responsiveWidth(5)}]}>
                <Text
                  style={[
                    style.modalStringText,
                    {color: Colors.White, marginTop: 0},
                  ]}>
                  Log out
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setinfoModal(false)}
              style={style.gotitButton}>
              <Text
                style={[
                  style.modalStringText,
                  {color: Colors.Black, marginTop: 0},
                ]}>
                Cancle
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Images.Close_Icon} style={style.imagestyle} />
          </TouchableOpacity>
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
          <TouchableOpacity
            style={[style.borderView, {marginTop: responsiveWidth(40)}]}>
            <Text style={style.personalStringText}>Logout</Text>
          </TouchableOpacity>
          {logoutCall()}
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
    fontFamily: fontFamily.Poppins_Medium,
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
  modalStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(50),
    marginTop: responsiveHeight(2),
    color: Colors.Black,
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',
    width: responsiveWidth(55),
    marginTop: responsiveHeight(5),
    textAlign: 'center',
    color: Colors.Dark_Gray,
  },
  textStyle: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.6),
    color: '#212B36',
    marginStart: responsiveWidth(5),
    marginTop: responsiveWidth(5),
  },
  gotitButton: {
    height: responsiveWidth(10),
    width: responsiveWidth(50),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(4),
    marginTop: responsiveWidth(4),
  },
});
export default SettingScreen;
