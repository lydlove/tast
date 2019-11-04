window.addEventListener('load',function(){
    //轮播图
    var banner=document.querySelector('.banner');
    //鼠标移入移出
    banner.addEventListener('mouseenter',function(){
        prev.style.display ='block';
        next.style.display ='block';
        clearInterval(timer);
        timer=null;
    })
    banner.addEventListener('mouseleave',function(){
        prev.style.display ='none';
        next.style.display ='none';
        timer=setInterval(function(){
            next.click();
        },2000);
    })
    //动态生成li，绑定动画
    var ul=banner.querySelector('ul');
    var ol=document.querySelector('.promo-nav');
    var bannerwidth = banner.offsetWidth;
    ul.children[0].style.display='block';
    for(var i=0;i<ul.children.length;i++){
        var li=document.createElement('li');
            li.setAttribute('index',i);
            ol.appendChild(li);
            li.addEventListener('click',function(){
                for(var i=0;i<ol.children.length;i++){
                    ol.children[i].className='';
                }
                this.className='selected';
                var index = this.getAttribute('index');
                num=index;
                circle=index;
                animate(ul , -index*bannerwidth);
            })
    }
    ol.children[0].className='selected';
    //左右按钮
    var prev =document.querySelector('.prev');
    var next =document.querySelector('.next');
    var first=ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num=0;
    var circle=0;
    next.addEventListener('click',function(){
        if(num==ul.children.length-1){
            ul.style.left=0;
            num=0;
        };
        num++;
        animate(ul,-num*bannerwidth);
        circle++;
        if(circle==ol.children.length){
            circle=0;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
        }
        ol.children[circle].className='selected';
    });
    prev.addEventListener('click',function(){
        if(num==0){
            ul.style.left=-num *bannerwidth+'px';
            num=ul.children.length-1;
        };
        num--;
        animate(ul,-num*bannerwidth);
        circle--;
        if(circle<0){
            circle=ol.children.length-1;
        }
        for(var i=0;i<ol.children.length;i++){
            ol.children[i].className='';
            active[i].className='';
        }
        ol.children[circle].className='selected';
        active[circle].className='active';
   
    });
    //自动播放
    var timer=setInterval(function(){
        next.click();
    },1000);

    //导航条滑块
    var cunderline = document.querySelector('.nav-underline');
    var content = document.querySelector('.content-nav');
    var lis = content.querySelectorAll('li');
    var current = 0;
        for (var i = 0; i < lis.length; i++) {
                // (1) 鼠标经过把当前小li 的位置做为目标值
            lis[i].addEventListener('mouseenter', function() {
                animate(cunderline, this.offsetLeft);
            });
                // (2) 鼠标离开就回到起始的位置 
            lis[i].addEventListener('mouseleave', function() {
                animate(cunderline, current);
                });
                // (3) 当我们鼠标点击，就把当前位置做为目标值
            lis[i].addEventListener('click', function() {
                current = this.offsetLeft;
            });
        }
})