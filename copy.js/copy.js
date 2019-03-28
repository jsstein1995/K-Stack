function addCal() {

    var calDiv = $('<div>').addClass("calDiv")
    $("#calories").append(calDiv + "<span id='delete'>X</span></div>");
    calDiv.text(calories);
}
addCal();
});
$(document).on("click", "#calories", removeCal);

function removeCal() {
    $(this).closest("div").empty();
}
});