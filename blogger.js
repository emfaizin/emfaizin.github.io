<script type='text/javascript'>
      //<![CDATA[
        function angkaToRp(angka) {
          var rupiah = '';    
          var angkarev = angka.toString().split('').reverse().join('');
          for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
          return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
        }
        /* alert(angkaToRp(10000000)); -> Rp 10.000.000 */

        function rpToAngka(rupiah) {
          return parseInt(rupiah.replace(/[^0-9]/g, ''), 10);
        }
        /* alert(rpToAngka("Rp 10.000.000")); -> 10000000 */

      //]]>
    </script>
<script type='text/javascript'>
        //<![CDATA[
        /* jsindexNhome */

        /* Photo -------------------------------------------------------------------- */

        $('.itemPost').each(function(){
          $(this).find('.productPhoto').prepend('<div class="productPhotoWrapper"></div>');
          var productPhotoUrl = $(this).find('.productPhoto > a:first').attr('href'),
              productPhotoUrlResize = productPhotoUrl.replace("s1600","w250-h313-c"),
              productURL = $(this).find(".productTitle a").attr('href');
          $(this).find('.productPhotoWrapper').append('<a href="'+productURL+'" class="lazy-bg" data-src="'+productPhotoUrlResize+'"></a>');

          var productPhotoUrl2 = $(this).find('.productPhoto > a:first').next().attr('href');
          if(productPhotoUrl2 != null) {
            var productPhotoUrlResize2 = productPhotoUrl2.replace("s1600","w250-h313-c");
            $(this).find('.productPhotoWrapper').append('<a href="'+productURL+'" class="lazy-bg" data-src="'+productPhotoUrlResize2+'"></a>');
          }
          $(this).find('.productPhoto > a').remove();
          var stock = $(this).find('.productDetail').data('stock');
          if(stock === 'off') {
            $(this).find('.productPhoto').append('<div class="ribbon"><small class="text">'+tw_config.stock_habis+'</small></div>');
          }
        });
        /* jsindexNhome */
        //]]>
      </script>
<script type='text/javascript'>
        //<![CDATA[
        /* jshome */

        /* slideHome  -------------------------------------------------------------------- */

        $('#slideHome .owl-carousel').owlCarousel({
          loop:true,
          autoplay:true,
          autoplayTimeout:4000,
          autoplayHoverPause:true,
          margin:0,
          nav:false,
          autoHeight:true,
          items:1
        });

        /* jshome */
        //]]>
      </script>
