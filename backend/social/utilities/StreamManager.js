const { tenant, users } = require("./../models/index");

const processMessage = async (kafkaMessage) => {

	//Start working here
	console.log(kafkaMessage);

	if (kafkaMessage.event_name == "tenant_created") {
		try {
			const data = {
				id: kafkaMessage.properties.id,
				address: kafkaMessage.properties.address.street + " " + kafkaMessage.properties.address.city + " " + kafkaMessage.properties.address.country + " " + kafkaMessage.properties.address.county,
				city: kafkaMessage.properties.city,
				state: kafkaMessage.properties.state,
				country: kafkaMessage.properties.country,
				zipCode: kafkaMessage.properties.zipCode,
				phone: kafkaMessage.properties.phone,
				webUrl: kafkaMessage.properties.webUrl
			}
			await tenant.create(data);
		}
		catch (error) {
			console.log(error);
		}
	}
	else if (kafkaMessage.event_name == "user_created") {
		try {
			const data = {
				id: kafkaMessage.properties.id,
				firstName: kafkaMessage.properties.firstName,
				lastName: kafkaMessage.properties.lastName,
				department: kafkaMessage.properties.department,
				designation: kafkaMessage.properties.designation,
				imageUrl: kafkaMessage.properties.imageUrl,
				city: kafkaMessage.properties.city,
				country: kafkaMessage.properties.country,
				bio: kafkaMessage.properties.bio,
				tenantId: kafkaMessage.properties.tenantId,
			}
			await users.create(data);
		}
		catch (error) {
			console.log(error);
		}
	}

};

module.exports = { processMessage };