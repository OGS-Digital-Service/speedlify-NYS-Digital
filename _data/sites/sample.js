module.exports = {
	name: "Sample", // optional, falls back to object key
	description: "The default sites that get tested",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.ny.gov/",
		"https://www.governor.ny.gov/",
		"https://environmentalbondact.ny.gov/",
		"https://digital-service-analytics.netlify.app/",
		"https://digital.ny.gov/",
		"https://omh.ny.gov/omhweb/crisis/988.html?utm_medium=301&utm_source=988.ny.gov",
		"https://online2.ogs.ny.gov/greencleaning/"
	]
};