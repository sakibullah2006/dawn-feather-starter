/**
 * Collapsible accordion component for Alpine.js
 * Manages accordion state where only one item can be open at a time
 */
export default () => ({
  activeItem: null,

  isOpen(id) {
    return this.activeItem === id;
  },

  toggle(id) {
    this.activeItem = this.activeItem === id ? null : id;
  },
});
