import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Card } from "./slice";
import { baseUrl } from "../../utils/baseUrl";


const axiosInstance = axios.create({
    baseURL: new URL('/api', baseUrl).href
})

export const requestQuery = createAsyncThunk(
    'requestQuery',
    async (query: string): Promise<Card[]> => {
        let result: Card[] = []
        try{
            const response = await axiosInstance.get('/', {
                params: { word: query }
            }) 

            result = response.data.terms as Card[]
            console.log('results', result)
            return result
        }
        catch(err){
            if(err instanceof Error)
                console.log('error!', err.message)
        }
        return result
    }
)

export const checkServer = createAsyncThunk(
    'checkServer',
    async (): Promise<boolean> => {
        try{
            const url = new URL('/status', baseUrl)
            const response = await axios.get(url.href)
            console.log(response)
            return response && response.status === 200
        }
        catch(error){
            if(error instanceof Error)
                console.log(error.message)
            return false
        }
    }
)