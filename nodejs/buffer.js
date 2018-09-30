/**
 * Created by welcome on 2017/5/15.
 */
var StringDecoder=require('string_decoder').StringDecoder;
var sd= new StringDecoder;
var buffer=new Buffer('珠峰');
console.log(sd.write(buffer.slice(0,4)));
console.log(sd.write(buffer.slice(4)));