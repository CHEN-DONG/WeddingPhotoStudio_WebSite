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
            {
                imageUrl: 'assets/topbag2.jpg',
                imageTitle: '韩式浪漫'
            },
        ],
        isSlider: true,

    });
    $(".works-imgs").sliphover({
        duration: 300,

    });

});

$(function ($) {
    $.fn.extend({
        MainSlider: function MainSlider(options) {
            var that = this;
            var defaults = {
                isSlider: false,
                leftbtn: 'slider_left',
                rightbtn: 'slider_right',

            };
            var options = $.extend({}, defaults, options);
            var time = 1;
            var reverse = 0;
            var methods = {
                render: function () {
                    var imageHtml = '';
                    var infoHtml = '';
                    var content = options.content;
                    $.each(content, function (i) {
                        var imageUrl = content[i].imageUrl;
                        var imageTitle = content[i].imageTitle;

                        if (i == 0) {
                            imageHtml += '<div class="slider-img" id = "slier' + i + '"><img src="' + imageUrl + '" alt="' + imageTitle + '"></div>';
                            infoHtml += '<div class="slider-info selected-info" id="info' + i + '">' + imageTitle + '</div>';
                        } else {
                            imageHtml += '<div class="slider-img" id = "slier' + i + '" style="display:none"><img src="' + imageUrl + '" alt="' + imageTitle + '"></div>';
                            infoHtml += '<div class="slider-info" id="info' + i + '">' + imageTitle + '</div>';
                        }
                    });
                    var btnsHtml = '<div class="slider-btns"><div class="slider-btn" id="' + options.leftbtn + '"><img src="assets/ar-left.png"></div><div class="slider-btn" id="' + options.rightbtn + '"><img src="assets/ar-right.png"></div></div>';
                    $(that).append(imageHtml);
                    $(that).append(btnsHtml);
                    $('#slider_left').after(infoHtml);
                },
                bindSlideBtns: function () {
                    $(that).find('#' + options.leftbtn).bind('click', this.sliderLeft);
                    $(that).find('#' + options.rightbtn).bind('click', this.sliderRight);
                },
                sliderLeft: function () {

                    var sliderImages = $('.slider-img');
                    var sliderInfos = $('.slider-info');
                    $.each(sliderImages, function (i) {
                        if (sliderImages[i].style.display === "" && i !== 0) {
                            $(sliderImages[i]).hide();
                            $(sliderImages[i - 1]).animateCss("bounceInLeft");
                            $(sliderImages[i - 1]).show();
                            $(sliderInfos[i]).removeClass("selected-info");
                            $(sliderInfos[i - 1]).addClass("selected-info");
                            time--;
                            if (time === 1) {
                                reverse = 0;
                            }
                            return false;
                        }
                    });
                },
                sliderRight: function () {
                    var sliderImages = $('.slider-img');
                    var sliderInfos = $('.slider-info');
                    $.each(sliderImages, function (i) {
                        if (sliderImages[i].style.display === "" && i !== sliderImages.length - 1) {
                            $(sliderImages[i]).hide();
                            $(sliderImages[i + 1]).animateCss("bounceInRight");
                            $(sliderImages[i + 1]).show();
                            $(sliderInfos[i]).removeClass("selected-info");
                            $(sliderInfos[i + 1]).addClass("selected-info");
                            time++;
                            if (time === options.content.length) {
                                reverse = 1;
                            }
                            return false;
                        }
                    });

                },
                autoSlider: function () {
                    setInterval(function () {
                        if (reverse === 0) {
                            methods.sliderRight();
                        } else {
                            methods.sliderLeft();
                        }

                    }, 4500);
                }
            };

            (function init() {
                methods.render();
                methods.bindSlideBtns();
                if (options.isSlider === true) {
                    methods.autoSlider();
                }
            })();
        }
    });

    $.fn.extend({
        MainBrowse:function MainBrowse () {
            var that = this;
            var defaults = {
                leftbtn:'browse_left',
                rightbtn:'browse_right'
            }
        }
    });

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function () {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });



} (jQuery));