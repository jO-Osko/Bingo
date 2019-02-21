function init(Elm) {
    var app = Elm.App.init({node: document.getElementById("elm-main")});

    console.log(app.ports);

    app.ports.refresh.subscribe(function () {
        $(function () {
            $('[data-toggle="popover"]').popover({
                trigger: 'click'
            })
        })
    });


    app.ports.refresh.subscribe(function () {
        $(function () {
            $('[data-toggle="popover"]').popover({
                trigger: 'click'
            })
        })
    });

    $('body').tooltip({
        selector: '[rel="tooltip"]'
    });


}