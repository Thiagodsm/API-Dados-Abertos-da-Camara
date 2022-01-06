import { Component } from 'react'
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
    headers:{"Content-type": "application/json"}
})

class APIUtils extends Component{
    
    getDeputados(){
        return api.get("/deputados");
    }

    getDeputado(id){
        return api.get(`/deputado/${id}`);
    }

    getDeputadoDespesas(id){
        return api.get(`/deputados/${id}/despesas`);
    }

    getDeputadoDiscursos(id){
        return api.get(`/deputados/${id}/discursos`);
    }

    getDeputadoEventos(id){
        return api.get(`/deputados/${id}/eventos`);
    }
}

export default new APIUtils();