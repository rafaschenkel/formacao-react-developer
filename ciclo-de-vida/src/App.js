import { useEffect, useState } from 'react';

const App = () => {
    const [usuario, setUsuario] = useState('');
    const [usuarios, setUsuarios] = useState(['Rafael', 'Jéssica']);
    const [count, setCount] = useState(0);

    // DA FORMA QUE ESTÁ SENDO FEITA, TODO O COMPONENTE É RENDERIZADO SEMPRE QUE HOUVER UMA MODIFICAÇÃO NO VALOR DO INPUT, O QUE ACABA FAZENDO COM QUE HAJA UM PROCESSAMENTO MAIOR PARA O BROWSER DO CLIENTE.

    // SEMPRE QUE O COMPONENTE FOR RERENDERIZADO HAVERA UMA VERIFICAÇÃO PARA VER SE USUARIOS.LENGTH FOI MODIFICADO.
    useEffect(() => {
        setCount(usuarios.length);
    }, [usuarios]);

    const handleUpdateUsers = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario('');
    };

    const handleAddUser = user => {
        setUsuario(user);
    };

    return (
        <div>
            <h3>Total de usuarios: {count}</h3>

            <input
                value={usuario}
                onChange={event => handleAddUser(event.target.value)}
            />
            <button onClick={handleUpdateUsers}>Adicionar</button>
            {usuarios.map(item => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );
};

export default App;
