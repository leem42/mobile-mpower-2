

var frameModule = require("ui/frame"); // resonsible for app navigation
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var applicationSettings = require("application-settings");

var ages = [];
var pageData;

exports.callNext = function(args) {
    var isComfy = page.getViewById("comfy").selectedIndex;
    if(isComfy == 1) {
        console.log("will change");
//        frameModule.topmost().navigate("views/congratulations/congratulations");
    }
} 

exports.loaded = function(args) {
    pageData = new observableModule.fromObject({
        comfyOpt: new ObservableArray(["  ", "comfortable"]),
        age: 0,
        location: " "
    });

    page = args.object;
    page.bindingContext = pageData;
    pageData.age = applicationSettings.getNumber("age");
    pageData.location = applicationSettings.getString("location");
    
}