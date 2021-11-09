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
const InfoSlideScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const nextClick = () => {
    if (index === 0) {
      setIndex(1);
    }
    if (index === 1) {
      setIndex(2);
    }
    if (index === 2) {
      setIndex(3);
    }
    if (index === 3) {
      navigation.navigate('ThankyouScreen');
    }
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View
            style={{
              height: '5%',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={nextClick}
              style={{flexDirection: 'row'}}>
              <Text style={styles.skipText}>{Strings.Skip}</Text>
              <Image
                style={{
                  height: responsiveWidth(3),
                  width: responsiveWidth(3),
                  marginTop: responsiveWidth(1),
                  marginStart: responsiveWidth(2),
                }}
                source={Images.Left_Arrow}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: '50%',
              backgroundColor: Colors.TextInput_Background,
            }}>
            <Swiper height={200} loop={false} index={index} containerStyle={{}}>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(20),
                    width: responsiveWidth(20),
                    tintColor: Colors.Light_Gray,
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>You are a more complex case</Text>
                <Text style={styles.otherText}>
                  in this version we don’t support cases like yours, but if you
                  join we will continue to monitor and aim to support you as
                  soon as we can
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(20),
                    width: responsiveWidth(20),
                    tintColor: Colors.Light_Gray,
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>You are a more complex case</Text>
                <Text style={styles.otherText}>
                  in this version we don’t support cases like yours, but if you
                  join we will continue to monitor and aim to support you as
                  soon as we can
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(20),
                    width: responsiveWidth(20),
                    tintColor: Colors.Light_Gray,
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>You are a more complex case</Text>
                <Text style={styles.otherText}>
                  in this version we don’t support cases like yours, but if you
                  join we will continue to monitor and aim to support you as
                  soon as we can
                </Text>
              </View>
              <View style={styles.slide}>
                <Image
                  style={{
                    height: responsiveWidth(20),
                    width: responsiveWidth(20),
                    tintColor: Colors.Light_Gray,
                  }}
                  source={Images.Image_Icon}
                  resizeMode={'contain'}
                />
                <Text style={styles.text}>You are a more complex case</Text>
                <Text style={styles.otherText}>
                  in this version we don’t support cases like yours, but if you
                  join we will continue to monitor and aim to support you as
                  soon as we can
                </Text>
              </View>
            </Swiper>
          </View>
          <View style={{height: '45%'}}>
            <NetButton
              onPress={nextClick}
              text={Strings.Next}
              touchableStyle={{width: '80%', backgroundColor: Colors.Dark_Gray}}
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
  slide: {
    height: responsiveWidth(80),
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: Colors.TextInput_Background,
  },
  skipText: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Poppins_Medium,
  },
  otherText: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(1.6),
    fontFamily: fontFamily.Poppins_Medium,
    width: '75%',
    marginTop: responsiveWidth(4),
  },
  text: {
    color: Colors.Text_Black,
    fontSize: responsiveFontSize(4),
    fontFamily: fontFamily.Poppins_Bold,
    marginTop: responsiveWidth(10),
    width: '75%',
  },
});
export default InfoSlideScreen;
