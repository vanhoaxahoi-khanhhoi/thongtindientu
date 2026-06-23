(function () {
  function block(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  document.addEventListener("contextmenu", block);
  document.addEventListener("selectstart", function (event) {
    if (event.target && /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    event.preventDefault();
  });

  document.addEventListener("keydown", function (event) {
    const key = String(event.key || "").toLowerCase();
    const blocked =
      key === "f12" ||
      (event.ctrlKey && key === "u") ||
      (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key));

    if (blocked) block(event);
  });
})();
