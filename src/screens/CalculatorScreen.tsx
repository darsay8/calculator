import {Text, View} from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import {styles} from '../theme/appTheme';
const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {/* Result */}
        <View style={styles.resultGroup}>
          <Text style={styles.resultSmall}>1,500.00</Text>
          <Text style={styles.result}>1,500.00</Text>
        </View>
        {/* Buttons */}
        <View style={styles.btnGroup}>
          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="c" bgColor="gray" color="black" />
            <BtnCalculator text="+/-" bgColor="gray" color="black" />
            <BtnCalculator text="del" bgColor="gray" color="black" />
            <BtnCalculator text="÷" bgColor="orange" />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="7" />
            <BtnCalculator text="8" />
            <BtnCalculator text="9" />
            <BtnCalculator text="x" bgColor="orange" />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="4" />
            <BtnCalculator text="5" />
            <BtnCalculator text="6" />
            <BtnCalculator text="-" bgColor="orange" />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="1" />
            <BtnCalculator text="2" />
            <BtnCalculator text="3" />
            <BtnCalculator text="+" bgColor="orange" />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="0" width />
            <BtnCalculator text="." />
            <BtnCalculator text="=" bgColor="orange" />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CalculatorScreen;
