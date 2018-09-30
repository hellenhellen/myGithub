/**
 * Created by welcome on 2017/6/8.
 */
let a=function(a){
    return function(c){
        console.log(a,c)
    }
};
a(1)(2);