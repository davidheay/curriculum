let memory = 0;
$(document).ready(() => {
    $("#edad").html((new Date()).getFullYear() - 1999 + " years")
    $(".vertical-list li").click(({ currentTarget }) => {
        const id = $(currentTarget).data("id");
        if ($("#" + id).attr("hidden") != false && memory == 0) {
            memory++;
            $(".vertical-list li").removeClass("active");
            $(currentTarget).addClass("active");
            hideTabs()
            setTimeout(() => { showTab(id) }, 1010);
        }
    });
    $(".container").removeClass("outside");
    memory++;
    showTab("info");
    $(".bar").removeClass("por0");
});
const showTab = (id) => {
    $("#" + id).attr("hidden", false);
    $(".content-info").addClass("active");
    setTimeout(() => { memory--; }, 1010);
};
const hideTabs = () => {
    $(".content-info.active").removeClass("active");
    setTimeout(() => { $(".panel").attr("hidden", true) }, 1010);
};