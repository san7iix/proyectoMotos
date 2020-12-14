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

    async consultarRuta(id) {
        try {
            const res = await fetch(`${config.API_URL}rutas/${id}`, {
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

    async eliminarRuta(id) {
        try {
            const res = await fetch(`${config.API_URL}rutas/${id}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async editarRuta(datos) {
        const res = await fetch(`${config.API_URL}rutas/editar`, {
            method: 'PUT',
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

    async obtenerTipos() {
        try {
            const res = await fetch(`${config.API_URL}tipoBicicleta`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }


    async obtenerBicicletas() {
        try {
            const res = await fetch(`${config.API_URL}bicicletas`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }


    async agregarBicicleta(datos) {

        const res = await fetch(`${config.API_URL}bicicletas/registro`, {
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


    async eliminarBicicleta(id) {
        try {
            const res = await fetch(`${config.API_URL}bicicletas/${id}`, {
                method: 'DELETE'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async agregarImagen(datos) {
        const res = await fetch(`${config.API_URL}bicicletas/agregarImagen`, {
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