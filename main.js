function toggleDetail(event){
    const target = $(event.target)

    //Drop Down
    if($(target).hasClass("active")){
        $(target).html("Less Info").removeClass("active")
    }
    else{
        $(target).html("More Info").addClass("active") 
    }

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-header-detail")
    $(detail).slideToggle()
}


//Contact Validation
function onFormSubmit(event){
    event.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

    if(!$(email).val()){
        alert("Email is required")
    }
    else if (!$(subject).val()){
        alert("Subject is required")
    }
    else if (!$(message).val()){
        alert("Message is required")
    }
    else{
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }
}