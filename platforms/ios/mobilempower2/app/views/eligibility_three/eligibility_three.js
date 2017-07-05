
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
var ages = [];
var pageData;

exports.callNext = function(args) {
    var isComfy = page.getViewById("comfy").selectedIndex;
    if(isComfy == 1) {
       frameModule.topmost().navigate("views/congrats/congrats");
    }
} 

exports.loaded = function(args) {
    pageData = new observableModule.fromObject({
        comfyOpt: new ObservableArray(["select an option", "comfortable using my phone"]),
        age: 0,
        location: " "
    });

    page = args.object;
    page.bindingContext = pageData;
    pageData.age = applicationSettings.getNumber("age");
    pageData.location = applicationSettings.getString("location");
    
}