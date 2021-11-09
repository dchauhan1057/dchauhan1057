import React, {useState, useEffect} from 'react';
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
import {PublicGetUrl} from '../utils/Webservices';
import {childrensArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
import {LogDisplay} from '../utils/LogDisplay';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const SliderScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  //------------------------------------------------UseEffect Call-----------------------------------------------------------------------
  useEffect(async () => {
    const response = await PublicGetUrl(
      'search',
      'Stor-Sandvika 1 9664 SANDØYBOTN',
    );
    LogDisplay(
      '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.  ',
      JSON.stringify(response),
    );
  }, []);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const nextClick = () => {
    if (index === 0) {
      // setIndex(1);
      navigation.navigate('WelcomeToApp');
    }
    if (index === 1) {
      setIndex(2);
    }
    if (index === 2) {
      setIndex(3);
    }
    if (index === 3) {
      navigation.navigate('WelcomeToApp');
    }
  };
  const previousClick = () => {
    if (index === 0) {
      console.log('first screen');
    }
    if (index === 1) {
      setIndex(0);
    }
    if (index === 2) {
      setIndex(1);
    }
    if (index === 3) {
      setIndex(2);
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View
            style={{
              height: '75%',
              backgroundColor: Colors.White,
            }}>
            <Swiper
              activeDotColor={Colors.White}
              dotColor={Colors.Gray_7f}
              height={'90%'}
              loop={false}
              index={index}
              showsButtons={false}
              containerStyle={{}}>
              <View style={styles.slide}>
                <Image
                  source={Images.LogoWhite}
                  style={styles.logoImg}
                  resizeMode={'contain'}
                />
                <Image
                  style={{
                    height: responsiveWidth(55),
                    width: '100%',
                    marginTop: responsiveWidth(20),
                  }}
                  source={Images.slider1}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>
                  Most people pay their bank too much
                </Text>
                <Text style={styles.textsmall}>
                  Clinsj will negotiate a fair deal with your current banking
                  partner. Or we find you another bank.
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  source={Images.LogoWhite}
                  style={styles.logoImg}
                  resizeMode={'contain'}
                />
                <Image
                  style={{
                    height: responsiveWidth(55),
                    width: '100%',
                    marginTop: responsiveWidth(20),
                  }}
                  source={Images.slider2}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Toghether we are stronger!</Text>
                <Text style={styles.textsmall}>
                  With yours and other members mandate, we work for you and you
                  only. We do not get a commission from any banks or anyone
                  else.
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  source={Images.LogoWhite}
                  style={styles.logoImg}
                  resizeMode={'contain'}
                />
                <Image
                  style={{
                    height: responsiveWidth(55),
                    width: '100%',
                    marginTop: responsiveWidth(20),
                  }}
                  source={Images.slider3}
                  resizeMode={'contain'}
                />
                <Text style={[styles.text, {marginTop: responsiveWidth(18)}]}>
                  The market moves... but we are on watch
                </Text>
                <Text
                  style={[styles.textsmall, {marginTop: responsiveWidth(2)}]}>
                  As long as their is an opportunity for a better rate, we
                  continue to negotiate... Again... again... and again!
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  source={Images.LogoWhite}
                  style={styles.logoImg}
                  resizeMode={'contain'}
                />
                <Image
                  style={{
                    height: responsiveWidth(55),
                    width: '100%',
                    marginTop: responsiveWidth(20),
                  }}
                  source={Images.slider4}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Free to join!</Text>
                <Text style={styles.textsmall}>
                  However, if we save you money there is a fee of NOK 99,- pr.
                  month for a 12 month period. After that you can cancel
                  whenever you wish.
                </Text>
              </View>
            </Swiper>
          </View>
          <View
            style={{
              height: '25%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <NetButton
              onPress={() => navigation.navigate('LoginScreen')}
              text={'Log in'}
              touchableStyle={{
                width: responsiveWidth(40),
                backgroundColor: Colors.Light_Black,
              }}
              textStyle={{
                color: Colors.White,
                fontFamily: fontFamily.Poppins_Bold,
                fontSize: responsiveFontSize(2),
              }}
            />
            <NetButton
              onPress={() => navigation.navigate('WelcomeToApp')}
              text={'Sign up'}
              touchableStyle={{
                width: responsiveWidth(40),
                backgroundColor: Colors.White,
                marginEnd: responsiveWidth(8),
              }}
              textStyle={{
                color: Colors.BlackText,
                fontFamily: fontFamily.Poppins_Bold,
                fontSize: responsiveFontSize(2),
              }}
            />
            {/* <TouchableOpacity
              onPress={previousClick}
              style={styles.backarrowstyle}>
              {index === 0 ? (
                <Text></Text>
              ) : (
                <Image source={Images.Right_Arrow} style={styles.imagestyle} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={nextClick}
              style={styles.rightarrowstyle}>
              <Image source={Images.Left_Arrow} style={styles.imagestyle} />
            </TouchableOpacity> */}
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
    backgroundColor: Colors.Black,
  },
  slide: {
    height: responsiveWidth(160),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Black,
  },
  skipText: {
    color: Colors.White,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Poppins_Medium,
  },
  text: {
    color: Colors.White,
    fontSize: responsiveFontSize(2.2),
    fontFamily: fontFamily.Poppins_SemiBold,
    marginTop: responsiveWidth(20),
    width: '70%',
    textAlign: 'center',
  },
  bigtext: {
    color: Colors.White,
    fontSize: responsiveFontSize(3),
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: fontFamily.Poppins_SemiBold,
    marginTop: responsiveWidth(0),
  },
  textsmall: {
    color: Colors.greyText,
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Poppins_Regular,
    fontWeight: '400',
    marginTop: responsiveWidth(5),
    width: responsiveWidth(70),
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: -0.15,
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
  logoImg: {
    height: responsiveWidth(10),
    width: responsiveWidth(20),
    alignSelf: 'center',
  },
});
export default SliderScreen;
