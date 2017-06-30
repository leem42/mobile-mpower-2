

var frameModule = require("ui/frame"); // resonsible for app navigation
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;

var page;

var pageData = new observableModule.fromObject({
    groceryList: new ObservableArray([
        "Select ",
        "I want to help further research on Parkinson's disease"
    ])
});

exports.callNext = function(args) {
    console.log("navigate next");
    var index = page.getViewById("picker").selectedIndex;

    if(index == 1) {
            console.log("navigate next");
            frameModule.topmost().navigate("views/interest_two/interest_two");
    } 
}
 

exports.loaded = function(args) {
    // pageData.set("showDetails",true);    
     page = args.object;
     page.bindingContext = pageData;
}
