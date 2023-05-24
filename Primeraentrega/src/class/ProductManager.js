import fs from "fs"
import { v4 as uuid } from 'uuid';

class ProductManager{
    
    constructor(path){
        this.products = [];
        this.path = path;
    }
    
async getProducts(){

    const readProduct = await fs.promises.readFile(this.path, 'utf-8') 
    
    const readproduts = JSON.parse(readProduct);

    return readproduts

};


async addProduct(product){

    const id = uuid();
    product.id = id
  
    if( !product.id || !product.title || !product.description || !product.price || !product.thumbnail || !product.stock || !product.code || !product.category || !product.status){
       
        return console.log("missing values to complete")
    } 
    
    let codenv = this.products.find( e => e.code === product.code );

    if(codenv){
        return ;
    };

    const almacen = await fs.promises.readFile(this.path,'utf-8');

    const prodal = JSON.parse(almacen)

    prodal.push(product)
    
   await fs.promises.writeFile(this.path, JSON.stringify(prodal))

   this.products.push(product);
    
    console.log(`product ${product.title} was added to cart successfully`);
};

async getProductById(id){
    
    const idget = await fs.promises.readFile(this.path, 'utf-8')
    const psidget = JSON.parse(idget)

    let productid = psidget.find( e => e.id ===  id );

    if(!productid){
        console.error(`product with ${id}, not found`);
        return;
    }

    else{
       const almid = JSON.stringify(productid)
        return almid;
    }
    
};

async updateProduct(productId, field) {
    
    try {
        const contenido = await fs.promises.readFile(this.path, "utf-8");
        const product = JSON.parse(contenido);
        const SearchedId = product.find((e) => e.id == productId);
        
        if (!SearchedId) {
        console.log('Id not found');
        } else {
            SearchedId.title = field.title ?? SearchedId.title;
            SearchedId.description = field.description ?? SearchedId.description;
            SearchedId.price = field.price ?? SearchedId.price;
            SearchedId.thumbnail = field.thumbnail ?? SearchedId.thumbnail;
            SearchedId.code = field.code ?? SearchedId.code;
            SearchedId.stock = field.stock ?? SearchedId.stock;
        await fs.promises.writeFile(this.path, JSON.stringify(product));
        }
        } catch (error) {
        console.log(error);
        }
    }

async deleteProduct(id){

    try{
        const dproduct = await fs.promises.readFile(this.path,'utf-8');
        const psPd = JSON.parse(dproduct);
        let idS = psPd.find( e => e.id == id)
        
        if(!idS){
            return console.log("id not found, no is posible delete without id valid")
        }
        const ddproduct = psPd.filter(prod => prod.id != idS.id)
        await fs.promises.writeFile(this.path, JSON.stringify(ddproduct))
        console.log("product delete")
        

    }catch (error) {
        console.log(error);
        }

}    

};


export default ProductManager;
