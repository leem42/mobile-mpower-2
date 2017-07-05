
///////////////
// Imports   //
///////////////
var frameModule = require("ui/frame"); // resonsible for app navigation
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
var applicationSettings = require("application-settings");
var searchBarModule = require("ui/search-bar");


/////////////////////
// Functionality   //
/////////////////////
var page;
var age;
var pageData;

var searchBar = new searchBarModule.SearchBar();
searchBar.on(searchBarModule.SearchBar.submitEvent, function (args) {
    console.log("Search for " + args.object.text);
    //you can use the search text for what you want
});
searchBar.on(searchBarModule.SearchBar.clearEvent, function (args) {
    console.log("Clear");
});

exports.onSubmit = function(args){
    var searchbar = args.object;
    console.log("Search submit result: " + searchbar.text);


    let searchValue = searchBar.text.toLowerCase();

     myItems = new ObservableArray();
    if (searchValue !== "") {
        for (let i = 0; i < this.arrayItems.length; i++) {
            if (this.arrayItems[i].name.toLowerCase().indexOf(searchValue) !== -1) {
                this.myItems.push(this.arrayItems[i]);
            }
        }
    }
}

exports.onClear = function(args){
    console.log("clear search-bar text");
}


pageData = new observableModule.fromObject({
    locations: new ObservableArray([
        "Afganistan",
        "Albania",
        "Algeria",
        "American Samoa",
        "Andorra",
        "Angola",
        "Anguilla",
        "Antigua &amp; Barbuda",
        "Argentina",
        "Armenia",
        "Aruba",
        "Australia",
        "Austria",
        "Azerbaijan",
        "Bahamas",
        "Bahrain",
        "Bangladesh",
        "Barbados",
        "Belarus",
        "Belgium",
        "Belize",
        "Benin",
        "Bermuda",
        "Bhutan",
        "Bolivia",
        "Bonaire",
        "Botswana",
        "Brazil",
        "British Indian Ocean Ter",
        "Brunei",
        "Bulgaria",
        "Burkina Faso",
        "Burundi",
        "Cambodia",
        "Cameroon",
        "Canada",
        "Canary Islands",
        "Cape Verde",
        "Cayman Islands",
        "Central African Republic",
        "Chad",
        "Channel Islands",
        "Chile",
        "China",
        "Christmas Island",
        "Cocos Island",
        "Colombia",
        "Comoros",
        "Congo",
        "Cook Islands",
        "Costa Rica",
        "Cote DIvoire",
        "Croatia",
        "Cuba",
        "Curaco",
        "Cyprus",
        "Czech Republic",
        "Denmark",
        "Djibouti",
        "Dominica",
        "Dominican Republic",
        "East Timor",
        "Ecuador",
        "Egypt",
        "El Salvador",
        "Equatorial Guinea",
        "Eritrea",
        "Estonia",
        "Ethiopia",
        "Falkland Islands",
        "Faroe Islands",
        "Fiji",
        "Finland",
        "France",
        "French Guiana",
        "French Polynesia",
        "French Southern Ter",
        "Gabon",
        "Gambia",
        "Georgia",
        "Germany",
        "Ghana",
        "Gibraltar",
        "Great Britain",
        "Greece",
        "Greenland",
        "Grenada",
        "Guadeloupe",
        "Guam",
        "Guatemala",
        "Guinea",
        "Guyana",
        "Haiti",
        "Hawaii",
        "Honduras",
        "Hong Kong",
        "Hungary",
        "Iceland",
        "India",
        "Indonesia",
        "Iran",
        "Iraq",
        "Ireland",
        "Isle of Man",
        "Israel",
        "Italy",
        "Jamaica",
        "Japan",
        "Jordan",
        "Kazakhstan",
        "Kenya",
        "Kiribati",
        "Korea North",
        "Korea Sout",
        "Kuwait",
        "Kyrgyzstan",
        "Laos",
        "Latvia",
        "Lebanon",
        "Lesotho",
        "Liberia",
        "Libya",
        "Liechtenstein",
        "Lithuania",
        "Luxembourg",
        "Macau",
        "Macedonia",
        "Madagascar",
        "Malaysia",
        "Malawi",
        "Maldives",
        "Mali",
        "Malta",
        "Marshall Islands",
        "Martinique",
        "Mauritania",
        "Mauritius",
        "Mayotte",
        "Mexico",
        "Midway Islands",
        "Moldova",
        "Monaco",
        "Mongolia",
        "Montserrat",
        "Morocco",
        "Mozambique",
        "Myanmar",
        "Nambia",
        "Nauru",
        "Nepal",
        "Netherland Antilles",
        "Netherlands",
        "Nevis",
        "New Caledonia",
        "New Zealand",
        "Nicaragua",
        "Niger",
        "Nigeria",
        "Niue",
        "Norfolk Island",
        "Norway",
        "Oman",
        "Pakistan",
        "Palau Island",
        "Palestine",
        "Panama",
        "Papua New Guinea",
        "Paraguay",
        "Peru",
        "Phillipines",
        "Pitcairn Island",
        "Poland",
        "Portugal",
        "Puerto Rico",
        "Qatar",
        "Republic of Montenegro",
        "Republic of Serbia",
        "Reunion",
        "Romania",
        "Russia",
        "Rwanda",
        "St Barthelemy",
        "St Eustatius",
        "St Helena",
        "St Kitts-Nevis",
        "St Lucia",
        "St Maarten",
        "Saipan",
        "Samoa",
        "Samoa American",
        "San Marino",
        "Sao Tome &amp; Principe",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "Seychelles",
        "Sierra Leone",
        "Singapore",
        "Slovakia",
        "Slovenia",
        "Solomon Islands",
        "Somalia",
        "South Africa",
        "Spain",
        "Sri Lanka",
        "Sudan",
        "Suriname",
        "Swaziland",
        "Sweden",
        "Switzerland",
        "Syria",
        "Tahiti",
        "Taiwan",
        "Tajikistan",
        "Tanzania",
        "Thailand",
        "Togo",
        "Tokelau",
        "Tonga",
        "Trinidad",
        "Tunisia",
        "Turkey",
        "Turkmenistan",
        "Tuvalu",
        "Uganda",
        "Ukraine",
        "United Arab Erimates",
        "United Kingdom",
        "United States of America",
        "Uraguay",
        "Uzbekistan",
        "Vanuatu",
        "Vatican City State",
        "Venezuela",
        "Vietnam",
        "Virgin Islands (Brit)",
        "Virgin Islands (USA)",
        "Wake Island",
        "Yemen",
        "Zaire",
        "Zambia",
        "Zimbabwe"
        ]),
    age: 0,
});

exports.callNext = function(args) {
    var location = page.getViewById("location").text;
    if(location.length > 1) {
        applicationSettings.setString("location",location);
        frameModule.topmost().navigate("views/eligibility_three/eligibility_three");
    }
}
 

exports.loaded = function(args) {
    pageData = new observableModule.fromObject({
        age: 0 // default value
    });
    page = args.object;
    page.bindingContext = pageData;
    ageLoad = applicationSettings.getNumber("age");
    pageData.age = ageLoad;
}
