'use strict';

const d = document.getElementById('d1');
d.style.display='flex';
d.style.justifyContent='center';
d.style.alignItems='center';
d.style.flexDirection='column';
d.style.height='100vh';
d.style.transition='background 0.2s linear';

const cta = document.getElementById('cta');
cta.style.display='flex';
cta.style.backgroundColor='180deg, #282B30 0%, #1E2124 100%';
cta.style.boxShadow='inset 0px 3px 20px rgba(0, 0, 0, 0.15)';
cta.style.height ='68px';
cta.style.width='136px';
cta.style.borderRadius='100px';
cta.style.position='relative';

const toggle = document.getElementById('toggle');
toggle.style.backgroundColor='180deg, #ECECEC 20.59%, #C9C9C9 85.35%)';
toggle.style.height='68px';
toggle.style.width='68px';
toggle.style.boxShadow='0px 0px 4px rgba(0, 0, 0, 0.35';
toggle.style.borderRadius='100px';
toggle.style.position='absolute';
toggle.style.transition='transform 0.2s linear';
toggle.style.display='flex';
toggle.style.justifyContent='center';
toggle.style.alignItems='center';

const p1=document.getElementById('p1');
p1.style.transition='transform 0.2s linear';
p1.style.color='#31353A';

const p2=document.getElementById('p2');
p2.style.paddingTop='16px';

const checkbox = document.getElementById('checkbox');
checkbox.style.display='none';
checkbox.style.position='absolute';

const checkboxListener = () => {
    checkbox.addEventListener('click', () =>{
        if (checkbox.checked) {
            d.style.backgroundColor='#31353A';
            toggle.style.transform='translateX(100%)';
            p1.innerText = 'ON';
            p1.style.color='white';
            p2.style.color='white';
            p2.innerText = 'Last turn off : ' + new Date().toLocaleString();
        } else {
            p2.innerText = 'Last turn on : ' + new Date().toLocaleString();
            p1.innerText = 'OFF';
            toggle.style.transform='translateX(0)';
            d.style.backgroundColor='white';
            p2.style.color='#31353A';
            p1.style.color='#31353A';
        }
    })
}

localStorage.setItem(checkboxListener(), JSON.stringify());
