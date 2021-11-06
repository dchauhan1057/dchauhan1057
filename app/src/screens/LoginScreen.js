import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
  nationalID,
} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
import NetImageTextButton from '../component/NetImageTextButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const LoginScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [address, setaddress] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [nationalId, setnationalId] = useState('');
  const [errorAddress, seterrorAddress] = useState('');
  const [errorphoneNumber, seterrorphoneNumber] = useState('');
  const [errornationalId, seterrornationalId] = useState('');
  const [value, setValue] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [somethingwentwrong, setsomethingwentwrong] = React.useState(false);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(false);
    setValue(value);
  };
  const checkValidation = () => {
    if (address === '') {
      seterrorAddress('Please enter address');
    } else if (phoneNumber === '') {
      seterrorphoneNumber('Please enter phone number');
    } else if (nationalId === '') {
      seterrornationalId('Please enter nationalId');
    } else {
      navigation.navigate('CoBorrowerScreen');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Text style={style.titleStringText}>{Strings.Letstart}</Text>
          <Text style={style.personalStringText}>
            We use BankID for security and to make it easier to complete
            necessary information.
          </Text>
          <NetTextInput
            keyboardType={'email-address'}
            placeholder={Strings.Emailaddress}
            textInput={style.textInputstyle}
            value={address}
            onChangeText={address => {
              seterrorAddress('');
              setaddress(address);
            }}
            error={errorAddress}
          />
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F6F5F3',
              marginStart: responsiveWidth(12),
              height: responsiveWidth(13),
              width: '75%',
              marginTop: responsiveWidth(10),
              marginBottom: responsiveWidth(10),
              zIndex: 10000,
            }}>
            <View
              style={{
                height: responsiveWidth(13),
              }}>
              <DropDownPicker
                placeholder={'+412'}
                style={{
                  width: responsiveWidth(20),
                  borderRadius: responsiveWidth(3),
                  backgroundColor: Colors.Black,
                }}
                zIndexInverse={1000}
                items={nationalID}
                defaultIndex={0}
                dropDownStyle={{
                  borderRadius: 10,
                  height: responsiveWidth(20),
                  width: responsiveWidth(20),
                }}
                containerStyle={{
                  height: responsiveWidth(20),
                  width: responsiveWidth(20),
                }}
                itemStyle={{
                  justifyContent: 'flex-start',
                  marginStart: responsiveWidth(5),
                  fontSize: responsiveFontSize(1.5),
                  color: Colors.White,
                  fontFamily: fontFamily.Roboto_Medium,
                }}
                textStyle={{
                  fontSize: responsiveFontSize(1.5),
                  color: Colors.White,
                  fontFamily: fontFamily.Roboto_Medium,
                }}
                value={value}
                open={expanded}
                setOpen={setExpanded}
                setValue={setValue}
              />
            </View>
            <NetTextInput
              keyboardType={'numeric'}
              placeholder={Strings.PhoneNumber}
              textInput={style.textInputNumberstyle}
              value={phoneNumber}
              onChangeText={phoneNumber => {
                seterrorphoneNumber('');
                setphoneNumber(phoneNumber);
              }}
              error={errorphoneNumber}
              errorStyle={{marginStart: responsiveWidth(4)}}
            />
          </View>
          <NetTextInput
            placeholder={Strings.NationalID}
            textInput={style.textInputstyle}
            value={nationalId}
            onChangeText={nationalId => {
              seterrornationalId('');
              setnationalId(nationalId);
            }}
            error={errornationalId}
          />

          <View style={style.bottomView}>
            <NetButton
              onPress={() => checkValidation()}
              text={Strings.Done}
              touchableStyle={{
                backgroundColor: Colors.Black,
                width: '78%',
                marginTop: responsiveWidth(15),
              }}
              textStyle={{color: Colors.White}}
            />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={somethingwentwrong}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setsomethingwentwrong(!somethingwentwrong);
            }}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
                <Text
                  style={[
                    style.personalStringText,
                    {fontFamily: fontFamily.Roboto_Bold, marginBottom: 0},
                  ]}>
                  Oops!
                </Text>
                <Text style={[style.personalStringText, {marginTop: 0}]}>
                  There was a mistake with signing up process. Please, try
                  again.
                </Text>
                <NetButton
                  onPress={() => setsomethingwentwrong(!somethingwentwrong)}
                  text={Strings.Tryagain}
                  touchableStyle={{
                    backgroundColor: Colors.Black,
                    width: responsiveWidth(60),
                    marginTop: responsiveWidth(3),
                    alignSelf: 'center',
                    marginEnd: responsiveWidth(10),
                  }}
                  textStyle={{color: Colors.White}}
                />
              </View>
            </View>
          </Modal>
        </View>
      </KeyboardAwareScrollView>
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
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(65),
    color: Colors.Black,
    marginBottom: responsiveWidth(4),
    marginTop: responsiveWidth(3),
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(50),
    color: Colors.Black,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: responsiveWidth(10),
  },
  imagestyle: {height: responsiveWidth(4), width: responsiveWidth(4)},
  backarrowView: {
    height: responsiveWidth(5),
    padding: responsiveWidth(10),
  },
  borderView: {
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.1),
    borderRadius: responsiveWidth(10),
    padding: responsiveWidth(2),
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    margin: responsiveWidth(5),
  },
  rowStyle: {
    width: '30%',
    justifyContent: 'center',
  },
  blueBoxStyle: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    backgroundColor: Colors.BlueShade,
    alignSelf: 'center',
  },
  rowNextView: {width: '70%', alignContent: 'center'},
  textMain: {
    fontSize: responsiveFontSize(2),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Bold,
  },
  textDesc: {
    fontSize: responsiveFontSize(1.4),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Regular,
  },
  textInputstyle: {
    width: responsiveWidth(78),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(1),
    backgroundColor: '#F6F5F3',
    marginTop: responsiveWidth(-8),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Regular,
  },
  textInputNumberstyle: {
    width: responsiveWidth(55),
    borderRadius: responsiveWidth(3),
    marginStart: responsiveWidth(0),
    backgroundColor: '#F6F5F3',
    height: responsiveWidth(13),
    marginTop: responsiveWidth(-10),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Regular,
  },
  bottomView: {position: 'absolute', bottom: 10, width: '100%'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  modalView: {
    height: responsiveWidth(50),
    width: responsiveWidth(70),
    backgroundColor: 'white',
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(2),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  renderView: {
    width: '90%',
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(3),
    margin: responsiveWidth(3),
  },
});
export default LoginScreen;
