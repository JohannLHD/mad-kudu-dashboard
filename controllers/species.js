const pool = require('../config/db.js');
const randomBytes = require('randombytes');
const axios = require('axios');

const getAllSpecies = async (req, res) => {
  try {
    let sql = 'SELECT * FROM dataset1';
    const [data] = await pool.execute(sql);
    res.status(200).send(data);
  } catch (err) {
    console.log(err);
  }
};

const createNewSpecies = async (req, res) => {
  console.log();
  const { name, continent, weight, height, horns, picture } = req.body;
  let sql2 = `
      INSERT INTO dataset1(
        name,
        continent,
        weight,
        height,
        horns,
        picture
      )
      VALUES(
        '${name}',
        '${continent}',
        '${weight}',
        '${height}',
        '${horns}',
        '${picture}'
      )
  `;
  try {
    await pool.execute(sql2);
    res.status(201).send({ message: 'species created' });
  } catch (err) {
    res.status(400).send({ message: err.message });
    console.log(err);
  }
};

const getSpeciesById = async (req, res) => {
  try {
    const id = req.params.id;
    let sql = `SELECT * FROM dataset1 WHERE species_id = ${id}`;
    const [data] = await pool.execute(sql);
    res.status(200).send({ data });
  } catch (err) {
    res.status(400).send({ message: err.message });
    console.log(err);
  }
};

const getSpeciesByContinent = async (req, res) => {
  try {
    const query = req.query;
    let sql = `SELECT * FROM dataset1 WHERE continent = '${query.continent}'`;
    const [data] = await pool.execute(sql);
    res.status(200).send({ data });
  } catch (err) {
    res.status(400).send({ message: err.message });
    console.log(err);
  }
};

const deleteSpeciesById = async (req, res) => {
  try {
    const speciesId = parseInt(req.params.id);
    console.log(speciesId);
    let sql = `DELETE FROM dataset1 WHERE species_id = ${speciesId}`;
    const [data] = await pool.execute(sql);
    if (data.affectedRows === 0) {
      res.status(400).send({ message: "Id doesn't exists" });
    }
    res.status(200).send({ message: `Antelopes with ID ${speciesId} deleted` });
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.log(err);
  }
};

const reinitializeData = async (req, res) => {
  try {
    let sql = 'DELETE from dataset1';
    await pool.execute(sql);
    const response = await axios.get(
      'https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json'
    );
    for (let values of response.data) {
      if (values.name === 'Hartebeest') continue;
      const { name, continent, weight, height, horns, picture } = values;
      let sql2 = `
        INSERT INTO dataset1(
          name,
          continent,
          weight,
          height,
          horns,
          picture
        )
        VALUES(
          '${name}',
          '${continent}',
          '${weight}',
          '${height}',
          '${horns}',
          '${picture}'
        )
      `;
      await pool.execute(sql2);
    }
    res.status(201).send(response.data);
  } catch (err) {
    res.status(500).send({ message: 'Internal error' });
    console.log(err);
  }
};

module.exports = {
  getAllSpecies,
  createNewSpecies,
  getSpeciesById,
  getSpeciesByContinent,
  deleteSpeciesById,
  reinitializeData,
};
