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