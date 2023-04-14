import { Chart } from 'chart.js/auto'

(async function(){
  const data = [
    { year: 2007, count: 1 },
    { year: 2008, count: 2 },
    { year: 2009, count: 25 },
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 }
  ];

  new Chart(
    document.getElementById('line'),
    {
      type: 'line',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'line 1',
            data: data.filter(x => x.year <= 2009).map(row => row.count),
            backgroundColor: '#16BFD6',
          },
          {
            label: 'line 2',
            data: data.filter(x => x.year > 2009).map(row => row.count),
            backgroundColor: '#F765A3',
          },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js line chart'
          }
        }
      }
    }
  );
})()
