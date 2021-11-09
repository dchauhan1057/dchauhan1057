import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
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
import {memberArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const WorkinformationScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [isFixed, setisFixed] = React.useState(false);
  const [issectorFixed, setissectorFixed] = React.useState(false);
  const [value, setValue] = React.useState(true);
  const [expanded, setExpanded] = React.useState(false);
  const [worktype, setworktype] = React.useState('');
  const [errorvalue, seterrorvalue] = React.useState('');
  //------------------------------------------------Function Call-----------------------------------------------------------------------

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------

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
              onPress={() => setisFixed(false)}
              style={[
                style.text,
                {
                  color: !isFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Private
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
              onPress={() => setisFixed(true)}
              style={[
                style.text,
                {
                  color: isFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Public
            </Text>
          </LinearGradient>
        </View>
      </View>
    );
  };
  const switchview1 = () => {
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
              !issectorFixed
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => setissectorFixed(false)}
              style={[
                style.text,
                {
                  color: !issectorFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Private
            </Text>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              issectorFixed
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => setissectorFixed(true)}
              style={[
                style.text,
                {
                  color: issectorFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Public
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
              Choose your work type
            </Text>
            <FlatList
              data={memberArray}
              renderItem={renderDropdownItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    );
  };
  const renderDropdownItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        setExpanded(false);
        setworktype(item.value);
      }}
      style={style.renderStyle}>
      <View style={style.locationtextView}>
        <Text style={style.subtitle}>{item.value}</Text>
      </View>
    </TouchableOpacity>
  );
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
              progress={0.8}
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
            <Text style={style.personalText}>{Strings.WorkInformation}</Text>
            <Text
              style={[
                style.personalStringText,
                {color: Colors.White, textAlign: 'center'},
              ]}>
              {Strings.WorkInformationString}
            </Text>
          </LinearGradient>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              borderTopLeftRadius: responsiveWidth(10),
              borderTopRightRadius: responsiveWidth(10),
              flex: 1,
              padding: responsiveWidth(6),
            }}>
            <Text style={[style.personalStringTextBold]}>Work Type</Text>
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
                          worktype === '' || null
                            ? Colors.LineGray
                            : Colors.Black,
                      },
                    ]}>
                    {worktype === '' || null
                      ? 'Please select work type'
                      : worktype}
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
            <Text style={[style.personalStringTextBold]}>Sector</Text>
            {switchview()}
            <Text style={style.personalStringTextBold}>Time</Text>
            {switchview1()}
            <Text style={style.personalStringTextBold}>How long</Text>
            <Slider
              thumbImage={'12'}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor={Colors.Black}
              maximumTrackTintColor="#F3F4F6"
              thumbTintColor={Colors.Black}
              width="92%"
              style={{alignSelf: 'center'}}
              thumbStyle={{
                height: responsiveWidth(8),
                width: responsiveWidth(11),
                borderRadius: responsiveWidth(5),
              }}
            />

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
                onPress={() => navigation.navigate('InfoAboutName')}
                text={Strings.Skip}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </View>
          </View>
          {dropdowncall()}
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    color: Colors.White,
    marginTop: responsiveWidth(8),
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
  },
  personalStringTextBold: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    // tintColor: Colors.White,
  },
  bottomView: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    justifyContent: 'center',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.gray,
    marginStart: responsiveWidth(10),
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
    width: '96%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
  switchStyle: {
    width: '48%',
    height: '88%',
    borderRadius: responsiveWidth(2),
    paddingTop: responsiveWidth(3),
    alignSelf: 'center',
    overflow: 'hidden',
    margin: responsiveWidth(0.5),
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.6),
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
    backgroundColor: '#000000CC',
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
export default WorkinformationScreen;
