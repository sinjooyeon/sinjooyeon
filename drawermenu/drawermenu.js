debugger;
function Drawer(el, open = false) {
  debugger;
  this.el = el;
  this.isOpen = open;

  (this.isOpen) ? this.open() : this.close();
}
Drawer.prototype.open = function() {
  debugger;
  this.isOpen = true;
  this.el.style.transform = 'translate(0px,0px)';
};
Drawer.prototype.close = function() {
  debugger;
  this.isOpen = false;
  this.el.style.transform = 'translate(0px,-100%)';
};

const sideMenu = new Drawer(document.querySelector('.drawer'));
document.getElementById('drawer-opener').addEventListener('click', (e) => {
  if (!sideMenu.isOpen) {
    sideMenu.open();
  } else {
    sideMenu.close();
  }
});
