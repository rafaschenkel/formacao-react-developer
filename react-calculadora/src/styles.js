import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #ccc;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    border-radius: 10px;
    max-width: 400px;
    background-color: #333;
    padding: 20px 0;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
`;
