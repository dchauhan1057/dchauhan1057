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
import {childrensArray} from '../utils/Constant';
import {getApi, postApi} from '../utils/Webservices';
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
    getApiCall();
    postApiCall();
  }, [setTimer, postApiCall, getApiCall]);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const getApiCall = async () => {
    var data = await getApi('get/8ee0ba1a-384f-11ec-9b8a-bef94447f54a');
    alert(JSON.stringify(data.data.data));
  };
  const postApiCall = () => {
    var data = {
      email: 'sushruth.g@iorbit-tech.com',
      nationalId: '23455567890',
      phone: '+919916833351',
    };
    postApi('create', data);
  };
  const setTimer = () => {
    setTimeout(() => {
      navigation.navigate('SliderScreen');
    }, 3000);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#505868', '#0C1217', '#0C1217']}
          style={styles.container}>
          <Image
            source={Images.LogoWhite}
            style={styles.logoImg}
            resizeMode={'contain'}
          />
        </LinearGradient>
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
