

var frameModule = require("ui/frame"); // resonsible for app navigation
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var applicationSettings = require("application-settings");

var page;
var age;
var pageData;

pageData = new observableModule.fromObject({
    groceryList: new ObservableArray(["age in array"]),
    age: 15
});

exports.callNext = function(args) {

    // var index = page.getViewById("picker").selectedIndex;
    console.log("clicked");

}
 

exports.loaded = function(args) {
    // page = args.object;
    // page.bindingContext = pageData;
    // age = applicationSettings.getNumber("age",index);
    // console.log(age);
}
