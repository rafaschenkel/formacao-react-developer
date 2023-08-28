import { screen, render } from '@testing-library/react';
import Layout from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Layout', () => {
    render(
        <BrowserRouter>
            <Layout>Meu App</Layout>
        </BrowserRouter>
    );
});

it('Deve renderizar Meu App', () => {
    const app = screen.getByText('Meu App');

    expect(app).toBeInTheDocument();
});
