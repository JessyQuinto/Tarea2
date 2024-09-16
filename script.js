// Array para almacenar las edades ingresadas
const edades = [];

// Número total de personas cuyas edades se van a ingresar
const cantidadPersonas = 10;

// Seleccionar el contenedor donde se agregarán los campos de entrada
const inputsDiv = document.getElementById('inputs');

// Crear dinámicamente los campos de entrada para cada persona
for (let i = 0; i < cantidadPersonas; i++) {
    // Crear un contenedor para cada campo de entrada
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    
    // Crear la etiqueta para el campo de entrada
    const label = document.createElement('label');
    label.htmlFor = `edad${i}`;
    label.textContent = `Persona ${i + 1}`;
    
    // Crear el campo de entrada
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `edad${i}`;
    input.placeholder = 'Edad';
    input.required = true;
    
    // Agregar la etiqueta y el campo de entrada al contenedor
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    
    // Agregar el contenedor al div principal
    inputsDiv.appendChild(inputContainer);
}

// Agregar un event listener al botón de calcular
document.getElementById('submit').addEventListener('click', () => {
    let error = false;
    edades.length = 0;  // Reiniciar el array de edades

    // Obtener y validar las edades ingresadas
    for (let i = 0; i < cantidadPersonas; i++) {
        const input = document.getElementById(`edad${i}`);
        const edad = parseInt(input.value);

        // Validar que la edad esté entre 1 y 120
        if (isNaN(edad) || edad < 1 || edad > 120) {
            document.getElementById('result-content').innerHTML = `<p id="error">Error: Ingresaste una edad no válida en la persona ${i + 1}. Debe estar entre 1 y 120 años.</p>`;
            input.style.borderColor = '#dc3545';
            error = true;
            break;
        } else {
            input.style.borderColor = '#ccc';
            edades.push(edad);
        }
    }

    // Si no hay errores, calcular los resultados
    if (!error) {
        calcularResultados(edades);
    }
});

// Función para calcular y mostrar los resultados
function calcularResultados(edades) {
    let menoresDeEdad = 0;
    let mayoresDeEdad = 0;
    let adultosMayores = 0;
    let sumaEdades = 0;
    let edadMinima = Math.min(...edades);
    let edadMaxima = Math.max(...edades);

    // Iterar sobre todas las edades para calcular las estadísticas
    edades.forEach(edad => {
        sumaEdades += edad;

        if (edad < 18) {
            menoresDeEdad++;
        } else if (edad >= 60) {
            adultosMayores++;
        } else {
            mayoresDeEdad++;
        }
    });

    // Calcular el promedio de edades
    let promedioEdades = sumaEdades / edades.length;

    // Mostrar los resultados en el DOM
    document.getElementById('result-content').innerHTML = `
        <p><strong>Menores de edad:</strong> ${menoresDeEdad}</p>
        <p><strong>Mayores de edad:</strong> ${mayoresDeEdad}</p>
        <p><strong>Adultos mayores (60+):</strong> ${adultosMayores}</p>
        <p><strong>Edad más baja:</strong> ${edadMinima}</p>
        <p><strong>Edad más alta:</strong> ${edadMaxima}</p>
        <p><strong>Promedio de edades:</strong> ${promedioEdades.toFixed(2)}</p>
    `;
}