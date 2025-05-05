document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recarga de página)
    
    const query = document.getElementById('search-bar').value.trim().toLowerCase();

    if (query) {
        // Aquí puedes simular o hacer una búsqueda real en un array de cursos
        const courses = [
            { name: 'Introducción a JavaScript', provider: 'Coursera', category: 'Desarrollo Web', url: 'course-details.html' },
            { name: 'Python para Principiantes', provider: 'Udemy', category: 'Desarrollo Web', url: 'course-details.html' },
            { name: 'Fundamentos de HTML y CSS', provider: 'freeCodeCamp', category: 'Diseño Web', url: 'course-details.html' }
        ];

        const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(query));

        displayCourses(filteredCourses);
    }
});

function displayCourses(courses) {
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = ''; // Limpiar los resultados anteriores

    if (courses.length > 0) {
        courses.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');

            courseCard.innerHTML = `
                <h3>${course.name}</h3>
                <p>Proveedor: ${course.provider}</p>
                <p>Categoría: ${course.category}</p>
                <a href="${course.url}" class="cta-button">Ver detalles</a>
            `;

            coursesContainer.appendChild(courseCard);
        });
    } else {
        coursesContainer.innerHTML = '<p>No se encontraron cursos.</p>';
    }
}
