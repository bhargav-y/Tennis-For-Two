$(document).ready(function(){
           center_element("#text");

           var video_clicked = false;
           var over_video = false;

           $("#video").fitVids();

           $("#text").on("mouseenter", function(){
               $("#text").hide();
               $("#video").show();

               center_element("#video");
           });

           $("#video").on("mouseenter", function(){
               over_video = true;
           });

           $("#video").on("mouseleave", function(){
               over_video = false;
           });

           $(window).on("blur", function(){
               if (over_video) video_clicked = true;
           });

           $("#video").on("mouseleave", function(){
               if (! video_clicked) {
                   $("#text").show();
                   $("#video").hide();
               }
           });
       });

       $(window).resize(function(){
           center_element("#text");
           center_element("#video");
       });
