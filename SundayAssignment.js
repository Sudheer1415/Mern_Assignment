
console.log("Fibonacci output");

var n = prompt("Enter the size of fibbobnaci series");
var a = 0;
var b = 1;

console.log(a);
console.log(b);
var c;
for (i = 2; i <= n; i++) {

    c = a + b;

    console.log(c);
    a = b;
    b = c;

}

console.log( " Prime numbers output");

var m = prompt("Enter the end range of prime numbers");
var j ,k;
for(j=2;j<=m;j++)
    {
        var t=0;
        for(k=1;k<=j;k++)
        {
            if(j%k==0)
            {
                t++;
            }
        }
         
       if(t==2)
        {
            console.log(j);
        }
    }

