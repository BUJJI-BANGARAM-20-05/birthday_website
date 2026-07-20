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
      "Act like you are not excited",
      "Ask for cake first",
      "Smile secretly while reading this",
      "Say this website is okay-okay"
    ],
    answer: 2
  },
  {
    question: "What should be your official birthday title today?",
    options: [
      "Normal person",
      "Mr. Birthday VIP",
      "Silent hero",
      "Cake inspector"
    ],
    answer: 1
  },
  {
    question: "If birthday cake suddenly disappears, who is the prime suspect?",
    options: [
      "The candles",
      "The spoon",
      "Birthday boy with an innocent face",
      "Nobody, it was magic"
    ],
    answer: 2
  },
  {
    question: "What is the sweetest thing hidden inside this website?",
    options: [
      "Feelings written just for you",
      "Only photos",
      "Only music",
      "Only animations"
    ],
    answer: 0
  },
  {
    question: "If you pretend this surprise did not touch your heart, what does it mean?",
    options: [
      "You are very serious",
      "You are caught being cute",
      "You did not see properly",
      "You need more cake"
    ],
    answer: 1
  },
  {
    question: "What is the birthday rule for you today?",
    options: [
      "No smiling allowed",
      "No drama allowed",
      "No gifts allowed",
      "Unlimited pampering allowed"
    ],
    answer: 3
  },
  {
    question: "What makes you dangerous in the sweetest way?",
    options: [
      "Your silence",
      "Your birthday mood",
      "The way you become unforgettable",
      "Your cake-cutting skills"
    ],
    answer: 2
  },
  {
    question: "If I ever miss wishing you properly, what should happen?",
    options: [
      "Nothing, ignore it",
      "Only one sorry is enough",
      "You forget everything instantly",
      "I become officially guilty until forgiven"
    ],
    answer: 3
  },
  {
    question: "What is the correct reaction to a heartfelt birthday letter?",
    options: [
      "Hmm okay",
      "I will think about it",
      "A soft smile and a little forgiveness",
      "Pretend the eyes are not emotional"
    ],
    answer: 2
  },
  {
    question: "When you say 'I am fine', what should I understand?",
    options: [
      "Emergency: decode the real mood carefully",
      "Everything is truly fine",
      "Time to relax",
      "No reply needed"
    ],
    answer: 0
  },
  {
    question: "Why was this birthday website really made?",
    options: [
      "To test internet speed",
      "To make you smile and feel loved",
      "To confuse you",
      "To show random pages"
    ],
    answer: 1
  },
  {
    question: "Why should the candles be jealous today?",
    options: [
      "Because they are melting",
      "Because cake gets more attention",
      "Because the room is decorated",
      "Because your smile shines brighter"
    ],
    answer: 3
  },
  {
    question: "Who gets extra chances in this quiz today?",
    options: [
      "The birthday boy only",
      "The cake only",
      "The candles only",
      "Nobody at all"
    ],
    answer: 0
  },
  {
    question: "After winning this quiz, what can you demand?",
    options: [
      "More questions",
      "A serious lecture",
      "Treat, smile, and extra attention",
      "Nothing, stay simple"
    ],
    answer: 2
  },
  {
    question: "Final question: what is the real secret of this surprise?",
    options: [
      "It is just a normal website",
      "You are deeply loved and truly special",
      "It was made by mistake",
      "The quiz is impossible"
    ],
    answer: 1
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
    resultMessage.textContent = "Full marks! Now you cannot pretend this surprise was not cute. Birthday VIP officially wins.";
    createConfetti();
  } else if (quizScore >= 12) {
    resultTitle.textContent = "Almost Perfect 😌✨";
    resultMessage.textContent = "Very impressive. A few answers slipped, but your birthday charm is still fully active.";
  } else if (quizScore >= 8) {
    resultTitle.textContent = "Cute But Suspicious 😏💗";
    resultMessage.textContent = "Not bad, but I feel you were acting too smart. Birthday boy gets one more chance.";
  } else if (quizScore >= 4) {
    resultTitle.textContent = "Aww, Retest Needed 😂💌";
    resultMessage.textContent = "This score is cute but risky. Try again and answer with your heart, not your attitude.";
  } else {
    resultTitle.textContent = "Full Birthday Drama Detected 😂🎂";
    resultMessage.textContent = "This score is not acceptable. Retest is compulsory, and extra pampering charges may apply.";
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
