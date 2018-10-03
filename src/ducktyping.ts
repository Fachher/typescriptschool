interface Foo {
    bla():string;
}

class Bar {
    bla():string{
        return "blabla";
    }
}

// structural typing or duck typing
function saySomething(entry: Foo) {
    console.log(entry.bla());
}

saySomething(new Bar());

let dsae: Foo = {
    bla(){
        return "asdf";
    }
};



