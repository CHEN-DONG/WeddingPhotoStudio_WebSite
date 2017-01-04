(function ($) {
    $.fn.extend({
        MainTab: function (options) {
            var that = this;
            var defaults = {
                leftBtnTitle: '全部优惠卷',
                rightBtnTitle: '未使用优惠券'
            };
            var options = $.extend({}, defaults, options);
            var methods = {
                render: function () {
                    var tabBtnsHtml = '<div class = "tab-btns"><div class = "left-btn tab-selected">' + options.leftBtnTitle + '</div><div class = "right-btn">' + options.rightBtnTitle + '</div></div>';
                    var leftListHtml = '<div class = "left-list"></div>'
                    var rightListHtml = '<div class = "right-list" style = "display:none"></div>'
                    var listItems = options.data
                    $(that).append(tabBtnsHtml);
                    $(that).append(leftListHtml);
                    $(that).append(rightListHtml);
                    $.each(listItems, function (i) {
                        allCouponHtml = '<div class = "coupon"><div class = "coupon-img"><img src="logo1.png"></div><div class = "coupon-detail"><h2>' + listItems[i].title + '</h2><p>'+ '兑换码：' + listItems[i].number + '</p><p>'+ '有效期:' + listItems[i].startTime + '-' + listItems[i].endTime + '</p></div></div>'
                        $('.left-list').append(allCouponHtml);
                    })
                }
            };
            (function init() {
                methods.render();
            })();
        }
    });

} (jQuery));

$(function () {
    $('#main_tab').MainTab({
        data: [
            {
                title: "血糖产品满200减20",
                number: "FWF855646545641561",
                startTime: "2016.11.20",
                endTIme: "2016.12.20",
                isUse: true
            },
            {
                title: "音响全场100元券",
                number: "FWF855646545641561",
                startTime: "2016.11.20",
                endTIme: "2016.12.20",
                isUse: false
            },
            {
                title: "50元全场通用卷",
                number: "FWF855646545641561",
                startTime: "2016.11.20",
                endTIme: "2016.12.20",
                isUse: true
            }
        ]
    });
});