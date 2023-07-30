function show(x,y)
{
    let count=0;
    const t=setInterval(()=>{
        const a=new Date();
        const b=a.toLocaleString();
        document.getElementById('timer').innerHTML = b;
        count++;
        if(count===y)
            clearInterval(t)
    },x*1000)
}
show(1,10)