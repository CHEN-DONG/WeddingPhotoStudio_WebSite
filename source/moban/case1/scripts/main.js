$(function () {
    $('.slider').MainSlider({
        content: [
            {
                imageUrl: 'assets/topbag.jpg',
                imageTitle: '生如夏花'
            },
            {
                imageUrl: 'assets/topbag.jpg',
                imageTitle: '生如夏花'
            },
        ],
        isSlider:true
    });
});

$(function ($) {
    $.fn.extend({
        MainSlider: function MainSlider(options) {
            var that = this;
            var defaults = {
                isSlider: false,

            };
            options = $.extend({}, defaults, options);
            var methods = {
                render: function render() {
                    var content = options.content;
                    $.each(content, function (i) {
                        var imageUrl = content[i].imageUrl;
                        var imageTitle = content[i].imageTitle;
                        var imageHtml = '';
                         var infoHtml = '';
                        if (i == 0) {
                            imageHtml = '<div class="slider-img" id = "slier' + i +'"><img src="' + imageUrl + '" alt="' + imageTitle + '"> </div>';
                        } else {
                            imageHtml = '<div class="slider-img" id = "slier' + i +'" style="display:none"><img src="' + imageUrl + '" alt="' + imageTitle + '"> </div>';
                        }
                        $(that).append(imageHtml);
                       

                    })
                }
            };

            (function init() { 
                methods.render();
              
            })();
        }
    });



} (jQuery));