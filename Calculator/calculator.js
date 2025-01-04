const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator button");

let expression = "";
let isResultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      expression = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      if (expression === "") {
        expression = "";
      } else {
        try {
          if (!isResultDisplayed) {
            expression = eval(expression).toString();
          }
        } catch {
          expression = "Error";
        }
      }
      isResultDisplayed = true;
    } else {
      if (isResultDisplayed) {
        expression = value;
        isResultDisplayed = false;
      } else {
        expression += value;
      }
    }

    const maxDisplayLength = 18;

    const displayExpression =
      expression.length > maxDisplayLength
        ? expression.slice(expression.length - maxDisplayLength)
        : expression;

    display.textContent = displayExpression;
  });
});

const themeToggle = document.getElementById("theme-toggler");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("darkmode");

  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("darkmode")) {
    icon.classList.remove("fa-toggle-off");
    icon.classList.add("fa-toggle-on");
  } else {
    icon.classList.remove("fa-toggle-on");
    icon.classList.add("fa-toggle-off");
  }
});
