class Zhd{do(){console.log('do Zhd')}}
class Upg{do(){console.log('do Upg')}}

let efdse = new Zhd();

if(efdse instanceof Zhd) efdse.do();
if(efdse instanceof Upg) efdse.do();


const numberRegexp:RegExp = /^[0-9]+$/;
console.log(numberRegexp.test('9'));

class Fosdf{
    constructor(x:String){}
}

let asdef:typeof Fosdf = Fosdf;

let asdefa = new asdef('12');

function callbackHandler(list:String[], callback: (value:String) => void){
   list.forEach(callback) ;
}

callbackHandler(['123','456'], x => console.log(x));

