import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
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
import {nationalID} from '../utils/Constant';
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
  const [code, setcode] = useState('+123');
  const [search, setsearch] = useState('');
  const [errorsearch, seterrorsearch] = useState('');
  const [errorAddress, seterrorAddress] = useState('');
  const [errorphoneNumber, seterrorphoneNumber] = useState('');
  const [errornationalId, seterrornationalId] = useState('');
  const [expanded, setExpanded] = React.useState(false);
  const [somethingwentwrong, setsomethingwentwrong] = React.useState(false);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const checkValidation = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (address === '') {
      seterrorAddress('Please enter address');
    } else if (reg.test(address) === false) {
      seterrorAddress('Please enter valid email address');
    } else if (phoneNumber === '') {
      seterrorphoneNumber('Please enter phone number');
    } else if (nationalId === '') {
      seterrornationalId('Please enter nationalId');
    } else {
      navigation.navigate('CoBorrowerScreen');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setExpanded(false);
        setcode(item.value);
      }}
      style={style.renderStyle}>
      <View style={{width: '20%', paddingStart: responsiveWidth(8)}}>
        <View style={style.grayroundView}>
          <Text style={style.personalStringText}>A</Text>
        </View>
      </View>
      <View style={style.locationtextView}>
        <View style={style.item}>
          <Text style={style.title}>Country Name</Text>
          <Text style={style.subtitle}>{item.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Text style={style.titleStringText}>{Strings.Letstart}</Text>
          <Text style={style.formDesc}>
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
              marginStart: responsiveWidth(8),
              height: responsiveWidth(13),
              width: '83%',
              marginTop: responsiveWidth(5),
              marginBottom: responsiveWidth(4),
              borderRadius: responsiveWidth(4),
            }}>
            <TouchableOpacity
              onPress={() => setExpanded(true)}
              style={{
                height: responsiveWidth(13),
                width: responsiveWidth(20),
                backgroundColor: Colors.Black,
                justifyContent: 'center',
                borderRadius: responsiveWidth(2),
              }}>
              <Text
                style={{
                  color: Colors.White,
                  fontFamily: fontFamily.Poppins_Medium,
                  fontSize: responsiveFontSize(2),
                  alignSelf: 'center',
                  textAlign: 'center',
                }}>
                {code}
              </Text>
            </TouchableOpacity>
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
              errorStyle={{marginStart: responsiveWidth(2)}}
            />
          </View>
          <NetTextInput
            keyboardType={'numeric'}
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
                    {fontFamily: fontFamily.Poppins_Bold, marginBottom: 0},
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={expanded}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setExpanded(!expanded);
            }}>
            <View style={[style.centeredView, {justifyContent: 'flex-end'}]}>
              <View style={style.modal1View}>
                <Text
                  style={[
                    style.textMain,
                    {
                      fontFamily: fontFamily.Poppins_Bold,
                      alignSelf: 'center',
                      marginTop: responsiveWidth(5),
                    },
                  ]}>
                  Country Code
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#F6F5F3',
                    width: responsiveWidth(85),
                    justifyContent: 'center',
                    alignSelf: 'center',
                    borderRadius: responsiveWidth(2),
                    height: responsiveWidth(13.5),
                  }}>
                  <Image
                    source={Images.Close_Icon}
                    style={{
                      height: responsiveWidth(3),
                      width: responsiveWidth(3),
                      alignSelf: 'center',
                    }}
                  />
                  <NetTextInput
                    placeholder={Strings.Search}
                    textInput={[
                      style.textInputstyle,
                      {
                        width: responsiveWidth(80),
                        alignSelf: 'center',
                        height: responsiveWidth(12),
                      },
                    ]}
                    value={search}
                    onChangeText={search => {
                      seterrorsearch('');
                      setsearch(search);
                      setExpanded(false);
                    }}
                    error={errorsearch}
                  />
                </View>
                <FlatList
                  data={nationalID}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
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
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(65),
    color: Colors.Black,
    marginBottom: responsiveWidth(4),
    marginTop: responsiveWidth(3),
  },
  formDesc: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(85),
    color: Colors.Black,
    lineHeight: 24,
    fontWeight: '400',
    letterSpacing: -0.15,
    marginBottom: responsiveWidth(4),
    marginTop: responsiveWidth(3),
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(50),
    color: Colors.BlackText,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: '600',
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
    fontFamily: fontFamily.Poppins_Bold,
  },
  textDesc: {
    fontSize: responsiveFontSize(1.4),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
  },
  textInputstyle: {
    width: responsiveWidth(85),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(1),
    backgroundColor: '#F6F5F3',
    marginTop: responsiveWidth(-8),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
  },
  textInputNumberstyle: {
    width: responsiveWidth(62),
    borderRadius: responsiveWidth(3),
    marginStart: responsiveWidth(0),
    backgroundColor: '#F6F5F3',
    height: responsiveWidth(13),
    marginTop: responsiveWidth(-10),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
  },
  bottomView: {position: 'absolute', bottom: 10, width: '100%'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000CC",
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
  modal1View: {
    height: '90%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: responsiveWidth(4),
    borderTopRightRadius: responsiveWidth(4),
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
  renderStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: responsiveWidth(2),
    margin: responsiveWidth(1),
  },
  grayroundView: {
    backgroundColor: Colors.circleGray,
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    marginStart: responsiveWidth(-5),
  },
  locationpinImage: {
    tintColor: Colors.Orange,
    height: responsiveWidth(4),
    width: responsiveWidth(3),
    alignSelf: 'center',
  },
  locationtextView: {
    width: '80%',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
});
export default LoginScreen;
