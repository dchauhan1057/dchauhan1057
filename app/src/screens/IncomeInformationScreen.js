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
import NetImageTextButton from '../component/NetImageTextButton';

// import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

// import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

// import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';

// Dummy content to show
// You can also use dynamic data by calling web service
const CONTENT = [
  {
    title: 'Salary/ Pension',
  },
  {
    title: 'Self - employment income',
  },
  {
    title: 'Interest, dividends, capital gains',
  },
  {
    title: 'Rental income',
  },
  {
    title: 'Child support',
  },
  {
    title: 'Others',
  },
];

//------------------------------------------------Main Call-----------------------------------------------------------------------
const IncomeInformationScreen = ({props, route}) => {
  //------------------------------------------------Variable Call-----------------------------------------------------------------------
  const navigation = useNavigation();
  // Default active selector
  const [activeSections, setActiveSections] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);
  const [isFixed, setisFixed] = React.useState(false);

  const toggleExpanded = () => {
    // Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = sections => {
    // Setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };
  //------------------------------------------------Render Call-----------------------------------------------------------------------
  const renderHeader = (section, _, isActive) => {
    // Accordion header view
    return (
      <Animatable.View
        duration={400}
        style={[style.header, isActive ? style.active : style.inactive]}
        transition="backgroundColor">
        <TouchableOpacity
          style={[
            style.round,
            {backgroundColor: !isActive ? '#F6F5F3' : Colors.Black},
          ]}>
          <Image
            source={Images.Right_Arrow}
            style={[
              style.imageStyle,
              {
                tintColor: !isActive ? '#F6F5F3' : Colors.White,
                height: responsiveWidth(3),
                width: responsiveWidth(3),
              },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={[
            style.headerText,
            {width: '70%', textAlign: 'left', marginStart: responsiveWidth(4)},
          ]}>
          {section.title}
        </Text>
        {/* <Text style={style.headerText}>{section.price}</Text> */}
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    // Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[style.content]}
        transition="backgroundColor">
        <View style={{width: '90%'}}>
          <Text style={[style.textStringText, {marginTop: responsiveWidth(2)}]}>
            {Strings.Baseemploymentincome}
          </Text>
          {switchview()}
          <Text style={style.textStringText}>{Strings.Bonuscommission}</Text>
          {switchview()}
          <Text style={style.textView}>{Strings.BonusText}</Text>
        </View>
      </Animatable.View>
    );
  };
  const switchview = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: responsiveWidth(88),
          alignSelf: 'center',
          marginStart: responsiveWidth(8),
          marginTop: responsiveWidth(-4),
        }}>
        <View style={{width: '50%'}}>
          <NetTextInput
            textInput={style.textInputStyle}
            placeholder={'Sum'}
            onChangeText={() => alert('Called')}
            error={''}
            />
        </View>
        <View style={style.switchView}>
          <Text
            onPress={() => setisFixed(false)}
            style={[
              style.switchStyle,
              {
                backgroundColor: !isFixed
                ? Colors.Black
                : Colors.TextInput_Background,
                color: !isFixed ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Monthly
          </Text>
          <Text
            onPress={() => setisFixed(true)}
            style={[
              style.switchStyle,
              {
                backgroundColor: isFixed
                ? Colors.Black
                : Colors.TextInput_Background,
                color: isFixed ? Colors.White : Colors.Gray_7f,
              },
            ]}>
            Annually
          </Text>
          <View></View>
        </View>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container]}>
          <Text style={style.titleStringText}>{Strings.IncomeTitle}</Text>
          <Text style={style.textDetailStringText}>      
            {Strings.TellIncomeDetail}
          </Text>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              marginTop: responsiveWidth(2),
              borderTopLeftRadius: responsiveWidth(10),
              borderTopRightRadius: responsiveWidth(10),
              flex: 1,
              padding: responsiveWidth(4),
            }}>
            {/*Code for Accordion/Expandable List starts here*/}
            <Accordion
              activeSections={activeSections}
              // For any default active section
              sections={CONTENT}
              // Title and content of accordion
              touchableComponent={TouchableOpacity}
              // Which type of touchable component you want
              // It can be the following Touchables
              // TouchableHighlight, TouchableNativeFeedback
              // TouchableOpacity , TouchableWithoutFeedback
              expandMultiple={multipleSelect}
              // If you want to expand multiple at a time
              renderHeader={renderHeader}
              // Header Component(View) to render
              renderContent={renderContent}
              // Content Component(View) to render
              duration={400}
              // Duration for Collapse and expand
              onChange={setSections}
              // Setting the state of active sections
            />
            <View style={style.totalView}>
              <Text style={style.totalStringText}>{Strings.Total}</Text>
              <Text style={[style.totalStringText, {fontWeight: '100'}]}>
                {'18. 000 mill.kr'}
              </Text>
            </View>
            <View style={style.bottomView}>
              <View style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </View>
              <NetButton
                onPress={() => navigation.navigate('PersonalInfoScreen')}
                text={Strings.NoEarning}
                touchableStyle={style.nextbutton}
                textStyle={style.nexttext}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
