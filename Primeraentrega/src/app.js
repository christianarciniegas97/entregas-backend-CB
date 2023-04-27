import  express  from 'express';
import productRouter from './routes/product.router.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/product', productRouter);

// class instance is made

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
  });

