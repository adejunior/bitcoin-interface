import axios from 'axios';
import { env } from '../env';

export const quoteService = {
    all,
    topfive,
    average,
    median,
    deviation
};

let url = env.BACKEND;

function all(){
    let headers = JSON.stringify({
        'Content-Type': 'application/json'
    }) 

    return axios.get(url+'quote/all/', headers);    
}

function topfive(typeOperation){
    let headers = JSON.stringify({
        'Content-Type': 'application/json'
    }) 

    return axios.get(url+'quote/topfive/'+typeOperation, headers);    
}

function average(typeOperation){
    let headers = JSON.stringify({
        'Content-Type': 'application/json'
    }) 

    return axios.get(url+'quote/average/'+typeOperation, headers);    
}

function median(typeOperation){
    let headers = JSON.stringify({
        'Content-Type': 'application/json'
    }) 

    return axios.get(url+'quote/median/'+typeOperation, headers);    
}

function deviation(typeOperation){
    let headers = JSON.stringify({
        'Content-Type': 'application/json'
    }) 

    return axios.get(url+'quote/deviation/'+typeOperation, headers);    
}