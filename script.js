const edades = [];
const cantidadPersonas = 10;

// Crear los inputs dinámicamente
const inputsDiv = document.getElementById('inputs');
for (let i = 0; i < cantidadPersonas; i++) {
    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    
    const label = document.createElement('label');
    label.htmlFor = `edad${i}`;
    label.textContent = `Persona ${i + 1}`;
    
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `edad${i}`;
    input.placeholder = 'Edad';
    input.required = true;
    
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    inputsDiv.appendChild(inputContainer);
}

document.getElementById('submit').addEventListener('click', () => {
    let error = false;
    edades.length = 0;  // Reiniciar el array de edades

    // Obtener y validar las edades ingresadas
    for (let i = 0; i < cantidadPersonas; i++) {
        const input = document.getElementById(`edad${i}`);
        const edad = parseInt(input.value);

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

    if (!error) {
        calcularResultados(edades);
    }
});

function calcularResultados(edades) {
    let menoresDeEdad = 0;
    let mayoresDeEdad = 0;
    let adultosMayores = 0;
    let sumaEdades = 0;
    let edadMinima = Math.min(...edades);
    let edadMaxima = Math.max(...edades);

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

    let promedioEdades = sumaEdades / edades.length;

    // Mostrar resultados
    document.getElementById('result-content').innerHTML = `
        <p><strong>Menores de edad:</strong> ${menoresDeEdad}</p>
        <p><strong>Mayores de edad:</strong> ${mayoresDeEdad}</p>
        <p><strong>Adultos mayores (60+):</strong> ${adultosMayores}</p>
        <p><strong>Edad más baja:</strong> ${edadMinima}</p>
        <p><strong>Edad más alta:</strong> ${edadMaxima}</p>
        <p><strong>Promedio de edades:</strong> ${promedioEdades.toFixed(2)}</p>
    `;
}