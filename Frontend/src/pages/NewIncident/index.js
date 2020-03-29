import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api';
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assets/logo.svg';
export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    async function handleNewIncident(e){
        e.preventDefault();
        const data={
            title,
            desc,
            value,
        };
        try{
            await api.post('incidents', data, {
                headers:{
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        }catch(err){
            alert('erro')
        }
    }
    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be tha Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva seu caso detalhadamente para encontrar um heroi pra resolver isso.</p>
                    <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#E02041"/>Voltar para perfil</Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e =>setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        value={desc}
                        onChange={e =>setDesc(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e =>setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}