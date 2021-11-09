import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';
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
import {nationalID} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
import NetImageTextButton from '../component/NetImageTextButton';

const data = [
  {label: '+123', value: '+123'},
  {label: '+456', value: '+456'},
  {label: '+789', value: '+789'},
];
//------------------------------------------------Main Call-----------------------------------------------------------------------
const CoBorrowerScreen = ({props, route}) => {
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
    if (address === '') {
      seterrorAddress('Please enter address');
    } else if (phoneNumber === '') {
      seterrorphoneNumber('Please enter phone number');
    } else if (nationalId === '') {
      seterrornationalId('Please enter nationalId');
    } else {
      navigation.navigate('MortgageScreen');
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
          <Text
            style={[
              style.textMain,
              {color: Colors.Orange, alignSelf: 'center'},
            ]}>
            A
          </Text>
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
        <View style={[style.container]}>
          <TouchableOpacity
            resizeMode={'contain'}
            style={{
              alignSelf: 'flex-end',
              height: responsiveWidth(4),
              width: responsiveWidth(4),
              marginEnd: responsiveWidth(6),
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={Images.Close_Icon} />
          </TouchableOpacity>
          <Text style={style.titleStringText}>Do you have a co-borrower?</Text>
          <Text style={style.formDesc}>
            {
              "We'll send invite for the co-borrower, so they can create account using "
            }
            <Text style={[style.formDesc, {textDecorationLine: 'underline'}]}>
              {'BankID'}
            </Text>
            <Text style={style.formDesc}>{'.'}</Text>
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
              width: '84%',
              borderRadius: responsiveWidth(3),
              marginTop: responsiveWidth(5),
              marginBottom: responsiveWidth(4),
              zIndex: 10000,
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
          <Text style={style.personalStringText}>
            Text: why do we need this ?
          </Text>

          <NetButton
            onPress={() => checkValidation()}
            text={Strings.Done}
            touchableStyle={{
              backgroundColor: Colors.Gray_CC,
              width: '78%',
              marginTop: responsiveWidth(50),
            }}
            textStyle={{color: Colors.Gray_7f}}
          />
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
                <NetTextInput
                  placeholder={Strings.Search}
                  textInput={style.textInputstyle}
                  value={search}
                  onChangeText={search => {
                    seterrorsearch('');
                    setsearch(search);
                    setExpanded(false);
                  }}
                  error={errorsearch}
                />
                <FlatList
                  data={nationalID}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </Modal>
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
                    {
                      fontFamily: fontFamily.Poppins_Bold,
                      marginBottom: responsiveWidth(2),
                    },
                  ]}>
                  Requested
                </Text>
                <Text
                  style={[
                    style.personalStringText,
                    {
                      marginTop: 0,
                      width: responsiveWidth(60),
                      marginTop: responsiveWidth(3),
                    },
                  ]}>
                  Lorem ipsum is a common placeholder text used to show visual
                  element on the UI layout.
                </Text>
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
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(75),
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

  bottomView: {
    flexDirection: 'row',
    marginTop: responsiveWidth(40),
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.Black,
    marginStart: responsiveWidth(10),
    marginTop: responsiveHeight(8),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.White,
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
    backgroundColor: '#F6F5F3',
    height: responsiveWidth(12),
    marginTop: responsiveWidth(-9),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
  },
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
export default CoBorrowerScreen;
