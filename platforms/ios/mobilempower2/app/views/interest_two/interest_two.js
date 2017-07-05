///////////////
// Imports   //
///////////////
var frameModule = require("ui/frame"); // resonsible for app navigation
var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;

/////////////////////
// Functionality   //
/////////////////////
var page;
var pageData = new observableModule.fromObject({
    groceryList: new ObservableArray([
        "Select ",
        "this study"
    ])
});


exports.callNext = function(args) {
    var index = page.getViewById("picker").selectedIndex;
    if(index == 1) {
            frameModule.topmost().navigate("views/eligibility/eligibility");
    } 
}
 
exports.loaded = function(args) {
    
    page = args.object;
    page.bindingContext = pageData;
}   
