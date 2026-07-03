

async function obtenerDatos() {
    try {
        const respuesta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");
        
        // Verificamos si la petición fue exitosa
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        
        const datos = await respuesta.json(); // Parseamos la respuesta a JSON
        console.log(datos);
    } catch (error) {
        console.error('Hubo un problema con la petición:', error);
    }
}

obtenerDatos();
