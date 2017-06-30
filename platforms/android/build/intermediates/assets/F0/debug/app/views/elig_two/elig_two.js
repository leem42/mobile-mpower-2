

var frameModule = require("ui/frame"); // resonsible for app navigation
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var applicationSettings = require("application-settings");

var page;
var age;
var pageData;

pageData = new observableModule.fromObject({
    groceryList: new ObservableArray(["age in array"]),
    age: 0,
});

exports.callNext = function(args) {
    var location = page.getViewById("location").text;
    console.log(location);
    if(location.length > 1) {
        applicationSettings.setString("location",location);
        frameModule.topmost().navigate("views/eligibility_three/eligibility_three");
    }
}
 

exports.loaded = function(args) {
    pageData = new observableModule.fromObject({
        age: 0
    });
    page = args.object;
    page.bindingContext = pageData;
    ageLoad = applicationSettings.getNumber("age");
    pageData.age = ageLoad;
}
