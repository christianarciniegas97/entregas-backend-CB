const express = require('express');
const ProductManager = require('./ProductManager');
const app = express();

app.use(express.urlencoded({extended:true}));

// class instance is made
 const prexpress = new ProductManager('./Products.json');


app.get('/products', async (req,res) => {

let limit = req.query.limit;

let products = await prexpress.getProducts();
     
let rqlmit = products.slice(0, limit);
     res.send(rqlmit);
    
});

app.get('/products/:pid', async (req,res) => {

  const tipoparams = parseInt(req.params.pid);
  
  const paramsid = await prexpress.getProducts();
  
  let findbyid = paramsid.find(paramsid => paramsid.id === tipoparams );
  if(!findbyid){
    res.status(404).send(`don't haven't product with this id, please add an id correct`)
  } 
  res.status(200).send(findbyid);

})

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
  });

