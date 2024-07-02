const express = require('express');
const cors = require('cors');
const multer = require('multer');
const commerceRoutes = require('./routes/commerceRoutes');
const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use('/api/commerce', upload.single('ImagenLogotipo'), commerceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
