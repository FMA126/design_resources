const navDropDown = function () {
    let navToggle = document.querySelector('.nav-toggle-arrow');
    let arrowDirection = document.getElementById('arrow-drop-down');
    let navList = document.getElementById('h-nav-ul');
    let navMenu = document.querySelector('.nav-ul');
    
    let showNav = false;

    navList.addEventListener('click', function() {
        setTimeout(function() {
            if (showNav) {

                navMenu.style.visibility = 'hidden';
                navMenu.style.height = '0px';
                arrowDirection.className = "fas fa-angle-down fa-2x";

                showNav = !showNav;
            }}, 200);
    })

    navToggle.addEventListener('click', function() {
        
        //let header = document.querySelector('.header');
        showNav = !showNav;
        if (showNav) {
            navMenu.style.visibility = 'visible';
            navMenu.style.height = 'auto';
            arrowDirection.className = "fas fa-angle-up fa-2x";
        }else {
            navMenu.style.visibility = 'hidden';
            navMenu.style.height = '0px';
            arrowDirection.className = "fas fa-angle-down fa-2x";
        }
    })
}
/*
const navChange = function () {
    window.addEventListener('scroll', function (e) {
        let scrolled = window.pageYOffset;
        let titleFirstWord = document.querySelector('.title-first-word');
        let titleSecondWord = document.querySelector('.title-second-word');
        let titleWrapper = document.querySelector('.title-wrapper');
        let dRLogo = document.querySelector('.dr-logo');
        console.log(scrolled);

        if (titleFirstWord.style.opacity >= 0 || titleSecondWord.style.opacity >= 0) {
            titleFirstWord.style.opacity = 1 - (scrolled * 0.003);
            titleSecondWord.style.opacity = 1 - (scrolled * 0.005);
        }
        

        if (titleFirstWord.style.opacity <= 0) {
            titleSecondWord.style.height = '0px';
            titleFirstWord.style.height = '0px';
            titleWrapper.style.margin = '0px';
            dRLogo.style.visibility = 'visible';
            dRLogo.style.height = '60px';
            
            if (dRLogo.style.opacity <1) {
                dRLogo.style.opacity = (scrolled - 334) * 0.005;
            }

        }
        console.log(scrolled);

    })
}

*/
export { navDropDown }