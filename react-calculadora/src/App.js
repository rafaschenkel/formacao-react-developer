import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';

const App = () => {
    return (
        <Container>
            <Content>
                <Input />
                <Row>
                    <Button title=">" />
                    <Button title="C" />
                </Row>
                <Row>
                    <Button title="7" />
                    <Button title="8" />
                    <Button title="9" />
                    <Button title="/" />
                </Row>
                <Row>
                    <Button title="4" />
                    <Button title="5" />
                    <Button title="6" />
                    <Button title="*" />
                </Row>
                <Row>
                    <Button title="1" />
                    <Button title="2" />
                    <Button title="3" />
                    <Button title="-" />
                </Row>
                <Row>
                    <Button title="0" />
                    <Button title="." />
                    <Button title="=" />
                    <Button title="+" />
                </Row>
            </Content>
        </Container>
    );
};

export default App;
