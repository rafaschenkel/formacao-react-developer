import { InputContainer } from './styles';

const Input = ({ value, result }) => {
    return (
        <InputContainer>
            <input
                disabled
                value={value}
            />
        </InputContainer>
    );
};

export default Input;
