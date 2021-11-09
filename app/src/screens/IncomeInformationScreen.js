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
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';
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
  const [isbonusFixed, setbonusisFixed] = React.useState(false);
  const [income, setincome] = React.useState('');
  const [bonus, setbonus] = React.useState('');
  const [enableButton, setenableButton] = useState(true);
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
            {backgroundColor: !isActive ? Colors.White : Colors.Black},
          ]}>
          <Image
            source={Images.checkmark}
            style={[
              style.imageStyle,
              {
                tintColor: !isActive ? Colors.White : Colors.White,
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
          {switchview1()}
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
            keyboardType={'numeric'}
            textInput={style.textInputStyle}
            placeholder={'Sum'}
            value={income}
            onChangeText={income => {
              setenableButton(false);
              setincome(income);
            }}
            error={''}
          />
        </View>
        <View style={[style.switchView]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              !isFixed
                ? ['#505868', '#0C1217', '#0C1217']
                : [Colors.White, Colors.White, Colors.White]
            }
            style={style.switchStyle}>
            <Text
              style={[
                style.text,
                {
                  color: !isFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}
              onPress={() => {
                setenableButton(false);
                setisFixed(false);
              }}>
              Monthly
            </Text>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              isFixed
                ? ['#505868', '#0C1217', '#0C1217']
                : [Colors.White, Colors.White, Colors.White]
            }
            style={style.switchStyle}>
            <Text
              style={[
                style.text,
                {
                  color: isFixed ? Colors.White : Colors.Black,
                },
              ]}
              onPress={() => {
                setenableButton(false);
                setisFixed(true);
              }}>
              Annually
            </Text>
          </LinearGradient>
          <View>
            <Text></Text>
          </View>
        </View>
      </View>
    );
  };
  const switchview1 = () => {
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
            keyboardType={'numeric'}
            textInput={style.textInputStyle}
            placeholder={'Sum'}
            value={bonus}
            onChangeText={bonus => {
              setenableButton(false);
              setbonus(bonus);
            }}
            error={''}
          />
        </View>
        <View style={style.switchView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              !isbonusFixed
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => {
                setenableButton(false);
                setbonusisFixed(false);
              }}
              style={[
                style.text,
                {
                  color: setbonusisFixed ? Colors.White : Colors.Gray_7f,
                },
              ]}>
              Monthly
            </Text>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={
              isbonusFixed
                ? ['#505868', '#0C1217', '#0C1217']
                : [
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                    Colors.TextInput_Background,
                  ]
            }
            style={style.switchStyle}>
            <Text
              onPress={() => {
                setenableButton(false);
                setbonusisFixed(true);
              }}
              style={[
                style.text,
                {
                  color: setbonusisFixed ? Colors.White : Colors.Black,
                },
              ]}>
              Annually
            </Text>
          </LinearGradient>

          <View></View>
        </View>
      </View>
    );
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {backgroundColor: '#2F353F'}]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            colors={['#505868', '#0C1217', '#0C1217']}
            style={{paddingBottom: responsiveWidth(5)}}>
            <Progress.Bar
              progress={0.48}
              width={Platform.OS === 'ios' ? 320 : 250}
              color={Colors.Orange}
              unfilledColor={Colors.Dark_Gray}
              style={{
                alignSelf: 'center',
                marginTop: responsiveWidth(10),
                height: responsiveWidth(1.5),
                borderColor: 'transparent',
              }}
            />
            <Text style={style.titleStringText}>{Strings.IncomeTitle}</Text>
            <Text style={style.textDetailStringText}>
              {Strings.TellIncomeDetail}
            </Text>
          </LinearGradient>
          <View
            style={{
              backgroundColor: Colors.White,
              width: '99%',
              marginStart: responsiveWidth(0.6),
              // marginTop: responsiveWidth(2),
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
            <TouchableOpacity
                onPress={() => navigation.goBack()} style={style.roundView}>
                <Image
                  source={Images.Right_Arrow}
                  style={style.imageStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <NetButton
                onPress={() => navigation.navigate('PersonalInfoScreen')}
                text={!enableButton ? Strings.Done : Strings.NoEarning}
                touchableStyle={!enableButton ? style.nextbutton1:style.nextbutton}
                textStyle={!enableButton ? style.nexttext1:style.nexttext}
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(2.5),
    alignSelf: 'center',
  },
  personalStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
    color: Colors.Dark_Gray,
  },
  titleStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(3),
    alignSelf: 'center',
    width: responsiveWidth(80),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.White,
  },
  textStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.8),
    width: responsiveWidth(50),
    marginTop: responsiveHeight(5),
    color: Colors.Text_Black,
  },
  textInputStyle: {
    borderRadius: responsiveWidth(2),
    marginTop: responsiveWidth(-1),
    backgroundColor: Colors.White,
    color:Colors.Black
  },
  switchView: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    width: '50%',
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    marginTop: responsiveWidth(8),
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.6),
  },
  switchStyle: {
    width: '47%',
    height: '80%',
    borderRadius: responsiveWidth(2),
    justifyContent: 'center',
    alignSelf: 'center',
    overflow: 'hidden',
    margin: responsiveHeight(0.2),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Dark_Gray,
  },
  textDetailStringText: {
    fontFamily: fontFamily.Poppins_Medium,
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
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.7),
    alignSelf: 'center',
    width: responsiveWidth(60),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    color: Colors.Text_Black,
  },
  iagreeText: {
    fontFamily: fontFamily.Poppins_Bold,
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
    borderRadius: responsiveWidth(2),
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
    fontFamily: fontFamily.Poppins_Regular,
    marginBottom: 20,
  },
  header: {
    backgroundColor: Colors.White,
    padding: 10,
    flexDirection: 'row',
    marginTop: responsiveWidth(5),
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(3),
  },
  headerText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Poppins_Regular,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    marginTop: responsiveWidth(3),
    marginBottom: responsiveWidth(3),
    borderRadius: responsiveWidth(4),
  },
  active: {
    backgroundColor: Colors.gray,
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(3),
  },
  inactive: {
    backgroundColor: Colors.gray,
    borderColor: Colors.Border_Gray,
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(3),
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
    fontFamily: fontFamily.Poppins_Regular,
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
    fontFamily: fontFamily.Poppins_Regular,
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
    fontFamily: fontFamily.Poppins_Regular,
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
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
  nextbutton1: {
    marginTop: responsiveWidth(5),
    backgroundColor: Colors.Black,
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(65),
  },
  nexttext1: {
    color: Colors.White,
    fontFamily: fontFamily.Poppins_Regular,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
  },
});
export default IncomeInformationScreen;
