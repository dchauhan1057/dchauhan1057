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
  Platform,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import Slider from 'react-native-slider';
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
  const [search, setsearch] = useState('');
  const [errorsearch, seterrorsearch] = useState('');
  const [enableButton, setenableButton] = useState(true);
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
  const renderDropdownItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setExpanded(false);
        setchoosebank(item.value);
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
          <Text style={style.title}>Bank Name</Text>
          <Text style={style.subtitle}>{item.value}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
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
            marginTop: responsiveWidth(38),
            marginStart: responsiveWidth(37),
            height: responsiveWidth(45),
            width: responsiveWidth(60),
            justifyContent: 'center',
            borderRadius: responsiveWidth(4),
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#FF8D69', '#FF3A33', '#FF3A33']}
            style={{
              height: responsiveWidth(52),
              width: responsiveWidth(60),
              justifyContent: 'center',
              backgroundColor: Colors.Black,
              borderRadius: responsiveWidth(4),
            }}>
            <View style={style.TriangleShapeCSS} />
            <Text style={[style.modalStringText, {marginTop: 0}]}>
              Info about loan
            </Text>
            <Text
              style={[
                style.modalStringText,
                {fontFamily: fontFamily.Poppins_Regular},
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
          </LinearGradient>
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
            marginStart: responsiveWidth(5),
            paddingTop: responsiveWidth(5),
          }}>
          <TouchableOpacity
            onPress={() => {
              setenableButton(false);
              setExpanded(true);
            }}>
            <View
              style={{
                height: responsiveWidth(12),
                width: responsiveWidth(83),
                backgroundColor: Colors.gray,
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: responsiveWidth(2),
                paddingStart: responsiveWidth(4),
                flexDirection: 'row',
              }}>
              <Text
                style={[
                  style.textInputStyle,
                  {
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: responsiveWidth(1),
                    color:
                      choosebank === '' || null
                        ? Colors.LineGray
                        : Colors.Black,
                  },
                ]}>
                {choosebank === '' || null ? 'Please select bank' : choosebank}
              </Text>
              <Image
                source={expanded ? Images.Up_Arrow : Images.Down_Arrow}
                style={style.downimageStyle}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
          {seterrorchoosebank != '' ? (
            <Text
              style={{
                fontFamily: fontFamily.Poppins_Regular,
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
          keyboardType={'numeric'}
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
            setenableButton(false);
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
              keyboardType={'numeric'}
              textInput={style.textInputStyle}
              errorStyle={{marginStart: responsiveWidth(2)}}
              placeholder={'Interest rate'}
              value={interest}
              onChangeText={interest => {
                seterrorinterest('');
                setinterest(interest);
                setenableButton(false);
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
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={
                !isFixed
                  ? ['#505868', '#0C1217', '#0C1217']
                  : [
                      Colors.TextInput_Background,
                      Colors.TextInput_Background,
                      Colors.TextInput_Background,
                    ]
              }
              style={style.switchStyle}>
              <Text
                style={[
                  style.text,
                  {
                    color: !isFixed ? Colors.White : Colors.Gray_7f,
                  },
                ]}
                onPress={() => {
                  setenableButton(false);
                  setisFixed(false);
                }}>
                Fixed
              </Text>
            </LinearGradient>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={
                isFixed
                  ? ['#505868', '#0C1217', '#0C1217']
                  : [
                      Colors.TextInput_Background,
                      Colors.TextInput_Background,
                      Colors.TextInput_Background,
                    ]
              }
              style={style.switchStyle}>
              <Text
                style={[
                  style.text,
                  {
                    color: isFixed ? Colors.White : Colors.Gray_7f,
                  },
                ]}
                onPress={() => {
                  setenableButton(false);
                  setisFixed(true);
                }}>
                Floating
              </Text>
            </LinearGradient>
            <View>
              <Text></Text>
            </View>
          </View>
        </View>
        <Slider
          thumbImage={'12'}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={Colors.Black}
          maximumTrackTintColor="#F3F4F6"
          thumbTintColor={Colors.Black}
          width="82%"
          style={{alignSelf: 'center', marginTop: responsiveWidth(8)}}
          thumbStyle={{
            height: responsiveWidth(8),
            width: responsiveWidth(11),
            borderRadius: responsiveWidth(5),
          }}
        />
        {/* {addMortage ? null : (
          <NetImageTextButton
            onPress={() => setaddMortage(true)}
            text={Strings.Addloan}
            image={Images.Plus_Arrow}
            textStyle={style.addtextstyle}
            imagestyle={style.addimageStyle}
            touchableStyle={style.addtouchbutton}
          />
        )} */}
      </View>
    );
  };
  const dropdowncall = () => {
    return (
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
              data={bankArray}
              renderItem={renderDropdownItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={[style.container, {backgroundColor: '#2F353F'}]}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {backgroundColor: '#2F353F'}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#505868', '#0C1217', '#0C1217']}
            style={{paddingBottom: responsiveWidth(5)}}>
            <Progress.Bar
              progress={0.32}
              width={Platform.OS === 'ios' ? 320 : 250}
              color={Colors.Orange}
              unfilledColor={Colors.Dark_Gray}
              style={{
                alignSelf: 'center',
                marginTop: responsiveWidth(10),
                height: responsiveWidth(1.5),
                borderColor: 'transparent',
              }}
            />
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
                style={{
                  marginTop: responsiveWidth(3),
                  marginStart: responsiveWidth(-8),
                }}
                onPress={() => setinfoModal(true)}>
                <Image
                  source={Images.Info_Icon}
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
          </LinearGradient>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              // marginTop: responsiveWidth(2),
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
            <TouchableOpacity
                onPress={() => navigation.goBack()} style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <NetButton
                onPress={() => checkValidation()}
                text={!enableButton ? Strings.Done : Strings.NoLoan}
                touchableStyle={!enableButton ? style.nextbutton1:style.nextbutton}
                textStyle={!enableButton ? style.nexttext1:style.nexttext}
              />
            </View>
            {addMortageCall()}
            {infoModalCall()}
            {dropdowncall()}
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    width: responsiveWidth(70),
    textAlign: 'center',
    color: Colors.Dark_Gray,
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Medium,
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
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(50),
    marginTop: responsiveHeight(2),
    color: Colors.White,
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.8),
    alignSelf: 'center',
    width: responsiveWidth(70),
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
    marginTop: responsiveWidth(20),
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
  },
  addtextstyle: {
    fontFamily: fontFamily.Poppins_Medium,
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
    backgroundColor: Colors.Gray_CC,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
    alignSelf: 'center',
    marginEnd: responsiveWidth(10),
  },
  nexttext: {
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  nextbutton1: {
    marginTop: responsiveWidth(5),
    backgroundColor: Colors.Black,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
    alignSelf: 'center',
    marginEnd: responsiveWidth(10),
  },
  nexttext1: {
    color: Colors.White,
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  textInputStyle: {
    borderRadius: responsiveWidth(2),
    marginTop: responsiveWidth(-2),
    fontFamily: fontFamily.Poppins_Regular,
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
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.6),
  },
  switchStyle: {
    width: '50%',
    height: '100%',
    borderRadius:
      Platform.OS === 'ios' ? responsiveWidth(4) : responsiveWidth(2),
    paddingTop: responsiveWidth(3.5),
    alignSelf: 'center',

    overflow: 'hidden',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000CC",
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
    marginStart: responsiveWidth(46),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FF3A33',
  },
  downimageStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
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
export default UnsecuredLoanScreen;
