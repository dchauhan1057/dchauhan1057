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
  TouchableOpacity,
  Switch,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
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
import {childrensArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const BankBorrowerScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(false);
  //------------------------------------------------Function Call-----------------------------------------------------------------------

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.headerView}>
              <Text style={styles.personalText}>LOGO</Text>
            </View>
            <View style={styles.headerView}>
              <Text style={[styles.personalText, {alignSelf: 'flex-end'}]}>
                MENU
              </Text>
            </View>
          </View>
          <Text style={styles.personalStringText}>
            {Strings.BankBorrowString}
          </Text>
          <Text style={styles.personalStringText1}>
            {Strings.BankBorrowDesc}
          </Text>
          <Text style={styles.personalStringText1}>Email adress</Text>
          <View style={styles.textinputView}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{width: '10%', marginTop: responsiveWidth(1)}}>
              <Image
                source={Images.Question}
                style={styles.downArraowimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.personalStringText2}>Bank ID information</Text>
          <Text style={styles.personalStringText1}>Phone number</Text>
          <View style={styles.textinputView}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{width: '10%', marginTop: responsiveWidth(1)}}>
              <Image
                source={Images.Question}
                style={styles.downArraowimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.personalStringText1}>Date of Birth</Text>
          <View style={styles.textinputView}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{width: '10%', marginTop: responsiveWidth(1)}}>
              <Image
                source={Images.Question}
                style={styles.downArraowimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '20%'}}>
              <TouchableOpacity
                onPress={() => setIndex(!index)}
                style={{
                  borderColor: Colors.BorderGray,
                  borderWidth: responsiveWidth(0.2),
                  height: responsiveWidth(6),
                  width: responsiveWidth(6),
                  justifyContent: 'center',
                  marginStart: responsiveWidth(10),
                  marginTop: responsiveWidth(4),
                }}>
                {index ? (
                  <Image
                    source={Images.Right_Arrow}
                    style={styles.tickarrow}
                    resizeMode="contain"
                  />
                ) : (
                  <Text />
                )}
              </TouchableOpacity>
            </View>
            <View style={{width: '80%'}}>
              <Text style={styles.personalStringText1}>
                Do you have a co-borrower?
              </Text>
            </View>
          </View>

          <Text style={styles.personalStringText1}>
            If you have a co-borrower we also need ther automatisation using
            BankID to . They will be sent a SMS and a link for automatisation
          </Text>
          <Text style={styles.personalStringText1}>
            Your Co - Borrower Email adress
          </Text>
          <View style={styles.textinputView}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{width: '10%', marginTop: responsiveWidth(1)}}>
              <Image
                source={Images.Question}
                style={styles.downArraowimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.personalStringText1}>
            Your Co - Borrower Phone number
          </Text>
          <View style={styles.textinputView}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{width: '10%', marginTop: responsiveWidth(1)}}>
              <Image
                source={Images.Question}
                style={styles.downArraowimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.personalStringText1}>
            Your Co - Borrower Date of Birth
          </Text>

          <View style={styles.textinputView}>
            <View style={{width: '90%'}}>
              <TextInput style={styles.textInput} />
            </View>
            <View style={{width: '10%', marginTop: responsiveWidth(1)}}>
              <Image
                source={Images.Question}
                style={styles.downArraowimageStyle}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={[styles.personalStringText1, {textAlign: 'center'}]}>
            I accept the terms of mortgage club
          </Text>
          <View style={styles.bottomView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.roundView}>
              <Image
                source={Images.Right_Arrow}
                style={styles.imageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <NetButton
              onPress={() => navigation.navigate('RequestScreen')}
              text={Strings.NextStep}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
  },
  headerView: {
    width: '50%',
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
    marginTop: responsiveWidth(2),
    padding: responsiveWidth(3),
  },
  personalText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.7),
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(2),
    alignSelf: 'center',
    width: responsiveWidth(65),
    color: Colors.Dark_Gray,
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },
  personalStringText2: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(2),
    width: responsiveWidth(65),
    color: Colors.Dark_Gray,
    marginTop: responsiveHeight(1),
    marginStart: responsiveWidth(10),
  },
  personalStringText1: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'center',
    width: responsiveWidth(80),
    color: Colors.Dark_Gray,
    marginTop: responsiveWidth(5),
  },
  downArraowimageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.Black,
    marginTop: responsiveHeight(1.5),
  },
  tickarrow: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
  },
  textinputView: {
    flexDirection: 'row',
    marginTop: responsiveWidth(3),
    width: '80%',
    marginStart: responsiveWidth(10),
  },
  textInput: {
    backgroundColor: Colors.TextInput_Background,
    borderRadius: responsiveWidth(5),
    width: '95%',
  },
  bottomView: {
    flexDirection: 'row',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.Dark_Gray,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(8),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.White,
  },
});
export default BankBorrowerScreen;
