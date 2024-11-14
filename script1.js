let ctx = document.querySelector('#myChart').getContext('2d')

const labels = ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4'];
const points = [25000,24500,24000,23500,23000];
const color = '#FD5DB8';

const data  = {
    labels: labels,
    datasets: [
        {
            label: 'Pontuação',
            data: points,
            borderColor: color,
            backgroundColor: color
        }
    ]
}
const config = {
    type: 'line',
    data: data
}

let myChart = new Chart(ctx, config);
