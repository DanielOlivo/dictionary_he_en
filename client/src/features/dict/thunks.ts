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