
let words = document.querySelectorAll('.word');

words.forEach(function(e, index){
    e.style.left = 15 * index + '%';
    TweenMax.to(e, 200, {left: '+=400%'})
})

setInterval(function(){
    words.forEach(function(e){
        if(e.getBoundingClientRect().x > document.documentElement.clientWidth){
            TweenMax.to(e, 0, {left: -1*e.getBoundingClientRect().width})
            TweenMax.to(e, 200, {left: '+=400%'})
        }
    })
})