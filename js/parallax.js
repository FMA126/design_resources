
const plaxMain = function () {
    window.addEventListener('scroll', function (e) {
        let scrolled = window.pageYOffset;
        
        const background = document.querySelector('.main');
        const tint = document.querySelector('.tile-main');
        const headLine = document.querySelector('.main-h2');
        const para = document.querySelector('.p-h2');
        
        
        background.style.backgroundPosition = `50% ${scrolled *0.1}px`;
        tint.style.transform = `translate(0, ${scrolled * 0.2}px)`;
        headLine.style.transform = `translate(0, -${scrolled * 0.3}px)`;
        para.style.transform = `translate(0, -${scrolled * 0.3}px`;

        /*
        let section = document.querySelector('section');
        let secPadTop = window.getComputedStyle(section).paddingTop;
        let secPadTopNum = parseInt(secPadTop.slice(0, secPadTop.length - 2));
        //let secPadTop = secStyle.paddingTop;
        let projCont = document.querySelector('.proj-cont');

        //console.log(headLine.offsetTop);
        //console.log(scrolled + secPadTopNum);
        //console.log(screen.height);
        console.log(scrolled);
        console.log(projCont.offsetTop);
        console.log(screen.height);
        let startPlax = projCont.offsetTop - screen.height;
        
        if (scrolled >= projCont.offsetTop - screen.height) {
                projCont.style.transform = `translate(0, -${(scrolled - startPlax) * 0.1}px)` ;
        }
        
        */
        
        })
        
        
};


export { plaxMain }