import React, {useState} from "react";
import {Dimensions, View} from "react-native";
import {Button, Display} from "../../components";

require("../../lib/swisscalc/swisscalc.lib.format.js");
require("../../lib/swisscalc/swisscalc.lib.operator.js");
require("../../lib/swisscalc/swisscalc.lib.operatorCache.js");
require("../../lib/swisscalc/swisscalc.lib.shuntingYard.js");
require("../../lib/swisscalc/swisscalc.display.numericDisplay");
require("../../lib/swisscalc/swisscalc.display.memoryDisplay");
require("../../lib/swisscalc/swisscalc.calc.calculator.js");

const oc = global.swisscalc.lib.operatorCache;
const calc = new global.swisscalc.calc.calculator();


const {
    container,
    displayContainer,
    buttonRow,
    landscapeButtonRow,
    buttonContainer,
} = styles;

const CalculatorScreen = () => {
    const [value, setValue] = useState("0");
    const [orientation, setOrientation] = useState("portrait");

    Dimensions.addEventListener("change", () => {
        const {width, height} = Dimensions.get("screen");
        width > height ? setOrientation("landscape") : setOrientation("portrait");
        console.log('Orientation', orientation)
    });

    const onDigitPress = (digit) => {
        calc.addDigit(digit);
        setValue(calc.getMainDisplay());
    };

    const onClearPress = () => {
        calc.clear();
        setValue(calc.getMainDisplay());
    };

  const onPlusMinusPress = () => {
    calc.negate();
    setValue(calc.getMainDisplay());
  };

  const onBinaryOperatorPress = (operator) => {
    calc.addBinaryOperator(operator);
    setValue(calc.getMainDisplay());
  };

  const onUnaryOperatorPress = (operator) => {
    calc.addUnaryOperator(operator);
    setValue(calc.getMainDisplay());
  };

  const onEqualsPress = () => {
    calc.equalsPressed();
    setValue(calc.getMainDisplay());
  };

  function renderPortrait() {
    return (
      <View style={container}>
        <View style={displayContainer}>
          <Display value={value} />
        </View>

        <View style={buttonContainer}>
          <View style={buttonRow}>
            <Button
              onPress={onClearPress}
              title="AC"
              color="black"
              backgroundColor="#a5a5a5"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={onPlusMinusPress}
              title="+/-"
              color="black"
              backgroundColor="#a5a5a5"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onUnaryOperatorPress(oc.PercentOperator);
              }}
              title="%"
              color="black"
              backgroundColor="#a5a5a5"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.DivisionOperator);
              }}
              title="/"
              color="white"
              backgroundColor="#f1a12b"
              width={90}
              height={90}
              fontSize={40}
            />
          </View>

          <View style={buttonRow}>
            <Button
              onPress={() => {
                onDigitPress("7");
              }}
              title="7"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress("8");
              }}
              title="8"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress("9");
              }}
              title="9"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.MultiplicationOperator);
              }}
              title="x"
              color="white"
              backgroundColor="#f1a12b"
              width={90}
              height={90}
              fontSize={40}
            />
          </View>

          <View style={buttonRow}>
            <Button
              onPress={() => {
                onDigitPress("4");
              }}
              title="4"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress("5");
              }}
              title="5"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress("6");
              }}
              title="6"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.SubtractionOperator);
              }}
              title="-"
              color="white"
              backgroundColor="#f1a12b"
              width={90}
              height={90}
              fontSize={40}
            />
          </View>

          <View style={buttonRow}>
            <Button
              onPress={() => {
                onDigitPress("1");
              }}
              title="1"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress("2");
              }}
              title="2"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress("3");
              }}
              title="3"
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.AdditionOperator);
              }}
              title="+"
              color="white"
              backgroundColor="#f1a12b"
              width={90}
              height={90}
              fontSize={40}
            />
          </View>

          <View style={buttonRow}>
            <Button
              onPress={() => {
                onDigitPress("0");
              }}
              title="0"
              color="white"
              backgroundColor="#333333"
              style={2}
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={() => {
                onDigitPress(".");
              }}
              title=","
              color="white"
              backgroundColor="#333333"
              width={90}
              height={90}
              fontSize={40}
            />
            <Button
              onPress={onEqualsPress}
              title="="
              color="white"
              backgroundColor="#f1a12b"
              width={90}
              height={90}
              fontSize={40}
            />
          </View>
        </View>
      </View>
    );
  }

  function renderLandscape() {
    return (
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{display: 'flex'}}>
                <Display value={value}/>
            </View>

            <View style={{flex: 1, flexDirection: "column"}}>
                <View style={landscapeButtonRow}>
                    <Button
                        onPress={onClearPress}
                        title="A/C"
                        color="black"
                        backgroundColor="#a5a5a5"
                        width={70}
                        height={70}
                        fontSize={25}
                    />
                    <Button
                        onPress={onPlusMinusPress}
                        title="+/-"
                        color="black"
                        backgroundColor="#a5a5a5"
                        width={70}
                        height={70}
                        fontSize={25}
                    />
                    <Button
                        onPress={() => {
                            onUnaryOperatorPress(oc.PercentOperator);
                        }}
                        title="%"
                        color="black"
                        backgroundColor="#a5a5a5"
                        width={70}
                        height={70}
                        fontSize={25}
                    />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.DivisionOperator);
              }}
              title="/"
              color="white"
              backgroundColor="#f1a12b"
              width={70}
              height={70}
              fontSize={25}
            />
          </View>

          <View style={landscapeButtonRow} >
            <Button
              onPress={() => {
                onDigitPress("7");
              }}
              title="7"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress("8");
              }}
              title="8"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress("9");
              }}
              title="9"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.MultiplicationOperator);
              }}
              title="x"
              color="white"
              backgroundColor="#f1a12b"
              width={70}
              height={70}
              fontSize={25}
            />
          </View>

          <View style={landscapeButtonRow}>
            <Button
              onPress={() => {
                onDigitPress("4");
              }}
              title="4"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress("5");
              }}
              title="5"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress("6");
              }}
              title="6"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.SubtractionOperator);
              }}
              title="-"
              color="white"
              backgroundColor="#f1a12b"
              width={70}
              height={70}
              fontSize={25}
            />
          </View>

          <View style={landscapeButtonRow}>
            <Button
              onPress={() => {
                onDigitPress("1");
              }}
              title="1"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress("2");
              }}
              title="2"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress("3");
              }}
              title="3"
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onBinaryOperatorPress(oc.AdditionOperator);
              }}
              title="+"
              color="white"
              backgroundColor="#f1a12b"
              width={70}
              height={70}
              fontSize={25}
            />
          </View>

          <View style={landscapeButtonRow}>
            <Button
              onPress={() => {
                onDigitPress("0");
              }}
              title="0"
              color="white"
              backgroundColor="#333333"
              style={2}
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={() => {
                onDigitPress(".");
              }}
              title=","
              color="white"
              backgroundColor="#333333"
              width={70}
              height={70}
              fontSize={25}
            />
            <Button
              onPress={onEqualsPress}
              title="="
              color="white"
              backgroundColor="#f1a12b"
              width={70}
              height={70}
              fontSize={25}
            />
          </View>
        </View>
      </View>
    );
  }

  const view = orientation === "portrait" ? renderPortrait() : renderLandscape();

  return <View style={container}>{view}</View>;
};

export default CalculatorScreen;
