namespace iterator{

    let letters:string[] = ['a','b','c','d'];

    for (let key in letters) {
        console.log(key);
    }

    for (let value of letters) {
        console.log(value);
    }


}
