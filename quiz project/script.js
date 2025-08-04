function checkAnswers() {
  let score = 0;

  // Array of correct answers: [q1 to q10]
  const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
    q4: "b",
    q5: "a",
    q6: "b",
    q7: "c",
    q8: "a",
    q9: "c",
    q10: "b"
  };

  // Loop through each question
  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && answer.value === correctAnswers[`q${i}`]) {
      score++;
    }
  }

  // Show result
  const resultText = `Your score: ${score}/10`;
  const resultElement = document.getElementById("result");
  resultElement.innerText = resultText;

  // Color code result
  if (score >= 8) {
    resultElement.style.color = "#2e7d32"; // Green
  } else if (score >= 5) {
    resultElement.style.color = "#f39c12"; // Orange
  } else {
    resultElement.style.color = "#c0392b"; // Red
  }
}
