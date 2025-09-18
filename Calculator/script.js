const equation = document.getElementById("equation");
const answer = document.getElementById("answer");
const buttons = document.querySelectorAll("button");

equation.addEventListener("keydown", e => {
  const allowed = [
    "0","1","2","3","4","5","6","7","8","9","+","-","*","/","(",")",".","Backspace","Delete","ArrowLeft","ArrowRight","Home","End","Escape"
  ];

  // allow Enter as "="
  if (e.key === "Enter") {
    e.preventDefault();
    document.querySelector('button[value="="]').click();
    return;
  }

  // Esc to clear
  if (e.key === "Escape") {
    e.preventDefault();
    document.querySelector('button[value="C"]').click();
    return;
  }

  // block everything else
  if (!allowed.includes(e.key)) {
    e.preventDefault();
  }
});

answer.addEventListener("keypress", e => e.preventDefault());
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const val = btn.value;

        if (val === "=") {
            try {
                if (!/^[0-9+\-*/().\s]+$/.test(equation.value)) {
                    answer.value = "Error";
                    return;
                }
                let result = eval(equation.value);

                if (!Number.isFinite(result)) {
                    answer.value = "Error";
                    alert("Mathematical Error");    
                } else {
                    answer.value = parseFloat(result.toFixed(12));
                }
            } catch (err) {
                answer.value = "Error";
                alert("Invalid equation: " + (err.message || err));
                console.error(err);
            }

        } else if (btn.id === "clear") {
            equation.value = "";
            answer.value = "";

        } else if (btn.id === "backspace") {
            // Backspace at cursor position
            let start = equation.selectionStart;
            let end = equation.selectionEnd;

            if (start === end && start > 0) {
                // Delete one character before cursor
                equation.value = equation.value.slice(0, start - 1) + equation.value.slice(end);
                equation.setSelectionRange(start - 1, start - 1);
            } else if (start !== end) {
                // Delete selected text
                equation.value = equation.value.slice(0, start) + equation.value.slice(end);
                equation.setSelectionRange(start, start);
            }

        } else {
            // Insert at cursor position
            let start = equation.selectionStart;
            let end = equation.selectionEnd;

            equation.value = equation.value.slice(0, start) + val + equation.value.slice(end);
            equation.setSelectionRange(start + val.length, start + val.length);
        }

        // ensure input keeps focus after every click
        equation.focus();
    });
});
