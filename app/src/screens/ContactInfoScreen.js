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
const ContactInfoScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const [name, setname] = React.useState('');
  const [errorname, seterrorname] = React.useState('');
  const [birthday, setbirthday] = React.useState('');
  const [errorbirthday, seterrorbirthday] = React.useState('');
  const [email, setemail] = React.useState('');
  const [erroremail, seterroremail] = React.useState('');
  const [phonenumber, setphonenumber] = React.useState('');
  const [errorphonenumber, seterrorphonenumber] = React.useState('');
  const [address, setaddress] = React.useState('');
  const [erroraddress, seterroraddress] = React.useState('');
  const navigation = useNavigation();
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const checkValidation = () => {
    if (name === '') {
      seterrorname('Please enter your name');
    }
    if (birthday === '') {
      seterrorbirthday('Please enter your birthday');
    }
    if (phonenumber === '') {
      seterrorphonenumber('Please enter your phonenumber');
    }
    if (address === '') {
      seterroraddress('Please enter your address');
    }
    if (email === '') {
      seterroremail('Please enter your email');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <View style={style.rowView}>
            <Text style={style.personalStringText}>Cancel</Text>
            <Text
              style={[
                style.personalStringText,
                {
                  width: '80%',
                  fontSize: responsiveFontSize(2.5),
                  color: Colors.Text_Black,
                  fontFamily: fontFamily.Roboto_Bold,
                },
              ]}>
              Contact Info
            </Text>
            <Text
              onPress={() => checkValidation()}
              style={style.personalStringText}>
              Save
            </Text>
          </View>
          <NetTextInput
            title={Strings.Fullname}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={errorname}
            value={name}
            onChangeText={name => {
              seterrorname('');
              setname(name);
            }}
          />
          <NetTextInput
            title={Strings.Birthdate}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={errorbirthday}
            value={birthday}
            onChangeText={birthday => {
              seterrorbirthday('');
              setbirthday(birthday);
            }}
          />
          <NetTextInput
            title={Strings.Email}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={erroremail}
            value={email}
            onChangeText={email => {
              seterroremail('');
              setemail(email);
            }}
          />
          <NetTextInput
            title={Strings.PhoneNumber}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={errorphonenumber}
            value={phonenumber}
            onChangeText={phonenumber => {
              seterrorphonenumber('');
              setphonenumber(phonenumber);
            }}
          />
          <NetTextInput
            title={Strings.Address}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={erroraddress}
            value={address}
            onChangeText={address => {
              seterroraddress('');
              setaddress(address);
            }}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() => checkValidation()}>
            <Text
              style={[
                style.personalStringText,
                {
                  fontFamily: fontFamily.Roboto_Bold,
                  fontSize: responsiveFontSize(2),
                  color: Colors.Black,
                  position: 'absolute',
                  bottom: 0,
                  paddingBottom: responsiveWidth(5),
                },
              ]}>
              Delete Account
            </Text>
          </TouchableOpacity>
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
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.Gray_7f,
  },
  imagestyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    tintColor: Colors.Black,
    alignSelf: 'flex-end',
    margin: responsiveWidth(10),
  },
  rowView: {
    flexDirection: 'row',
    padding: responsiveWidth(4),
    marginTop: responsiveWidth(10),
  },
  textInputstyle: {
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(2),
    backgroundColor: '#F6F5F3',
    fontFamily: fontFamily.Roboto_Regular,
    color: Colors.Black,
    fontSize: responsiveFontSize(1.7),
  },
});
export default ContactInfoScreen;
