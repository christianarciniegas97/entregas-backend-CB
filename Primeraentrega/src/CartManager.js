import fs from "fs";
import {v4 as uuid} from 'uuid';
import ProductManager from "./ProductManager";

const pr = new ProductManager('./Products.json')

class CartManager{

    constructor(path){
        this.path ='./src/carts.json';
   
    };
    
    idcart(id){
    const idc = uuid()
    id.id = idc;
    return(idc);
   };


   async getCarts(){
    const searchCarts = await fs.promises.readFile(this.path,'utf-8');
    return (searchCarts)
   };

   


};