//------------------------------------------------styleheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.Black,
  },
  headerView: {
    justifyContent: 'center',
    marginBottom: responsiveHeight(5),
  },
  personalText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
  },
  personalStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
  },
  titleStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.White,
  },
  textStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(50),
    marginTop: responsiveHeight(5),
    color: Colors.Text_Black,
  },
  textInputStyle: {
    borderRadius: responsiveWidth(2),
    marginTop: responsiveWidth(-1),
  },
  switchView: {
    flexDirection: 'row',
    backgroundColor: Colors.TextInput_Background,
    width: '45%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
  },
  switchStyle: {
    width: '50%',
    height: '100%',
    borderRadius: responsiveWidth(2),
    paddingTop: responsiveWidth(3.5),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.6),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Dark_Gray,
  },
  textDetailStringText: {
    fontFamily: fontFamily.Roboto_Medium,
    fontSize: responsiveFontSize(1.5),
    alignSelf: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(1),
    textAlign: 'center',
    color: Colors.White,
  },
  totalView: {
    flexDirection: 'row',
    width: '100%',
    paddingStart: responsiveWidth(5),
  },
  totalStringText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    color: Colors.Text_Black,
  },
  iagreeText: {
    fontFamily: fontFamily.Roboto_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    alignItems: 'center',
    width: responsiveWidth(70),
    color: Colors.Black,
    marginStart: responsiveWidth(4),
  },
  imageStyle: {
    height: responsiveWidth(4),
    width: responsiveWidth(4),
    alignSelf: 'center',
    tintColor: Colors.Black,
  },
  round: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(6) / 2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flexDirection: 'row',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.Gray_CC,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(3),
  },
  agreeViewStyle: {
    marginTop: responsiveHeight(5),
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
    width: '92%',
    flexDirection: 'row',
    height: responsiveWidth(9),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  roundStyle: {
    height: responsiveWidth(6),
    width: responsiveWidth(6),
    borderRadius: responsiveWidth(6) / 2,
    borderColor: Colors.BorderGray,
    borderWidth: responsiveWidth(0.3),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  roundBlue: {
    height: responsiveWidth(3),
    width: responsiveWidth(3),
    borderRadius: responsiveWidth(3) / 2,
    backgroundColor: Colors.Ocean_Blue,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Roboto_Regular,
    marginBottom: 20,
  },
  header: {
    backgroundColor: Colors.White,
    padding: 10,
    flexDirection: 'row',
    marginTop: responsiveWidth(5),
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
  },
  headerText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Roboto_Regular,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  active: {
    backgroundColor: Colors.White,
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
  },
  inactive: {
    backgroundColor: Colors.White,
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: Colors.White,
    padding: 10,
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(5),
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Roboto_Regular,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Roboto_Regular,
    marginRight: 8,
  },
  blueLineView: {width: '8%', justifyContent: 'center', alignSelf: 'center'},
  blueLine: {
    height: '90%',
    width: responsiveWidth(1.5),
    backgroundColor: Colors.Light_Ocean_Blue,
    alignSelf: 'center',
  },
  dropDown: {
    marginTop: responsiveHeight(2.5),
    width: '90%',
    height: responsiveHeight(6),
    borderWidth: 0.6,
    borderColor: Colors.Dropdown_Border,
    borderRadius: 0,
  },
  textView: {
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.6),
    color: Colors.Text_Black,
    width: '100%',
    marginStart: responsiveWidth(2),
    marginTop: responsiveHeight(3),
  },
  nextbutton: {
    marginTop: responsiveWidth(5),
    backgroundColor: Colors.Gray_CC,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nexttext: {
    color: Colors.Gray_7f,
    fontFamily: fontFamily.Roboto_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
});
export default IncomeInformationScreen;
