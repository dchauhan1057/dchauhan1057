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
const NegotiableScreen = ({props, route}) => {
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
          <Image
            source={Images.Happy_Icon}
            style={{
              height: responsiveWidth(30),
              width: responsiveWidth(30),
              alignSelf: 'center',
              marginTop: responsiveWidth(15),
            }}
          />
          <Text style={style.personalText}>{Strings.Negotiotiable}</Text>
          <Text style={style.personalStringText}>
            {Strings.NegotiotiableString}
          </Text>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#505868', '#0C1217', '#0C1217']}
            style={{
              marginTop: responsiveWidth(5),
              borderTopLeftRadius: responsiveWidth(5),
              borderTopRightRadius: responsiveWidth(5),
              flex: 1,
            }}>
            <View
              style={{
                paddingStart: responsiveWidth(5),
                paddingEnd: responsiveWidth(5),
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[style.personalTextWhite, {width: '90%'}]}>
                  {'Your Equity level'}
                </Text>
                <Text style={style.personalTextWhite}>{'30%'}</Text>
              </View>
              <Progress.Bar
                progress={0.3}
                width={Platform.OS === 'ios' ? 320 : 360}
                color={Colors.Orange}
                unfilledColor={Colors.White}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: responsiveWidth(5),
                  height: responsiveWidth(1.5),
                  borderColor: 'transparent',
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={[style.personalTextWhite, {width: '90%'}]}>
                  {'Income vs Loan amount'}
                </Text>
                <Text style={style.personalTextWhite}>{'50%'}</Text>
              </View>
              <Progress.Bar
                progress={0.5}
                width={Platform.OS === 'ios' ? 320 : 360}
                color={Colors.Orange}
                unfilledColor={Colors.White}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: responsiveWidth(5),
                  height: responsiveWidth(1.5),
                  borderColor: 'transparent',
                }}
              />
              <View style={{flexDirection: 'row'}}>
                <Text style={[style.personalTextWhite, {width: '90%'}]}>
                  {'How competitive is your current rate?'}
                </Text>
                <Text style={style.personalTextWhite}>{'80%'}</Text>
              </View>
              <Progress.Bar
                progress={0.8}
                width={Platform.OS === 'ios' ? 320 : 360}
                color={Colors.Orange}
                unfilledColor={Colors.White}
                style={{
                  alignSelf: 'flex-start',
                  marginTop: responsiveWidth(5),
                  height: responsiveWidth(1.5),
                  borderColor: 'transparent',
                }}
              />
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              colors={['#FF8D69', '#FF3A33', '#FF3A33']}
              style={{
                marginTop: responsiveWidth(5),
                borderTopLeftRadius: responsiveWidth(5),
                borderTopRightRadius: responsiveWidth(5),
                flex: 1,
                paddingStart: responsiveWidth(5),
                paddingEnd: responsiveWidth(5),
              }}>
              <Text style={style.personalTextWhiteBold}>
                {'Get to know our next steps to/n renegotiate your loans'}
              </Text>
              <NetButton
                onPress={() => navigation.navigate('GoodScoreScreen')}
                text={Strings.Knowmore}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </LinearGradient>
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
    color: Colors.Black,
    marginTop: responsiveWidth(8),
  },
  personalTextWhite: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.6),
    textAlign: 'left',
    color: Colors.White,
    marginTop: responsiveWidth(8),
  },
  personalTextWhiteBold: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
    color: Colors.White,
    marginTop: responsiveWidth(8),
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.7),
    color: Colors.Black,
    alignSelf: 'center',
    textAlign: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
  },
  nextbutton: {
    marginTop: responsiveWidth(8),
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
export default NegotiableScreen;
