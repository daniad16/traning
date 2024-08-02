fetch('https://api-d-yo4f.onrender.com/')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let students = document.getElementById('students');
        json.forEach(element => {
            let student = document.createElement('option');
            student.innerHTML= element.name;
            students.appendChild(student);
        })
    }
    )