import express from 'express';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

app.listen(3333, () => console.log('Server is running........'));