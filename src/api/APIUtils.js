import { Component } from 'react'
import axios from 'axios'

const apiDadosAbertos = axios.create({
    baseURL: 'https://dadosabertos.camara.leg.br/api/v2/',
    headers:{"Content-type": "application/json"}
})

const apiNews = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    headers: {"Content-type": "application/json"}
})

class APIUtils extends Component{
    
    getDeputados(){
        return apiDadosAbertos.get("/deputados");
    }

    getDeputado(id){
        return apiDadosAbertos.get(`/deputado/${id}`);
    }

    getDeputadoDespesas(id){
        return apiDadosAbertos.get(`/deputados/${id}/despesas`);
    }

    getDeputadoDiscursos(id){
        return apiDadosAbertos.get(`/deputados/${id}/discursos`);
    }

    getDeputadoEventos(id){
        return apiDadosAbertos.get(`/deputados/${id}/eventos`);
    }

    // Endpoints from Newsapi
    getNews(){
        console.log("print: " + process.env.REACT_APP_API_KEY);
        return apiNews.get('/everything', {
            params: {
                q : "Politica", 
                from: new Date().toISOString().split('T')[0].toString(),
                language: "pt",
                sortBy: "popularity",
                apiKey: process.env.REACT_APP_API_KEY}
        });
        //return apiNews.get(`?q=Politica&from=${new Date().toISOString().split('T')[0]}&language=pt&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}'`);
    }
}

export default new APIUtils();