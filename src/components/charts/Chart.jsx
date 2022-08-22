import React from 'react';
import './chart.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

const labels = ['Wema', 'UBA', 'GTB', 'Zenith', 'Access', 'Unity', 'First', 'Polaris','Diamond'];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: '#c1b9b9',
    },
  
  ],
};


const Chart = () => {
  return (
    <div className='chart'>
        <Bar options={options} data={data} />
    </div>
  )
}

export default Chart