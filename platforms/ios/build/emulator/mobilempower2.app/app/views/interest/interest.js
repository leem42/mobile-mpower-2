//  Controls the first page of mobile application interface

///////////////
// Imports   //
///////////////
var frameModule = require("ui/frame"); // resonsible for app navigation
var observableModule = require("data/observable");
var ObservableArray = require("data/observable-array").ObservableArray;

/////////////////////
// Functionality   //
/////////////////////
var page;
var pageData = new observableModule.fromObject({
    groceryList: new ObservableArray([
        "Select answer",
        "I want to help further research on Parkinson's disease"
    ])
});
exports.callNext = function(args) {
    var index = page.getViewById("picker").selectedIndex;
    if(index == 1) {
            frameModule.topmost().navigate("views/interest_two/interest_two");
    } 
}
exports.loaded = function(args) {
    // pageData.set("showDetails",true);    
     page = args.object;
     page.bindingContext = pageData;
}
