import {Text, View} from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import {useCalculator} from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const {
    num,
    beforeNum,
    cleanUp,
    buildNum,
    posNeg,
    delNum,
    btnAdd,
    btnDivide,
    btnMultiply,
    btnSubtract,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        {/* Result */}
        <View style={styles.resultGroup}>
          {beforeNum !== '0' && (
            <Text style={styles.resultSmall}>{beforeNum}</Text>
          )}
          <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
            {num}
          </Text>
        </View>
        {/* Buttons */}
        <View style={styles.btnGroup}>
          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator
              text="c"
              bgColor="gray"
              color="black"
              action={cleanUp}
            />
            <BtnCalculator
              text="+/-"
              bgColor="gray"
              color="black"
              action={posNeg}
            />
            <BtnCalculator
              text="del"
              bgColor="gray"
              color="black"
              action={delNum}
            />
            <BtnCalculator text="÷" bgColor="orange" action={btnDivide} />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="7" action={buildNum} />
            <BtnCalculator text="8" action={buildNum} />
            <BtnCalculator text="9" action={buildNum} />
            <BtnCalculator text="x" bgColor="orange" action={btnMultiply} />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="4" action={buildNum} />
            <BtnCalculator text="5" action={buildNum} />
            <BtnCalculator text="6" action={buildNum} />
            <BtnCalculator text="-" bgColor="orange" action={btnSubtract} />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="1" action={buildNum} />
            <BtnCalculator text="2" action={buildNum} />
            <BtnCalculator text="3" action={buildNum} />
            <BtnCalculator text="+" bgColor="orange" action={btnAdd} />
          </View>

          {/* Row */}
          <View style={styles.btnContainer}>
            <BtnCalculator text="0" width action={buildNum} />
            <BtnCalculator text="." action={buildNum} />
            <BtnCalculator text="=" bgColor="orange" action={calculate} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CalculatorScreen;
