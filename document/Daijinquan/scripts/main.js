(function($){
    $.fn.extend({
        MainTab:function(options){
            var that = this;
            var defaults = {
                leftBtnTitle:'全部优惠卷',
                rightBtnTitle:'未使用优惠券'
            };
            var options = $.extend({},defaults,options);
            var methods = {
                render:function(){
                    var tabBtnsHtml = '<div class = "tab-btns"><div class = "left-btn tab-selected">'+ options.leftBtnTitle +'</div><div class = "right-btn">'+ options.rightBtnTitle +'</div></div>';
                    var tabListHtml = '<>'
                    $(that).append(tabBtnsHtml);
                }
            };
             (function init() {
                methods.render();
            })();
        }
    });

}(jQuery));

$(function(){
    $('#main_tab').MainTab();
});