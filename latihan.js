const questions = [
    {
        question: "Pemasaran adalah serangkaian kegiatan yang bertujuan untuk?",
        options: ["Menipu konsumen", "Menggunakan produk berbahaya", "Memenuhi kebutuhan dan keinginan konsumen", "Mendapatkan keuntungan semata"],
        answer: 2
    },
    {
        question: "Salah satu langkah penting dalam pemasaran adalah?",
        options: ["Mengabaikan kebutuhan konsumen", "Tidak melakukan riset pasar", "Memahami produk Anda dan pasar Anda", "Menjual produk dengan harga tinggi"],
        answer: 2
    },
    {
        question: "Tujuan segmentasi pasar adalah?",
        options: ["Membuat pasar menjadi lebih rumit", "Mengabaikan variasi kebutuhan konsumen", "Memecah pasar menjadi segmen yang lebih kecil", "Meningkatkan harga produk"],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan posisi produk?",
        options: ["Bagaimana produk dilihat oleh pesaing", "Bagaimana produk diposisikan di rak toko", "Bagaimana produk dilihat oleh konsumen dalam perbandingan dengan pesaing", "Bagaimana produk disimpan di gudang"],
        answer: 2
    },
    {
        question: "Langkah terakhir dalam strategi pemasaran adalah?",
        options: ["Menjalankan kampanye pemasaran", "Membuat rencana pemasaran", "Melakukan evaluasi dan penyesuaian", "Menentukan target pasar"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const resultContainer = document.getElementById("resultContainer");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextQuestion");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    const currentQuiz = questions[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = "";
    currentQuiz.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("quiz-button");
        button.addEventListener("click", () => {
            checkAnswer(index);
        });
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreElement.textContent = `Skor Anda: ${score} dari ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    displayQuestion();
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
});

// Memulai kuis saat tombol "Mulai Kuis" diklik
const startQuizButton = document.getElementById("startQuiz");
startQuizButton.addEventListener("click", () => {
    startQuizButton.style.display = "none";
    displayQuestion();
    quizContainer.style.display = "block";
});
// Event listener untuk menambahkan kelas 'clicked' ke tombol kuis saat diklik
button.addEventListener("click", () => {
    checkAnswer(index);
    button.classList.add("clicked");
});

  