
import React, { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
// eslint-disable-next-line 
import { chart as chartJs } from 'chart.js/auto';

function Graph() {
  const { backendData } = useContext(DataContext);
  const [selectOption, setSelectOption] = useState('Region');
  
  if (!backendData) {
    return <h1 style={{ color: 'white' }}>No Data Available</h1>;
  }

  // Aggregate data based on end year
  const endYears = Array.from(new Set(backendData.map((item) => item.end_year))).filter((item) => item !== null).sort();

  const likelihoods = new Array(endYears.length).fill(0);
  const intensity = new Array(endYears.length).fill(0);
  const relevance = new Array(endYears.length).fill(0);

  backendData.forEach((item) => {
    const index = endYears.indexOf(item.end_year);
    likelihoods[index] += item.likelihood;
    intensity[index] += item.intensity;
    relevance[index] += item.relevance;
  });

  const data = {
    labels: endYears,
    datasets: [
      {
        label: 'Likelihood',
        data: likelihoods,
        borderWidth: 1,
      },
      {
        label: 'Intensity',
        data: intensity,
        borderWidth: 1,
      },
      {
        label: 'Relevance',
        data: relevance,
        borderWidth: 1,
      },
    ],
  };

  //--------------- Dynamic option-based data aggregation
  const options = Array.from(new Set(backendData.map((item) => item[selectOption.toLowerCase()]))).filter((item) => item !== null).sort();

  const optionLikelihoods = new Array(options.length).fill(0);
  const optionIntensity = new Array(options.length).fill(0);
  const optionRelevance = new Array(options.length).fill(0);

  backendData.forEach((item) => {
    const index = options.indexOf(item[selectOption.toLowerCase()]);
    optionLikelihoods[index] += item.likelihood;
    optionIntensity[index] += item.intensity;
    optionRelevance[index] += item.relevance;
  });

  const optionData = {
    labels: options,
    datasets: [
      {
        label: 'Likelihood',
        data: optionLikelihoods,
        borderWidth: 1,
      },
      {
        label: 'Intensity',
        data: optionIntensity,
        borderWidth: 1,
      },
      {
        label: 'Relevance',
        data: optionRelevance,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='graph-section'>
      <h1>Graph Section</h1>
      <div className='showGraph'>
        <Bar data={data} />
        <Line data={data} />
        <div className='selectOption'>

          <select value={selectOption} onChange={(e) => setSelectOption(e.target.value)}>
            <option value="Region">Region</option>
            <option value="Country">Country</option>
            <option value="Topic">Topic</option>
          </select>
        </div>

        <Doughnut data={optionData} />
        <Pie data={optionData} />
      </div>
    </div>
  );
}

export default Graph;


