import {Chart} from 'chart.js/auto'

(async function () {
  const data = [
    {year: 2010, count: 10, eq: 12},
    {year: 2011, count: 20, eq: 12},
    {year: 2012, count: 15, eq: 12},
    {year: 2013, count: 25, eq: 12},
    {year: 2014, count: 22, eq: 12},
    {year: 2015, count: 30, eq: 12},
    {year: 2016, count: 28, eq: 12},
  ];

  new Chart(
    document.getElementById('doughnut').getContext('2d'),
    {
      type: 'doughnut',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year Doughnut',
            data: data.map(row => row.count),
            backgroundColor: ['#16BFD6', '#F765A3', '#A155B9', '#016894'],
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'end',
          align: 'left'
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut chart'
        }
      }
    }
  );
})()
