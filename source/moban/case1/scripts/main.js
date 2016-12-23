$(function () {
    $('.slider').MainSlider({
        content: [
            {
                imageUrl: 'assets/topbag.jpg',
                imageTitle: '生如夏花'
            },
            {
                imageUrl: 'assets/topbag1.jpg',
                imageTitle: '法式香颂'
            },
        ],
        isSlider: true
    });
});

$(function ($) {
    $.fn.extend({
        MainSlider: function MainSlider(options) {
            var that = this;
            var defaults = {
                isSlider: false,
                leftbtn: 'slider_left',
                rightbtn: 'slider_right'
            };
            options = $.extend({}, defaults, options);
            var methods = {
                render: function () {
                    var content = options.content;
                    $.each(content, function (i) {
                        var imageUrl = content[i].imageUrl;
                        var imageTitle = content[i].imageTitle;
                        var imageHtml = '';
                        var infoHtml = '';
                        if (i == 0) {
                            imageHtml = '<div class="slider-img" id = "slier' + i + '"><img src="' + imageUrl + '" alt="' + imageTitle + '"> </div>';
                        } else {
                            imageHtml = '<div class="slider-img" id = "slier' + i + '" style="display:none"><img src="' + imageUrl + '" alt="' + imageTitle + '"> </div>';
                        }
                        $(that).append(imageHtml);
                    })
                    btnsHtml = '<div class="slider-btns"><div class="slider-btn" id="' + options.leftbtn + '"><img src="assets/ar-left.png"></div><div class="slider-btn" id="' + options.rightbtn + '"><img src="assets/ar-right.png"></div></div>';
                    $(that).append(btnsHtml);
                },
                bindSlideBtns: function () {
                    $(that).find('#' + options.leftbtn).bind('click', this.sliderLeft);
                    $(that).find('#' + options.rightbtn).bind('click', this.sliderRight);
                },
                sliderLeft:function(){
                   var imgs = $('.slider-img')
                },
                sliderRight:function(){
                  
                    $('#slier1').hide();
       
                    $('#slier0').show();
                }
            };

            (function init() {
                methods.render();
                methods.bindSlideBtns();
            })();
        }
    });



} (jQuery));