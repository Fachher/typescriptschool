namespace outterNamespace{
    export namespace innerNamespace{
        export let x = 1;
    }
}

// alias for namespace
import aliasForNamespace = outterNamespace.innerNamespace;
console.log(aliasForNamespace.x);
