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
const SplashScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimer();
  }, [setTimer]);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const setTimer = () => {
    setTimeout(() => {
      navigation.navigate('SliderScreen');
    }, 3000);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image
            source={Images.LogoWhite}
            style={styles.logoImg}
            resizeMode={'contain'}
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
    backgroundColor: Colors.Black,
  },
  logoImg: {
    height: responsiveWidth(15),
    width: responsiveWidth(40),
    alignSelf: 'center',
  },
});
export default SplashScreen;
