var displayArea = $(".display-area");
displayArea.hide();


var submitBtn = $("#submit-btn").click((e) => {
    e.preventDefault();
    // get values from the form
    var companyName = document.querySelector("#company-name-input").value.trim(),
        location = document.querySelector("#location-input").value.trim(),
        telephone = document.querySelector("#company-telephone-input").value.trim(),
        email = document.querySelector("#email-input").value.trim(),
        position = document.querySelector("#position-input").value.trim(),
        jobNumber = document.querySelector("#job-number-input").value.trim(),
        jobDescription = document.querySelector("#job-description-input").value.trim(),
        jobRequirements = document.querySelector("#job-requirements-input").value.trim(),
        status = $("select").find(":selected").text();

    // store form values in inside of an object
    var formData = {
        companyName: companyName,
        location: location,
        telephone: telephone,
        email: email,
        position: position,
        jobNumber: jobNumber,
        jobDescription: jobDescription,
        jobRequirements: jobRequirements,
        status: status
    };

    // prevent empty forms from submitting
    if (!formData.companyName) {

        alert("Company Name is empty");
        return console.log("Nothing");
    }

    if (!formData.position) {

        alert("No Position Specified");
        return console.log("no position");
    }
    // send data to the database
    // $.post("url", formData); //NOTICE: the url need still needs to be specified

    // hide form and replace with display-area
    $("form").fadeOut(() => {
        $("form").css("display", "none");
        displayArea.fadeIn();
    });

    // empty all form inputs
    $("input").val("");
    $("textarea").val("");

    console.log(formData);
});