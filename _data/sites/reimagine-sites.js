module.exports = {
	name: "Reimagine", // optional, falls back to object key
	description: "Reimagine Sites Testing",
	options: {
		runs: 1,
		frequency: 1, // (in minutes)
	},
	urls: [
		"https://nygovd8devbox2.prod.acquia-sites.com/",
		"https://nygovd8devbox1.prod.acquia-sites.com/"
	]
};