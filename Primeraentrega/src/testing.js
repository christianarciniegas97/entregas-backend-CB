import ProductManager from "../src/class/ProductManager.js";
import CartManager from "./class/CartManagr.js";



const nproduct = new ProductManager("../src/json/Products.json");
const cartnew = new CartManager("../src/json/Carts.json")


 async function createrproduct(){

    
   
    const newProduct = {
        code: 1,
        title: 'iphone 13',
        description:  "this phone is amazing",
        price:  500,
        thumbnail: 'not url',
        stock:  500
    };
      
    const twoitem = {
        
        code: 92,
        title: 'iphone 12',
        description:  "this phone is amazing",
        price:  500,
        thumbnail: 'not url',
        stock:  500,
        category: "phone",
        status: true
    };

    const threeitem = {
        code: 3,
        title: 'iphone 8',
        description:  "this phone is amazing",
        price:  5500,
        thumbnail: 'not url',
        stock:  20,
        category: "phone",
        status: true
    };
    const fouritem = {
        code: 4,
        title: 'iphone xr',
        description:  "this phone is amazing",
        price:  500,
        thumbnail: 'not url',
        stock:  500
    };

    const fiveitem = {
        code: 5,
        title: 'iphone 11 plus',
        description:  "this phone is amazing",
        price:  2200,
        thumbnail: 'not url',
        stock:  20
    };
    
    const sixitem = {
        code: 6,
        title: 'iphone 6',
        description:  "this phone is blue",
        price:  2200,
        thumbnail: 'not url',
        stock:  20
    };
    const sevenitem = {
        code: 7,
        title: 'iphone 7',
        description:  "this phone is red",
        price:  2200,
        thumbnail: 'not url',
        stock:  20
    };   
        
    
    

   
    // await nproduct.addProduct(twoitem);
    const id = cartnew.idcart()
    await cartnew.CreatorCarts(id,threeitem)
    /*

    await nproduct.addProduct(threeitem);
    await nproduct.addProduct(fouritem);
    await nproduct.addProduct(fiveitem);
    await nproduct.addProduct(sixitem);
    await nproduct.addProduct(sevenitem);

    const readprod = await nproduct.getProducts();
    console.log(readprod);
    
    
    let contenido = await nproduct.getProductById();
    console.log(contenido)

    let modificar = await nproduct.updateProduct(2,{title:"iphone"} );
    console.log( await nproduct.getProducts(modificar))
    */
 
    
 };
    

 createrproduct()
