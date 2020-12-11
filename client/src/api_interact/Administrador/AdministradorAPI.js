import config from '../config'



class AdministradorAPI {


    async obtenerRutas() {
        try {
            const res = await fetch(`${config.API_URL}rutas`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async agregarRuta(datos) {

        const res = await fetch(`${config.API_URL}rutas/registro`, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            }
        })
        const data = await res.json()
        return data

    }


}


export default new AdministradorAPI();