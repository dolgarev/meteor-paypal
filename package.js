Package.describe({
	summary: "A paypal package that helps make restful API calls to Paypal",
	version: "1.2.0",
	name: "limemakers:paypal",
	git: "https://github.com/LimeMakers/meteor-paypal.git"
});

Npm.depends({
	"paypal-rest-sdk": "1.5.1"
});

Package.on_use(function(api) {
	api.versionsFrom("1.0");
	api.use(["meteorhacks:npm"], "server");
	api.use(["templating"], "client");
	api.add_files("paypal.js", ["client", "server"]);
	api.add_files(["paypal_credit_card_form.html", "paypal_credit_card_form.js"], "client");
});

Package.on_test(function(api) {
	//need to add some tests
});
