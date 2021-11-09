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
    price: '16 000 kr',
  },
  {
    title: 'Self - employment income',
    price: '16 000 kr',
  },
  {
    title: 'Interest, dividends, capital gains',
    price: '16 000 kr',
  },
  {
    title: 'Rental income',
    price: '16 000 kr',
  },
  {
    title: 'Child support',
    price: '16 000 kr',
  },
  {
    title: 'Others',
    price: '16 000 kr',
  },
  {
    title: 'I don’t currently earn money',
    price: '16 000 kr',
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
        <Image
          source={Images.Right_Arrow}
          style={style.imageStyle}
          resizeMode="contain"
        />
        <Text
          style={[
            style.headerText,
            {width: '70%', textAlign: 'left', marginStart: responsiveWidth(4)},
          ]}>
          {section.title}
        </Text>
        <Text style={style.headerText}>{section.price}</Text>
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
        <View style={style.blueLineView}>
          <View style={style.blueLine} />
        </View>
        <View style={{width: '90%'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '60%'}}>
              <NetTextInput
                title={Strings.Baseemploymentincome}
                onChangeText={() => alert('Called')}
              />
            </View>
            <View style={{width: '40%'}}>
              <Dropdown
                placeholder={'Per year'}
                data={childrensArray}
                dropDown={style.dropdown}
              />
            </View>
          </View>
          <Text style={style.textView}>{Strings.AmountBeforeTax}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: '60%'}}>
              <NetTextInput
                title={Strings.Bonuscommission}
                onChangeText={() => alert('Called')}
              />
            </View>
            <View style={{width: '40%'}}>
              <Dropdown
                placeholder={'Per year'}
                data={childrensArray}
                dropDown={style.dropdown}
              />
            </View>
          </View>
          <Text style={style.textView}>{Strings.BonusText}</Text>
        </View>
      </Animatable.View>
    );
  };

  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={[style.container, {padding: responsiveWidth(4)}]}>
          <View style={style.headerView}>
            <Text style={style.personalStringText}>LOGO</Text>
          </View>
          <Text style={style.titleStringText}>{Strings.IncomeTitle}</Text>
          <Text style={style.textStringText}>{Strings.TellIncome}</Text>
          <Text style={style.textDetailStringText}>
            {Strings.TellIncomeDetail}
          </Text>
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
          <View style={style.agreeViewStyle}>
            <View style={style.roundStyle}>
              <View style={style.roundBlue} />
            </View>
            <Text style={style.iagreeText}>{Strings.IAgree}</Text>
          </View>
          <View style={style.bottomView}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={style.roundView}>
              <Image
                source={Images.Right_Arrow}
                style={style.imageStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <NetButton
              onPress={() => navigation.navigate('IncomeInformationScreen')}
              text={Strings.Confirmagree}
            />
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
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.White,
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
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.Dark_Gray,
  },
  textStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.8),
    alignSelf: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(5),
    textAlign: 'center',
    color: Colors.Text_Black,
  },
  textDetailStringText: {
    fontFamily: fontFamily.Poppins_Medium,
    fontSize: responsiveFontSize(1.5),
    alignSelf: 'center',
    width: responsiveWidth(70),
    marginTop: responsiveHeight(1),
    textAlign: 'center',
    color: Colors.Text_Black,
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
    borderRadius: responsiveWidth(4),
  },
  bottomView: {
    flexDirection: 'row',
  },
  roundView: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10) / 2,
    justifyContent: 'center',
    backgroundColor: Colors.Dark_Gray,
    marginStart: responsiveWidth(4),
    marginTop: responsiveHeight(8),
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
    backgroundColor: Colors.Light_Gray,
    padding: 10,
    flexDirection: 'row',
    marginTop: responsiveWidth(5),
    borderColor: Colors.Border_Light_Gray,
    borderRadius: responsiveWidth(5),
  },
  headerText: {
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
    fontFamily: fontFamily.Poppins_Regular,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  active: {
    backgroundColor: Colors.Light_Gray,
    borderColor: Colors.Border_Light_Gray,
    borderRadius: responsiveWidth(5),
  },
  inactive: {
    backgroundColor: Colors.Light_Gray,
    borderColor: Colors.Border_Light_Gray,
    borderRadius: responsiveWidth(5),
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: Colors.Light_Gray,
    padding: 10,
    borderColor: Colors.Border_Light_Gray,
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
    fontSize: responsiveFontSize(1.4),
    color: Colors.Text_Black,
    width: '89%',
    marginStart: responsiveWidth(5),
    marginTop: responsiveHeight(3),
  },
});
export default IncomeInformationScreen;
