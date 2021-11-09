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
  FlatList,
  TouchableOpacity,
  Platform,
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
import {bankArray} from '../utils/Constant';
// Component
import {PublicGetUrl} from '../utils/Webservices';
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
import NetImageTextButton from '../component/NetImageTextButton';
import CustomAnimationProgress from '../component/CustomAnimationProgress';
import {LogDisplay} from '../utils/LogDisplay';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const MortgageScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [addSecurity, setaddSecurity] = React.useState(false);
  const [additionalSecurity, setadditionalSecurity] = React.useState(false);
  const [chooseFlat, setchooseFlat] = React.useState(false);
  const [chooseFlatArray, setchooseFlatArray] = React.useState([
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
    {address: 'Flat * 123', price_per_sqm: '12234', price: '123456'},
  ]);
  const [confirmMarket, setconfirmMarket] = React.useState(false);
  const [purpose, setpurpose] = React.useState(false);
  const [addMortage, setaddMortage] = React.useState(false);
  const [isFixed, setisFixed] = React.useState(false);
  const [value, setValue] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [addressdata, setaddressdata] = React.useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ]);
  const [amount, setamount] = React.useState('');
  const [interest, setinterest] = React.useState('');
  const [erroramount, seterroramount] = React.useState('');
  const [errorinterest, seterrorinterest] = React.useState('');
  const [searchAddress, setsearchAddress] = React.useState('');
  const [errorsearchAddress, seterrorsearchAddress] = React.useState('');
  const [choosebank, setchoosebank] = React.useState('');
  const [errorchoosebank, seterrorchoosebank] = React.useState('');
  const [errormarketvalue, seterrormarketvalue] = React.useState('');
  const [marketvalue, setmarketvalue] = React.useState('');

  const [search, setsearch] = useState('');
  const [errorsearch, seterrorsearch] = useState('');
  const [enableButton, setenableButton] = useState(true);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const checkValidation = () => {
    if (choosebank === '') {
      seterrorchoosebank('Please select an bank');
    }
    if (amount === '') {
      seterroramount('Please select an bank');
    } else if (interest === '') {
      seterrorinterest('Please select an bank');
    } else {
      // navigation.navigate('UnsecuredLoanScreen');
      setenableButton(false);
    }
  };
  //------------------------------------------------Render Call-----------------------------------------------------------------------
  const renderDropdownItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setExpanded(false);
        setchoosebank(item.value);
        seterrorchoosebank('');
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
                marginTop: responsiveWidth(0),
                marginBottom: responsiveWidth(6),
                marginStart: responsiveWidth(4),
                width: '78%',
              }}>
              {errorchoosebank}
            </Text>
          ) : null}
        </View>
        <NetTextInput
          textInput={[
            style.textInputStyle,
            {width: responsiveWidth(83), marginTop: responsiveWidth(-15)},
          ]}
          placeholder={'Outstanding loan amount'}
          value={amount}
          onChangeText={async amount => {
            seterroramount('');
            setamount(amount);
            setenableButton(false);
          }}
          keyboardType={'numeric'}
          error={erroramount}
          errorStyle={{marginStart: responsiveWidth(8)}}
          keyboardType={'numeric'}
        />
        <View
          style={{
            flexDirection: 'row',
            width: responsiveWidth(88),
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '50%',
              marginTop:
                errorinterest === ''
                  ? responsiveWidth(-4)
                  : responsiveWidth(-8),
            }}>
            <NetTextInput
              textInput={style.textInputStyle}
              placeholder={'Interest rate'}
              value={interest}
              onChangeText={interest => {
                seterrorinterest('');
                setinterest(interest);
                setenableButton(false);
              }}
              keyboardType={'numeric'}
              error={errorinterest}
              errorStyle={{marginStart: responsiveWidth(2)}}
            />
          </View>
          <View
            style={[
              style.switchView,
              {
                marginTop:
                  errorinterest === ''
                    ? responsiveWidth(3)
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
      </View>
    );
  };
  const addSecurityCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={addSecurity}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setaddSecurity(!addSecurity);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.personalText}>Add a security</Text>
            <Text
              style={[
                style.personalStringText,
                {
                  width: '75%',
                  fontFamily: fontFamily.Poppins_Regular,
                  textAlign: 'center',
                },
              ]}>
              Select property to be used as security and estimate market value.
            </Text>
            <NetTextInput
              textInput={[style.textInputStyle, {width: responsiveWidth(85)}]}
              placeholder={'Street name, building number'}
              onChangeText={async searchAddress => {
                setsearchAddress(searchAddress);
                setchooseFlat(true);
                // const response = await PublicGetUrl('search', searchAddress);
                // LogDisplay(
                //   '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.  ',
                //   JSON.stringify(response),
                // );
                // setaddressdata(response.data.result);
              }}
              error={errorsearchAddress}
            />
            <FlatList
              data={addressdata}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    );
  };
  const renderItem = ({item}) => (
    <View style={style.renderStyle}>
      <View style={{width: '20%', paddingStart: responsiveWidth(8)}}>
        <View style={style.grayroundView}>
          <Image
            resizeMode="contain"
            source={Images.Location_Icon}
            style={style.locationpinImage}></Image>
        </View>
      </View>
      <View style={style.locationtextView}>
        <View style={style.item}>
          <Text style={style.title}>Street name, 15</Text>
          <Text style={style.subtitle}>Cityname</Text>
        </View>
      </View>
    </View>
  );
  const additionalSecurityCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={additionalSecurity}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setadditionalSecurity(!additionalSecurity);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.personalText}>Add additional security</Text>
            <Text
              style={[
                style.personalStringText,
                {width: '90%', fontFamily: fontFamily.Poppins_Regular},
              ]}>
              {
                'Lorem ipsum is a placeholder text \ncommonly used to demonstrate the visual content.'
              }
            </Text>
            <View style={{width: '90%', marginTop: responsiveWidth(3)}}>
              <TouchableOpacity
                onPress={() => {
                  setenableButton(false);
                  setExpanded(true);
                }}>
                <View
                  style={{
                    height: responsiveWidth(12),
                    width: responsiveWidth(80),
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
                    {choosebank === '' || null
                      ? 'Please select bank'
                      : choosebank}
                  </Text>
                  <Image
                    source={expanded ? Images.Up_Arrow : Images.Down_Arrow}
                    style={style.downimageStyle}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
            </View>
            <NetTextInput
              textInput={[
                style.textInputStyle,
                {width: responsiveWidth(80), marginTop: responsiveWidth(-3)},
              ]}
              placeholder={'Value'}
              keyboardType={'numeric'}
              // onChangeText={() => alert('Called')}
              error={''}
            />
            <NetButton
              touchableStyle={[
                style.nextbutton,
                {marginTop: responsiveWidth(80)},
              ]}
              onPress={() => {
                setenableButton(true);
                setadditionalSecurity(!additionalSecurity);
                navigation.navigate("UnsecuredLoanScreen")
              }}
              text={Strings.Done}
              textStyle={style.nexttext}
            />
          </View>
        </View>
      </Modal>
    );
  };
  const chooseFlatCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={chooseFlat}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setchooseFlat(!chooseFlat);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.right_Icon}
                style={[
                  style.imageStyle,
                  {
                    tintColor: Colors.Black,
                    marginStart: responsiveWidth(-12),
                  },
                ]}
                resizeMode="contain"
              />
              <Text style={style.personalText}>Choose flat</Text>
            </View>
            <Text
              style={[
                style.personalStringText,
                {
                  width: '75%',
                  fontFamily: fontFamily.Poppins_Regular,
                  textAlign: 'center',
                },
              ]}>
              You will be able to adjust the market value in the next step.
            </Text>
            <FlatList
              data={chooseFlatArray}
              renderItem={chooseFlatRenderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    );
  };
  const chooseFlatRenderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setconfirmMarket(true);
        }}
        style={style.renderView}>
        <Text
          style={[
            style.personalStringText,
            {
              fontFamily: fontFamily.Poppins_Regular,
              marginTop: responsiveWidth(0.5),
              fontSize: responsiveFontSize(1.4),
              marginStart: responsiveWidth(2),
            },
          ]}>
          {item.address}
        </Text>
        <Text
          style={[
            style.personalStringText,
            {
              marginTop: responsiveWidth(0.5),
              fontSize: responsiveFontSize(1.6),
              fontFamily: fontFamily.Poppins_SemiBold,
              color: Colors.Black,
              marginStart: responsiveWidth(2),
            },
          ]}>
          {item.price_per_sqm}
        </Text>
        <Text
          style={[
            style.personalStringText,
            {
              fontFamily: fontFamily.Poppins_Regular,
              marginTop: responsiveWidth(0.5),
              fontSize: responsiveFontSize(1.4),
              marginStart: responsiveWidth(2),
            },
          ]}>
          {item.price}
        </Text>
      </TouchableOpacity>
    );
  };
  const confirmMarketCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={confirmMarket}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setconfirmMarket(!confirmMarket);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.right_Icon}
                style={[
                  style.imageStyle,
                  {
                    tintColor: Colors.Black,
                    marginStart: responsiveWidth(-12),
                  },
                ]}
                resizeMode="contain"
              />
              <Text style={style.personalText}>Confirm the market value</Text>
            </View>
            <Text
              style={[
                style.personalStringText,
                {
                  width: '75%',
                  fontFamily: fontFamily.Poppins_Regular,
                  textAlign: 'center',
                  marginTop: responsiveWidth(2),
                  marginBottom: responsiveWidth(6),
                },
              ]}>
              Don’t worry if it isnt exactly right - we will validste them with
              tour bank later anyway.
            </Text>
            <View style={style.renderView}>
              <Text
                style={[
                  style.personalStringText,
                  {
                    fontFamily: fontFamily.Poppins_Regular,
                    marginTop: responsiveWidth(0.5),
                    fontSize: responsiveFontSize(1.4),
                  },
                ]}>
                Flat • 50m2
              </Text>
              <NetTextInput
                error={errormarketvalue}
                textInput={[
                  style.textInputStyle,
                  {
                    marginStart: responsiveWidth(-7),
                    marginTop: responsiveWidth(-5),
                    backgroundColor: Colors.White,
                  },
                ]}
                errorStyle={{marginStart: responsiveWidth(0.5)}}
                placeholder={'156 000 000 NOK'}
                onChangeText={marketvalue => {
                  seterrormarketvalue('');
                  setmarketvalue(marketvalue);
                }}
                value={marketvalue}
                keyboardType={'numeric'}
              />
              <Text
                style={[
                  style.personalStringText,
                  {
                    fontFamily: fontFamily.Poppins_Regular,
                    marginTop: responsiveWidth(4),
                    fontSize: responsiveFontSize(1.4),
                  },
                ]}>
                Street name, 66
              </Text>
            </View>
            <NetButton
              touchableStyle={[
                style.nextbutton,
                {
                  backgroundColor: Colors.Black,
                  marginTop: responsiveWidth(40),
                },
              ]}
              onPress={() => {
                marketvalue === ''
                  ? seterrormarketvalue('Please enter value')
                  : setpurpose(true);
              }}
              text={Strings.Confirm}
              textStyle={[style.nexttext, {color: Colors.White}]}
            />
          </View>
        </View>
      </Modal>
    );
  };
  const purposeCall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={purpose}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setpurpose(!purpose);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={Images.right_Icon}
                style={[
                  style.imageStyle,
                  {
                    tintColor: Colors.Black,
                    marginStart: responsiveWidth(-12),
                  },
                ]}
                resizeMode="contain"
              />
              <Text style={style.personalText}>Purpose</Text>
            </View>
            <Text
              style={[
                style.personalStringText,
                {
                  width: '90%',
                  fontFamily: fontFamily.Poppins_Regular,
                  textAlign: 'center',
                },
              ]}>
              {
                'Lorem ipsum is a placeholder text \ncommonly used to demonstrate the visual content.'
              }
            </Text>
            <TouchableOpacity
              onPress={() => {
                setpurpose(false);
                setadditionalSecurity(true);
              }}>
              <View
                style={[
                  style.renderView,
                  {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  source={Images.share}
                  style={{
                    height: responsiveWidth(5),
                    width: responsiveWidth(5),
                    alignSelf: 'center',
                    tintColor: Colors.Orange,
                    marginEnd: responsiveWidth(5),
                  }}
                />
                <Text
                  style={[
                    style.personalStringText,
                    {
                      marginTop: 0,
                      color: Colors.Black,
                      fontFamily: fontFamily.Poppins_SemiBold,
                      width: responsiveWidth(70),
                    },
                  ]}>
                  I live here
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setpurpose(false);
                setadditionalSecurity(true);
              }}>
              <View
                style={[
                  style.renderView,
                  {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  source={Images.share}
                  style={{
                    height: responsiveWidth(5),
                    width: responsiveWidth(5),
                    alignSelf: 'center',
                    tintColor: Colors.Orange,
                    marginEnd: responsiveWidth(5),
                  }}
                />
                <Text
                  style={[
                    style.personalStringText,
                    {
                      marginTop: 0,
                      color: Colors.Black,
                      fontFamily: fontFamily.Poppins_SemiBold,
                      width: responsiveWidth(70),
                    },
                  ]}>
                  Holiday home
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setpurpose(false);
                setadditionalSecurity(true);
              }}>
              <View
                style={[
                  style.renderView,
                  {
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Image
                  source={Images.share}
                  style={{
                    height: responsiveWidth(5),
                    width: responsiveWidth(5),
                    alignSelf: 'center',
                    tintColor: Colors.Orange,
                    marginEnd: responsiveWidth(5),
                  }}
                />
                <Text
                  style={[
                    style.personalStringText,
                    {
                      marginTop: 0,
                      color: Colors.Black,
                      fontFamily: fontFamily.Poppins_SemiBold,
                      width: responsiveWidth(70),
                    },
                  ]}>
                  For income
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
              Choose Bank
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
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {backgroundColor: '#2F353F'}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#505868', '#0C1217', '#0C1217']}
            style={{padding: responsiveWidth(4), height: responsiveWidth(50)}}>
            <Progress.Bar
              progress={0.16}
              width={Platform.OS === 'ios' ? 320 : 250}
              color={Colors.Orange}
              unfilledColor={Colors.Dark_Gray}
              style={{
                alignSelf: 'center',
                marginTop: responsiveWidth(5),
                height: responsiveWidth(1.5),
                borderColor: 'transparent',
              }}
            />
            <Text style={[style.titleStringText]}>{Strings.Mortgage}</Text>
            <Text style={[style.personalStringText, {textAlign: 'center'}]}>
              {Strings.MortgageText}
            </Text>
          </LinearGradient>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              paddingTop: responsiveWidth(5),
              borderTopLeftRadius: responsiveWidth(5),
              borderTopRightRadius: responsiveWidth(5),
              flex: 1,
            }}>
            {switchCall()}
            {enableButton ? null : (
              <NetImageTextButton
                onPress={() => setaddSecurity(true)}
                text={Strings.Addloan}
                image={Images.Plus_Arrow}
                textStyle={style.addtextstyle}
                imagestyle={style.addimageStyle}
                touchableStyle={style.addtouchbutton}
              />
            )}
            <View style={style.totalView}>
              <Text style={style.totalStringText}>{Strings.Total}</Text>
              <Text style={[style.totalStringText, {fontWeight: '100'}]}>
                {'18. 000 mill.kr'}
              </Text>
            </View>
            <View style={style.bottomView}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <NetButton
                touchableStyle={
                  !enableButton ? style.nextbutton1 : style.nextbutton
                }
                textStyle={!enableButton ? style.nexttext1 : style.nexttext}
                onPress={() => checkValidation()}
                text={!enableButton ? Strings.Done : Strings.Next}
              />
            </View>
            {addSecurityCall()}
            {additionalSecurityCall()}
            {chooseFlatCall()}
            {confirmMarketCall()}
            {purposeCall()}
            {addMortageCall()}
            {dropdowncall()}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//------------------------------------------------styleheet Call-----------------------------------------------------------------------
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
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(2.2),
    alignSelf: 'center',
    width: responsiveWidth(70),
    textAlign: 'center',
    color: Colors.Black,
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.5),
    alignSelf: 'center',
    width: responsiveWidth(85),
    marginTop: responsiveHeight(5),
    fontWeight: '200',
    lineHeight: 24,
    color: Colors.greyText,
    letterSpacing: -0.15,
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
    textAlign: 'center',
    fontWeight: '600',
    lineHeight: 32,
    color: Colors.White,
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
    marginTop: responsiveWidth(25),
  },
  imageStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
  },
  downimageStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  nextbutton: {
    marginTop: responsiveWidth(5),
    backgroundColor: Colors.Gray_CC,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nextbutton1: {
    marginTop: responsiveWidth(5),
    backgroundColor: Colors.Black,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nexttext: {
    color: Colors.Gray_7f,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  nexttext1: {
    color: Colors.White,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  textInputStyle: {
    borderRadius: responsiveWidth(2),
    marginTop: responsiveWidth(-2),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
  },
  switchView: {
    flexDirection: 'row',
    backgroundColor: Colors.TextInput_Background,
    width: '45%',
    height: responsiveWidth(12),
    borderRadius:
      Platform.OS === 'ios' ? responsiveWidth(4) : responsiveWidth(2),
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
    backgroundColor: '#000000CC',
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
  render1View: {
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
  item: {
    marginStart: responsiveWidth(4),
  },
  title: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Poppins_Bold,
  },
  subtitle: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: fontFamily.Poppins_Regular,
  },
  renderStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: responsiveWidth(2),
    margin: responsiveWidth(1),
  },
  grayroundView: {
    backgroundColor: Colors.Gray_CC,
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    alignContent: 'center',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
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
  renderView: {
    width: '90%',
    backgroundColor: Colors.gray,
    borderRadius: responsiveWidth(3),
    padding: responsiveWidth(3),
    margin: responsiveWidth(3),
  },
});
export default MortgageScreen;
