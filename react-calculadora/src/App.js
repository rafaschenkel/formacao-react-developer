import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
    const [currNumber, setCurrNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    const handleCalcNumbers = operator => {
        if (firstNumber === '0') {
            setFirstNumber(String(currNumber));
            setCurrNumber('0');
            setOperation(String(operator));
        } else {
            let sum;
            setOperation(String(operator));
            switch (operation) {
                case '+':
                    sum = Number(firstNumber) + Number(currNumber);
                    break;
                case '-':
                    sum = Number(firstNumber) - Number(currNumber);
                    break;
                case '*':
                    sum = Number(firstNumber) * Number(currNumber);
                    break;
                case '/':
                    sum = Number(firstNumber) / Number(currNumber);
                    break;
            }
            setFirstNumber(sum);
            setResult(sum);
            setCurrNumber('0');
        }
    };

    const handleEquals = () => {
        if (firstNumber !== '0' && currNumber !== '0' && operation !== '') {
            switch (operation) {
                case '+':
                    handleCalcNumbers('+');
                    break;
                case '-':
                    handleCalcNumbers('-');
                    break;
                case '*':
                    handleCalcNumbers('*');
                    break;
                case '/':
                    handleCalcNumbers('/');
                    break;
            }
        }
    };

    const handleAddNumber = num => {
        setCurrNumber(prev => (prev === '0' ? num : `${prev}${num}`));
    };

    const handleOnClear = () => {
        setCurrNumber('0');
        setFirstNumber('0');
        setOperation('');
        setResult('');
    };

    const handleErase = () => {
        setCurrNumber(prev => prev.slice(0, -1));
    };

    return (
        <Container>
            <Content>
                <Input value={result} />
                <Input value={currNumber} />
                <Row>
                    <Button
                        label=">"
                        onClick={handleErase}
                    />
                    <Button
                        label="C"
                        onClick={() => handleOnClear()}
                    />
                </Row>
                <Row>
                    <Button
                        label="7"
                        onClick={() => handleAddNumber('7')}
                    />
                    <Button
                        label="8"
                        onClick={() => handleAddNumber('8')}
                    />
                    <Button
                        label="9"
                        onClick={() => handleAddNumber('9')}
                    />
                    <Button
                        label="/"
                        onClick={() => handleCalcNumbers('/')}
                    />
                </Row>
                <Row>
                    <Button
                        label="4"
                        onClick={() => handleAddNumber('4')}
                    />
                    <Button
                        label="5"
                        onClick={() => handleAddNumber('5')}
                    />
                    <Button
                        label="6"
                        onClick={() => handleAddNumber('6')}
                    />
                    <Button
                        label="*"
                        onClick={() => handleCalcNumbers('*')}
                    />
                </Row>
                <Row>
                    <Button
                        label="1"
                        onClick={() => handleAddNumber('1')}
                    />
                    <Button
                        label="2"
                        onClick={() => handleAddNumber('2')}
                    />
                    <Button
                        label="3"
                        onClick={() => handleAddNumber('3')}
                    />
                    <Button
                        label="-"
                        onClick={() => handleCalcNumbers('-')}
                    />
                </Row>
                <Row>
                    <Button
                        label="0"
                        onClick={() => handleAddNumber('0')}
                    />
                    <Button
                        label="."
                        onClick={() => handleAddNumber('.')}
                    />
                    <Button
                        label="="
                        onClick={handleEquals}
                    />
                    <Button
                        label="+"
                        onClick={() => handleCalcNumbers('+')}
                    />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
