
////////////////
//  Imports   //
////////////////
var frameModule = require("ui/frame"); // resonsible for app navigation
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var applicationSettings = require("application-settings");

/////////////////////
// Functionality   //
/////////////////////
var x;
var ages = [];
for(var i = 18; i < 100; i++) {
    ages.push(i);
}
var pageData = new observableModule.fromObject({
    options: new ObservableArray(ages)
});

exports.callNext = function(args) {

    var index = page.getViewById("picker").selectedIndex + 18;
    applicationSettings.setNumber("age",index);
    frameModule.topmost().navigate("views/elig_two/elig_two");

}
 
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
}
