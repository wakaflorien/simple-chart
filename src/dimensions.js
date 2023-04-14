// import { Chart } from 'chart.js/auto'
import {
  Chart,
  Colors,
  BubbleController,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
} from 'chart.js'

Chart.register(
  Colors,
  BubbleController,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend
);

import { getDimensions } from "./api";

(async function(){
  const data = await getDimensions();

  new Chart(
    document.getElementById('dimensions'),
    {
      type: 'bubble',
      options: {
        aspectRatio: 1,
        scales: {
          x: {
            max: 500,
            ticks: {
              callbacks: value => `${value / 100} m`
            }
          },
          y: {
            max: 500,
            ticks: {
              callbacks: value => `${value / 100} m`
            }
          }
        },
      },
      data: {
        labels: data.map(x => x.year),
        datasets: [
          {
            label: 'width = height',
            data:
              data.filter(row => row.width === row.height)
              .map(row => ({
              x: row.width,
              y: row.height,
              r: row.count
            })),
            backgroundColor: '#A155B9',
            borderColor: '#016894',
            pointStyle: 'circle',
            hoverBackgroundColor: '#016894'
          },
          {
            label: 'width > height',
            data:
              data.filter(row => row.width > row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                })),
            backgroundColor: '#16BFD6',
            borderColor: '#016894',
            pointStyle: 'circle',
            hoverBackgroundColor: '#016894'
          },
          {
            label: 'width < height',
            data:
              data.filter(row => row.width < row.height)
                .map(row => ({
                  x: row.width,
                  y: row.height,
                  r: row.count
                })),
            backgroundColor: '#F765A3',
            borderColor: '#016894',
            pointStyle: 'circle',
            hoverBackgroundColor: '#016894'
          }
        ]
      }
    }
  )
})();
