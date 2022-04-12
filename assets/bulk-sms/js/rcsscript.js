
	var maxField = 10;
	var x = 1;

var addButton = $('.add_button'); //Add button selector
var wrapper = $('.field_wrapper');


$(addButton).click(function(){
    var CardType = $('#CardType option:selected').val();
    
    if(CardType=='basic_card'){
    var wrapper = $('.field_wrapper1');
    }

    else if(CardType=='rich_card'){
    var wrapper = $('.field_wrapper2');
    }

    else if(CardType=='rich_card_slider'){
    var wrapper = $('.field_wrapper3');
    }


        // var href = $(this).prop('title');
        // alert(href);

//Check maximum number of input fields
if(x < maxField){
	
	
; //Increment field counter
 //Add field html
// <option value="file_url" onclick="file_url('+x+')">File Url</option>
var button='<div id="btn_box"><div id="rounded-stylish_collapseTwo'+x+'">' + 
'<div class="table_new" class="table_ashish">' + '<div class="row">' + 
'<div class="col-md-6"> <div class="form-group"><input required type="text" name="Title[]" class="form-control" placeholder="Add Title"></div></div>' + 
'<div class="col-md-5"><div class="form-group"><select id="actionType" class=" form-control" name="Type[]" required>' + 
'<option selected="selected">Select</option><option value="url" onclick="link('+x+')">URL</option>' + 
'<option value="call" onclick="phone('+x+')">Call</option>' + 
'<option value="post" onclick="post('+x+')">Action</option>' + 
'<option  value="viewmap" onclick="map('+x+')"> View MAP </option></select></div></div>' +
'<div class="col-md-1 pt-2"> <a href="javascript:void(0);" class="badge light badge-danger pull-right mt-1 remove_button" title="Remove field">' + 
'<i class="fa fa-trash" aria-hidden="true"></i></a> </div>' +
'</div><div class="row" style="display:none;" id="url_row'+x+'"><div class="col-md-12">' + 
'<div id="url_row" class="form-group"><label class="col-form-label col-form-label-sm">URL</label>' + 
'<input type="text" class="form-control " placeholder="http:srts.in" name= "url[]"></div> </div></div>' + 
'<div class="row" style="display:none;" id="call_row'+x+'">' + 
'<div class="col-md-12"><div class="form-group"><label class="col-form-label">Mobile Number </label>' + 
'<input type="text" class="form-control " placeholder="+91 9876543210" name="number[]"></div></div></div>' + 
'<div class="row" style="display:none;" id="file_url'+x+'"><div class="col-md-3"><div class="form-group ">' + 
'<label class="col-form-label col-form-label-sm">File URL </label>' + 
'<input type="text" class="form-control " placeholder="" name="file_url[]"></div> </div></div>' + 
'<div class="row" style="display:none;" id="post_back_row'+x+'"><div class="col-md-12"><div class="form-group ">' + 
'<label class="col-form-label">Post Back </label>' + 
'<input type="text" class="form-control " placeholder="" name="postback[]"></div> </div></div>' + 
'</div>' + 
'<div class="row" style="display:none;" id="map_row'+x+'"><div class="col-md-12"><div class="form-group "><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.524885750933!2d75.89059861480976!3d22.74589423231996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd362d6ccee3%3A0xc11463d46f025c0c!2sBulk24SMS%20Networks!5e0!3m2!1sen!2sin!4v1641190545876!5m2!1sen!2sin" width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div></div></div></div></div>' + 
'</div>';


$(wrapper).append(button);
}
  // $('#url_row'+x).hide();
  // $('#call_row'+x).hide();
  // $('#post_back_row'+x).hide();
  // $('#Calendar_row'+x).hide();
  // $('#map_row'+x).hide();
  x++;

});





function link(x) {
  $('#url_row'+x).show();
  $('#call_row'+x).hide();
  $('#file_url'+x).hide();
  $('#post_back_row'+x).hide();
  $('#Calendar_row'+x).hide();
  $('#map_row'+x).hide();
}

function phone(x) {
  $('#url_row'+x).hide();
  $('#call_row'+x).show();
  $('#file_url'+x).hide();
  $('#post_back_row'+x).hide();
  $('#Calendar_row'+x).hide();
  $('#map_row'+x).hide();
}
function file_url(x) {
  $('#url_row'+x).hide();
  $('#file_url'+x).show();
  $('#call_row'+x).hide();
  $('#post_back_row'+x).hide();
  $('#Calendar_row'+x).hide();
  $('#map_row'+x).hide();
}

function post(x) {
  $('#url_row'+x).hide();
  $('#file_url'+x).hide();
  $('#call_row'+x).hide();
  $('#post_back_row'+x).show();
  $('#Calendar_row'+x).hide();
  $('#map_row'+x).hide();
}

function cal(x) {
  jQuery('#filter-date, #search-from-date, #search-to-date').datetimepicker();
  $('#url_row'+x).hide();
  $('#file_url'+x).hide();
  $('#call_row'+x).hide();
  $('#post_back_row'+x).hide();
  $('#Calendar_row'+x).show();
  $('#map_row'+x).hide();
  }

function map(x) {
  $('#url_row'+x).hide();
  $('#file_url'+x).hide();
  $('#call_row'+x).hide();
  $('#post_back_row'+x).hide();
  $('#Calendar_row'+x).hide();
  $('#map_row'+x).show();
}

            /*jslint browser:true*/
            /*global jQuery, document*/

            jQuery(document).ready(function () {
                'use strict';

                
            });
      
$(document).ready(function(){
   //Input fields increment limitation
  var addButton = $('.add_button'); //Add button selector
  var wrapper = $('.field_wrapper');//Input field wrapper
  var fieldHTML = $('.DynamicBox').html(); //New input field html



  var x = 1; //Initial field counter is 1

  //Once add button is clicked

    
  //Once remove button is clicked
  $(wrapper).on('click', '.remove_button', function(e){
    e.preventDefault();
    $(this).parent('div').remove(); //Remove field html
    x--; //Decrement field counter
  });
});

$(document).ready(function(){
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='template_ids']:checked").val();
        if(radioValue){
            $('#template_id').val(radioValue);
        }
    });
});

$(document).ready(function(){
    $('.image_content').hide();
    $('.video_content').hide();

      $("input[type='radio']").click(function(){
          var radio = $("input[name='mediatype']:checked").val();
          if(radio=='text'){
            $('.image_content').hide();
            $('.video_content').hide();
            
            $('.textarea_content').show();
          }
          else if(radio=='image'){
            $('.image_content').show();
            $('.textarea_content').hide();
            $('.video_content').hide();

          }
            else if(radio=='imagevideo'){
            $('.video_content').show();
            $('.image_content').hide();
            $('.textarea_content').hide();

          }
      });
  });


  $( document ).ready(function() {
    $("#CardType").change(function(){
    var CardType = $('#CardType option:selected').val();
    
    if(CardType=='basic_card'){
      $(".basic_card").show();
      $(".rich_card").hide();
      $(".rich_card_slider").hide();
    }
    else if(CardType=='rich_card'){
      $(".rich_card").show();
      $(".basic_card").hide();
      $(".rich_card_slider").hide();
    }
    else if(CardType=='rich_card_slider'){
      $(".rich_card_slider").show();
      $(".rich_card").hide();
      $(".basic_card").hide();
    }
    });

    $("#show").click(function(){
        $("p").show();
      }); 
      });

     
function preview_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}
