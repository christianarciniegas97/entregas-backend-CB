import  { Router } from "express";
import ProductManager from "../ProductManager.js"

const newpr = new ProductManager("./products.json")
const router = Router();



//GETS
router.get('/', async (req,res) =>{
    const tproduct = await newpr.getProducts()
    res.send({tproduct})
})
router.get('/:pid', async (req,res) => {

  const tipoparams = parseInt(req.params.pid);
  
  const paramsid = await newpr.getProducts();
  
  let findbyid = paramsid.find(paramsid => paramsid.id === tipoparams );
  if(!findbyid){
    res.status(404).send(`don't haven't product with this id, please add an id correct`)
  } 
  res.status(200).send(findbyid);

})
router.get('/products', async (req,res) => {

  let limit = req.query.limit;
  
  let products = await newpr.getProducts();

  if(!limit){

    res.status(200).send(products)
  
  }
  let rqlmit = products.slice(0, limit);
       res.send(rqlmit);
      
  });
//POST 
router.post('/',(req,res)=>{
  const addpt = req.body;
  newpr.addProduct(addpt);
  res.send({status:"success"})
})
//PUT 
router.put('/:pid', async (req, res) => {  
  let id = req.params.pid ;
  const upID =  await newpr.getProducts();

  let findid = upID.find(upID => upID.id == id);
  if (!findid) {    
    res.status(404).send({ status: "error", message: "product not found" });    
    return;  
  }  
  let {title,code,description,price,thumbnail,stock,category} = req.body;
  if(title) findid.title = title;
  if(code) findid.code = code;
  if(description) findid.description = description;
  if(price) findid.price = price;
  if(thumbnail) findid.thumbnail = thumbnail;
  if(stock) findid.stock = stock;
  if(category) findid.category = category;
  res.status(200).send({ status: "success", message: "product updated" }); 
});

//Delet 
router.delete('/:pid', async (req, res) => {
  const id = parseInt(req.params.pid);
  
  const bd = await newpr.getProducts();
  
  let product = bd.findIndex(bd => bd.id === id)
  
  if (!product === - 1) {    
    res.status(404).send({ status: "error", message: "product not found" });    
    return;  
  } else{
    bd.splice(product,1)
  }
 const bdd =  bd.filter(product => product.id != id);
 return res.status(200).send({bdd, status : "success", mensaje : "product delete"});
  
});

export default router;