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
const PaymentScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [nameerror, setnameerror] = useState('');
  const [number, setnumber] = useState('');
  const [numbererror, setnumbererror] = useState('');
  const [date, setdate] = useState('');
  const [dateerror, setdateerror] = useState('');
  const [cvc, setcvc] = useState('');
  const [cvcerror, setcvcerror] = useState('');
  const [zip, setzip] = useState('');
  const [ziperror, setziperror] = useState('');
  const [info, setinfo] = useState('');
  const [infoerror, setinfoerror] = useState('');

  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const checkValidation = () => {};

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={Images.Close_Icon}
              style={{
                height: responsiveWidth(5),
                width: responsiveWidth(5),
                alignSelf: 'flex-end',
                marginTop: responsiveWidth(5),
                marginEnd: responsiveWidth(5),
              }}
            />
          </TouchableOpacity>
          <Text style={style.titleStringText}>{Strings.Paymentdetails}</Text>
          <Text style={style.formDesc}>
            We'll send invite for the co-borrower, so they can create account
            using BankID.
          </Text>
          <Text style={style.personalStringText}>Name on card</Text>
          <NetTextInput
            textStyle={style.formDesc}
            placeholder={'Name surname'}
            textInput={style.textInputstyle}
            value={name}
            onChangeText={name => {
              setnameerror('');
              setname(name);
            }}
            error={nameerror}
          />
          <Text style={style.personalStringText}>Card details</Text>
          <NetTextInput
            textStyle={style.formDesc}
            placeholder={'0000 0000 0000 0000'}
            textInput={style.textInputstyle}
            value={number}
            onChangeText={number => {
              setnumbererror('');
              setnumber(number);
            }}
            error={nameerror}
            maxLength={16}
            keyboardType={'numeric'}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}>
            <View style={{width: '55%'}}>
              <NetTextInput
                keyboardType={'numeric'}
                textStyle={style.formDesc}
                placeholder={'MM / YY'}
                textInput={[
                  style.textInputstyle1,
                  {
                    width: responsiveWidth(45),
                    alignSelf: 'flex-start',
                    marginStart: responsiveWidth(8),
                  },
                ]}
                value={date}
                onChangeText={dt => {
                  // if (date.length == 2) {
                  //   var temp = date + '/' + dt;
                  //   setdate(temp);
                  // } else {
                  setdate(dt);
                  // }
                  setdateerror('');
                }}
                error={nameerror}
                maxLength={4}
              />
            </View>
            <View style={{width: '45%'}}>
              <NetTextInput
                textStyle={style.formDesc}
                placeholder={'cvc'}
                textInput={[
                  style.textInputstyle1,
                  {
                    width: responsiveWidth(35),
                    marginStart: responsiveWidth(3),
                    alignSelf: 'flex-start',
                  },
                ]}
                keyboardType={'numeric'}
                value={cvc}
                maxLength={3}
                onChangeText={cvc => {
                  setcvcerror('');
                  setcvc(cvc);
                }}
                error={cvcerror}
              />
            </View>
          </View>
          <Text style={style.personalStringText}>Billing information</Text>
          <NetTextInput
            textStyle={style.formDesc}
            placeholder={'0000 0000 0000 0000'}
            textInput={style.textInputstyle}
            value={info}
            onChangeText={info => {
              setinfoerror('');
              setinfo(info);
            }}
            error={infoerror}
          />
          <NetTextInput
            textStyle={style.formDesc}
            placeholder={'ZIP'}
            textInput={style.textInputstyle}
            value={zip}
            onChangeText={zip => {
              setziperror('');
              setzip(zip);
            }}
            error={ziperror}
          />
          <NetButton
            onPress={() => navigation.navigate('ShareResultScreen')}
            text={'Pay'}
            touchableStyle={style.nextbutton}
            textStyle={style.nexttext}
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
    backgroundColor: Colors.White,
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(1.7),
    width: responsiveWidth(65),
    color: Colors.Black,
    marginStart: responsiveWidth(8),
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
    fontSize: responsiveFontSize(2.5),
    width: responsiveWidth(80),
    color: Colors.BlackText,
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: '600',
    marginTop: responsiveWidth(10),
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
  textInputstyle1: {
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(1),
    backgroundColor: '#F6F5F3',
    marginTop: responsiveWidth(-8),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
  },
  nextbutton: {
    marginTop: responsiveWidth(18),
    marginEnd: responsiveWidth(10),
    backgroundColor: Colors.gray,
    borderRadius: responsiveWidth(6),
    width: '90%',
    alignSelf: 'center',
  },
  nexttext: {
    color: Colors.greyText,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
});
export default PaymentScreen;
