import { useState } from 'react';
import Header from '../../components/Header';
import ItemList from '../../components/ItemList';
import './styles.css';

function App() {
    const [user, setUser] = useState('');
    const [currUser, setCurrUser] = useState('');
    const [repos, setRepos] = useState(null);

    const getUserData = async () => {
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const newUser = await userData.json();

        if (newUser.name) {
            const { avatar_url, name, bio, login } = newUser;
            setCurrUser({ avatar_url, name, bio, login });
        }

        const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
        const newRepos = await reposData.json();

        if (newRepos.length) {
            setRepos(newRepos);
        }
    };

    return (
        <div className="App">
            <Header />
            <main>
                <div className="content">
                    <div className="search">
                        <input
                            value={user}
                            onChange={event => setUser(event.target.value)}
                            name="user"
                            placeholder="@usuario"
                        />
                        <button onClick={getUserData}>Buscar</button>
                    </div>

                    {currUser.name && (
                        <>
                            <div className="profile">
                                <img
                                    src={currUser.avatar_url}
                                    alt="imagem perfil"
                                />
                                <div className="info">
                                    <h2>{currUser.name}</h2>
                                    <span>@{currUser.login}</span>
                                    <p>{currUser.bio}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )}
                    {repos?.length && (
                        <>
                            <div className="repositories">
                                <h3>Repositórios</h3>
                                {repos.map(repo => (
                                    <ItemList
                                        href={repo.html_url}
                                        title={repo.name}
                                        description={repo.description}
                                        key={repo.name}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
