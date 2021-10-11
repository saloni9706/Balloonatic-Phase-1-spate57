$(document).ready(function(){
debugger;
    $(".product ,.img_logo,.company_name").click(function(){
        window.location="./home.html"
    })

    $('.subscribe_btn').on('click', function (e) {

        debugger;
        e.preventDefault();
        var error = false;
        var email = $('#email').val();
        var filter = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        $('.error').remove();

        if (email == "") {
            error = true
            $('#email').after('<span class="error" style="color:red">Please Enter Email</span>');
        } else if (!filter.test(email)) {
            error = true;
            $('#email').after('<span class="error" style="color:red">Please Enter Valid Email</span>');
          
        }

        if (error == true) {
            e.preventDefault();
        } else {

            window.location = "./home.html";
        }

    });

});