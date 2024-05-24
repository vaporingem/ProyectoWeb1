function calificar() {
    const respuestasCorrectas = {
        question1: 'B',
        question2: 'C',
        question3: 'C',
        question4: 'B',
        question5: 'B'
    };

    let puntos = 0;

    for (const [pregunta, respuestaCorrecta] of Object.entries(respuestasCorrectas)) {
        const respuestaUsuario = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (respuestaUsuario && respuestaUsuario.value === respuestaCorrecta) {
            puntos += 2;
        }
    }

    generarPDF(puntos);
}

function generarPDF(puntos) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Calificación", 20, 20);
    
    doc.setFontSize(16);
    doc.text("Green Tech", 20, 30);
    doc.text(`Puntuación del usuario: ${puntos}`, 20, 40);

    doc.save('calificacion.pdf');
}
