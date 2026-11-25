const loader=document.querySelector('.loader');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('out'),900));
const nav=document.querySelector('.nav'),menu=document.querySelector('.menu');
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const revealObserver=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revealObserver.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.eyebrow,.section-head h2,.work-item,.services-list article,.about-text,.statement h2').forEach(el=>{el.classList.add('reveal');revealObserver.observe(el)});
const hero=document.querySelector('.hero'),stage=document.querySelector('.logo-stage'),heroObject=document.querySelector('.hero-object');
if(hero&&stage&&matchMedia('(pointer:fine)').matches){hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;stage.style.transform=`rotateY(${x*18}deg) rotateX(${-y*13}deg) translateZ(18px)`});hero.addEventListener('pointerleave',()=>stage.style.transform='')}
let ticking=false;addEventListener('scroll',()=>{if(!heroObject||ticking)return;ticking=true;requestAnimationFrame(()=>{const y=Math.min(scrollY*.12,85);heroObject.style.marginTop=y+'px';ticking=false})},{passive:true});
const cursor=document.querySelector('.cursor');if(cursor&&matchMedia('(pointer:fine)').matches){addEventListener('pointermove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'})}
