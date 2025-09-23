// Rules in Validation :
// 1.Required
// 2.Minlength
// 3.email
// 4.equalTo
// 5.Strong Password
// 6.Nowhitespace
// 7.Lettersonly
// 8.alphanumeric
// 9.letterswithbasicpunc
// 10.url
// 11.lessThan
// 12.lessThanEqual
// 13.greaterThan
// 14.greaterThanEqual
// 15.range
// 16.step
// 17.number
// 18.maxlength
// 19.date
// 20.digits
// 21.min
// 22.max

    $(document).ready(function(){
    $.validator.addMethod("StrongPassword",function(value){
        return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value);
    },"Please Enter Strong Password");
    $("#form1").validate({
        rules : {
            myName : {
                required : true,
                minlength : 3
            },
            email : {
                required : true,
                email : true
            },
            pass : {
                required : true,
                StrongPassword : true
            },
            cpass : {
                required : true,
                equalTo : "#pass"
            },
            fname : {
                required : true,
                nowhitespace : true
            },
            ltr : {
                required : true,
                lettersonly : true
            },
            alpha : {
                required : true,
                alphanumeric : true
            },
            punc : {
                required : true,
                letterswithbasicpunc : true
            },
            url : {
                required : true,
                url : true
            },
            num1 : {
                required : true,
                lessThanEqual : "#data"
            },
            gender : {
                required : true
            },
            check: {
                required : true
            }
        },
        highlight: function(element){
            $(element).addClass("c1");
        },
        unhighlight: function(element){
            $(element).removeClass("c1");
        },
        invalidHandler : function(){
            let validator = $("#form1").validate();
            $("#summary").text(validator.numberOfInvalids() + " fields are invalid..");
        },
        // Custom Error messages
        messages : {
            myName : {
                required : "Name is mandatory",
                minlength : "3 Characters must"
            },
            email : {
                required : "Email is mandatory",
                email : "Invalid Email"
            },
            pass : {
                required : "Password is mandatory",
            },
            cpass : {
                required : "Confirm Password is mandatory",
                equalTo : "Both Password must be same"
            }
        }
    })
});