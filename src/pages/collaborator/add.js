import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './style.css';

export default class Add extends Component {
    state = {
        name: '',
        age: '',
        role: ''
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const { name, age, role } = this.state;
        const body = {
            name,
            age,
            role
        };

        const response = await api.post(`/collaborators`, body);

        if (response.status === 200) {
            toast.success('Dados cadastrados com sucesso');
            this.props.history.push('/');
        } else {
            toast.error('Ocorreu um erro ao cadastrar, favor verificar.');
        }
    }

    changeField = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        const { name, age, role } = this.state;
        return (
            <div className="item">
                <Link className="link-back" to={'/'}>Voltar</Link>
                <form method="post" onSubmit={this.onSubmit}>
                    <div className="form-input">
                        <label htmlFor="name">Nome</label>
                        <input type="text" value={name} name="name" required onChange={this.changeField} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="age">Idade</label>
                        <input type="number" value={age} name="age" required onChange={this.changeField} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="role">Função</label>
                        <input type="text" value={role} name="role" required onChange={this.changeField} />
                    </div>
                    <div className="form-input">
                        <input type="submit" name="submit" value="Adicionar" />
                    </div>
                </form>
            </div>
        )
    }
}