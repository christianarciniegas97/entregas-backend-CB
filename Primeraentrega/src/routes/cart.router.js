import  { Router } from "express";
import CartManagr from "../class/CartManagr.js";

const router = Router();
const classC = new CartManagr();


router.post('/',(req,res)=>{
    
  try {
      classC.CreatorCarts();
    res.status(200).send({status:"success"})
  } catch (error) {
    res.status(500).send("cart not found for error in server")
  }});

router.get('/:idc',(req,res) =>{
  try {
    const idc = req.params.idc
    const idf =  classC.GetproductinC(idc)
    res.status(200).send({idf:products})

  } catch (error) {
    res.status(500).send("error in server")
  }
});
 

router.post('/:idc/products/:pid', (req, res)=>{
  const idc = req.params.idc
  const pid= req.params.pid
  classC.addProductToCart(idc,pid)
  res.status(200).send(`producto ${pid} añadido al carrito ${idc}`)

})

export default router;