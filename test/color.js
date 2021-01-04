
var Link = {
    setColor:function(color){
    // var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < alist.length){
    //         console.log(alist[i]);
    //         alist[i].style.color = color;
    //         i = i + 1;
    //     }
    $('a').css('color',color);
    }
}



var Body = {
    setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color);
    },
    setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
    }
}


function nightDayHandler(self){
     var target = document.querySelector('body');
    
    if(self.value === '야간모드로 보기'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '라이트모드로 보기';
        Link.setColor('powderblue');

       
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '야간모드로 보기';
        Link.setColor('blue');
    }
}