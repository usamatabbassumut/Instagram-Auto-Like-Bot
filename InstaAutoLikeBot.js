

var count=0;
//func
setInterval(function(){
    
    var likebtn=document.querySelector('span.fr66n>button.wpO6b>.QBdPU>span '); //grab the like button
    var nextPost=document.querySelector('.coreSpriteRightPaginationArrow'); //grab the next arrow btn
    if(likebtn){
    likebtn.click();
    count++;
    console.log('Photo liked: '+count);
    
    }
    nextPost.click();
    
    },3000);

