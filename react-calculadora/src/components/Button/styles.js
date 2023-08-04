import { styled } from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    background-color: #888;
    color: #eee;
    flex: 1;
    border-radius: 15px;
    margin: 5px;
    border: 1px solid #888;
    transition: all 0.1s;
    &:active {
        background-color: #333;
        outline: 1px solid #222;
    }
    &:hover {
        opacity: 0.7;
    }
`;
