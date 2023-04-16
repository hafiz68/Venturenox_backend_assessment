const { tenant, users } = require("./../models/index");

const processMessage = async (kafkaMessage) => {

	//Start working here
	// console.log(kafkaMessage);

	if (kafkaMessage.event_name == "tenant_created") {
		try {
			await tenant.create({
				data: kafkaMessage.properties
			});
		}
		catch (error) {
			console.log(error);
		}
	}
	else if (kafkaMessage.event_name == "user_created") {
		try {
			await users.create({
				data: kafkaMessage.properties
			});
		}
		catch (error) {
			console.log(error);
		}
	}

};

module.exports = { processMessage };