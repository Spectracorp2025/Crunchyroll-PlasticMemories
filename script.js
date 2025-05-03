const preguntas = [
  {
    texto: "Como se llama la nueva compañera de Tsukasa?",
    opciones: ["Isla", "Darkness", "Beatriz", "Michiru"],
    correcta: 0
  },
  {
    texto: "El Giftia que buscan para recuperar es?",
    opciones: ["Niño", "Adulto", "Joven", "Ningúno"],
    correcta: 2
  },
  {
    texto: "Tsukasa que hace para mejorar la relación con Isla?",
    opciones: ["Trabajar", "Vivir Juntos", "Cita(Normal)", "Cita(Engañada)"],
    correcta: 3
  },
  {
    texto: "Que Giftia conocen ?",
    opciones: ["Marcia", "Iris", "Michiru", "Itsuki"],
    correcta: 0
  },
  {
    texto: "Cual era la Promesa?",
    opciones: ["Estar juntos", "Celebrar el cumpleaños", "Salir juntos", "Recuperar a Giftia"],
    correcta: 3
  },
  {
    texto: "Que le paso a isla tras el suceso?",
    opciones: ["Muere", "Salio herida", "Perdio la memoria", "Trabaja sola"],
    correcta: 1
  },
  {
    texto: "El tema central del capítulo es? Hay sentimientos?",
    opciones: ["Trabajar,Si", "Salir juntos,No", "Tener un Cita, Si", "Confeccion,Si"],
    correcta: 2
  },
  {
    texto: "Como se llama la chica de pelo amarillo? cuando se confiesa Tsukasa?",
    opciones: ["Eru,En las orillas del mar", "Rina,En la explosión de los juegos artificiales", "Eru,En la explosión de los juegos artificiales", "Rina, En un puente solos"],
    correcta: 2
  },
  {
    texto: "Que le pasa ala pareja?",
    opciones: ["Se vuelven novios", "No viviran juntos", "No trabajaran juntos", "Se besan"],
    correcta: 2
  },
  {
    texto: "Nombre del Niño que atiende Tsukasa y el Giftia?",
    opciones: ["Lin-Kun", "Suka-Kun", "Jynk-Kun", "Luis-Kun"],
    correcta: 3
  },
  {
    texto: "Que dibujo en el diario Isla?",
    opciones: ["Un anillo", "Unas tortillas", "Un corazón", "Los dos juntos"],
    correcta: 1
  },
  {
    texto: "Que le enseña Isla a Tsukasa?",
    opciones: ["Sobre Amar", "Sobre Recuperar", "Sobre Plantas", "Sobre Flores"],
    correcta: 2
  },
  {
    texto: "En que parte Tsukasa y Isla se ven por última vez?",
    opciones: ["En la Rueda Rusa", "En el ascensor", "En la orilla del mar ", "En la Silla "],
    correcta: 0
  }
];

let preguntaActual = 0;
let respuestasCorrectas = 0;

const overlay = document.getElementById('overlay');
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result-box');
const resultTitle = document.getElementById('result-title');
const rewardBox = document.getElementById('reward');

startBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  mostrarPregunta();
});

function mostrarPregunta() {
  const pregunta = preguntas[preguntaActual];
  questionElement.textContent = pregunta.texto;
  optionsContainer.innerHTML = '';
  pregunta.opciones.forEach((opcion, index) => {
    const boton = document.createElement('button');
    boton.className = 'option';
    boton.textContent = opcion;
    boton.addEventListener('click', () => seleccionarRespuesta(index));
    optionsContainer.appendChild(boton);
  });
  nextBtn.textContent = preguntaActual === preguntas.length - 1 ? 'Revisar servidores' : 'Siguiente';
  nextBtn.classList.add('hidden');
}

function seleccionarRespuesta(indice) {
  const correcta = preguntas[preguntaActual].correcta;
  if (indice === correcta) respuestasCorrectas++;
  nextBtn.classList.remove('hidden');
  const botones = document.querySelectorAll('.option');
  botones.forEach(btn => btn.disabled = true);
}

nextBtn.addEventListener('click', () => {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  quizContainer.classList.add('hidden');
  resultBox.classList.remove('hidden');
  if (respuestasCorrectas >= 12) {
    resultTitle.textContent = '¡Felicidades!';
    rewardBox.classList.remove('hidden');
  } else {
    resultTitle.textContent = 'Fallaste. Vuelve a ver el anime y reintenta.';
  }
}
window.addEventListener('load', () => {
  const audio = document.getElementById('bg-music');
  audio.volume = 0.3; // Volumen suave
  audio.play().catch(() => {
    // Por si el navegador bloquea autoplay
    console.log("Autoplay bloqueado, espera interacción del usuario.");
  });
});