import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
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
  bankArray,
} from '../utils/Constant';
import NetImageTextButton from '../component/NetImageTextButton';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const UnsecuredLoanScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [addMortage, setaddMortage] = React.useState(false);
  const [infoModal, setinfoModal] = React.useState(false);
  const [isFixed, setisFixed] = React.useState(false);
  const [value, setValue] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [amount, setamount] = React.useState('');
  const [interest, setinterest] = React.useState('');
  const [erroramount, seterroramount] = React.useState('');
  const [errorinterest, seterrorinterest] = React.useState('');
  const [choosebank, setchoosebank] = React.useState('');
  const [errorchoosebank, seterrorchoosebank] = React.useState('');
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(false);
    setValue(value);
  };
  const checkValidation = () => {
    if (choosebank === '') {
      seterrorchoosebank('Please select an bank');
    }
    if (amount === '') {
      seterroramount('Please select an bank');
    } else if (interest === '') {
      seterrorinterest('Please select an bank');
    } else {
      navigation.navigate('IncomeInformationScreen');
    }
  };
  //------------------------------------------------Render Call-----------------------------------------------------------------------
  const addMortageCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={addMortage}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setaddMortage(!addMortage);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.personalText}>Add mortgage</Text>
            {switchCall()}
            <View style={{position: 'absolute', bottom: 20}}>
              <NetButton
                onPress={() => checkValidation()}
                text={Strings.Addloan}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  const infoModalCall = () => {
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
            marginTop: responsiveWidth(35),
            marginStart: responsiveWidth(38),
            height: responsiveWidth(45),
            width: responsiveWidth(60),
            justifyContent: 'center',
            borderRadius: responsiveWidth(4),
          }}>
          <View
            style={{
              height: responsiveWidth(45),
              width: responsiveWidth(60),
              justifyContent: 'center',
              backgroundColor: Colors.Black,
              borderRadius: responsiveWidth(4),
            }}>
            <View style={style.TriangleShapeCSS} />
            <Text style={style.modalStringText}>Info about loan</Text>
            <Text
              style={[
                style.modalStringText,
                {fontFamily: fontFamily.Roboto_Regular},
              ]}>
              Lorem ipsum is a placeholder text commonly used to demonstrate the
              visual content.
            </Text>
            <TouchableOpacity
              onPress={() => setinfoModal(false)}
              style={style.gotitButton}>
              <Text
                style={[
                  style.modalStringText,
                  {color: Colors.Black, marginTop: 0},
                ]}>
                Got it!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const switchCall = () => {
    return (
      <View style={{width: '100%', justifyContent: 'center'}}>
        <View
          style={{
            width: '90%',
            marginStart: responsiveWidth(8),
            paddingTop: responsiveWidth(5),
          }}>
          <DropDownPicker
            placeholder={'Choose bank'}
            items={bankArray}
            style={{
              width: responsiveWidth(83),
              borderWidth: 1,
              borderColor: Colors.Black,
              borderRadius: responsiveWidth(3),
            }}
            zIndexInverse={1000}
            defaultIndex={0}
            dropDownStyle={{
              borderRadius: 10,
              height: responsiveWidth(20),
              width: responsiveWidth(83),
            }}
            containerStyle={{
              height: responsiveWidth(20),
              width: responsiveWidth(83),
            }}
            itemStyle={{
              justifyContent: 'flex-start',
              marginStart: responsiveWidth(5),
              fontSize: responsiveFontSize(1.5),
            }}
            value={value}
            open={expanded}
            setOpen={setExpanded}
            setValue={setValue}
          />
          {seterrorchoosebank != '' ? (
            <Text
              style={{
                fontFamily: fontFamily.Roboto_Regular,
                fontSize: responsiveFontSize(1.5),
                color: Colors.Red,
                marginTop: responsiveWidth(-6),
                marginBottom: responsiveWidth(6),
                width: '78%',
              }}>
              {errorchoosebank}
            </Text>
          ) : null}
        </View>
        <NetTextInput
          textInput={[
            style.textInputStyle,
            {width: responsiveWidth(83), marginTop: responsiveWidth(-10)},
          ]}
          errorStyle={{marginStart: responsiveWidth(8)}}
          placeholder={'Outstanding loan amount'}
          value={amount}
          onChangeText={amount => {
            seterroramount('');
            setamount(amount);
          }}
          error={erroramount}
        />
        <View
          style={{
            flexDirection: 'row',
            width: responsiveWidth(88),
            alignSelf: 'center',
          }}>
          <View style={{width: '50%'}}>
            <NetTextInput
              textInput={style.textInputStyle}
              errorStyle={{marginStart: responsiveWidth(2)}}
              placeholder={'Interest rate'}
              value={interest}
              onChangeText={interest => {
                seterrorinterest('');
                setinterest(interest);
              }}
              error={errorinterest}
            />
          </View>
          <View
            style={[
              style.switchView,
              {
                marginTop:
                  errorinterest === ''
                    ? responsiveWidth(8)
                    : responsiveWidth(1),
              },
            ]}>
            <Text
              onPress={() => setisFixed(false)}
              style={[
                style.switchStyle,
                {
                  backgroundColor: !isFixed
                    ? Colors.Black
                    : Colors.TextInput_Background,
                  color: !isFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Fixed
            </Text>
            <Text
              onPress={() => setisFixed(true)}
              style={[
                style.switchStyle,
                {
                  backgroundColor: isFixed
                    ? Colors.Black
                    : Colors.TextInput_Background,
                  color: isFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Floating
            </Text>
            <View></View>
          </View>
        </View>
        <Progress.Bar
          progress={0.3}
          width={350}
          color={Colors.Black}
          unfilledColor={'#F6F5F3'}
          style={{alignSelf: 'center', marginTop: responsiveWidth(5)}}
        />
        {addMortage ? null : (
          <NetImageTextButton
            onPress={() => setaddMortage(true)}
            text={Strings.Addloan}
            image={Images.Plus_Arrow}
            textStyle={style.addtextstyle}
            imagestyle={style.addimageStyle}
            touchableStyle={style.addtouchbutton}
          />
        )}
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {}]}>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <Text style={[style.titleStringText, {color: Colors.White}]}>
              {Strings.unsecuredLoan}
            </Text>
            <TouchableOpacity
              style={{marginTop: responsiveWidth(3)}}
              onPress={() => setinfoModal(true)}>
              <Image
                source={Images.Right_Arrow}
                style={[
                  style.imageStyle,
                  {
                    tintColor: Colors.White,
                    marginTop: responsiveWidth(10),
                    marginStart: responsiveWidth(8),
                  },
                ]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Text style={[style.personalStringText, {color: Colors.White}]}>
            {Strings.UnsecuredText}
          </Text>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              marginTop: responsiveWidth(2),
              borderTopLeftRadius: responsiveWidth(10),
              borderTopRightRadius: responsiveWidth(10),
              flex: 1,
            }}>
            {switchCall()}
            <View style={style.totalView}>
              <Text style={style.totalStringText}>{Strings.Total}</Text>
              <Text style={[style.totalStringText, {fontWeight: '100'}]}>
                {'18. 000 mill.kr'}
              </Text>
            </View>
            <View style={style.bottomView}>
              <View style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </View>
              <NetButton
                onPress={() => checkValidation()}
                text={Strings.NoLoan}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </View>
            {addMortageCall()}
            {infoModalCall()}
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
    backgroundColor: Colors.Black,
  },
  headerView: {
    justifyContent: 'center',
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    width: responsiveWidth(70),
    textAlign: 'center',
    color: Colors.Dark_Gray,
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
  },
  gotitButton: {
    height: responsiveWidth(10),
    width: responsiveWidth(50),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: responsiveWidth(4),
    marginTop: responsiveWidth(4),
  },
  modalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(50),
    marginTop: responsiveHeight(2),
    color: Colors.White,
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
    textAlign: 'center',
    color: Colors.Dark_Gray,
  },
  textStyle: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.6),
    color: '#212B36',
    marginStart: responsiveWidth(5),
    marginTop: responsiveWidth(5),
  },
  textInput: {
    backgroundColor: Colors.TextInput_Background,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: responsiveWidth(6),
    marginTop: responsiveWidth(5),
  },
  addloanBtn: {
    backgroundColor: '#3C7EAE',
    width: responsiveWidth(55),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(6),
    justifyContent: 'center',
    marginTop: responsiveHeight(8),
    marginStart: responsiveWidth(5),
  },
  lineView: {
    width: '85%',
    height: responsiveWidth(0.5),
    justifyContent: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
    alignSelf: 'center',
    backgroundColor: Colors.LineGray,
  },
  totalView: {
    flexDirection: 'row',
    width: '100%',
    paddingStart: responsiveWidth(5),
    marginTop: responsiveWidth(30),
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
    backgroundColor: Colors.Gray_CC,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(3),
  },
  totalStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
  },
  addtextstyle: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.8),
    color: Colors.Black,
    alignSelf: 'center',
    marginStart: responsiveWidth(4),
  },
  addimageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    marginStart: responsiveWidth(25),
    alignSelf: 'center',
    tintColor: Colors.Black,
  },
  addtouchbutton: {
    backgroundColor: Colors.White,
    borderRadius: responsiveWidth(2),
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.1),
    width: responsiveWidth(83),
    justifyContent: 'center',
  },
  nextbutton: {
    marginTop: responsiveWidth(5),
    backgroundColor: Colors.Black,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
    alignSelf: 'center',
    marginEnd: responsiveWidth(10),
  },
  nexttext: {
    color: Colors.White,
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  textInputStyle: {
    borderRadius: responsiveWidth(2),
    marginTop: responsiveWidth(-2),
    fontFamily: fontFamily.Roboto_Regular,
    color: Colors.Black,
    fontSize: responsiveFontSize(1.7),
  },
  switchView: {
    flexDirection: 'row',
    backgroundColor: Colors.TextInput_Background,
    width: '45%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
  switchStyle: {
    width: '50%',
    height: '100%',
    borderRadius: responsiveWidth(2),
    paddingTop: responsiveWidth(3.5),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.6),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Dark_Gray,
  },
  modalView: {
    marginTop: responsiveWidth(15),
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: responsiveWidth(3),
    borderTopRightRadius: responsiveWidth(3),
    padding: responsiveWidth(2),
    alignItems: 'center',
  },
  renderView: {
    width: '90%',
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(3),
    margin: responsiveWidth(3),
  },
  dropDown: {
    marginTop: responsiveHeight(2.5),
    width: '75%',
    height: responsiveHeight(6),
    borderWidth: 0.6,
    backgroundColor: Colors.Dropdown_Border,
    borderRadius: 0,
  },
  TriangleShapeCSS: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    marginTop: responsiveWidth(-10),
    marginStart: responsiveWidth(45),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Colors.Black,
  },
});
export default UnsecuredLoanScreen;
