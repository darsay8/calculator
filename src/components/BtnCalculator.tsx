import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: ColorType;
  bgColor?: BackgroundType;
  width?: boolean;
}

type ColorType = 'white' | 'black';
type BackgroundType = 'gray' | 'darkGray' | 'orange';

const bgColors = {
  gray: '#A5A5A5',
  darkGray: '#333333',
  orange: '#FEA00A',
};

const BtnCalculator = ({
  text,
  color = 'white',
  bgColor = 'darkGray',
  width = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={[
          styles.btn,
          {backgroundColor: bgColors[bgColor], width: width ? 162 : 76},
        ]}>
        <Text style={[styles.btnText, {color}]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default BtnCalculator;

const styles = StyleSheet.create({
  btn: {
    width: 76,
    height: 76,
    // backgroundColor: '#696969',
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    fontSize: 40,
    color: '#F1F1F0',
    alignSelf: 'center',
  },
});
