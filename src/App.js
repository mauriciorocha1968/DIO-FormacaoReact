import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

import { Container, Content, Row } from "./styles";
function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(0);
  const [operation, setOperation] = useState("");

  const handleBack = () => {
    const back = currentNumber;
    const prev = back.substring(0, back.length - 1);

    setCurrentNumber(prev === "" ? "0" : prev);
  };
  const handleAddNumber = (caracter) => {
    if (caracter === ".") {
      if (currentNumber.includes(".")) return;
    }
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${caracter}`);
  };
  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber(0);
  };

  const handleCalc = (n1, n2) => {
    let result = 0.0;
    switch (operation) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "/":
        result = n1 / n2;
        break;
      case "*":
        result = n1 * n2;
        break;
    }
    setCurrentNumber(String(result));
    setFirstNumber(0);
    setOperation("");
  };

  const handleOperation = (operator) => {
    if (firstNumber === 0) {
      setFirstNumber(Number(currentNumber));
      setCurrentNumber("0");
      setOperation(operator);
      return;
    }
    handleCalc(firstNumber, Number(currentNumber));
  };

  const handleEquals = () => {
    if (firstNumber !== 0 && operation !== "" && currentNumber !== "0") {
      handleCalc(firstNumber, Number(currentNumber));
    }
  };
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="<" onClick={handleBack} />
          <Button label="Clear" onClick={handleClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="/" onClick={() => handleOperation("/")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="x" onClick={() => handleOperation("x")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
