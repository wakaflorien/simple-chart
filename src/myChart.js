// import { Chart } from 'chart.js/auto'
import {
  Chart,
  Colors,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
} from 'chart.js'

Chart.register(
  Colors,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend
);

import { getAquisitionsByYear } from "./api";

(async function() {

  // const data = await getAquisitionsByYear()
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 15 },
    { year: 2012, count: 20 },
    { year: 2013, count: 25 },
    { year: 2014, count: 30 },
    { year: 2015, count: 40 },
    { year: 2016, count: 50 },
  ];

  new Chart(
    document.getElementById('myChart'),
    {
      type: 'bar',
      options: {
        animation: true,
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        },
        plugins: {
          legend: {
            display: true
          },
          tooltip: {
            enabled: true
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart - Stacked'
          },
        },
      },
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Yearly Mania',
            data: data.filter(x => x.year >= 25 ).map(row => row.count),
            backgroundColor: '#016894',
            hoverBackgroundColor: '#16BFD6',
            borderColor: '#016894',
            borderWidth: 1
          },
          {
            label: 'Yearly Mania 1',
            data: data.filter(x => x.year <= 30 ).map(row => row.count),
            backgroundColor: '#16BFD6',
            hoverBackgroundColor: '#16BFD6',
            borderColor: '#016894',
            borderWidth: 1
          }
        ]
      },
    }
  );
})();
