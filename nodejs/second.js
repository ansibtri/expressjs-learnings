harry = {
    name: "Harry",
    favNum: 3,
    developer: true
}
console.log(exports,require,module,__filename,__dirname);
module.exports = harry;

// In Node.js, every module is wrapped by a function called the "module wrapper function." 
//This wrapper function provides a layer of encapsulation and helps ensure that variables 
//and functions defined within a module's scope do not leak into the global namespace.
// The module wrapper function is a function that is automatically created by Node.js 
//for each module. When Node.js loads a module, it wraps the entire module code in this function, like this:
(function (exports, require, module, __filename, __dirname) {
    harry = {
        name: "Harry",
        favNum: 3,
        developer: true
    }
    module.exports = harry;
})

// The wrapper function takes five arguments:

// exports: An object that is used to export values from the module.
// require: A function that is used to load other modules.
// module: An object that represents the current module. It includes information about the module, 
            //such as its filename and exports object.
// __filename: The full path to the current module file.
// __dirname: The full path to the directory that contains the current module file.

// By wrapping the module code in this function, Node.js ensures that variables and 
//functions defined within the module's scope are not exposed to the global namespace. 
//This helps prevent naming conflicts and other issues that can arise when multiple modules 
//are loaded into the same environment.

// The module wrapper function is an important concept in Node.js module system, and understanding how it works can help you write more modular and maintainable code.