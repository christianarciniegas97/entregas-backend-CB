import  express  from 'express';
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/', viewsRouter)
app.use('/realtimeproducts', rtpRouter)

// class instance is made

app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
  });

  const socketServer = new Server(httpServer) //Handshake --> server side

  socketServer.on('connection', socketClient =>{
      socketClient.on('productList', pList =>{
          socketServer.emit(pList)
      })
  })