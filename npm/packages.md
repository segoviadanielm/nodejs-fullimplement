

##### package -> contains package.json

package.json contains:

* list the package project depends on 
* version of package

init with 

        npm init

##### MODULE any on node_module that can be loaded by require()

not all modules are package -> only that have package.json are packages

package-lock.json is created for locking the dependency with the installed version (exact version of that package in your aplication)