document.addEventListener("keydown", function (event) {
    if (event.keyCode == 123) {
        event.preventDefault();
        return false;
    }
});

document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

(function() {
    var devtools = function() {};
    devtools.toString = function() {
        return "devtools";
    };
    if ((window.console && (console.firebug || console.table && /firebug/i.test(console.table()))) || (function () { var a = new Image(); a.__defineGetter__("id", function() {throw new Error("devtools");}); console.log(a); return false; }())) {
        alert('Developer tools are open');
        window.location.href = 'about:blank';
    }
})();

(function () {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            alert('Developer Tools đang được mở. Hãy đóng lại!');
        }
    });
    console.log(element);
})();

document.addEventListener('selectstart', function (e) {
    e.preventDefault();
});