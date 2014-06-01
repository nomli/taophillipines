var tao ="";
(function($){
	tao = {
        getDevice:function(){
            var envs = ['xs', 'sm', 'md', 'lg'];

            $el = $('<div>');
            $el.appendTo($('body'));

            for (var i = envs.length - 1; i >= 0; i--) {
                var env = envs[i];

                $el.addClass('hidden-'+env);
                if ($el.is(':hidden')) {
                    $el.remove();
                    return env;
                }
            };
        },
		main:function(){
			var w = $(window),
				wHeight = w.height(),
				panels = $(".block"),
				nav = $(".sub-wrap"),
                navTog = $('.test');
                
				
				panels.each(function(i,ele){
					var self = $(ele),
						scrollTop = w.scrollTop(),
						posTop = self.position().top,
						scrllTop = w.scrollTop();
					self.css({
						height:wHeight
					});
					
				});
				
                (function(){
                   //CLICK TO SLIDE func
                   var links = $(".navbar-default .navbar-nav > li > a,a.btn-apply"),
                       offcanvas = $(".offcanvas");
                    links.bind("click",function(){
                        $('html, body').animate({
                            scrollTop: $( $(this).attr('href') ).offset().top
                        }, 500);
                        return false;
                    });
                }());
		},
        map:function(){
            var navigate = $(".navigate"),
                overlay = $(".map-container .overlay");
            navigate.on("click",function(){
               $(this).toggleClass("off");
               overlay.toggleClass("hide");
            });
        },
		navFunction:function(){
			var $window = $(window),
                nav = $(".sub-wrap"),
                nt = $(".navbar-toggle"),
                body = $("body"),
                links = $(".navbar-default .navbar-nav > li > a"),
                scrollTimeout;
            if(this.tao.getDevice() === "xs"){
                links.bind("click",function(){
                     nt.trigger("click");
                });
                nt.on("click",function(){
                    body.toggleClass("offcanvas");
                });
            }

			$window.scroll(function () {
				if (scrollTimeout) {
					// clear the timeout, if one is pending
					clearTimeout(scrollTimeout);
					scrollTimeout = null;
				}
				scrollTimeout = setTimeout(scrollHandler, 250);
			});

			scrollHandler = function () {
				if($window.scrollTop() > 1){
                    nav.addClass("showNav");
                }else{
                    nav.removeClass("showNav");
                }
			};
		},
		init:function(){
            var self = this;
            $.each(self,function(i,ele){
                if(i !== "init"){
                    setTimeout(ele,0);
                }
            });
        }
	}
    tao.init();
})(jQuery);