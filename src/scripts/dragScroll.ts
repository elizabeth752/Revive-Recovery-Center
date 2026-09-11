// Adds click-and-hold (mouse) / touch-drag scrolling to a native
// overflow-x-auto container. Touch already scrolls natively on mobile;
// this specifically fills the desktop mouse-drag gap, and normalizes
// both through the Pointer Events API.
export function enableDragScroll(container: HTMLElement) {
  let isDown = false;
  let dragged = false;
  let startX = 0;
  let startScrollLeft = 0;

  container.style.cursor = "grab";

  function onPointerDown(e: PointerEvent) {
    // Touch already scrolls natively; only take over for mouse so we
    // don't fight the browser's own touch-scroll momentum on mobile.
    if (e.pointerType !== "mouse") return;
    isDown = true;
    dragged = false;
    startX = e.clientX;
    startScrollLeft = container.scrollLeft;
    container.setPointerCapture(e.pointerId);
    container.style.cursor = "grabbing";
    container.style.scrollBehavior = "auto";
  }

  function onPointerMove(e: PointerEvent) {
    if (!isDown) return;
    const delta = e.clientX - startX;
    if (Math.abs(delta) > 4) dragged = true;
    container.scrollLeft = startScrollLeft - delta;
  }

  function endDrag(e: PointerEvent) {
    if (!isDown) return;
    isDown = false;
    container.style.cursor = "grab";
    try {
      container.releasePointerCapture(e.pointerId);
    } catch {}
  }

  // Prevent a drag from also firing a click on links/buttons inside.
  function onClickCapture(e: MouseEvent) {
    if (dragged) {
      e.preventDefault();
      e.stopPropagation();
      dragged = false;
    }
  }

  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerup", endDrag);
  container.addEventListener("pointercancel", endDrag);
  container.addEventListener("pointerleave", endDrag);
  container.addEventListener("click", onClickCapture, true);
}
