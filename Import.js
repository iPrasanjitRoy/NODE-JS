Harry = {
    Name: "Harry",
    FavNum: 35,
    Developer: true
};
module.exports = Harry;


// In Node JS, Every JavaScript File IS Treated AS A CommonJS Module 
// CommonJS Modules Have A Module Wrapper Function That Helps Encapsulate The Code Within The Module And Provides Access To Specific Variables And Functions
// This Module Wrapper Function IS Automatically Applied To Each Module By Node JS 
(function (exports, require, module, __filename, __dirname) {
    // Your Module Code Goes Here
});

console.log(exports, require, module, __filename, __dirname);



