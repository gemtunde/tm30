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

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    <div className='chart' width='100%' aspect={2/1}>
        <div className="chartContainer">
           <h1 className="title">Institution Overview</h1>
               <FormControl style={{width:'150px'}}>
                                <InputLabel id="demo-simple-select-label"> Quantity</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                                >
                                    <MenuItem value={10}>100</MenuItem>
                                    <MenuItem value={20}>300</MenuItem>
                                    <MenuItem value={30}>400</MenuItem>
                                </Select>
                        </FormControl>
        </div>
        <h3 className="earn">Monthly Earnings</h3>
        <Bar options={options} data={data} />
    </div>
  )
}

export default Chart