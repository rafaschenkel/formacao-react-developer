import React from 'react';

interface ITable {
    data?: Skills[];
}

interface Skills {
    tech: string;
    type: string;
}

const Table = ({ data }: ITable) => {
    return (
        <table className="table table-hover my-5">
            <thead className="table-primary">
                <tr>
                    <th scope="col">Tech</th>
                    <th scope="col">Tipo</th>
                </tr>
            </thead>
            <tbody>
                {data !== undefined &&
                    data.map((skill, index) => {
                        return (
                            <tr key={index}>
                                <td>{skill.tech}</td>
                                <td>{skill.type}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default Table;
