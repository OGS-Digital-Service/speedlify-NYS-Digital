module.exports = {
	name: "Reimagine", // optional, falls back to object key
	description: "Reimagine Sites Testing",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://ny.gov/",
		"https://www.ny.gov/services/apply-snap",
		"https://www.ny.gov/programs",
		"https://www.ny.gov/services"
	]
};