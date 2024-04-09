const express = require('express');
const app = express();

const pets = [
  { name: 'Argos', owner: 'Oliver'}, 
  { name: 'Flash', owner: 'Oliver'},
  { name: 'Bruno', owner: 'Charlotte'},
  { name: 'Duke', owner: 'William'},
  { name: 'Max', owner: 'Evelyn'},
  { name: 'Courage', owner: 'Amelia' }
]

app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
});

app.get('/api/v1/pets/:animalName/:animalOwner', (req, res) => {
  console.log(`REQ PARAMS:`, req.params);
  const { animalName, animalOwner } = req.params;

  const foundPet = pets.find((pet) => {
    return pet.name === animalName && pet.owner === animalOwner
  })
  res.send(foundPet);
});

app.get('/api/v1/pets', (req, res) => {
  let foundOwner = pets;
  if (req.query.owner) {
    foundOwner = pets.filter((pet) => {
      return pet.owner === req.query.owner;
    })
  }
  res.send(foundOwner);
});

app.listen(8080, () => {
  console.log(`listening on port 8080`);
});