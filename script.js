const bar=document.getElementById('mobile');
const clo=document.getElementById('close');
const nav =document.getElementById('nav-bar');

if(bar)
{
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(clo)
{
    clo.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}
