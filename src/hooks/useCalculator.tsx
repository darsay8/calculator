import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
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

  const calculate = () => {
    if (beforeNum === '0') return;

    const num1 = Number(num);
    const num2 = Number(beforeNum);

    switch (lastOperation.current) {
      case Operators.add:
        setNum(`${num1 + num2}`);
        break;

      case Operators.subtract:
        setNum(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNum(`${num1 * num2}`);
        break;

      case Operators.divide:
        num1 !== 0 ? setNum(`${num2 / num1}`) : setNum('Error');
        break;
    }

    setBeforeNum('0');
  };

  return {
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
  };
};
