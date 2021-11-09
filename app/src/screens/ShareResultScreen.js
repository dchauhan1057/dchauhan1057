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
import {childrensArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const ShareResultScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={styles.slide}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={Images.Close_Icon}
                style={{
                  height: responsiveWidth(5),
                  width: responsiveWidth(5),
                  alignSelf: 'flex-end',
                  marginStart: responsiveWidth(90),
                  marginTop: responsiveWidth(5),
                  marginEnd: responsiveWidth(5),
                }}
              />
            </TouchableOpacity>
            <Image
              style={{
                height: responsiveWidth(60),
                width: responsiveWidth(60),
                tintColor: Colors.Light_Gray,
                marginTop: responsiveWidth(10),
              }}
              source={Images.share}
              resizeMode={'contain'}
            />
            <Text style={styles.text}>Recommend us to your community</Text>
            <Text style={styles.textsmall}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual content.
            </Text>
          </View>
          <NetButton
            onPress={() => navigation.navigate('RequestAcceptScreen')}
            text={Strings.PostFacebook}
            touchableStyle={{
              width: responsiveWidth(80),
              backgroundColor: Colors.gray,
              marginTop: responsiveWidth(2),
            }}
            textStyle={{
              fontFamily: fontFamily.Poppins_Medium,
              fontSize: responsiveFontSize(1.8),
              color: Colors.Black,
              alignSelf: 'center',
            }}
          />
          <NetButton
            onPress={() => navigation.navigate('RequestAcceptScreen')}
            text={Strings.PostLinkedIn}
            touchableStyle={{
              width: responsiveWidth(80),
              backgroundColor: Colors.gray,
              marginTop: responsiveWidth(4),
            }}
            textStyle={{
              fontFamily: fontFamily.Poppins_Medium,
              fontSize: responsiveFontSize(1.8),
              color: Colors.Black,
              alignSelf: 'center',
            }}
          />
          <NetButton
            onPress={() => navigation.navigate('RequestAcceptScreen')}
            text={Strings.Postmessage}
            touchableStyle={{
              width: responsiveWidth(80),
              backgroundColor: Colors.Black,
              marginTop: responsiveWidth(4),
            }}
            textStyle={{
              fontFamily: fontFamily.Poppins_Medium,
              fontSize: responsiveFontSize(1.8),
              color: Colors.White,
              alignSelf: 'center',
            }}
          />
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
  slide: {
    // height: responsiveWidth(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
    marginBottom: responsiveWidth(10),
  },
  skipText: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Poppins_Medium,
  },
  text: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(3),
    fontFamily: fontFamily.Poppins_Bold,
    marginTop: responsiveWidth(10),
    width: responsiveWidth(70),
    textAlign: 'center',
  },
  bigtext: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(3),
    fontFamily: fontFamily.Poppins_Bold,
    marginTop: responsiveWidth(10),
  },
  textsmall: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Poppins_Regular,
    marginTop: responsiveWidth(5),
    width: responsiveWidth(90),
    textAlign: 'center',
  },
  imagestyle: {
    height: responsiveWidth(5),
    width: responsiveWidth(5),
    tintColor: Colors.LineGray,
  },
  backarrowstyle: {
    marginTop: responsiveWidth(25),
    marginStart: responsiveWidth(15),
  },
  rightarrowstyle: {
    marginTop: responsiveWidth(20),
    marginStart: responsiveWidth(25),
    backgroundColor: Colors.Black,
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    borderRadius: responsiveWidth(15) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ShareResultScreen;
