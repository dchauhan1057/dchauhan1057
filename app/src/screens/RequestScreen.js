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
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';
import NetTextInput from '../component/NetTextInput';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const RequestScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimer();
  }, [setTimer]);
  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const setTimer = () => {
    setTimeout(() => {
      navigation.navigate('MortgageScreen');
    }, 3000);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoanScreen')}
            style={{flex: 0.3}}>
            <Image
              source={Images.Image_Icon}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.titleStringText}>{Strings.Request}</Text>
          <Text style={styles.personalStringText}>{Strings.coborrower}</Text>
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
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'center',
    width: responsiveWidth(70),
    color: Colors.Dark_Gray,
    marginTop: responsiveHeight(1),
    textAlign: 'center',
  },
  titleStringText: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(5),
    paddingStart: responsiveWidth(3),
    color: Colors.Dark_Gray,
    width: '90%',
    alignSelf: 'center',
  },
  imageStyle: {
    height: responsiveWidth(30),
    width: responsiveWidth(50),
    tintColor: Colors.Light_Gray,
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
});
export default RequestScreen;
