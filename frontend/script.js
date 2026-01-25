/* ===============================
   GRADES & PHASES
================================ */

fetch("http://localhost:5000/api/classes")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(classes => {
    const list = document.getElementById("classes");
    list.innerHTML = "";

    // Group grades by phase
    const phases = {};

    classes.forEach(grade => {
      if (!phases[grade.phase]) {
        phases[grade.phase] = [];
      }
      phases[grade.phase].push(grade);
    });

    // Render phases
    Object.keys(phases).forEach(phaseName => {

      // Phase container
      const phaseContainer = document.createElement("li");
      phaseContainer.style.listStyle = "none";
      phaseContainer.style.marginBottom = "20px";

      // Phase heading
      const phaseHeading = document.createElement("h3");
      phaseHeading.textContent = phaseName;
      phaseHeading.style.color = "#0b1c2d";
      phaseHeading.style.marginBottom = "10px";

      phaseContainer.appendChild(phaseHeading);

      // Grades under phase
      phases[phaseName].forEach(grade => {
        const gradeBox = document.createElement("div");
        gradeBox.style.marginBottom = "12px";

        const gradeTitle = document.createElement("div");
        gradeTitle.className = "grade-title";
        gradeTitle.textContent = grade.name;

        const teachersList = document.createElement("ul");
        teachersList.className = "teachers";

        grade.teachers.forEach(teacher => {
          const teacherItem = document.createElement("li");
          teacherItem.textContent = teacher;
          teachersList.appendChild(teacherItem);
        });

        gradeBox.appendChild(gradeTitle);
        gradeBox.appendChild(teachersList);
        phaseContainer.appendChild(gradeBox);
      });

      list.appendChild(phaseContainer);
    });
  })
  .catch(error => {
    console.error("Error fetching classes:", error);
  });
  const events = [
  {
    date: "2026-01-15",
    title: "School Reopens",
    description: "First day of the 2026 academic year"
  },
  {
    date: "2026-03-20",
    title: "Athletics Day",
    description: "Inter-house athletics competition"
  },
  {
    date: "2026-06-16",
    title: "Youth Day Celebration",
    description: "Cultural and sports activities"
  }
];


/* ===============================
   EVENTS
================================ */

const eventList = document.getElementById("eventList");
const calendar = document.getElementById("calendar");

function showList() {
  calendar.classList.add("hidden");
  eventList.classList.remove("hidden");
  renderList();
}

function showCalendar() {
  eventList.classList.add("hidden");
  calendar.classList.remove("hidden");
  renderCalendar();
}

function renderList() {
  eventList.innerHTML = "";

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event-card";

    div.innerHTML = `
      <div class="event-date">${event.date}</div>
      <div><strong>${event.title}</strong></div>
      <div>${event.description}</div>
    `;

    eventList.appendChild(div);
  });
}

function renderCalendar() {
  calendar.innerHTML = `<div class="calendar-grid"></div>`;
  const grid = calendar.querySelector(".calendar-grid");

  for (let day = 1; day <= 30; day++) {
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    cell.innerHTML = `<strong>${day}</strong>`;

    events.forEach(event => {
      if (new Date(event.date).getDate() === day) {
        cell.classList.add("event");
        cell.innerHTML += `<div>${event.title}</div>`;
      }
    });

    grid.appendChild(cell);
  }
}

// Default view
showList();
