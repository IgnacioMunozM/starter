document.addEventListener('DOMContentLoaded', function() {
    // Aquí puedes cargar tus visualizaciones usando D3.js, Chart.js u otra librería
    // Ejemplo con Chart.js para visualización 1

    // Visualización 1
    const ctx1 = document.getElementById('viz1').getContext('2d');
    const chart1 = new Chart(ctx1, {
        type: 'line', // Cambia el tipo según tus necesidades
        data: {
            labels: ['2014', '2015', '2016', '2017', '2018', '2019'],
            datasets: [{
                label: 'Desempeño',
                data: [/* datos de desempeño */],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Visualización 2 y 3: similar a la primera
});