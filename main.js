document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll('.todo input[type="checkbox"]');
  const progressBar = document.getElementById("progress-bar");
  const percentDisplay = document.getElementById("progress-percent");
  console.log(
    "Checkboxes found:",
    checkboxes.length,
    "Progress bar:",
    progressBar
  );

  function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll(
      '.todo input[type="checkbox"]:checked'
    ).length;
    const percent = (checked / total) * 100;
    progressBar.value = percent;
    console.log("Checked:", checked, "Total:", total, "Percent:", percent);
    percentDisplay.textContent = `${Math.round(percent)}% completed`;
  }
  checkboxes.forEach((cb) => cb.addEventListener("change", updateProgress));
  updateProgress();
});
