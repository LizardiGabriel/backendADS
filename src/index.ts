import  express  from 'express';
import adminRoutes from './routes/adminRoutes';
import anfitrionRoutes from './routes/anfitrionRoutes';

const app = express();
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/anfitrion', anfitrionRoutes);

app.get('/', (req, res) => {
  res.send('Hello World 2');
});


// implementaciones 




app.listen(3000, () => {
    console.log('Server ready at localhost:3000');

});

