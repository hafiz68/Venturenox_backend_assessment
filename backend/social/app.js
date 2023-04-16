const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');
const sequelize = require('./config/db');
const userRouter = require("./routes/user");
const tenantRouter = require("./routes/tenant");

const app = express();
const { users, tenant } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

app.use(userRouter);
app.use(tenantRouter);

app.use('/', async (req, res) => {

	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

});

sequelize.sync().then((result) => {
	app.listen(process.env.PORT || 4000, async () => {

		console.log('App started at port', process.env.PORT || 4000);
		await initProducer();

	});
}).catch(err => {
	console.log(err)
});
