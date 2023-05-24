import  { Router } from "express";
import ProductManager from "../class/ProductManager.js"

const newpr = new ProductManager("../json/Products.json")
const router = Router();



//GETS
router.get('/', async (req,res) =>{
  try {
    let limit = req.query.limit;
    let tproduct = await newpr.getProducts();

      if(limit){
        tproduct = tproduct.slice(0, limit);
      } 
        res.status(200).send({tproduct})
      } catch (error) {
      res.status(500).send('error in server')
    }
});

router.get('/:pid', async (req,res) => {

  try {
    const tipoparams = req.params.pid;
    let findbyid = await  newpr.getProductById(tipoparams);
    
    return  res.status(200).send(findbyid);

  } catch (error) {
    res.status(500).send('error in server')
  }
});

//POST 
router.post('/',(req,res)=>{
  const addpt = req.body;
  newpr.addProduct(addpt);
  res.send({status:"success"})
})
//PUT 
router.put('/:pid', async (req, res) => {  
  try {
    const id = req.params.pid;
    const fieldbody = req.body;
    const update = await newpr.updateProduct(id,fieldbody);
    res.status(200).send(update)

  } catch (error) {
    res.status(500).send('error in server')
}});

//Delet 
router.delete('/:pid', async (req, res) => {
  try {
    const pid = req.params.pid 
     await newpr.deleteProduct(pid)
    res.status(200).send('product delet')
    
  } catch (error) {
    res.status(500).send('error in server')
  }
});

export default router;