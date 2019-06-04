import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import './style.css';

export default class Main extends Component {
    state = {
        list: [],
    }

    componentDidMount() {
        this.index()
    }

    index = async () => {
        const response = await api.get(`/collaborators`);

        const { data } = response.data;

        this.setState({ list: data })
    }

    destroy = async (id) => {
        const response = await api.delete(`/collaborators/${id}`);
        if (response.status === 200) {
            toast.success('Registro deletado com sucesso');
            this.index();
        } else {
            toast.error('Ocorreu um erro ao deletar, favor verificar.');
        }
    }

    render() {
        const { list } = this.state;
        return (
            <div className="list">
                <span>Total de Registros: {list.length}</span>
                <Link className="link-add" to={'/collaborator/add'}>Adicionar</Link>
                {list.map(item => (
                    <article key={item.id}>
                        <strong>{item.name}</strong>
                        <p>{item.age}</p>
                        <p>{item.role}</p>
                        <div>
                            <Link to={`/collaborator/edit/${item.id}`}>Editar</Link>
                            <button onClick={() => this.destroy(item.id)}>Deletar</button>
                        </div>
                    </article>
                ))}
            </div>
        )
    }
}