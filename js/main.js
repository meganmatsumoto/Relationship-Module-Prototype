/* functions for general use */

/* Set kup MDCIconToggle */
import {MDCIconToggle} from 'mdc-icon-toggle';

MDCIconToggle.attachTo(document.querySelector('.mdc-icon-toggle'));

let menu = new mdc.menu.MDCSimpleMenu(document.querySelector('.mdc-simple-menu'));
// Add event listener to some button to toggle the menu on and off.
document.querySelector('.some-button').addEventListener('click', () => menu.open = !menu.open);