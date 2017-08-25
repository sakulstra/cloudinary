Package.describe({
	name:"lmachens:cloudinary",
	summary: "Upload files to Cloudinary",
	version:"5.0.3",
	git:"https://github.com/lmachens/cloudinary"
});

Npm.depends({
	cloudinary: "1.9.0",
	"cloudinary-jquery": "2.3.0"
});

Package.on_use(function (api){
	api.versionsFrom('METEOR@1.0');

	// Core Packages
	api.use(["meteor-base@1.0.1","coffeescript","mongo","underscore"], ["client", "server"]);
	api.use(["check","random","reactive-var"], ["client","server"]);

	// External Packages
	api.use(["matb33:collection-hooks@0.7.3","audit-argument-checks"], ["client", "server"],{weak:true});

	// Cloudinary Client Side
	api.add_files(".npm/package/node_modules/cloudinary-jquery/cloudinary-jquery.min.js","client");

	// Core Files
	api.add_files("server/configuration.coffee", "server");
	api.add_files("server/signature.coffee", "server");

	api.add_files("client/functions.coffee", "client");

	api.export && api.export("Cloudinary",["server","client"]);
});

