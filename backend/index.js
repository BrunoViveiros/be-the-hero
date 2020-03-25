const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'Bruno Viveiros'
  });
});

app.listen(3333);
