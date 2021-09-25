
var removeClass = function (el, className) {
    if (el.classList) el.classList.remove(className);
    else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
var addClass = function (el, className) {
    if (el.classList) el.classList.add(className);
    else el.className += ' ' + className;
}
var hasClass = function (element, cls) { return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1; }
var toggleClass = function (element, cls) { var el = document.getElementById(element); if (hasClass(el, cls) == true) { removeClass(el, cls) } else { addClass(el, cls) } }
var activate = function (el) { toggleClass(el, "show"); return; }