<script type='text/javascript'>
      //<![CDATA[
      /* jsglobal */

    /* JS Navigasi -------------------------------------------------------------------- */
        $(window).scroll(function() {
            $('section').each(function() {
                var id = $(this).attr('id');
                if ($(window).scrollTop() >= $('#' + id).offset().top - $(window).height() / 2) {
                    $('.menu a').removeClass('active');
                    $('.menu a.' + id).addClass('active');
                } else {
                    $('.menu a.' + id).removeClass('active');
                }
            });

            if ($(window).scrollTop() >= $('html').offset().top + 1) {
                $('.navigasi').addClass('toggle');
            } else {
                $('.navigasi').removeClass('toggle');
            }
            var timer = null;
            window.addEventListener('scroll', function() {
                if(timer !== null) {
                    clearTimeout(timer);        
                }
                timer = setTimeout(function() {
                    $('.navigasi').removeClass('toggle');
                }, 3000);
            }, false);
        });

        /* slideReview  loopPlay -------------------------------------------------------------------- */
          $(window).bind('load',function(){
          $('.slideReview .owl-carousel').owlCarousel({
            loop: true,
            center: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            nav: false,
            autoHeight: false,
            items:3,
            responsive: {
              // breakpoint from 0 up
              0: {
                items: 1,
                stagePadding: 60,
                margin:10,
              },
              // breakpoint from 480 up
              768: {
                items: 2,
              },
              // breakpoint from 768 up
              1068: {
                margin: 20,
                items: 3,
              }
            }
          });
        });

        /* brandSection  loopPlay --------------------------------------------------------- */
        $(window).bind('load',function(){
        $('.brand_logo .owl-carousel').owlCarousel({
          loop: true,
          center: true,
          autoplay: true,
          autoplayTimeout: 4000,
          smartSpeed: 5000,
          autoplayHoverPause: false,
          nav: false,
          dots: false,
          autoHeight: false,
          margin: 30,
          responsive: {
            // breakpoint from 0 up
            0: {
              items: 2,
              center: false,
             },
            // breakpoint from 480 up
            768: {
              items: 5,
             }
            }
          });
        });

    /* embedYoutube2  -------------------------------------------------------------------- */
    /* --- Kualitas Thumbnail ---
    http://img.youtube.com/vi/ID-VIDEO/0.jpg (480x360px)
    http://img.youtube.com/vi/ID-VIDEO/1.jpg (120x90px)
    http://img.youtube.com/vi/ID-VIDEO/2.jpg (120x90px)
    http://img.youtube.com/vi/ID-VIDEO/3.jpg (120x90px)
    http://img.youtube.com/vi/ID-VIDEO/maxresdefault.jpg (1920x1080px)
    http://img.youtube.com/vi/ID-VIDEO/sddefault.jpg (640x480px)
    http://img.youtube.com/vi/ID-VIDEO/hqdefault.jpg (480x360px)
    http://img.youtube.com/vi/ID-VIDEO/mqdefault.jpg (320x180px)
    http://img.youtube.com/vi/ID-VIDEO/default.jpg (120x90px)
    */

    (function(){
    
    //select all elements with class .yt-lazyload
    var youtube = document.querySelectorAll('.yt-lazyload');
    
    //for each element execute:
    for(var i=0; i<youtube.length; i++){
        
        //VARIABLES
        var data_id     = youtube[i].dataset.id,
            data_random = youtube[i].dataset.random, //TO DO: In future versions - change to data_thumb [breaking change!!!] [??????]
            data_alt    = youtube[i].dataset.alt,
            yt_image    = new Image(),
            yt_playbtn  = document.createElement('div'),
            yt_logo     = document.createElement('a');
        
        //image - thumbnail
        yt_image.classList.add('yt-lazyload-img');
        yt_image.src = 'https://img.youtube.com/vi/'+data_id+'/'+data_random+'.jpg';
        yt_image.alt = ''+data_alt+'';
        
        //load thumbail after they are loaded
        yt_image.addEventListener('load',function(){
            youtube[i].appendChild(yt_image);
        }(i));
                
        //play btn
        yt_playbtn.classList.add('yt-lazyload-playbtn');
        youtube[i].appendChild(yt_playbtn);
                
        //logo link
        //TO DO: In future versions - if data-logo="0" do not create this [??????]
        yt_logo.classList.add('yt-lazyload-logo');
        yt_logo.href    = 'https://youtu.be/' + data_id;
        yt_logo.target  = '_blank';
        yt_logo.rel     = 'noreferrer';
        youtube[i].appendChild(yt_logo);
        
        //create iframe onclick play-btn
        youtube[i].querySelector('.yt-lazyload-playbtn').addEventListener('click',function(){
            var yt_container = this.parentElement,
                yt_iframe    = document.createElement('iframe');
                yt_iframe.src = 'https://www.youtube.com/embed/' + yt_container.dataset.id + '?autoplay=1&modestbranding=1';
                yt_iframe.setAttribute('allow','accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture');
                yt_iframe.setAttribute('allowfullscreen','');
                yt_container.appendChild(yt_iframe);
          });
        }
      })();

      $('.quickedit').removeAttr('onclick');
      $('.quickedit').removeAttr('target');
      $('.quickedit').addClass('popWin');
      $('.quickedit').attr('data-popWidth',600);
      $('.quickedit img').remove();
      $('.quickedit').append('<i class="icon ion-md-create"></i>');

      var arr_socmed = tw_socmed;
      $.each(arr_socmed, function(key, value) {
        if(key != null && value != '') {
          $('#follow .followBtn, .followBtn2, .followBtn-nav').append('<a class="popWin '+key+'" data-popWidth="1280" href="'+value+'"><i class="icon ion-logo-'+key+'"></i></a>');
        //$('#follow .followBtn, .followBtn2, .followBtn-nav').append('<a class="popWin '+key+'" data-popWidth="1280" href="'+value+'"><svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'+key+'"></use></svg></a>');
        }
      });

      //$(document.body).append('<div id="page-loader"></div>');
      $(document).ready(function() {
        $('#page-loader').fadeIn(200).delay(500).fadeOut(300);
      });
      $(window).on('load', function() {
        $('.poptamv').removeClass('open');
        $.magnificPopup.close();
      });
      $(window).bind('load',function(){
        $('iframe').each(function(){
          var url = $(this).attr('data-src');
          $(this).attr('src',url);
          $(this).removeAttr('data-src');
        });
      });
      $('img').each(function(){
        var url = $(this).attr('data-src');
        $(this).attr('src',url);
        $(this).removeAttr('data-src');
      });
      $('.lazy-bg').each(function(){
        var url = $(this).attr('data-src');
        $(this).attr('style','background-image:url("'+ url +'");');
        $(this).removeAttr('data-src');
        $(this).removeClass('lazy-bg');
      });
      $(window).on('scroll', function() {
        $('header').each(function(){
          if ($(window).scrollTop() >= 1 ) {
            $(this).addClass('onScroll');
          } else {
            $(this).removeClass('onScroll');
          }
        });
      });

      $(".productTitle").each(function(){
        var detail = $(this).parents('.itemPost').find('.productDetail');
        $(this).prependTo(detail);
      });

      $('.productPrice').each(function(){
        var price = $(this).text(),
            discount = $(this).data('discount-percent'),
            discount_price = price - price * discount / 100;

        var realPrice = '';
        $(this).after( "<span class='productPrice_after'>Test</span>" );
        if(discount != '') {
          $(this).next('.productPrice_after').html('<small><span>-'+discount+'%</span><s>'+angkaToRp(price)+'</s></small><b>'+angkaToRp(discount_price)+'</b>');
          var realPrice = discount_price;
        } else {
          $(this).next('.productPrice_after').html('<b>'+angkaToRp(price)+'</b>');
          var realPrice = price;
        }
        $(this).attr('data-selected',realPrice);
        $(this).parents('.itemPost').attr('data-price',realPrice);
      });

      /* Lightbox  -------------------------------------------------------------------- */

      $('.lightbox').each(function() {
        $(this).magnificPopup({
          type: 'image',
          verticalFit: false,
          gallery: {
            enabled:true
          },
          callbacks: {
            beforeOpen: function() {
              // just a hack that adds mfp-anim class to markup 
               this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
               this.st.mainClass = this.st.el.attr('data-effect');
            }
          },
          closeOnContentClick: true,
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
      });
      $('a[href*="bp.blogspot.com"]').each(function() {
        $(this).addClass('lightbox');
      });
      $('.pageBody a:has(img)').each(function() {
        $(this).addClass('');
      });
      $('.gallery').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
          delegate: 'a.lightbox', // the selector for gallery item
          type: 'image',
          preload: [1,2],
          verticalFit: false,
          gallery: {
            enabled:true
          },
          closeOnContentClick: true,
          midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
      });
      $(document).ready(function() {
        $('.lightframe').magnificPopup({
            // disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            preloader: false,

            fixedContentPos: false
          });
      });

    /* Lightbox viewOrderNotif  -------------------------------------------------------------------- */

      $('a[href*="googleusercontent.com"], a[href*="bp.blogspot.com"], .postingPostBody a:has(img)').each(function() {
        $(this).addClass('lightbox');
      });
      $('.postingPostBody').each(function() {
        $(this).magnificPopup({
          delegate: 'a.lightbox',
          type: 'image',
          preload: [1,2],
          verticalFit: false,
          gallery: {
            enabled:true
          },
          closeOnContentClick: true,
          midClick: true
        });
      });
      $(window).bind('load', function() {
        $('.slideReview, .orderNotif').each(function() {
          $(this).magnificPopup({
            delegate: 'a.lightbox',
            type: 'image',
            preload: [1,2],
            verticalFit: false,
            gallery: {
              enabled:true
            },
            closeOnContentClick: true,
            midClick: true
          });
        });
        $('.lightframe').magnificPopup({
          // disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          preloader: false,
          fixedContentPos: false
        });
      });

     /* contactAgent load -------------------------------------------------------------------- */

            $(window).on("click", function() {
            $("#bwa .bwa-box").hide();
            $("#bwa .bwa-btn").fadeIn()
        });
        $("#bwa").each(function() {
            $(this).on("click", function(f) {
                f.stopPropagation()
            });
            var a = $(this).attr("data-link");
            var e = $(this).attr("data-nomor");
            var d = $(this).attr("data-logo");
            var c = $(this).attr("data-nama");
            var b = $(this).attr("data-pesan");
            var title_adm = $(this).attr("data-title-admin")
            var link_adm = $(this).attr("data-link-admin");
            var no_adm = $(this).attr("data-nomor-admin");
            var img_adm = $(this).attr("data-foto-admin");
            var nm_adm = $(this).attr("data-nama-admin");
            var psn_adm = $(this).attr("data-pesan-admin");
            var link_cs = $(this).attr("data-link-cs");
            var title_cs = $(this).attr("data-title-cs")
            var no_cs = $(this).attr("data-nomor-cs");
            var img_cs = $(this).attr("data-foto-cs");
            var nm_cs = $(this).attr("data-nama-cs");
            var psn_cs = $(this).attr("data-pesan-cs");
            var title_ss = $(this).attr("data-title-ss")
            var link_ss = $(this).attr("data-link-ss");
            var no_ss = $(this).attr("data-nomor-ss");
            var img_ss = $(this).attr("data-foto-ss");
            var nm_ss = $(this).attr("data-nama-ss");
            var psn_ss = $(this).attr("data-pesan-ss");
            $(this).html('<a class="bwa-btn waFix kanan"><i class="wa"><svg xmlns="http://www.w3.org/2000/svg" class="logo-wa" width="512" height="512" viewBox="0 0 512 512"><path d="M414.73,97.1A222.14,222.14,0,0,0,256.94,32C134,32,33.92,131.58,33.87,254A220.61,220.61,0,0,0,63.65,365L32,480l118.25-30.87a223.63,223.63,0,0,0,106.6,27h.09c122.93,0,223-99.59,223.06-222A220.18,220.18,0,0,0,414.73,97.1ZM256.94,438.66h-.08a185.75,185.75,0,0,1-94.36-25.72l-6.77-4L85.56,427.26l18.73-68.09-4.41-7A183.46,183.46,0,0,1,71.53,254c0-101.73,83.21-184.5,185.48-184.5A185,185,0,0,1,442.34,254.14C442.3,355.88,359.13,438.66,256.94,438.66ZM358.63,300.47c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54,2.78-14.4,18-17.65,21.75-6.5,4.16-12.07,1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56,2.44-11.32c2.51-2.49,5.57-6.48,8.36-9.72s3.72-5.56,5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53,20.53,0,0,0-14.86,6.94c-5.11,5.56-19.51,19-19.51,46.28s20,53.68,22.76,57.38,39.3,59.73,95.21,83.76a323.11,323.11,0,0,0,31.78,11.68c13.35,4.22,25.5,3.63,35.1,2.2,10.71-1.59,33-13.42,37.63-26.38s4.64-24.06,3.25-26.37S364.21,303.24,358.63,300.47Z" style="fill-rule:evenodd"></path></svg><span class="count">1</span></i><span class="info"><i class="icon ion-md-done-all"></i><b>Hai</b>, butuh bantuan?</span></a>\
<!-- a class="bwa-btn"><figure></figure><span class="bwa-txt">' + b + '</span></a -->\
        <div class="bwa-box">\
        <div class="bwa-header">\
        <span class="bwa-logo" title="' + c + '"><figure></figure></span>\
        <div class="bwa-title">\
        <div class="bwa-wrap">\
        <span title="' + c + '"><b>' + c + '</b></span>\
        </div>\
        </div>\
        <a class="bwa-close"><svg id="close_btn" version="1.1" viewBox="0 0 512.011 512.011" x="0px" xml:space="preserve" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" y="0px"><path d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0  s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z" shape-rendering="optimizeQuality"></path></svg></a>\
        </div>\
        <div class="bwa-chat"><span>' + psn_adm + '</span></div>\
        <div class="bwa-wrapper-contact">\
        <div class="bwa-contact" id="bwa-adm">\
        <a href="' + link_adm + '" class="bwa-ava-contact tombol-wa" data-title="'+ title_adm +'" title="' + nm_adm + '"><figure></figure></a>\
        <div class="bwa-bio-contact">\
        <div class="bwa-wrap-contact">\
        <span><a href="' + link_adm + '" class="tombol-wa" data-title="'+ title_adm +'" title="' + nm_adm + '"><b>' + nm_adm + '</b></a></span><br/><small>Online</small>\
        </div>\
        </div>\
        </div>\
        <!-- div class="bwa-contact" id="bwa-cs">\
        <a href="' + link_cs + '" class="bwa-ava-contact tombol-wa contact-off" title="' + nm_cs + '"><figure></figure></a>\
        <div class="bwa-bio-contact">\
        <div class="bwa-wrap-contact">\
        <span><a href="' + link_cs + '" class="tombol-wa contact-off" title="' + nm_cs + '"><b>' + nm_cs + '</b></a></span><br/><small class="contact-off">Offline</small>\
        </div>\
        </div>\
        </div -->\
        <div class="bwa-contact" id="bwa-ss">\
        <a href="' + link_ss + '" class="bwa-ava-contact tombol-wa tombol-wa contact-off" data-title="'+ title_ss +'" title="' + nm_ss + '"><figure></figure></a>\
        <div class="bwa-bio-contact">\
        <div class="bwa-wrap-contact">\
        <span><a href="' + link_ss + '" class="tombol-wa contact-off" data-title="'+ title_ss +'" title="' + nm_ss + '"><b>' + nm_ss + '</b></a></span><br/><small class="contact-off">Offline</small>\
        </div>\
        </div>\
        </div>\
        </div>\
        <div class="bwa-footer"><small>⚡<i><b>Fast Respond</b></i> : Senin s/d. Sabtu | 08:00–16:00 WIB</small></div>\
        </div>');
            $(window).on("load", function() {
                setTimeout(function() {
                    $(".bwa-txt").addClass("muncul")
                }, 2000);
                $("#bwa .bwa-contact a").addClass("poptamv-btn");
                $("#bwa .bwa-wrap-contact a").addClass("poptamv-btn");
                $("#bwa figure").css("background-image", "url(" + d + ")");
                $("#bwa-adm figure").css("background-image", "url(" + img_adm + ")");
                $("#bwa-cs figure").css("background-image", "url(" + img_cs + ")");
                $("#bwa-ss figure").css("background-image", "url(" + img_ss + ")");
                $("#bwa .bwa-chat").css("background-image", "url(https://2.bp.blogspot.com/-Pa5-J1otcyk/Xor6aa8UuWI/AAAAAAAAHVY/y_DODK8WW6M-LdSuEcC2qFs-OuHib7D4QCK4BGAYYCw/s1600/wa_bg.png)")
            });
            $(".bwa-btn", this).on("click", function(f) {
                f.preventDefault();
                f.stopPropagation();
                $(this).hide();
                $("span", this).hide();
                $(".bwa-box").fadeIn(200);
                $(".bwa-box .bwa-act input").focus()
            });
            $(".bwa-box .bwa-header a.bwa-close", this).on("click", function(f) {
                f.preventDefault();
                $(".bwa-box").hide();
                $(".bwa-btn").fadeIn(200)
            });
            $(".bwa-act", this).on("submit", function(h) {
                h.preventDefault();
                var l = $("input", this).val();
                var g = "https://web.whatsapp.com/send";
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    g = "https://api.whatsapp.com/send"
                }
                var f = g + "?phone=62" + e + "&text=" + l + "%0A%0Avia. " + location.href;
                var k = prompt("Masukan Nama Lengkap :", "");
                if (k == null || k == "") {
                    $("input", this).focus();
                    return false
                } else {
                    function j(m) {
                        return m.replace(/\w\S*/g, function(n) {
                            return n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()
                        })
                    }
                    $(this).trigger("reset");
                    f = g + "?phone=62" + e + "&text=Halo " + j(c) + ", saya *" + j(k) + "*.%0A%0A" + l + "%0A%0Avia. " + location.href
                }
                window.location.href = f
            })
        });

      /* cForm-WA  -------------------------------------------------------------------- */

      $('.poptamv-btn, .tombol-wa').on('click', function() {
        $('body').addClass('hideScroll');
        var title = $(this).attr('data-title');
        var target = $(this).attr('href');
        $(target).addClass('open');
        $(target).find('.title-content').html(title);
        if($(this).attr('data-img') != null) {
          var img = $(this).attr('data-img');
          $(target).find('.content img').show();
          $(target).find('.content img').attr('src',img);
        }
        if($(this).attr('data-width') != null) {
          var width = $(this).attr('data-width');
          $(target).find('.wrap').attr('style','max-width:'+width+'px!important;')
        }
        if($(this).attr('data-tooltip') != null) {
          var tooltip = $(this).attr('data-tooltip');
          $(target).find('.poptamv-wrap').show();
          $(target).find('.poptamv-wrap').html(tooltip)
        }
      });

      $('.poptamv .closeTamv').on('click', function() {
        $('body').removeClass('hideScroll');
        $(this).parents('.poptamv').removeClass('open');
      });

      $(document).keyup(function(e) {
        if (e.key === "Escape") {
          $('.poptamv .closeTamv').trigger('click');
        }
      });

      if(pageMode != 'related') {
        $(window).on('load',function(){
          setTimeout(function() {
              $('.waFix').addClass('show');
          }, 6000);
        });
       }
      $(document).on('click','.waFix', function(){
        $(this).removeClass('show');
      });

      $(document).on('keypress','.formWA input, .formWA textarea', function() {
        if (event.keyCode === 13) {
          $(this).parents(".formWA").find('.submit').trigger('click');
        }
      });

      $('.formWA .wajib').each(function() {
        title = $(this).attr('placeholder');
        label = $(this).parents('label');
        $('<span class="validasi"><b>' + title + '</b> (dibutuhkan)</span>').appendTo(label);
      });

      $(document).on('keyup','.formWA .wajib', function() {
        if ($(this).val() != '') {
          $(this).removeClass('focus');
          $(this).parents('label').find('.validasi').removeClass('show');
        }
      });

      $(document).on('change','.formWA select', function() {
        $(this).removeClass('focus');
        $(this).parents('label').find('.validasi').removeClass('show');
      });

      $(document).on('click','.formWA .submit', function(){
        kirimWA($(this).parents('.poptamv').attr('id'));
        return false;
      });

      $(document).on('change','.formWA select.informasi', function() {
        var infooo = $(this).val();
        if(infooo == 'Teman') {
          $('.formWA .nama_teman_wrap').slideDown();
          $('.formWA .nama_teman_wrap .nama_teman').addClass('wajib');
        } else {
          $('.formWA .nama_teman_wrap').slideUp();
          $('.formWA .nama_teman_wrap .nama_teman').removeClass('wajib');
        }
      });

      $(document).on('change','.formWA select.refer_arisan', function() {
        var infooo = $(this).val();
        if(infooo == 'Reseller') {
          $('.formWA .nama_reseller_wrap').slideDown();
          $('.formWA .nama_reseller_wrap .nama_reseller').addClass('wajib');
        } else {
          $('.formWA .nama_reseller_wrap').slideUp();
          $('.formWA .nama_reseller_wrap .nama_reseller').removeClass('wajib');
        }
      });

        $(document).on('change','.formWA select.refer_arisan', function() {
        var infooo = $(this).val();
        if(infooo == 'Mitra EPC') {
          $('.formWA .nama_epc_wrap').slideDown();
          $('.formWA .nama_epc_wrap .nama_epc').addClass('wajib');
        } else {
          $('.formWA .nama_epc_wrap').slideUp();
          $('.formWA .nama_epc_wrap .nama_epc').removeClass('wajib');
        }
      });

        $(document).on('change','.formWA select.refer_arisan', function() {
        var infooo = $(this).val();
        if(infooo == 'Non-Anggota') {
          $('.formWA .nama_anggota_wrap').slideDown();
          $('.formWA .nama_anggota_wrap .nama_anggota').addClass('wajib');
        } else {
          $('.formWA .nama_anggota_wrap').slideUp();
          $('.formWA .nama_anggota_wrap .nama_anggota').removeClass('wajib');
        }
      });

      function kirimWA(id) {

        var validasi = true;

        $('#'+id+' .wajib').each(function() {
          if ($.trim($(this).val()) == '' || $.trim($(this).val()) == 'default') {
            $(this).addClass('focus');
          }
        });
        $('#'+id+' .wajib').each(function() {

          if ($.trim($(this).val()) == '') {

            validasi = false;

            $(this).parents('label').find('.validasi').addClass('show');
            $(this).focus();
            return false;
          } else if ($.trim($(this).val()) == 'default') {

            validasi = false;

            $(this).parents('label').find('.validasi').addClass('show');
            return false;
          }
        });

        if (validasi === true) {

          var parameter = '';
          var url_wa = 'https://web.whatsapp.com/send';
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            url_wa = 'whatsapp://send';
          }
          if (id == 'kirimWhatsApp') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                informasi = $('#'+id+' .informasi').val(),
                nama_teman = $('#'+id+' .nama_teman').val(),
                pesan = $('#'+id+' .pesan').val();

            var if_teman = '';
            if(informasi == 'Teman') {
              if_teman = '*' + informasi + '* ( ' + nama_teman + ' )';
            } else {
              if_teman = '*' + informasi + '*';
            }

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, tau *Toko Smart Hafiz Talking Doll* dari '+if_teman+'.%0A%0A' +
                '💬 ' + pesan + '%0A%0A' +
                'No. HP Aktif : '+ nohp +'%0A%0A' +
                '_via link_ : ' + location.href;
          }
          if (id == 'kirimCS') {

            var nama_admin = tw_config.nama_cs,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_wa_cs,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                informasi = $('#'+id+' .informasi').val(),
                nama_teman = $('#'+id+' .nama_teman').val(),
                pesan = $('#'+id+' .pesan').val();

            var if_teman = '';
            if(informasi == 'Teman') {
              if_teman = '*' + informasi + '* ( ' + nama_teman + ' )';
            } else {
              if_teman = '*' + informasi + '*';
            }

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, tau *Toko Smart Hafiz Talking Doll* dari '+if_teman+'.%0A%0A' +
                '💬 ' + pesan + '%0A%0A' +
                'No. HP Aktif : '+ nohp +'%0A%0A' +
                '_via link_ : ' + location.href;
          }
          if (id == 'kirimSS') {

            var nama_admin = tw_config.nama_ss,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_wa_ss,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                informasi = $('#'+id+' .informasi').val(),
                nama_teman = $('#'+id+' .nama_teman').val(),
                pesan = $('#'+id+' .pesan').val();

            var if_teman = '';
            if(informasi == 'Teman') {
              if_teman = '*' + informasi + '* ( ' + nama_teman + ' )';
            } else {
              if_teman = '*' + informasi + '*';
            }

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, tau *Toko Smart Hafiz Talking Doll* dari '+if_teman+'.%0A%0A' +
                '💬 ' + pesan + '%0A%0A' +
                'No. HP Aktif : '+ nohp +'%0A%0A' +
                '_via link_ : ' + location.href;
          }
          if (id == 'ulasWhatsApp') {
            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                rating = $('#'+id+' .rating').val(),
                review = $('#'+id+' .review').val();

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + ', saya mau ikut memberikan ulasan nih.%0A%0A' +
                '*Nama*  : '+ nama +'%0A' +
                '*Rating* : '+ rating +'%0A%0A' +
                '*Ulasan* :%0A'+ review +'%0A%0A' +
                '_via link_ : ' + location.href;
          }
          if (id == 'daftarWhatsApp') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                jadi = $('#'+id+' .jadi').val(),
                pesan = $('#'+id+' .pesan').val();

            var parameter = 'https://bit.ly/' + jadi;
          }
          if (id == 'konfirmWhatsApp') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                jadi = $('#'+id+' .jadi').val();

            var if_reseller = '';
            if(jadi == 'Reseller') {
              if_reseller = '*' + jadi + '*';
            }

            var if_epc = '';
            if(jadi == 'Mitra EPC') {
              if_epc = '*' + jadi + '*';
            }

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, saya sudah mengisi formulir pendaftaran program kemitraan ' +
                'sebagai '+ if_reseller +''+ if_epc +'. Mohon dikonfirmasi ya, kak. Terima kasih.%0A%0A' +
                'No. HP Aktif : '+ nohp +'%0A%0A' +
                '_via link_ : ' + location.href;
          }
          if (id == 'arisanWhatsApp') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                periode = $('#'+id+' .periode').val(),
                refer_arisan = $('#'+id+' .refer_arisan').val(),
                nama_reseller = $('#'+id+' .nama_reseller').val(),
                nama_epc = $('#'+id+' .nama_epc').val(),
                produk = $('#'+id+' .produk').val();

            var if_reseller = '';
            if(refer_arisan == 'Reseller') {
              if_reseller = '*' + refer_arisan + ' ' + nama_reseller + '*';
            }

            var if_epc = '';
            if(refer_arisan == 'Mitra EPC') {
              if_epc = '*' + refer_arisan + ' ' + nama_epc + '*';
            }
            var if_none = '';
            if(refer_arisan == 'Tidak Ada') {
              if_none = '*Tidak Ada*';
            }

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, mau daftar arisan *'+ produk +'* dengan periode *'+ periode +'*.%0A%0A' +
                'No. HP Aktif : '+ nohp +'%0A%0A' +
                'Referensi dari : ' + if_reseller +'' + if_epc + '' + if_none + '%0A%0A' +
                '_via link_ : ' + location.href;

          }
          if (id == 'konfirmArisan') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .title-content').text(),
                nama = $('#'+id+' .nama').val(),
                periode = $('#'+id+' .periode').val(),
                refer_arisan = $('#'+id+' .refer_arisan').val(),
                nama_reseller = $('#'+id+' .nama_reseller').val(),
                nama_epc = $('#'+id+' .nama_epc').val(),
                nama_anggota = $('#'+id+' .nama_anggota').val(),
                iuran_arisan = $('#'+id+' .iuran_arisan').val();

            var if_reseller = '';
            if(refer_arisan == 'Reseller') {
              if_reseller = '*' + refer_arisan + ' ' + nama_reseller + '*';
            }

            var if_epc = '';
            if(refer_arisan == 'Mitra EPC') {
              if_epc = '*' + refer_arisan + ' ' + nama_epc + '*';
            }
            var if_non = '';
            if(refer_arisan == 'Non-Anggota') {
              if_non = '*'+ nama_anggota +'*';
            }

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya ' + if_reseller +'' + if_epc + '' + if_non + ', mau *konfirmasi pendaftaran arisan*.%0A%0A' +
                'Atas Nama : *'+ nama +'*%0A' +
                'Periode : *'+ periode +'*%0A' +
                'Iuran Awal : *'+ iuran_arisan +'*%0A%0A' +
                '_via link_ : ' + location.href;

         }
         if (id == 'checkoutArisan') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .productCheckoutInfo .infoTitle').text(),
                qty = $('#'+id+' .productCheckoutInfo .qty').text(),
                satuan = $('#'+id+' .productCheckoutInfo .satuan').text(),
                info = $('#'+id+' .productOptionInfo').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                jumlah = $('#'+id+' .jumlah').val(),
                periode = $('#'+id+' .periode').val(),
                alamat = $('#'+id+' .alamat').val(),
                kota = $('#'+id+' .kota').val(),
                kecamatan = $('#'+id+' .kecamatan').val();

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, mau *daftar arisan*.%0A' +
                'Produk : *' + judul + '*%0A%0A' +
                info + 
                '*Qty.* : ' + qty + ' ' + satuan + '%0A' +
                '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
                '*Periode Arisan* :%0A' + periode + '%0A%0A' +
                '*Alamat Pengiriman* :%0A' + alamat + '%0A' +
                'Kec. ' + kecamatan + ' - Kab./Kota ' + kota + '%0A%0A' +
                'A/n.%0A*' + nama + '* - ' + nohp + '%0A%0A' +
                '_via link_ : ' + location.href;

          }

            else if (id == 'checkoutWhatsApp') {

            var nama_admin = tw_config.nama_admin,
                pesan_salam = tw_config.pesan_salam,
                kode_area = 62,
                nomor_whatsapp = tw_config.no_whatsapp,
                judul = $('#'+id+' .productCheckoutInfo .infoTitle').text(),
                qty = $('#'+id+' .productCheckoutInfo .qty').text(),
                satuan = $('#'+id+' .productCheckoutInfo .satuan').text(),
                info = $('#'+id+' .productOptionInfo').text(),
                nama = $('#'+id+' .nama').val(),
                nohp = $('#'+id+' .nohp').val(),
                jumlah = $('#'+id+' .jumlah').val(),
                pembayaran = $('#'+id+' .pembayaran').val(),
                alamat = $('#'+id+' .alamat').val(),
                kota = $('#'+id+' .kota').val(),
                kecamatan = $('#'+id+' .kecamatan').val();

            var parameter = url_wa + '?phone=' + kode_area + nomor_whatsapp + '&text=' +
                pesan_salam + ' ' + nama_admin + '..%0A' +
                'Saya *' + nama + '*, mau beli *' + judul + '*.%0A%0A' +
                info + 
                '*Qty.* : ' + qty + ' ' + satuan + '%0A' +
                '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _%0A%0A' +
                '*Metode Pembayaran* :%0A Transfer via ' + pembayaran + '%0A%0A' +
                '*Alamat Pengiriman* :%0A' + alamat + '%0A' +
                'Kec. ' + kecamatan + ' - Kab./Kota ' + kota + '%0A%0A' +
                'A/n.%0A*' + nama + '* - ' + nohp + '%0A%0A' +
                '_via link_ : ' + location.href;

          }
          // alert(parameter);
          $(this).attr('href', parameter);

          var w = 960,
              h = 540,
              left = Number((screen.width / 2) - (w / 2)),
              tops = Number((screen.height / 2) - (h / 2)),
              popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
          popupWindow.focus();
          return false;
        }
      }
      $(document).on('click','.popWin', function(){
        var target_url = $(this).attr('href'),
            w = $(this).attr('data-popWidth'),
            h = $(this).attr('data-popHeight');

        if (w == null) {
          w = 960;
        }
        if (h == null) {
          h = 540;
        }
        left = Number((screen.width / 2) - (w / 2)),
          tops = Number((screen.height / 2) - (h / 2)),
          popupWindow = window.open(target_url, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
        popupWindow.focus();
        return false;
      });
      $('.LinkList li a[href*="#"]').each(function(){
        $(this).parent('li').addClass('dd');
        $(this).parent('li').append('<ul></ul>');
        $(this).attr('href','javascript:void(0)');
      });
      $('.LinkList li a:contains("_")').each(function(){
        var dd = $(this).parent('li').prev('.dd').find('ul');
        $(this).parent('li').appendTo(dd);

        var text = $(this).text().replace('_','');
        $(this).text(text)
      });
      $('.LinkList li.dd').click(function(){
        $(this).find('ul:first').toggle();
        $(this).toggleClass('active');
      });
      $('.btnCat, .closeCategory, .btnCategory, .tw_category .utama').click(function(){
        $('.tw_category .Label').toggle();
      });
      // --- Plug-in toggleAttr --- //
      $.fn.toggleAttr = function(attr, attr1, attr2) {
        return this.each(function() {
          var self = $(this);
          if (self.attr(attr) == attr1)
            self.attr(attr, attr2);
          else
            self.attr(attr, attr1);
        });
      };
      $('.btnMenu, .closeMenu').click(function(){
        $('.tw_menu .LinkList').toggle();
        $('.tw_category .Label').hide();
        $('.btnMenu').find('i').toggleClass('ion-ios-menu');
        $('.btnMenu').find('i').toggleClass('ion-ios-arrow-up');
        // $('.btnMenu').find('ion-icon').attr('name','grid');
        // $('.btnMenu').find('ion-icon').toggleAttr('name', 'grid', 'grid-outline');
        $('.closeMenuCategory').fadeToggle();
      });
      $('.closeMenuCategory').click(function(){
        $('.tw_menu .LinkList').hide();
        $('.tw_category .Label').hide();
        $('.btnMenu').find('i').removeClass('ion-ios-arrow-up');
        $('.btnMenu').find('i').addClass('ion-ios-menu');
        // $('.btnMenu').find('ion-icon').removeAttr('name','grid-outline');
        // $('.btnMenu').find('ion-icon').attr('name','grid');
        $('.closeMenuCategory').fadeOut();
      });
      $('.btnSearch').click(function(){
        $('.headerSearch').show();
        $('.headerSearch form .text').focus();
      });
      $('.headerSearch i.ion-ios-arrow-back').click(function(){
        $('.headerSearch').hide();
        $('.headerSearch form .text').blur();
      });
      $('.tw_search').click(function(){
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          $('.headerSearch i.ion-ios-arrow-back').trigger('click');
        };
        $('.headerSearch form i.ion-md-close').trigger('click');
      });

      $(document).on('keyup','.headerSearch form .text', function() {
        if (event.keyCode === 13) {
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $('.headerSearch i.ion-ios-arrow-back').trigger('click');
          } else {
            $('.tw_search').hide();
          };
        }
      });

      $('.headerSearch form .text').keyup(function(){
        if($(this).val() != '') {
          $('.tw_search').show();
          $('.headerSearch form i.ion-md-close').show();
        } else {
          $('.tw_search').hide();
          $('.headerSearch form i.ion-md-close').hide();
        }
      });
      $('.headerSearch form i.ion-md-close').click(function(){
        $('.tw_search').hide();
        $('.headerSearch form i.ion-md-close').hide();
        $('.headerSearch form .text').val('');
      });
      if (sessionStorage.getItem('ss_notif') == null) {
        $('.btnNotif span').fadeIn();
      }
      $('.btnNotif').click(function(){
        $('.btnNotif span').hide();
        sessionStorage.setItem('ss_notif',false);
      });

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        $('a').each(function(){
          var url = $(this).attr('href') + '?m=1';
          var url2 = $(this).attr('href') + '&m=1';
          if(url == window.location || url2 == window.location) {
            $(this).addClass('active');
          }
        });

      } else {

        $('a').each(function(){
          var url = $(this).attr('href');
          if(url == window.location) {
            $(this).addClass('active');
          }
        });

      }
      $('textarea.code').each(function(){
        var val = $(this).val(),
        replace = val.replace(/<br\s?\/?>/g,"");
        $(this).val(replace);
        $(this).on('click',function(){
          $(this).select();
        });
        $(this).attr('readonly','readonly');
      });
        
