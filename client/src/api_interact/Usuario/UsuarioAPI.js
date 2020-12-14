
import config from '../config'



class UsuarioAPI {

    async loguear(usuario) {
        try {
            const res = await fetch(`${config.API_URL}usuarios/login`, {
                method: 'POST',
                body: JSON.stringify({
                    "email": usuario.email,
                    "password": usuario.password
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async obtenerCatalogoBicicletas() {
        try {
            const res = await fetch(`${config.API_URL}bicicletas/catalogo/disp`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async obtenerDetalleBicicleta(id) {
        try {
            const res = await fetch(`${config.API_URL}bicicletas/${id}`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async obtenerImagenesBicicleta(id) {
        try {
            const res = await fetch(`${config.API_URL}bicicletas/imagenes/ver`, {
                method: 'POST',
                body: JSON.stringify({
                    "idbicicleta": id
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
                }
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async obtenerReservas(id) {
        try {
            const res = await fetch(`${config.API_URL}usuarios/reservas/${id}`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async obtenerRutas() {
        try {
            const res = await fetch(`${config.API_URL}usuarios/rutas/all`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async obtenerDatosUsuario(id) {
        try {
            const res = await fetch(`${config.API_URL}usuarios/${id}`, {
                method: 'GET'
            })
            const data = await res.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async reservarBicicleta(data) {
        const respuesta = await fetch(`${config.API_URL}usuarios/reservar`, {
            method: 'POST',
            body: JSON.stringify({
                "horasContratadas": data.horasContratadas,
                "idbicicleta": data.idbicicleta,
                "usuario_identificacion": data.usuario_identificacion
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            }
        })
        const dato = await respuesta.json()
        return dato
    }

    async registrarUsuario(data) {
        const respuesta = await fetch(`${config.API_URL}usuarios/registro`, {
            method: 'POST',
            body: JSON.stringify({
                "nombre": data.nombre,
                "apellido": data.apellido,
                "email": data.email,
                "password": data.password,
                "direccion": data.direccion,
                "telefono": data.telefono
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            }
        })
        const dato = await respuesta.json()
        return dato
    }

    async devolverBicicleta(data) {
        const respuesta = await fetch(`${config.API_URL}usuarios/devolver`, {
            method: 'PUT',
            body: JSON.stringify({
                "id": data.id,
                "idbicicleta": data.idbicicleta
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            }
        })
        const dato = await respuesta.json()
        return dato
    }

    async actualizarInfo(data) {
        const respuesta = await fetch(`${config.API_URL}usuarios/editar`, {
            method: 'PUT',
            body: JSON.stringify({
                "identificacion": data.identificacion,
                "nombre": data.nombre,
                "apellido": data.apellido,
                "email": data.email,
                "password": data.password,
                "direccion": data.direccion,
                "telefono": data.telefono
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            }
        })
        const dato = await respuesta.json()
        return dato
    }

}



export default new UsuarioAPI();