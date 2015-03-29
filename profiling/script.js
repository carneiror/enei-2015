var menus = [];
var i = 0;

(function() {

    function Menu(title, id) {
        this.title = title;
        this.elem = document.getElementById('container').getElementsByClassName('dummy')[0];
    }

    setInterval(function () {
        var menu = new Menu('My Menu', i);

        menus.push(menu);

        document.getElementById('container').innerHTML = '<div class="dummy">dummy element ' + (++i) +'</div>';
    }, 100);
})();