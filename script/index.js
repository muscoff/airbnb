const topHeader = document.querySelector('.top-header');
const topSearch = document.querySelector('.top-search');
const experience = document.querySelector('.experience');
const experienceBtn = document.querySelector('.experience-btn');
const topHeight = topHeader.offsetHeight;
const ew = document.querySelector('#effect-width');
const trip = document.querySelector('#trip');

let div = document.createElement('div');
div.style.height = topHeight + 'px';
document.querySelector('.break').appendChild(div);

window.addEventListener('scroll', e=>{
    const scrolled = scrollY;
    let screenWidth = window.innerWidth;
    
    if(screenWidth > 820){
        if(scrolled > topHeight){
            topHeader.classList.add('light');
            topSearch.classList.add('display-none');
            experience.classList.add('display-none');
            experienceBtn.classList.add('active');
        }else{
            topHeader.classList.remove('light');
            topSearch.classList.remove('display-none');
            experience.classList.remove('display-none');
            setTimeout(()=>{
                experienceBtn.classList.add('display-none');
                experienceBtn.classList.remove('active');
            },);
            setTimeout(()=>{
                experienceBtn.classList.remove('display-none');
            },100);
        }
    }
});

document.querySelectorAll('.top-list-item').forEach(item=>{
    item.addEventListener('click', ()=>{
        document.querySelectorAll('.top-list-item').forEach(element=>{
            element.classList.remove('active');
        });
        item.classList.add('active');
    });
});

document.querySelectorAll('.div-input').forEach(item=>{
    item.addEventListener('click', ()=>{
        document.querySelectorAll('.div-input').forEach(element=>{
            element.classList.remove('white-bg');
            element.classList.remove('active');
        });
        item.classList.add('white-bg');
        item.classList.add('active');
    });
});

experienceBtn.addEventListener('click', ()=>{
    setTimeout(()=>{
        experienceBtn.classList.add('display-none');
        experienceBtn.classList.remove('active');
    },);
    setTimeout(()=>{
        experienceBtn.classList.remove('display-none');
    },100);
    experience.classList.remove('display-none');
    topSearch.classList.remove('display-none');
});

topSearch.addEventListener('click', ()=>{
    let row = topSearch.firstElementChild;
    let col9 = row.firstElementChild;
    let col3 = col9.nextElementSibling;
    let button = col3.querySelector('button');

    if(col9.classList.contains('col-9')){
        col9.classList.add('col-8');
        col9.classList.remove('col-9');
    }

    if(col3.classList.contains('col-3')){
        col3.classList.add('col-4');
        col3.classList.remove('col-3');
        button.classList.add('full');
    }
});

effectWidth = () => {
    let screenWidth = window.innerWidth;

    if(screenWidth <= 420){
        ew.style.width = '300%';
        trip.style.width = '200%';
    }else if (screenWidth > 420 & screenWidth <=620){
        ew.style.width = '250%';
        trip.style.width = '170%';
    }else if(screenWidth > 620 & screenWidth <= 820){
        ew.style.width = '200%';
        trip.style.width = '150%';
    }else if(screenWidth > 820 & screenWidth <=920){
        ew.style.width = '150%';
        trip.style.width = '120%';
    }else{
        if(ew.hasAttribute('style')){
            ew.removeAttribute('style');
        }
        if(trip.hasAttribute('style')){
            trip.removeAttribute('style');
        }
    }

    setTimeout(() => {effectWidth();},100);
}
effectWidth();

introImageSwap = () => {
    let intro = document.querySelector('#data-intro');
    let perfect = document.querySelector('img.perfect');

    let replaceImage = intro.getAttribute('data-small');
    let imgAttr = intro.getAttribute('data-img');

    let replacePerf = perfect.getAttribute('data-small');
    let perfectImg = perfect.getAttribute('data-img');
    let screenWidth = window.innerWidth;

    if(screenWidth <= 620){
        intro.src = replaceImage;
        perfect.src = replacePerf;
    }else{
        intro.src = imgAttr;
        perfect.src = perfectImg;
    }
    setTimeout(() => {introImageSwap();},1000);
}
introImageSwap();

let inspireNum = 0;
let total = document.querySelectorAll('.inspire-div').length;
let percentage = 100 / total;
document.querySelectorAll('.inspire .bubble').forEach((element, index)=>{
    let max = total - 1;
    if(index === 0){
        element.addEventListener('click', ()=>{
            if(inspireNum === 0){
                if(element.classList.contains('active')){
                    element.classList.remove('active');
                    element.nextElementSibling.classList.add('active');
                }
            }else{
                inspireNum = inspireNum - 1;
                final = inspireNum * percentage;
                ew.style.transform = `translateX(-${final}%)`;
                if(inspireNum === 0){
                    if(element.classList.contains('active')){
                        element.classList.remove('active');
                        element.nextElementSibling.classList.add('active');
                    }
                }else{
                    if(!element.nextElementSibling.classList.contains('active')){
                        element.nextElementSibling.classList.add('active');
                    }
                }
            }
        });
    }else{
        element.addEventListener('click', ()=>{
            inspireNum = inspireNum + 1;
            if (inspireNum <= max){
                final = inspireNum * percentage;
                ew.style.transform = `translateX(-${final}%)`;
                if(inspireNum ===  max){
                    if(element.classList.contains('active')){
                        element.classList.remove('active');
                        element.previousElementSibling.classList.add('active');
                    }
                }else{
                    if(!element.previousElementSibling.classList.contains('active')){
                        element.previousElementSibling.classList.add('active');
                    }
                }
            }else{
                discover = discover - 1;
            }
        });
    }
});

let discover = 0;
let percent = 50;
document.querySelectorAll('.discover .bubble').forEach((element, index)=>{
    let max = 1;
    if(index === 0){
        element.addEventListener('click', ()=>{
            if(discover === 0){
                if(element.classList.contains('active')){
                    element.classList.remove('active');
                    element.nextElementSibling.classList.add('active');
                }
            }else{
                discover = discover - 1;
                final = discover * percent;
                trip.style.transform = `translateX(-${final}%)`;
                if(discover === 0){
                    if(element.classList.contains('active')){
                        element.classList.remove('active');
                        element.nextElementSibling.classList.add('active');
                    }
                }
            }
        });
    }else{
        element.addEventListener('click', ()=>{
            discover = discover + 1;
            if (discover <= max){
                final = discover * percent;
                trip.style.transform = `translateX(-${final}%)`;
                if(discover ===  max){
                    if(element.classList.contains('active')){
                        element.classList.remove('active');
                        element.previousElementSibling.classList.add('active');
                    }
                }
            }else{
                discover = discover - 1;
            }
        });
    }
});