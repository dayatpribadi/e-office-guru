function initiliazeSmartWizard(u){$("#smartwizard-default").smartWizard({useURLhash:!1,showStepURLhash:!1,transitionEffect:"slide",lang:{next:"Next Step",previous:"Previous"},toolbarSettings:{toolbarExtraButtons:[$("<button></button>").text("Confirm Order").addClass("btn btn-primary d-none").attr("id","submit-form").on("click",function(){alert("Data Submitted... See Console log")})]}}),$(".sw-btn-prev").removeClass("btn-secondary").addClass("btn-light"),$(".sw-btn-next").removeClass("btn-secondary").addClass("btn-primary"),$(".sw-btn-next").parent().removeClass("btn-group mr-2").addClass("d-flex justify-content-between w-100"),$("#smartwizard-default").on("leaveStep",function(a,e,t,n){var i=$(e).attr("href");return"forward"===n&&0===t?($(i+"-button").trigger("click"),!!u["step"+(t+1)].valid&&(console.log("step1",u),!0)):"forward"===n&&1===t?($(i+"-button").trigger("click"),!!u["step"+(t+1)].valid&&(console.log("step2",u),!0)):void 0}),$("#smartwizard-default").on("showStep",function(a,e,t,n){if($("#order-summery").removeClass("d-none"),setTimeout(function(){$(".sw-container").css({"min-height":$("#sw-default-step-"+(t+1)).outerHeight()})},500),"forward"===n&&2===t){if($("#shipping-details-review").html(""),$(".sw-btn-next").addClass("d-none"),$("#order-summery").addClass("d-none"),$(".sw-btn-next").parent().removeClass("d-flex justify-content-between w-100").addClass("btn-group mr-2"),$(".sw-btn-next").parents(".btn-toolbar").removeClass("justify-content-end").addClass("justify-content-between"),$("#submit-form").removeClass("d-none"),$("#smartwizard-default").removeClass("col-md-8 col-xl-9").addClass("col-12"),u.step1.valid){var i="",s="",r="",d='<h5 class="font-weight-600 mb-3">Shipping Details</h5>',l=u.step1.data;for(var o in l)"validation-fullname"===o&&(s+='<h6 class="font-size-15 font-weight-600">'+l[o]+"</h6>"),"validation-address"===o&&(i+='<address class="d-flex"> <i class="bx bxs-map align-middle fs-sm text-primary"></i><span class="align-middle">'+l[o]+" "+l["validation-state"]+" "+l["validation-country"]+"</span></address>"),"validation-phone"===o&&(r+='<p> <i class="bx bx-mobile-alt align-middle fs-sm text-primary"></i><span class="align-middle">'+l[o]+"</span></p>");d+=s+i+r,d=$.parseHTML(d),$("#shipping-details-review").html(d)}}else $(".sw-btn-next").removeClass("d-none"),$(".sw-btn-next").parent().addClass("d-flex justify-content-between w-100").removeClass("btn-group mr-2"),$(".sw-btn-next").parents(".btn-toolbar").addClass("justify-content-end").removeClass("justify-content-between"),$("#submit-form").addClass("d-none")})}function validateStep1(n){$("#shipping-details").validate({ignore:[".select2-hidden-accessible"],focusInvalid:!1,rules:{"validation-fullname":{required:!0},"validation-email":{required:!0,email:!0},"validation-phone":{required:!0},"validation-pin":{required:!0},"validation-address":{required:!0},"validation-locality":{required:!0},"validation-country":{required:!0},"validation-state":{required:!0}},errorPlacement:function(a,e){return $(e).siblings(".validation-error").removeClass("d-none"),!0},highlight:function(a){$(a).parents(".form-group").addClass("invalid-field"),n.step1.valid=!1},unhighlight:function(a){$(a).parents(".form-group").removeClass("invalid-field"),$(a).siblings(".validation-error").addClass("d-none")},submitHandler:function(a){n.step1.valid=!0;var e=$(a).serializeArray(),t={};$(e).each(function(a,e){t[e.name]=e.value}),n.step1.data=t}})}function validateStep2(n){$("#card-details").validate({focusInvalid:!1,rules:{"validation-cardnumber":{required:!0},"validation-cardname":{required:!0},"validation-cardexp":{required:!0},"validation-cardcvv":{required:!0}},errorPlacement:function(a,e){return $(e).siblings(".validation-error").removeClass("d-none"),!0},highlight:function(a){$(a).parents(".form-group").addClass("invalid-field"),n.step2.valid=!1},unhighlight:function(a){$(a).parents(".form-group").removeClass("invalid-field"),$(a).siblings(".validation-error").addClass("d-none")},submitHandler:function(a){n.step2.valid=!0;var e=$(a).serializeArray(),t={};$(e).each(function(a,e){t[e.name]=e.value}),n.step2.data=t}})}!function(t){var a={step1:{data:{},valid:!1},step2:{data:{},valid:!1},step3:{data:{},valid:!0}};t('[data-select = "select2"]').select2().on("change",function(){""!==t(this).val()&&t(this).siblings(".validation-error").addClass("d-none")}),t("#sw-default-step-1-button").on("click",function(){validateStep1(a)}),t("#sw-default-step-2-button").on("click",function(){validateStep2(a)}),initiliazeSmartWizard(a),t("[name= 'validation-phone']").mask("000-00-0000"),t("[name= 'validation-pin']").mask("000000"),t("#cardnumberInput").mask("0000 0000 0000 0000"),t("#expirydateInput").mask("00/00",{onChange:function(a){var e=t("#expirydateInput").attr("data-id");t('[data-id*="'+e+'"]').text(a)}}),t("#cvvcodeInput").mask("000"),t("#savedcvv").mask("000"),t("#cardnumberInput").on("focusout",function(){var a=t(this).val().split(" ");t(a).each(function(a,e){t("#card-number [data-id='num"+(a+1)+"']").text(e)})}),t("#cardnameInput").on("change",function(){var a=t(this).attr("data-id");t('[data-id*="'+a+'"]').text(t(this).val())})}(jQuery);