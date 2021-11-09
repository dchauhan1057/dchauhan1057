import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
// Constant files
import {fontFamily} from '../utils/fontFamily';
import {Colors} from '../../res/colors/Colors';
import {Images} from '../../res/ImageConstant/Images';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../utils/Size';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const ServiceScreen = props => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------

  //------------------------------------------------Function Call-----------------------------------------------------------------------
  const renderView = (image, text) => {
    return (
      <View style={styles.renderview}>
        <Image source={image} resizeMode="contain" style={styles.renderImage} />
        <Text style={styles.renderText}>{text}</Text>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.userText}>Services</Text>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          colors={['#505868', '#0C1217', '#0C1217']}
          style={{
            height: responsiveWidth(65),
            width: '90%',
            alignSelf: 'center',
            borderRadius: responsiveWidth(4),
            marginTop: responsiveWidth(10),
          }}>
          <Image source={Images.Subtract} style={styles.menustyle} />
          <Text style={styles.negoText}>Negotiotiable</Text>
          <Text style={styles.otherText}>
            Looks like you are overpaying a bit. We can negotiate your loans.
          </Text>
        </LinearGradient>
        <Text
          style={[
            styles.negoText,
            {
              color: Colors.Black,
              alignSelf: 'flex-start',
              marginStart: responsiveWidth(5),
            },
          ]}>
          Our Services
        </Text>
        <View style={styles.rowView}>
          {renderView(Images.score, 'Score')}
          {renderView(Images.renegotiate, 'Renegotiate')}
          {renderView(Images.getintouch, 'Get in touch')}
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
    backgroundColor: Colors.White,
  },
  userText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    color: Colors.Black,
    alignSelf: 'flex-start',
    marginTop: responsiveWidth(6),
    marginStart: responsiveWidth(4),
  },
  negoText: {
    fontFamily: fontFamily.Poppins_SemiBold,
    fontSize: responsiveFontSize(2),
    color: Colors.White,
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
  otherText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.4),
    color: Colors.White,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: responsiveWidth(2),
    width: '80%',
  },
  menustyle: {
    height: responsiveWidth(26),
    width: '60%',
    alignSelf: 'center',
    marginTop: responsiveWidth(4),
  },
  renderView: {
    backgroundColor: '#F3F4F6',
    height: responsiveWidth(25),
    width: responsiveWidth(25),
    borderRadius: responsiveWidth(3),
  },
  renderImage: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    alignSelf: 'center',
    marginTop: responsiveWidth(5),
  },
  renderText: {
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.6),
    color: Colors.Black,
    alignSelf: 'center',
    marginTop: responsiveWidth(4),
  },
  rowView: {flexDirection: 'row', justifyContent: 'space-around'},
});
export default ServiceScreen;
