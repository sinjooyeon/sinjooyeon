function Drawer(el, open = false) {
  this.el = el;
  this.isOpen = open;

  (this.isOpen) ? this.open() : this.close();
}
Drawer.prototype.open = function() {
  this.isOpen = true;
  this.el.style.transform = 'translate(0px)';
};
Drawer.prototype.close = function() {
  this.isOpen = false;
  this.el.style.transform = 'translate(220px)';
};

const sideMenu = new Drawer(document.querySelector('.drawer'));
document.getElementById('drawer-opener').addEventListener('click', (e) => {
  if (!sideMenu.isOpen) {
    sideMenu.open();
  } else {
    sideMenu.close();
  }
});
