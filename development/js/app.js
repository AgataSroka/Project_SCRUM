document.addEventListener('DOMContentLoaded', function () {

    var b_next = document.getElementById('next');
    var b_prev = document.getElementById('prev');
    var tab  = document.querySelectorAll('li');

    var lists =[];
    for (var i=0; i<tab.length; i++) {
        lists.push(tab[i]);
    }

    var slideNr = 0;

    console.log(b_next);
    console.log(b_prev);
    console.log(lists);


    lists[0].classList.add('visible');

    function onClickNext() {
        lists[slideNr].classList.remove('visible');
        slideNr++;
        if(slideNr==lists.length) {
            slideNr=0
        }
        lists[slideNr].classList.add('visible');

        console.log("działa");
    }

    b_next.addEventListener('click',onClickNext );

    function  onClickPrev() {
        lists[slideNr].classList.remove('visible');
        slideNr--;
        if(slideNr<0){
            slideNr=lists.length-1
        }
        lists[slideNr].classList.add('visible');
        console.log('działa');
    }

    b_prev.addEventListener('click',onClickPrev );

});