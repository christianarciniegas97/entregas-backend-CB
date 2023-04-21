const fs = require('fs');

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

    const id = this.products.length + 1;
    product.id = id 

    if( !product.title || !product.description || !product.price || !product.thumbnail || !product.stock || !product.code){
       
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
    
    await fs.promises.readFile(this.path, 'utf-8')

    let productid = this.products.find( e => e.id ===  id );

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
        const SearchedId = product.find((e) => e.id === productId);
        
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

async deleteProduct(productid){

    try{
        const dcontent = await fs.promises.readFile(this.path,"utf-8")
        
        const productsd = JSON.parse(dcontent);
    
        let searchidd = productsd.findIndex(e => e.id === productid)
        if(searchidd === -1){
            console.log("id not found, no is posible delete without id valid")
        }else{
            productsd.splice(searchidd, 2)
            await fs.promises.writeFile(this.path, JSON.stringify(productsd))
            console.log("product delete")
        }
    }catch (error) {
        console.log(error);
        }

}    

};



module.exports = ProductManager;


