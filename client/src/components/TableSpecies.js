import CardSpecie from './Species';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const TableSpecies = () => {
  const [allSpecies, setAllSpecies] = useState([]);

  useEffect(() => {
    fetchAllSpecies();
  }, []);

  const deleteCard = async (e) => {
    console.log(e.target.name);
    try {
      await axios.delete(
        `http://localhost:3001/api/v1/species/${e.target.name}`
      );
      const response = await axios.get(`http://localhost:3001/api/v1/species`);
      setAllSpecies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAllSpecies = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/api/v1/species`);
      setAllSpecies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderedPosts = allSpecies.map((specie) => (
    <CardSpecie
      deleteCard={deleteCard}
      key={specie.species_id}
      id={specie.species_id}
      name={specie.name}
      continent={specie.continent}
      weight={specie.weight}
      height={specie.height}
      horns={specie.horns}
      picture={specie.picture}
    />
  ));

  return (
    <div>
      <Grid>{renderedPosts}</Grid>
      {allSpecies.loading && <div>Loading ... </div>}
      {!allSpecies.loading && allSpecies.error ? (
        <div>Error: {allSpecies.error}</div>
      ) : null}
    </div>
  );
};

export default TableSpecies;
