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
  educationArray,
} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const PersonalInfoScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [isFixed, setisFixed] = React.useState(2);
  const [value, setValue] = React.useState(true);
  const [value1, setValue1] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [expanded1, setExpanded1] = React.useState(false);
  const [maritial, setmaritial] = React.useState('');
  const [educationlevel, seteducationlevel] = React.useState('');
  const [membership, setmembership] = React.useState('');
  const [childern, setchildern] = React.useState('');
  const [car, setcar] = React.useState('');
  const [errorvalue, seterrorvalue] = React.useState('');
  const [errorvalue1, seterrorvalue1] = React.useState('');
  const [search, setsearch] = useState('');
  const [errorsearch, seterrorsearch] = useState('');
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(false);
    setExpanded1(false);
    setValue(value);
    setValue1(value1);
  };
  const toggleExpand1 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded1(false);
    setValue1(value1);
  };
  const checkValidation = () => {
    if (value === '') {
      seterrorvalue('Please select  education level');
    } else if (value1 === '') {
      seterrorvalue1('Please select  bank');
    } else {
      navigation.navigate('WorkinformationScreen');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  const renderDropdownItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setExpanded(false);
        seteducationlevel(item.value);
      }}
      style={style.renderStyle}>
      <View style={style.locationtextView}>
        <Text style={style.subtitle}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderDropdownMemberItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setExpanded1(false);
        setmembership(item.value);
      }}
      style={style.renderStyle}>
      <View style={style.locationtextView}>
        <Text style={style.subtitle}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
  const switchview = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(88),
          alignSelf: 'center',
          marginStart: responsiveWidth(8),
          marginTop: responsiveWidth(-6),
        }}>
        <View style={style.switchView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              isFixed === 0
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => setisFixed(0)}
              style={[
                style.text,
                {
                  color: isFixed === 0 ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Married
            </Text>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              isFixed === 1
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => setisFixed(1)}
              style={[
                style.text,
                {
                  color: isFixed === 1 ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Have partner
            </Text>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              isFixed === 2
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => setisFixed(2)}
              style={[
                style.text,
                {
                  color: isFixed === 2 ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Single
            </Text>
          </LinearGradient>
        </View>
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
              Choose your education
            </Text>
            <FlatList
              data={educationArray}
              renderItem={renderDropdownItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    );
  };
  const dropdownmembercall = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={expanded1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setExpanded1(!expanded1);
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
              Choose your membership
            </Text>
            <FlatList
              data={memberArray}
              renderItem={renderDropdownMemberItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {backgroundColor: '#2F353F'}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#505868', '#0C1217', '#0C1217']}
            style={{paddingBottom: responsiveWidth(5)}}>
            <Progress.Bar
              progress={0.64}
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
            <Text style={style.personalText}>
              {Strings.PersonalInformation}
            </Text>
            <Text
              style={[
                style.personalStringText,
                {color: Colors.White, alignSelf: 'center', textAlign: 'center'},
              ]}>
              {Strings.PersonalString}
            </Text>
          </LinearGradient>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              // marginTop: responsiveWidth(4),
              borderTopLeftRadius: responsiveWidth(10),
              borderTopRightRadius: responsiveWidth(10),
              flex: 1,
              padding: responsiveWidth(6),
            }}>
            <Text style={style.personalStringTextBold}>Marital Status</Text>
            {switchview()}
            <Text style={style.personalStringText}>Eduction</Text>
            <View
              style={{
                width: '90%',
                marginStart: responsiveWidth(4),
                paddingTop: responsiveWidth(1),
              }}>
              <TouchableOpacity onPress={() => setExpanded(true)}>
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
                          educationlevel === '' || null
                            ? Colors.LineGray
                            : Colors.Black,
                      },
                    ]}>
                    {educationlevel === '' || null
                      ? 'Please select education level'
                      : educationlevel}
                  </Text>
                  <Image
                    source={expanded ? Images.Up_Arrow : Images.Down_Arrow}
                    style={style.downimageStyle}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              {errorvalue != '' ? (
                <Text
                  style={{
                    fontFamily: fontFamily.Poppins_Regular,
                    fontSize: responsiveFontSize(1.5),
                    color: Colors.Red,
                    marginTop: responsiveWidth(-6),
                    marginBottom: responsiveWidth(6),
                    width: '78%',
                  }}>
                  {errorvalue}
                </Text>
              ) : null}
            </View>
            <Text style={style.personalStringText}>Membership</Text>
            <View
              style={{
                width: '90%',
                marginStart: responsiveWidth(4),
                paddingTop: responsiveWidth(1),
              }}>
              <TouchableOpacity onPress={() => setExpanded1(true)}>
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
                          membership === '' || null
                            ? Colors.LineGray
                            : Colors.Black,
                      },
                    ]}>
                    {membership === '' || null
                      ? 'Please select membership'
                      : membership}
                  </Text>
                  <Image
                    source={expanded1 ? Images.Up_Arrow : Images.Down_Arrow}
                    style={style.downimageStyle}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              {errorvalue1 != '' ? (
                <Text
                  style={{
                    fontFamily: fontFamily.Poppins_Regular,
                    fontSize: responsiveFontSize(1.5),
                    color: Colors.Red,
                    marginTop: responsiveWidth(-6),
                    marginBottom: responsiveWidth(6),
                    width: '78%',
                  }}>
                  {errorvalue1}
                </Text>
              ) : null}
            </View>
            <Text style={style.personalStringTextBold}>
              How many children under 18 year in the household?
            </Text>
            <Slider
              thumbImage={'12'}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={Colors.Black}
              maximumTrackTintColor="#F3F4F6"
              thumbTintColor={Colors.Black}
              width="90%"
              style={{alignSelf: 'center', marginTop: responsiveWidth(1)}}
              thumbStyle={{
                height: responsiveWidth(8),
                width: responsiveWidth(11),
                borderRadius: responsiveWidth(5),
              }}
            />
            <Text style={style.personalStringTextBold}>
              How many cars in the household?
            </Text>
            <Slider
              thumbImage={'12'}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={Colors.Black}
              maximumTrackTintColor="#F3F4F6"
              thumbTintColor={Colors.Black}
              width="90%"
              style={{alignSelf: 'center', marginTop: responsiveWidth(1)}}
              thumbStyle={{
                height: responsiveWidth(8),
                width: responsiveWidth(11),
                borderRadius: responsiveWidth(5),
              }}
            />
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
                text={Strings.Skip}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </View>
          </View>
          {dropdowncall()}
          {dropdownmembercall()}
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
    marginBottom: responsiveHeight(5),
  },
  personalText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    color: Colors.White,
    marginTop: responsiveWidth(8),
  },
  textInputStyle: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.5),
    alignSelf: 'center',
    color: Colors.Black,
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
  },
  personalStringTextBold: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.Black,
  },
  bottomView: {
    flexDirection: 'row',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.gray,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(10),
  },
  nextbutton: {
    marginTop: responsiveWidth(18),
    backgroundColor: Colors.gray,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nexttext: {
    color: Colors.Gray_7f,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  switchView: {
    flexDirection: 'row',
    backgroundColor: Colors.TextInput_Background,
    width: '94%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
    // overflow:'hidden'
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.6),
  },
  switchStyle: {
    width: '32%',
    height: '80%',
    borderRadius: responsiveWidth(2),
    paddingTop: responsiveWidth(3),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  modal1View: {
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
    justifyContent: 'flex-start',
    padding: responsiveWidth(1),
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
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000000CC",
  },
  downimageStyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: responsiveFontSize(1.4),
    fontFamily: fontFamily.Poppins_Regular,
    textAlign: 'left',
  },
});
export default PersonalInfoScreen;
