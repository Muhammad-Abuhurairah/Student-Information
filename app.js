  // Define the array of students
  var students = [
    {
        name: "John Doe",
        semester: 3,
        father_name: "Doe",
        isFeePaid: true,
        courses: ["Mathematics", "Physics", "Computer Science"]
    },
    {
        name: "Jane Smith",
        semester: 2,
        father_name: "Smith",
        isFeePaid: true,
        courses: ["Biology", "Chemistry", "English"]
    },
    {
        name: "Emily Johnson",
        semester: 4,
        father_name: "Johnson",
        isFeePaid: false,
        courses: ["Economics", "Statistics", "Marketing"]
    }
];

// Function to display the students
function displayStudents() {
    // Get the container div element by its ID
    var studentsCo3ntainer = document.getElementById("studentsContainer");

    // Loop through each student in the array
    for (var i = 0; i < students.length; i++) {
        // Get the current student object
        var student = students[i];

        // Create a new div element for the student
        var studentDiv = document.createElement("div");
        studentDiv.className = "student-container";

        // Create a string to hold the student's information
        var studentInfo = "<div class='student-name'>" + student.name + "</div>" +
                          "<div>Father's Name: " + student.father_name + "</div>" +
                          "<div>Semester: " + student.semester + "</div>" +
                          "<div>Fee Paid: " + (student.isFeePaid ? 'Yes' : 'No') + "</div>";

        // Set the innerHTML of the studentDiv with the student's information
        studentDiv.innerHTML = studentInfo;

        // Create a new unordered list element for the courses
        var coursesList = document.createElement("ul");
        coursesList.className = "courses-list";

        // Loop through the courses and create a list item for each course
        for (var j = 0; j < student.courses.length; j++) {
            var courseItem = document.createElement("li");
            courseItem.textContent = student.courses[j];
            coursesList.appendChild(courseItem);
        }

        // Append the courses list to the student div
        studentDiv.appendChild(coursesList);

        // Append the student div to the container div
        studentsContainer.appendChild(studentDiv);
    }
}

// Call the function to display the students
displayStudents();