import {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import BtnCalculator from '../components/BtnCalculator';
import {styles} from '../theme/appTheme';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

const CalculatorScreen = () => {
  const [beforeNum, setBeforeNum] = useState('0');
  const [num, setNum] = useState('0');

  const lastOperation = useRef<Operators>();

  const cleanUp = () => {
    setNum('0');
    setBeforeNum('0');
  };

  const buildNum = (numText: string) => {
    //Dont accept two dots
    if (num.includes('.') && numText === '.') return;

    if (num.startsWith('0') || num.startsWith('-0')) {
      //Decimal dot
      if (numText === '.') {
        setNum(num + numText);

        //ev another zero, and there is a dot
      } else if (numText === '0' && num.includes('.')) {
        setNum(num + numText);

        //ev if different that zero and do not there is a dot
      } else if (numText !== '0' && !num.includes('.')) {
        setNum(numText);

        //Avoid 0000.0
      } else if (numText === '0' && !num.includes('.')) {
        setNum(num);
      }
    } else {
      setNum(num + numText);
    }
  };

  const posNeg = () => {
    if (num.includes('-')) {
      setNum(num.replace('-', ''));
    } else {
      setNum('-' + num);
    }
  };

  const delNum = () => {
    if ((num.includes('-') && num.length === 2) || num.length === 1) {
      setNum('0');
    } else {
      setNum(num => num.slice(0, -1));
    }
  };

  const changeBeforeNum = () => {
    if (num.endsWith('.')) {
      setBeforeNum(num.slice(0, -1));
    }
    setBeforeNum(num);
    setNum('0');
  };

  const btnDivide = () => {
    changeBeforeNum();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeBeforeNum();
    lastOperation.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeBeforeNum();
    lastOperation.current = Operators.subtract;
  };

  const btnAdd = () => {
    changeBeforeNum();
    lastOperation.current = Operators.add;
  };

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
            <BtnCalculator text="=" bgColor="orange" action={cleanUp} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default CalculatorScreen;
