$('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            var width = $(window).width();
            if(width < 991) {
                $('.navbar-expand-lg').removeClass('active');
                	
            }				
            $('html,body').animate({
                scrollTop: (target.offset().top) - 80
            }, 700);
            return false;
        }
    }
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('.scroll-to-section a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
        menu = target;
           var target = $(this.hash);
        $('html, body').stop().animate({
            scrollTop: (target.offset().top) - 79
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.scroll-to-section a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - 80 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.scroll-to-section a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


//navbar toggler with cooldown time

const myFunction = (function setup () { 
// const prevents from reassigning
  const coolDown = 370 // 400ms cooldown
  let lastClick = Date.now() - coolDown // to start fresh

function startCoolDown () {
    lastClick = Date.now() // maybe useless function
}
function checkCoolDown () {
    const notOver = Date.now() - lastClick < coolDown
    if (notOver) alert('stop spamming the server !')
    // using an alert it will block javascript loops
    return !notOver
}

return function (x) {
    if (checkCoolDown()) {
    startCoolDown()
        x.classList.toggle("change");
        
      // do your stuff with arguments here
    }
}
})()

// jQuery for highlight
function highlight(){
    $('#highlight').addClass("highlight");// the # included is the id
    setTimeout(function () {
        $('#highlight').removeClass('highlight');
    }, 2000);
}


// the below codes are maybe useful ones
// navbar toggle----code 1
// function toggleDropdown() {
//     var dropdownMenu = document.getElementById("dropdownMenu");
//     var subMenu = document.getElementsByClassName("dropdown");
//     dropdownMenu.classList.toggle("show");
    
// }

//code---2
// $(document).on("click", "#YourID", function toggleDropdown() {
//     var isChecked=document.getElementsByClassName("dropdown").checked;
//     if(isChecked == true){
//         subMenu.classList.toggle("dropdown");
//     }
//     alert("test");
// });


// code------3
// $(document).ready(function() {
//     $('#templatemo_main_nav').on('hidden.bs.collapse', function () {
//         console.log('triggered');      
//         $('#dropdown-d').collapse('hide');
//     });
// });

// dropdown arrow symbol transform// maybe useful

// document.addEventListener('DOMContentLoaded', function () {
//     var servicesDropdown = document.getElementById('servicesDropdown');
//     var serviceDrop = document.getElementById('service-drop');

//     // Add event listener for collapse event
//     servicesDropdown.addEventListener('hidden.bs.collapse', function () {
//         // Reset animation when the services dropdown is collapsed
//         serviceDrop.style.transform = 'translate3d(0,0,0) rotate(0deg)';
//     });

//     // Add event listener for shown event
//     servicesDropdown.addEventListener('shown.bs.collapse', function () {
//         // Reset animation when the services dropdown is expanded
//         serviceDrop.style.transform = 'translate3d(0,3px,0) rotate(-90deg)';
//     });
// });