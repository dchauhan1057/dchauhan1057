import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
// Library
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import {Strings} from '../../res/strings/Strings';
import {fontFamily} from '../utils/fontFamily';
import {Colors} from '../../res/colors/Colors';
import {Images} from '../../res/ImageConstant/Images';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../utils/Size';
//------------------------------------------------Main Call-----------------------------------------------------------------------
const Dropdown = props => {
  //------------------------------------------------Variablw Call-----------------------------------------------------------------------
  const [data, setdata] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const [expanded, setExpanded] = React.useState(true);
  const [value, setValue] = React.useState(false);
  //------------------------------------------------Logical methods-----------------------------------------------------------------------
  /** Dropdown on off inputview */
  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };
  //------------------------------------------------Renturn Call-----------------------------------------------------------------------
  return (
    <View>
      <Text style={style.questionText}>{props.question}</Text>
      <DropDownPicker
        placeholder={props.placeholder}
        style={[style.dropDown, props.dropDown]}
        zIndexInverse={1000}
        items={props.data}
        defaultIndex={0}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        value={props.value}
        open={props.expanded}
        setOpen={setExpanded}
        setValue={setValue}
        setItems={setSchemas}
        onClose={() => toggleExpand()}
      />
    </View>
  );
};
//------------------------------------------------StyleSheet Call-----------------------------------------------------------------------
const style = StyleSheet.create({
  questionText: {
    fontFamily: fontFamily.Poppins_Bold,
    fontSize: responsiveFontSize(1.7),
    marginStart: responsiveWidth(4.9),
    marginTop: responsiveHeight(2),
  },
  dropDown: {
    marginTop: responsiveHeight(2),
    width: '90%',
    height: responsiveHeight(6),
    borderWidth: 0.6,
    borderColor: Colors.Dropdown_Border,
    alignSelf: 'center',
    borderRadius: 0,
  },
});
export default Dropdown;
