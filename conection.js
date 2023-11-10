const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/pagar', async (req, res) => {
    try {
      const response = await axios.post('https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi', req.body);
      res.json(response.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


//url: 'http://localhost:3001/pagar',
