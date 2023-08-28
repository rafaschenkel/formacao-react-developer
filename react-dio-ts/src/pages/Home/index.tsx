import React from 'react';
import Layout from '../../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div className="col-md-4 mx-auto my-3">
                <h1 className="text-center mb-3">Login</h1>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingInput"
                        placeholder="Username gitHub"
                    />
                    <label
                        htmlFor="floatingInput"
                        className="text-secondary fst-italic"
                    >
                        Usuário do GitHub
                    </label>
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary bg-gradient text-light fw-semibold"
                    >
                        Entrar
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