/* jsglobal */
      //]]>
    </script>

<div class='orderNotif'></div>
<script type='text/javascript'>
//<![CDATA[
var dataOrder = {
    "Bunda Zaskia": {
        "screenshotURL": "",
        "avaURL": "https://2.bp.blogspot.com/-6eTal4cCenM/XmNqLkcj4GI/AAAAAAAABVs/f2PtPjOTmnIZTlMpxHgC2LpcKi1ebcoWgCLcBGAsYHQ/s1600/bunda_zaskia.jpg",
        "time": "2020-11-30",
        "template": "Little Abid",
        "templateURL": "/2019/04/buku-cordoba-kids-little-abid.html",
    },
    "Bunda Aisyah": {
        "screenshotURL": "",
        "avaURL": "",
        "time": "2020-12-24",
        "template": "Smart Hafiz V.5",
        "templateURL": "/2020/12/new-smart-hafiz-versi-5.html",
    },
    "Pak Ahmadi": {
        "screenshotURL": "",
        "avaURL": "",
        "time": "2020-12-24",
        "template": "Smart Hafiz V.5",
        "templateURL": "/2020/12/new-smart-hafiz-versi-5.html",
    },
    "Bunda Risti": {
        "screenshotURL": "",
        "avaURL": "",
        "time": "2020-11-27",
        "template": "Cakrawala Pengetahuan Dasar",
        "templateURL": "/2019/04/cakrawala-pengetahuan-dasar.html",
    },
    "Bunda Viji": {
        "screenshotURL": "",
        "avaURL": "https://3.bp.blogspot.com/-bY1vmtRqL2Y/XMuWTqxRHSI/AAAAAAAAArk/lu9DA_sIIZAQQV6WxU4BAZQb1WTwD0B4wCLcBGAs/h60/pp-buviji.png",
        "time": "2020-11-30",
        "template": "Super Hafiz",
        "templateURL": "/2019/11/super-hafiz.html",
    },
    "Bunda Amina": {
        "screenshotURL": "",
        "avaURL": "",
        "time": "2020-12-07",
        "template": "New Hafiz Junior",
        "templateURL": "/2019/11/new-hafiz-junior.html",    
    },
    "Pak Riki Hidayat": {
        "screenshotURL": "",
        "avaURL": "",
        "time": "2020-12-25",
        "template": "Smart Hafiz V.5",
        "templateURL": "/2020/12/new-smart-hafiz-versi-5.html",   
    },
    "Bunda Gisel": {
        "screenshotURL": "",
        "avaURL": "https://2.bp.blogspot.com/-jQaaFQzmoRA/XMugdr28xeI/AAAAAAAAAsU/ffnPQ0vvp24mwhPvg0bFgkXpkCSIRGA0gCLcBGAs/h60/pp-bugisel.png",
        "time": "2020-12-15",
        "template": "Widya Wiyata Pertama",
        "templateURL": "/2019/04/widya-wiyata-pertama.html",
    },
};
$(window).bind('load', function() {
    $.each(dataOrder, function(key, value) {
      var ifAvaURL = 'https://1.bp.blogspot.com/-o9lCuVV_mSY/XMuTDdKWi3I/AAAAAAAAArM/AJ_5A8y0oA4Hpd-I3l_Hpp4fN7q_j2FzQCLcBGAs/h60/pp-wa.png';
        if (value.avaURL != '') {
            ifAvaURL = value.avaURL;
        }
        $('\
<div class="item" datetime="' + value.time + '">\
<span class="avaURL" style="background-image:url(' + ifAvaURL + ');"></span>\
<h5><a class="closeOrderNotif" href="javascript:void(0);"><i class="icon ion-ios-close"></i></a></h5>\
<span class="infoOrder">\
<b>' + key + '</b><br />telah berhasil membeli <b><a href="' + value.templateURL + '">' + value.template + '</a></b>\
<small><!-- a href="' + value.screenshotURL + '" class="lightbox viewOrderNotif" title="Bukti Transaksi - ' + key + '"><i class="icon ion-ios-search"></i> Cek</a --><i class="icon ion-md-time"></i> <time class="timeago postingTime" datetime="' + value.time + '"></time></small>\
    </span>\
    </div>\
').appendTo('.orderNotif');
    });
    $(".orderNotif > .item:gt(0)").removeClass('active');
    setInterval(function() {
        $('.orderNotif > .item:first').removeClass('active')
        setTimeout(function() {
            $('.orderNotif > .item:first').next().addClass('active').end().appendTo('.orderNotif');
        }, 5000);
    }, 10000);
});
$(document).on('click', '.orderNotif .closeOrderNotif', function() {
    $(this).parents('.item').addClass('hidden');
});
//]]>
</script>
<script type='text/javascript'>
      //<![CDATA[
      var cekMobile = false;
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        cekMobile = true;
      }
      function timeAgo(timeStamp) {
        var previous = new Date(timeStamp);
        var current = new Date();
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var ago = 'yang lalu';
        var elapsed = current - previous;
        if (elapsed < msPerMinute) {
          return Math.round(elapsed/1000) + ' detik ' + ago;   
        }
        else if (elapsed < msPerHour) {
          return Math.round(elapsed/msPerMinute) + ' menit ' + ago;   
        }
        else if (elapsed < msPerDay ) {
          return Math.round(elapsed/msPerHour ) + ' jam ' + ago;   
        }
        else if (elapsed < msPerMonth) {
          return Math.round(elapsed/msPerDay) + ' hari ' + ago;   
        }
        else if (elapsed < msPerYear) {
          return Math.round(elapsed/msPerMonth) + ' bulan ' + ago;   
        }
        else {
          return Math.round(elapsed/msPerYear ) + ' tahun ' + ago;   
        }
      }
      $('.comment .datetime').each(function(){
        var timestamp = $(this).find('a').text();
        $(this).find('a').text(timeAgo(timestamp));
      });
      $(window).bind('load',function(){
        $('.timeago').each(function(){
          var timestamp = $(this).attr('datetime');
          $(this).text(timeAgo(timestamp));
        });
      });
      //]]>
    </script>


<div class='sticky-ad' id='sticky-ad'>


<ins class='adsbygoogle' data-ad-client='ca-pub-9338233224794989' data-ad-slot='4568445912' style='display:inline-block;width:728px;height:90px'></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<button aria-label='Close this ad' class='sticky-ad-close-button' onclick='document.getElementById(&#39;sticky-ad&#39;).style.display=&#39;none&#39;;'></button>
</div>
<script>
//<![CDATA[
window.addEventListener("scroll",function(){
  var target = document.getElementById('sticky-ad');
  if(window.pageYOffset > 300){
   target.style.bottom = "0";
  }
},false);
//]]>
</script>


<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '2584250768483503',
      xfbml      : true,
      version    : 'v6.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
</script>

<script type='text/javascript'>
//<![CDATA[
// Lazy Load AdSense
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
//]]>
</script>