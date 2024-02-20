const express = require('express')
const { get } = require('https')
var app = express()

app.get('/',function(req,res) {
    res.send('start server')

})
//multiply 
function mult1(n){
    let f=n
    let m=[]
    for(let i=1;i<=10;i++){
        c.push(f*i)
    }
    return m

}
app.get('/multiply/:num',function(req,res) {
    var mul=mult1((req.params.num))
    res.json(mul)
})
//factorial number
function factorial(num){
    let f=1
    for( let i=1;i<=num;i++)
    {
    f=f*i
    }
    return f
    
}
app.get('/fact/:num',function(req,res) {
    
    var fact =factorial(req.params.num)
    res.json(fact)

})
//fibonachi
function fib1(n){
    let b=0
    const seq=[1,1]
    for(let i=2;i<=n;i++){
b=(i-1)+(i-2)
    }
    return b


}
app.get('/fib/:num',function(req,res) {
    var fib=fib1(req.params.num)
    res.json(fib)


})
//comulative sum
function cum1(n){
    let f=0
    for( let i=0;i<=n;i++)
    {
    f=f+i
    }
    return f}
app.get('/comulativ/:num',function(req,res) {
    var cum =cum1(req.params.num)
    res.json(cum)

})


var server =app.listen(7090,function()

{
    var host =server.address().address
    var port =server.address().port
})

