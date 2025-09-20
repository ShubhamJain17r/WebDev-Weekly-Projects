const { evaluate, parse, format } = math;

const equation = document.getElementById("equation");
const answer = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

// Allowed keyboard inputs
const allowedKeys = [
  ..."0123456789+-*/().",
  "Backspace",
  "Delete",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "Escape",
  "Enter"
];

// 🔹 Keyboard input filtering
equation.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.querySelector('button[value="="]').click();
    return;
  }

  if (e.key === "Escape") {
    e.preventDefault();
    document.querySelector('button[value="C"]').click();
    return;
  }

  if (!allowedKeys.includes(e.key)) {
    e.preventDefault();
  }
});

// Prevent manual typing in answer field
answer.addEventListener("keypress", e => e.preventDefault());

// 🔹 Button click handling
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.value;

    if (val === "=") {
      try {
        // Quick invalid char check
        if (!/^[0-9+\-*/().\s]+$/.test(equation.value)) {
          throw new Error("Invalid characters");
        }

        // Syntax validation
        parse(equation.value);

        // Evaluate
        const result = evaluate(equation.value);

        if (!Number.isFinite(result)) {
          throw new Error("Math error");
        }

        // Format result
        answer.value = format(result, { precision: 12 });

      } catch (err) {
        answer.value = "Error";
        console.error("Invalid equation:", err.message || err);
      }

    } else if (btn.id === "clear") {
      equation.value = "";
      answer.value = "";

    } else if (btn.id === "backspace") {
      let start = equation.selectionStart;
      let end = equation.selectionEnd;

      if (start === end && start > 0) {
        equation.value =
          equation.value.slice(0, start - 1) + equation.value.slice(end);
        equation.setSelectionRange(start - 1, start - 1);
      } else if (start !== end) {
        equation.value =
          equation.value.slice(0, start) + equation.value.slice(end);
        equation.setSelectionRange(start, start);
      }

    } else {
      // 🔹 Prevent operator spam (e.g. ++, */)
      if ("+-*/".includes(val)) {
        let prev = equation.value[equation.selectionStart - 1];
        if ("+-*/".includes(prev)) {
          return;
        }
      }

      // Insert at cursor
      let start = equation.selectionStart;
      let end = equation.selectionEnd;

      equation.value =
        equation.value.slice(0, start) + val + equation.value.slice(end);
      equation.setSelectionRange(start + val.length, start + val.length);
    }

    equation.focus();
  });
});
