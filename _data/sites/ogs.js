module.exports = {
	name: "Ogs", // optional, falls back to object key
	description: "OGS Sites Testing",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://www.ogs.ny.gov/",
		"https://ogs.ny.gov/design-construction",
		"https://ogs.ny.gov/procurement/ogs-centralized-contracts-list",
		"https://ogs.ny.gov/parking",
		"https://ogs.ny.gov/procurement"
	]
};