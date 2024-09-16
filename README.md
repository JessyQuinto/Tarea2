# Calculadora de Edades

## Descripción
La Calculadora de Edades es una aplicación web simple pero efectiva que permite a los usuarios ingresar las edades de 10 personas y calcular diversas estadísticas basadas en esos datos. Esta herramienta es ideal para análisis demográficos rápidos o para fines educativos en estadística básica.

## Características
- Interfaz de usuario intuitiva y responsive
- Validación de entrada para asegurar que las edades estén entre 1 y 120 años
- Cálculos estadísticos incluyendo:
  - Número de menores de edad
  - Número de mayores de edad
  - Número de adultos mayores (60+)
  - Edad mínima y máxima
  - Promedio de edades

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome para iconos

## Cómo Funciona
La aplicación utiliza JavaScript para manejar la lógica principal. Aquí está un desglose de las funciones clave:

1. **Generación Dinámica de Campos de Entrada:**
   - El script crea dinámicamente 10 campos de entrada etiquetados.
   - Cada campo tiene una etiqueta y un input numérico.

2. **Manejo de Eventos:**
   - Un event listener en el botón "Calcular" desencadena el proceso de validación y cálculo.

3. **Validación de Entrada:**
   - Verifica que cada entrada sea un número entre 1 y 120.
   - Muestra un mensaje de error si alguna entrada no es válida.

4. **Cálculos Estadísticos:**
   - La función `calcularResultados()` procesa las edades válidas.
   - Calcula varias estadísticas como menores de edad, mayores de edad, etc.

5. **Presentación de Resultados:**
   - Los resultados se muestran en una sección dedicada de la página.

## Cómo Usar
1. Clona este repositorio.
2. Abre `index.html` en tu navegador web.
3. Ingresa las edades de 10 personas en los campos proporcionados.
4. Haz clic en "Calcular" para ver los resultados.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cambios mayores antes de hacer un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
