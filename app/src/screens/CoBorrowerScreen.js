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
} from '../utils/Constant';
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
  const [errorAddress, seterrorAddress] = useState('');
  const [errorphoneNumber, seterrorphoneNumber] = useState('');
  const [errornationalId, seterrornationalId] = useState('');
  const [value, setValue] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
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
      navigation.navigate('MortgageScreen');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <Image
            source={Images.Close_Icon}
            resizeMode={'contain'}
            style={{
              alignSelf: 'flex-end',
              height: responsiveWidth(4),
              width: responsiveWidth(4),
              marginEnd: responsiveWidth(6),
            }}
          />
          <Text style={style.titleStringText}>Do you have a co-borrower?</Text>
          <Text style={style.personalStringText}>
            {
              'If you have a co-borrower we also need ther automatisation using '
            }
            <Text
              style={[
                style.personalStringText,
                {textDecorationLine: 'underline'},
              ]}>
              {'BankID'}
            </Text>
            <Text style={style.personalStringText}>{'.'}</Text>
          </Text>
          <NetTextInput
            placeholder={Strings.Emailaddress}
            textInput={style.textInputstyle}
            value={address}
            onChangeText={address => {
              seterrorAddress("")
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
                  backgroundColor: Colors.Black,
                  borderRadius: responsiveWidth(3),
                }}
                zIndexInverse={1000}
                items={data}
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
              placeholder={Strings.PhoneNumber}
              textInput={style.textInputNumberstyle}
              value={phoneNumber}
              onChangeText={phoneNumber => {
                seterrorphoneNumber("")
                setphoneNumber(phoneNumber);
              }}
              error={errorphoneNumber}
              errorStyle={{marginStart: responsiveWidth(2)}}
            />
          </View>
          <NetTextInput
            placeholder={Strings.NationalID}
            textInput={style.textInputstyle}
            value={nationalId}
            onChangeText={nationalId => {
              seterrornationalId("")
              setnationalId(nationalId);
            }}
            error={errornationalId}
          />
          <Text style={style.personalStringText}>
            By pressing Done button you accept the Terms of Mortgage Club
          </Text>

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
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(75),
    color: Colors.Black,
    marginBottom: responsiveWidth(4),
    marginTop: responsiveWidth(10),
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    width: responsiveWidth(50),
    color: Colors.Black,
    alignSelf: 'center',
    textAlign: 'center',
    marginBottom: responsiveWidth(4),
  },
  textInputstyle: {
    width: responsiveWidth(78),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(-2),
    backgroundColor: '#F6F5F3',
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
    width: responsiveWidth(78),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(1),
    backgroundColor: '#F6F5F3',
    marginTop: responsiveWidth(-8),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Regular,
  },
  textInputNumberstyle: {
    width: responsiveWidth(53),
    borderRadius: responsiveWidth(3),
    marginStart: responsiveWidth(2),
    backgroundColor: '#F6F5F3',
    height: responsiveWidth(12),
    marginTop: responsiveWidth(-9),
    color: Colors.Black,
    fontFamily: fontFamily.Roboto_Regular,
  },
});
export default CoBorrowerScreen;
