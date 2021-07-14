var sidebar = document.querySelector('.sidebar');
var iconClose = document.querySelector("#close");
var iconOpen = document.querySelector("#open");

iconOpen?.addEventListener('click', function(){
    sidebar.classList.add('sidebar--active');
})

iconClose?.addEventListener('click', function () {
    sidebar.classList.remove('sidebar--active');
})

let time = setInterval(() => {
    if (document.readyState == "complete") {
        $(".loader").addClass('loadCmplete');
        clearInterval(time);
    }
}, 1000)