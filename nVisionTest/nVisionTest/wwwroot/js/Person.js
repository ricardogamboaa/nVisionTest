$(document).ready(
    $("#btnSubmit").click(function () {
        if (Validate()) {
            $.ajax({
                type: "POST",
                url: "/Person/Index",
                data: {
                    person: {
                        FirstName: $("#txtFirstName").val(),
                        LastName: $("#txtLastName").val(),
                        Gender: $("input[type=radio]:checked").val(),
                        Email: $("#txtEmail").val(),
                        Phone: $("#txtPhone").val(),
                        Country: $("option:selected").text()
                    }
                },
                success: function (data)
                {
                    if (data) {
                        alert("validated sign up");
                        location.reload();
                    }
                    else
                        alert("Unknown error. Please try again in a while!");
                },
                error: function () { alert("Error"); }
            });
        }
    })
);

function Validate() {
    var access = true;
    $("input[type=text]").each(function () {
        if ($(this).val().trim() == "") {
            access = false;
            $("#lbl" + $(this).attr("id")).show();
        } else {
            $("#lbl" + $(this).attr("id")).hide();
        }
    });
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test($("#txtEmail").val())) {
        access = false;
        $("#lbltxtEmail").show();
    }
    return access;
}

$('#txtPhone').keypress(function (event) {

    if (event.which != 8 && isNaN(String.fromCharCode(event.which))) {
        event.preventDefault();
    }
})
