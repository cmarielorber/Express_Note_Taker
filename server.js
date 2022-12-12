//dependency
const express = require ('express');
//creates app
const app = express();
//PORT variable
const PORT = process.env.PORT || 3001;
//connect to JSON and connect PORT and public folder
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));
//connect to routes
const apiRoutes = require('./routes/apiRoutes');
app.use(apiRoutes);
const htmlRoutes = require('./routes/htmlRoutes');
app.use(htmlRoutes);

//creqate server listener
app.listen(PORT, () => console.log('Listening on PORT: ${PORT}'));