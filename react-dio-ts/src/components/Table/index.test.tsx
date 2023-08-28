import { screen, render } from '@testing-library/react';
import Table from '.';

const mockData = [
    {
        tech: 'React',
        type: 'Frontend'
    },
    {
        tech: 'Angular',
        type: 'Frontend'
    },
    {
        tech: 'Node',
        type: 'Backend'
    }
];

it('Deve exibir os itens na tabela', () => {
    render(<Table data={mockData} />);

    expect(screen.getAllByRole('row')).toHaveLength(1 + mockData.length);
});

it('Deve renderizar a tabela, caso nao receba dados', () => {
    render(<Table />);

    expect(screen.getAllByRole('row')).toHaveLength(1);
});
