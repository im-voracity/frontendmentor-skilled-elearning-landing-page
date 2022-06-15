const buttons = Array.from(document.querySelectorAll(".button"));

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    window.open(
      "https://matheustenorio.com?utm_source=skilled-landing-page&utm_medium=organic&utm_campaign=frontend-mentor&utm_content=get-started",
      "_blank"
    );
  });
});
