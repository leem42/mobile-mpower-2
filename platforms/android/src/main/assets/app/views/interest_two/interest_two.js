var frameModule = require("ui/frame"); // resonsible for app navigation
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;

var page;

var pageData = new observableModule.fromObject({
    groceryList: new ObservableArray([
        "Select ",
        "this study"
    ])
});


exports.callNext = function(args) {
    console.log("next touched");
    var index = page.getViewById("picker").selectedIndex;
    if(index == 1) {
            console.log("navigate next");
            frameModule.topmost().navigate("views/eligibility/eligibility");
    } 
}
 

exports.loaded = function(args) {
    // pageData.set("showDetails",true);    
    page = args.object;
    page.bindingContext = pageData;
}   
