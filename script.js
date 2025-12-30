function calculateGrade(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  if (marks >= 40) return "D";
  return "F";
}

function addStudent() {
  const roll = document.getElementById("roll").value;
  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const marks = document.getElementById("marks").value;

  if (!roll || !name || !course || !marks) {
    alert("Please fill all fields");
    return;
  }

  const grade = calculateGrade(Number(marks));
  const table = document.getElementById("studentTable");

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${roll}</td>
    <td>${name}</td>
    <td>${course}</td>
    <td>${marks}</td>
    <td>${grade}</td>
    <td><button class="delete" onclick="deleteStudent(this)">Delete</button></td>
  `;

  table.appendChild(row);

  document.getElementById("roll").value = "";
  document.getElementById("name").value = "";
  document.getElementById("course").value = "";
  document.getElementById("marks").value = "";
}

function deleteStudent(btn) {
  btn.parentElement.parentElement.remove();
}
