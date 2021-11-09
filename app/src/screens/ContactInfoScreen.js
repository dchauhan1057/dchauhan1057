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

//------------------------------------------------Main Call-----------------------------------------------------------------------
const ContactInfoScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const [name, setname] = React.useState('');
  const [errorname, seterrorname] = React.useState('');
  const [birthday, setbirthday] = React.useState('');
  const [errorbirthday, seterrorbirthday] = React.useState('');
  const [email, setemail] = React.useState('');
  const [erroremail, seterroremail] = React.useState('');
  const [phoneNumber, setphoneNumberr] = React.useState('');
  const [errorphoneNumber, seterrorphoneNumber] = React.useState('');
  const [address, setaddress] = React.useState('');
  const [erroraddress, seterroraddress] = React.useState('');

  const [code, setcode] = useState('+123');
  const [search, setsearch] = useState('');
  const [errorsearch, seterrorsearch] = useState('');
  const [nationalID, setnationalID] = useState('');
  const [errornationalID, seterrornationalID] = useState('');
  const [expanded, setExpanded] = React.useState(false);
  const [infoModal, setinfoModal] = React.useState(false);
  const navigation = useNavigation();
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const checkValidation = () => {
    if (name === '') {
      seterrorname('Please enter your name');
    }
    if (birthday === '') {
      seterrorbirthday('Please enter your birthday');
    }
    if (phoneNumber === '') {
      seterrorphoneNumber('Please enter your phonenumber');
    }
    if (address === '') {
      seterroraddress('Please enter your address');
    }
    if (email === '') {
      seterroremail('Please enter your email');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  const renderItemData = ({item}) => (
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
  const logoutCall = () => {
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
            backgroundColor: '#000000CC',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignSelf: 'center',
              width: '80%',
              paddingTop: responsiveWidth(10),
              paddingBottom: responsiveWidth(5),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(4),
              backgroundColor: Colors.White,
            }}>
            <Text style={[style.titleStringText, {marginTop: 0}]}>
              Are your sure you want to delete account?
            </Text>
            <Text
              style={[
                style.modalStringText,
                {fontFamily: fontFamily.Poppins_Regular},
              ]}>
              Lorem ipsum is a common placeholder.
            </Text>
            <TouchableOpacity onPress={() => setinfoModal(false)}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#505868', '#0C1217', '#0C1217']}
                style={[style.gotitButton, {marginTop: responsiveWidth(5)}]}>
                <Text
                  style={[
                    style.modalStringText,
                    {color: Colors.White, marginTop: 0},
                  ]}>
                  Delete account
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setinfoModal(false)}
              style={style.gotitButton}>
              <Text
                style={[
                  style.modalStringText,
                  {color: Colors.Black, marginTop: 0},
                ]}>
                Cancle
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={style.container}>
          <View style={style.rowView}>
            <Text style={style.personalStringText}>Cancel</Text>
            <Text
              style={[
                style.personalStringText,
                {
                  width: '80%',
                  fontSize: responsiveFontSize(2.5),
                  color: Colors.Text_Black,
                  fontFamily: fontFamily.Poppins_Bold,
                },
              ]}>
              Contact Info
            </Text>
            <Text
              onPress={() => checkValidation()}
              style={style.personalStringText}>
              Save
            </Text>
          </View>
          <NetTextInput
            title={Strings.Fullname}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={errorname}
            value={name}
            onChangeText={name => {
              seterrorname('');
              setname(name);
            }}
            textStyle={{marginTop: responsiveWidth(2)}}
          />
          <NetTextInput
            title={Strings.Birthdate}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={errorbirthday}
            value={birthday}
            onChangeText={birthday => {
              seterrorbirthday('');
              setbirthday(birthday);
            }}
            textStyle={{marginTop: responsiveWidth(2)}}
          />
          <NetTextInput
            title={Strings.Email}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={erroremail}
            value={email}
            onChangeText={email => {
              seterroremail('');
              setemail(email);
            }}
            textStyle={{marginTop: responsiveWidth(2)}}
          />
          <Text style={style.numbertext}>Phone Number</Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#F6F5F3',
              marginStart: responsiveWidth(10),
              height: responsiveWidth(13),
              width: '80%',
              marginTop: responsiveWidth(2),
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
          </View>
          <NetTextInput
            title={Strings.Address}
            onChangeText={() => alert('Called')}
            textInput={style.textInputstyle}
            error={erroraddress}
            value={address}
            onChangeText={address => {
              seterroraddress('');
              setaddress(address);
            }}
            textStyle={{marginTop: responsiveWidth(2)}}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={() => setinfoModal(true)}>
            <Text
              style={[
                style.personalStringText,
                {
                  fontFamily: fontFamily.Poppins_Bold,
                  fontSize: responsiveFontSize(2),
                  color: Colors.Black,
                  position: 'absolute',
                  bottom: 0,
                  paddingBottom: responsiveWidth(5),
                },
              ]}>
              Delete Account
            </Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={expanded}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setExpanded(!expanded);
            }}>
            <View style={[style.centeredView, {justifyContent: 'flex-end'}]}>
              <TouchableOpacity
                onPress={() => setExpanded(!expanded)}
                style={style.modal1View}>
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
                <FlatList
                  style={{borderColor: 'red', borderWidth: 2}}
                  data={nationalID}
                  renderItem={renderItemData}
                  keyExtractor={item => item.id}
                />
              </TouchableOpacity>
            </View>
          </Modal>
          {logoutCall()}
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
    backgroundColor: Colors.White,
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.Gray_7f,
  },
  imagestyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    tintColor: Colors.Black,
    alignSelf: 'flex-end',
    margin: responsiveWidth(10),
  },
  rowView: {
    flexDirection: 'row',
    padding: responsiveWidth(4),
    marginTop: responsiveWidth(10),
  },
  textInputstyle: {
    width: responsiveWidth(80),
    borderRadius: responsiveWidth(3),
    marginTop: responsiveWidth(1),
    backgroundColor: '#F6F5F3',
    fontFamily: fontFamily.Poppins_Regular,
    color: Colors.Black,
    fontSize: responsiveFontSize(1.7),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000CC',
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
    backgroundColor: 'red',
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
    backgroundColor: 'red',
  },
  textMain: {
    fontSize: responsiveFontSize(2),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Bold,
  },
  numbertext: {
    fontSize: responsiveFontSize(1.6),
    marginStart: responsiveWidth(11),
    marginTop: responsiveWidth(2),
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_SemiBold,
  },
});
export default ContactInfoScreen;
