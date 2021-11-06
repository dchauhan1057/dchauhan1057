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
const SliderScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const nextClick = () => {
    if (index === 0) {
      // setIndex(1);
      navigation.navigate('WelcomeScreen');
    }
    if (index === 1) {
      setIndex(2);
    }
    if (index === 2) {
      setIndex(3);
    }
    if (index === 3) {
      navigation.navigate('IntroductionScreen');
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
              height={'90%'}
              loop={false}
              index={index}
              showsButtons={false}
              containerStyle={{}}>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(45),
                    width: responsiveWidth(45),
                    tintColor: Colors.Light_Gray,
                    marginTop: responsiveWidth(40),
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Project Information</Text>
                <Text style={styles.textsmall}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual content.
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(45),
                    width: responsiveWidth(45),
                    tintColor: Colors.Light_Gray,
                    marginTop: responsiveWidth(40),
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Project Information</Text>
                <Text style={styles.textsmall}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual content.
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(45),
                    width: responsiveWidth(45),
                    tintColor: Colors.Light_Gray,
                    marginTop: responsiveWidth(40),
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Project Information</Text>
                <Text style={styles.textsmall}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual content.
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(45),
                    width: responsiveWidth(45),
                    tintColor: Colors.Light_Gray,
                    marginTop: responsiveWidth(40),
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>Project Information</Text>
                <Text style={styles.textsmall}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual content.
                </Text>
              </View>
            </Swiper>
          </View>
          <View style={{height: '25%', flexDirection: 'row'}}>
            {/* <NetButton
              onPress={nextClick}
              text={Strings.Next}
              touchableStyle={{width: '80%', backgroundColor: Colors.Dark_Gray}}
            /> */}
            <TouchableOpacity
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
            </TouchableOpacity>
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
  slide: {
    height: responsiveWidth(160),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White,
  },
  skipText: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Roboto_Medium,
  },
  text: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.Roboto_Bold,
    marginTop: responsiveWidth(30),
  },
  textsmall: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.Roboto_Regular,
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
export default SliderScreen;
