import React, { useEffect, useState } from 'react';
import BarChartComponent from './BarChart';
import StatsItem from './Stats';
import Filter from './Filter';
import axios from 'axios';
import styled from 'styled-components';

const BoxKpis = styled.div`
  justify-content: space-between;
  display: flex;
`;

const Dashboard = () => {
  const [allSpecies, setAllSpecies] = useState([]);

  useEffect(() => {
    fetchAllSpecies();
  }, []);

  const fetchAllSpecies = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/species`);
      setAllSpecies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDataFiltered = async (e) => {
    console.log(e.target.value);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/v1/species/search/?continent=${e.target.value}`
      );

      setAllSpecies(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const calcAverage = (arr, param) => {
    let sum = 0;
    arr.forEach((value) => (sum += value[param]));
    return Math.floor(sum / arr.length);
  };

  const countDistinct = (arr, param) => {
    let set = new Set();
    arr.forEach((value) => set.add(value[param]));
    return set.size;
  };

  return (
    <div style={{ maxWidth: '80%', margin: '0 auto' }}>
      <div
        style={{
          display: 'flex',
          marginBottom: '30px',
          justifyContent: 'space-between',
        }}
      >
        <Filter filter={fetchDataFiltered} />
      </div>
      <BoxKpis>
        <StatsItem count={allSpecies.length} title={'Total Species'} />
        <StatsItem
          count={calcAverage(allSpecies, 'weight')}
          title={'Avg weight'}
        />
        <StatsItem
          count={calcAverage(allSpecies, 'height')}
          title={'Avg Height'}
        />
        <StatsItem
          count={countDistinct(allSpecies, 'continent')}
          title={'Total Continents'}
        />
      </BoxKpis>
      <div style={{ width: '100%' }}>
        <BarChartComponent data={allSpecies} />
      </div>
    </div>
  );
};

export default Dashboard;
