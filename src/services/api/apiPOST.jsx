import axios from 'axios'
import { api } from './api'



export const apiPOST = async(table = '', objToAdd) => {

    if (table !== '') {

        try {

            const response = await api.post(table, objToAdd)         

            return true

        } catch (error) {

            console.log(`error when trying to read the apitPOST - table: ${table}`, error)                  
        }
    }

    return false 
}