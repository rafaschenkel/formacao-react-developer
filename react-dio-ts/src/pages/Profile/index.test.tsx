import { render, screen } from '@testing-library/react';
import Profile from '.';
import { BrowserRouter } from 'react-router-dom';

describe('Profile', () => {
    render(
        <BrowserRouter>
            <Profile />
        </BrowserRouter>
    );
});

it('Deve renderizar a pagina com a tabela', () => {
    expect(screen.getByRole('table')).toBeInTheDocument();
});
