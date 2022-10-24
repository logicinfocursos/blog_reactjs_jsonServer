import { api } from './api'



export const apiGET = async (table = '', searchID = '', searchField = 'id') => {

    if (table !== '') {

        try {

            let uri = searchID == '' ? `${table}?status=1` : `${table}?${searchField}=${searchID}&status=1`

            const response = await api.get(uri)

            return response

        } catch (error) {

            console.log(`erro ao tentar ler a api: ${table}`, error)
        }
    }

    return null
}