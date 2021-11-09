import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  Platform,
  TouchableOpacity,
  Modal,
  FlatList,
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
import {memberArray, educationArray} from '../utils/Constant';
// Component
import Dropdown from '../component/Dropdown';
import NetButton from '../component/NetButton';

//------------------------------------------------Main Call-----------------------------------------------------------------------
const BadScoreScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  const [isFixed, setisFixed] = React.useState(false);
  const [value, setValue] = React.useState('');
  //------------------------------------------------Function Call-----------------------------------------------------------------------

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#505868', '#0C1217', '#0C1217']}
            style={{
              padding: responsiveWidth(5),
              flex: 1,
            }}>
            <View
              style={{height: responsiveWidth(110), justifyContent: 'center'}}>
              <Image
                resizeMode="contain"
                source={Images.badresult}
                style={{
                  width: '100%',
                  height: '100%',
                  alignSelf: 'center',
                }}></Image>
            </View>
            <Text style={style.personalText}>
              {'It looks like you are not having a totally fair deal'}
            </Text>
            <Text style={style.personalStringText}>
              {
                'We will engage with your bank to validate the information and renegotiate a fair deal or we will help you to move to a bank which offers you that.'
              }
            </Text>
            <NetButton
              onPress={() => navigation.navigate('SubscribeScreen')}
              text={Strings.Knowmore}
              touchableStyle={style.nextbutton}
              textStyle={style.nexttext}
            />
          </LinearGradient>
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
  personalText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.White,
    marginTop: responsiveWidth(8),
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.6),
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.White,
    marginTop: responsiveWidth(8),
  },
  nextbutton: {
    marginTop: responsiveWidth(18),
    marginEnd: responsiveWidth(10),
    backgroundColor: Colors.White,
    borderRadius: responsiveWidth(6),
    width: '90%',
    alignSelf: 'center',
  },
  nexttext: {
    color: Colors.Black,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
});
export default BadScoreScreen;
