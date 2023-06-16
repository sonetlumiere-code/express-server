import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import cors from 'cors';
const app = express();

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json())
app.use(cors());

// Configurar el middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('root');
});

app.get('/items', (req, res) => {
  const arrItems = [
    { id: 1, name: 'notebook' },
    { id: 2, name: 'iphone' },
  ];
  res.status(200).json({ items: arrItems })
});

app.get('/products', (req, res) => {
  
})

app.post('/products', async (req, res) => {
  const product = req.body;
  console.log(product);

  // logica de base de datos
  // const newProduct = await mongoose.save({ product })
  res.status(200).json({ data: 'asd' })
})

app.put('/product/:id', async (req, res) => {
  const id = req.params.id
})

app.delete('/product/:id', async (req, res) => {
  const productToDelete = req.params.id
})

app.get('/hello', (req, res) => {
  res.status(200).json({ message: 'hello world'})
});

app.listen(3131, () => {
  console.log('server on port 3131')
});
