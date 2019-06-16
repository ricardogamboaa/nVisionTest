$(document).ready(
    $("#btnSubmit").click(function () {
        if (Validate()) {
            $.ajax({
                type: "POST",
                url: "/Person/Index",
                data: {
                    person: {
                        FirstName: NameFormat($("#txtFirstName").val().trim()),
                        LastName: NameFormat($("#txtLastName").val().trim()),
                        Gender: $("input[type=radio]:checked").val(),
                        Email: $("#txtEmail").val().trim(),
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

function NameFormat(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

$('#txtPhone').keypress(function (event) {

    if ((event.which != 8 && isNaN(String.fromCharCode(event.which))) || event.which === 32) {
        event.preventDefault();
    }
})

$(".name").keypress(function (event) {
    if (!(event.which >= 65 && event.which <= 120) && (event.which != 32 && event.which != 0)) {
        event.preventDefault();
    }
});