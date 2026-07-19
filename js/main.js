const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

const musicBtn = document.getElementById("music_btn");
const birthdayAudio = document.getElementById("birthday_audio");

if (musicBtn && birthdayAudio) {
  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      birthdayAudio.play();
      musicBtn.textContent = "⏸ Pause Birthday Music";
      isPlaying = true;
    } else {
      birthdayAudio.pause();
      musicBtn.textContent = "▶ Play Birthday Music";
      isPlaying = false;
    }
  });
}

const galleryImages = document.querySelectorAll(".gallery_img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox_img");
const closeLightbox = document.getElementById("close_lightbox");

if (galleryImages.length > 0 && lightbox && lightboxImg && closeLightbox) {
  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
    });
  });

  closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
      lightboxImg.src = "";
    }
  });
}

const surpriseBtn = document.getElementById("surprise_btn");
const hiddenMessage = document.getElementById("hidden_message");

if (surpriseBtn && hiddenMessage) {
  surpriseBtn.addEventListener("click", () => {
    hiddenMessage.classList.add("active");
    surpriseBtn.textContent = "Surprise Opened 💖";
    createConfetti();
  });
}

function createConfetti() {
  const emojis = ["🎉", "🎂", "💖", "✨", "🎁", "🥳","😍","🥰","😘","🥳","💋","👩🏻‍❤️‍👨🏻","🎊","🎀","🎈","❣️","🩷","❤️","💘","💗","💓","💞"];

  for (let i = 0; i < 45; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti_piece";
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 1.5 + "s";
    confetti.style.fontSize = Math.random() * 16 + 18 + "px";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4500);
  }
}

const quizQuestions = [
  {
    question: "Birthday boy, what is the cutest thing you can do today?",
    options: [
      "Act normal",
      "Pretend you are not excited",
      "Smile secretly while reading this",
      "Accept that you are special"
    ],
    answer: 3
  },
  {
    question: "What is your most lovable superpower?",
    options: [
      "Making people smile",
      "Acting innocent",
      "Showing attitude cutely",
      "All of these together"
    ],
    answer: 3
  },
  {
    question: "If someone made this whole website for you, what does it mean?",
    options: [
      "They had free time",
      "They like coding",
      "They wanted to make you smile",
      "You matter more than you think"
    ],
    answer: 3
  },
  {
    question: "What should happen after you open this birthday surprise?",
    options: [
      "You ignore it",
      "You act cool",
      "You smile and pretend you did not",
      "You feel loved, because you are"
    ],
    answer: 3
  },
  {
    question: "What is the correct reaction to a cute birthday wish?",
    options: [
      "Hmm okay",
      "Not bad",
      "I knew it",
      "A soft smile and a little blush"
    ],
    answer: 3
  },
  {
    question: "What makes you dangerous in the sweetest way?",
    options: [
      "Your smile",
      "Your silence",
      "Your cute anger",
      "The way you become unforgettable"
    ],
    answer: 3
  },
  {
    question: "If I say you are special, what should you do?",
    options: [
      "Deny it",
      "Argue unnecessarily",
      "Say 'I know'",
      "Believe it, because it is true"
    ],
    answer: 3
  },
  {
    question: "What is the best birthday gift hidden inside this website?",
    options: [
      "Photos",
      "Music",
      "Animations",
      "Feelings written just for you"
    ],
    answer: 3
  },
  {
    question: "If you pretend this surprise did not touch your heart, what will it mean?",
    options: [
      "You are honest",
      "You are serious",
      "You are hiding your smile",
      "You are caught being cute"
    ],
    answer: 3
  },
  {
    question: "What do you deserve today?",
    options: [
      "Cake",
      "Gifts",
      "Wishes",
      "Love, peace, pampering and endless smiles"
    ],
    answer: 3
  }
];

let currentQuestion = 0;
let quizScore = 0;
let selectedAnswer = false;

const quizQuestion = document.getElementById("quiz_question");
const quizOptions = document.getElementById("quiz_options");
const quizNextBtn = document.getElementById("quiz_next_btn");
const questionCount = document.getElementById("question_count");
const quizScoreText = document.getElementById("quiz_score");
const quizCard = document.getElementById("quiz_card");
const quizResult = document.getElementById("quiz_result");
const resultTitle = document.getElementById("result_title");
const resultMessage = document.getElementById("result_message");
const restartQuiz = document.getElementById("restart_quiz");

function loadQuizQuestion() {
  if (!quizQuestion || !quizOptions) return;

  selectedAnswer = false;
  quizNextBtn.style.display = "none";

  const current = quizQuestions[currentQuestion];

  questionCount.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
  quizScoreText.textContent = `Score: ${quizScore}`;
  quizQuestion.textContent = current.question;

  quizOptions.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "quiz_option";
    button.textContent = option;

    button.addEventListener("click", () => {
      checkAnswer(button, index);
    });

    quizOptions.appendChild(button);
  });
}

function checkAnswer(button, index) {
  if (selectedAnswer) return;

  selectedAnswer = true;

  const correctIndex = quizQuestions[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".quiz_option");

  allOptions.forEach((option, optionIndex) => {
    option.disabled = true;

    if (optionIndex === correctIndex) {
      option.classList.add("correct");
    }
  });

  if (index === correctIndex) {
    button.classList.add("correct");
    quizScore++;
    quizScoreText.textContent = `Score: ${quizScore}`;
  } else {
    button.classList.add("wrong");
  }

  quizNextBtn.style.display = "inline-flex";
}

if (quizNextBtn) {
  quizNextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
      loadQuizQuestion();
    } else {
      showQuizResult();
    }
  });
}

function showQuizResult() {
  quizCard.style.display = "none";
  quizResult.classList.add("active");

  if (quizScore === quizQuestions.length) {
    resultTitle.textContent = "Perfect, Birthday Boy! 🥳💖";
    resultMessage.textContent = "You got everything right. Maybe you really understood the feelings hidden inside this little surprise.";
    createConfetti();
  } else if (quizScore >= 7) {
    resultTitle.textContent = "Almost Perfect 😌✨";
    resultMessage.textContent = "You did really well. A few answers were missed, but your smile is still the main score today.";
  } else if (quizScore >= 4) {
    resultTitle.textContent = "Cute Attempt 😏💗";
    resultMessage.textContent = "Not bad, but I think you were acting too smart. Retest allowed, because birthday boy gets extra chances.";
  } else {
    resultTitle.textContent = "Aww, Retest Needed 😂💌";
    resultMessage.textContent = "This score is suspicious, but still cute. Try again and answer with your heart this time.";
  }
}

if (restartQuiz) {
  restartQuiz.addEventListener("click", () => {
    currentQuestion = 0;
    quizScore = 0;
    quizCard.style.display = "block";
    quizResult.classList.remove("active");
    loadQuizQuestion();
  });
}

loadQuizQuestion();

const openLetterBtn = document.getElementById("open_letter_btn");
const letterIntro = document.getElementById("letter_intro");
const letterCard = document.getElementById("letter_card");

if (openLetterBtn && letterIntro && letterCard) {
  openLetterBtn.addEventListener("click", () => {
    letterIntro.style.display = "none";
    letterCard.classList.add("opened");

    if (typeof createConfetti === "function") {
      createConfetti();
    }
  });
}
