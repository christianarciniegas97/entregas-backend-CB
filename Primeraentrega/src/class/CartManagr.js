import fs from "fs";
import { pid } from "process";
import {v4 as uuid} from 'uuid';


class CartManagr{

    constructor(){
        this.path = '../src/json/Carts.json';
    };

    
    idcart(id){
    const idc = uuid()
    id = idc;
    return(idc);
   };

   async getidCart(idc){
    const bd = await fs.promises.readFile(this.path,'utf8');
    const pBD = JSON.parse(bd);

    let fidc = pBD.find( e => e.idc == idc);
      if(fidc) return fidc
      
   };

   async GetproductinC(idc){
    const gcart = await this.getidCart(idc);
    console.log(gcart)

    if(!gcart){
      return false
  }      
  return(gcart.products)
    
   }

   async getCarts(){
    const searchCarts =  await fs.promises.readFile(this.path,'utf-8');
    const parsecarts = JSON.parse(searchCarts)
    return (parsecarts)
   };

  async CreatorCarts(){
    const bd = await fs.promises.readFile(this.path,'utf8')
    const pBD = JSON.parse(bd)
    const  idc = this.idcart()

    const newCart= {idc,products: this.products =[]};
      pBD.push(newCart)
    
    await fs.promises.writeFile(this.path, JSON.stringify(pBD));
        console.log(`cart create with ${idc}`)

   };
   
   
     addProductToCart = async (idc,pid)=>{
       
            const bd = await fs.promises.readFile(this.path,'utf8');
            const pBD = JSON.parse(bd);
            
            const fYd = pBD.findIndex( e => e.idc == idc);
            const pdindex = pBD[fYd].products.findIndex( e => e.pid == parseInt(pid));

            if(pdindex == -1){
                let addtoproduct ={pid:+pid,quanty: 1};
                pBD[fYd].products.push(addtoproduct);
                console.log(addtoproduct)
              
            }else{
             pBD[fYd].products[pdindex].quanty++
            }
              await fs.promises.writeFile(this.path,JSON.stringify(pBD));  
        
    };





};

   




export default CartManagr;