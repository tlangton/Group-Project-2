var submitBtn = $("#submit-btn");

submitBtn.click(function(e) {
    e.preventDefault();
    // get values from the form
    var companyName = $("#company-name-input").val().trim(),
        telephoneNum = $("#company-telephone-input").val().trim(),
        position = $("#position-input").val().trim(),
        location = $("#location-input").val().trim(),
        email = $("#email-input").val().trim(),
        jobDescription = $("#job-description-input").val().trim(),
        additionalInfo = $("#additional-info-input").val().trim(),
        status = $("select").find(":selected").val();

    // store form values in inside of an object
    var formData = {
        companyName: companyName,
        telephoneNum: telephoneNum,
        position: position,
        location: location,
        email: email,
        jobDescription: jobDescription,
        additionalInfo: additionalInfo,
        status: status
    };
    // send data to the database
    $.post("url", formData); //NOTICE: the url need still needs to be specified
});