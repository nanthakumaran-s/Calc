import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import RButton from "./RButton";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  const inputNum = (e) => {
    console.log(e);
    if (num === 0) {
      setNum(e);
    } else {
      setNum(num + e);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const percentage = () => {
    setNum(num / 100);
  };

  const changeSign = () => {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  };

  const operatorHandler = (e) => {
    setOperator(e);
    setOldNum(num);
    setNum(0);
  };

  const calculate = () => {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        alignItems="center"
        backgroundColor="black"
        borderRadius="3xl"
        py="8"
        px="6"
        my="10"
        gap="3"
      >
        <Flex justifyContent="end" width="100%" pr="4">
          <Text color="white" fontSize="6xl">
            {num.toString().slice(0, 6)}
          </Text>
        </Flex>
        <Flex alignItems="center" gap="3">
          <RButton action={clear} value={"AC"} colorScheme={"blackAlpha"} />
          <RButton
            action={changeSign}
            value={"+/-"}
            colorScheme={"blackAlpha"}
          />
          <RButton action={percentage} value={"%"} colorScheme={"blackAlpha"} />
          <RButton
            action={operatorHandler}
            value={"/"}
            colorScheme={"orange"}
          />
        </Flex>
        <Flex alignItems="center" gap="3">
          <RButton action={inputNum} value={"7"} colorScheme={"whiteAlpha"} />
          <RButton action={inputNum} value={"8"} colorScheme={"whiteAlpha"} />
          <RButton action={inputNum} value={"9"} colorScheme={"whiteAlpha"} />
          <RButton
            action={operatorHandler}
            value={"X"}
            colorScheme={"orange"}
          />
        </Flex>
        <Flex alignItems="center" gap="3">
          <RButton action={inputNum} value={"4"} colorScheme={"whiteAlpha"} />
          <RButton action={inputNum} value={"5"} colorScheme={"whiteAlpha"} />
          <RButton action={inputNum} value={"6"} colorScheme={"whiteAlpha"} />
          <RButton
            action={operatorHandler}
            value={"-"}
            colorScheme={"orange"}
          />
        </Flex>
        <Flex alignItems="center" gap="3">
          <RButton action={inputNum} value={"1"} colorScheme={"whiteAlpha"} />
          <RButton action={inputNum} value={"2"} colorScheme={"whiteAlpha"} />
          <RButton action={inputNum} value={"3"} colorScheme={"whiteAlpha"} />
          <RButton
            action={operatorHandler}
            value={"+"}
            colorScheme={"orange"}
          />
        </Flex>
        <Flex alignItems="center" gap="3">
          <RButton action={inputNum} value={"0"} colorScheme={"whiteAlpha"} />
          <RButton
            action={inputNum}
            value={""}
            colorScheme={"whiteAlpha"}
            vis={"hidden"}
          />
          <RButton action={inputNum} value={"."} colorScheme={"whiteAlpha"} />
          <RButton action={calculate} value={"="} colorScheme={"orange"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
