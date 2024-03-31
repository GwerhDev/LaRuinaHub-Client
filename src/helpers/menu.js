import { $d } from "../utils/cssSelector";

export function openMenu() {
  $d(".nav-menu-ul").style.height="100vh";
  $d(".menu-container").style.display="flex";
  $d(".close-menu-container").style.display="flex";
  $d(".burger-menu-container").style.display="none";
  $d(".searcher-container").style.display="block";
}

export function closeMenu() {
  $d(".nav-menu-ul").style.height="2.5rem";
  $d(".menu-container").style.display="none";
  $d(".close-menu-container").style.display="none";
  $d(".burger-menu-container").style.display="flex";
  $d(".searcher-container").style.display="none";
}

export function openAccountMenu() {
  $d("#account-menu-container").style.display="flex";
};

export function closeAccountMenu() {
  $d("#account-menu-container").style.display="none";
};

export function CanvasMenuFunction(selector) {
  document.addEventListener('mouseup', function (e) {
      var container = $d(selector);
      if (!container?.contains(e.target)) return $d(selector).style.display='none';
      return;
  });
};