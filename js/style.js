/**
 * Created by Administrator on 2017/7/21.
 */
$(function(){
    var box=$("#image-text");
    var dl=box.find("dl");

    dl.each(function(index,item){
        $(item).on('mouseenter',function(){
            $(this).find('.Inout').stop().animate({'width':'275px','height':"185px"},350)
        }).on('mouseleave',function(){
            $(this).find('.Inout').stop().animate({'width':"0",'height':'0'},350)
        })
    })
})

$('.img').on('mouseenter',function(){
    $(this).find('.pic').stop().animate({'width':'120%','height':'120%'},300)
}).on('mouseleave',function(){
    $(this).find('.pic').stop().animate({'width':'100%','height':'100%'},300)
})