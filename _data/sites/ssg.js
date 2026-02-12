module.exports = {
	name: "SSG", // optional, falls back to object key
	description: "Site Generator web sites",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
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