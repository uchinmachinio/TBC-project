"use strict";
const courses = [
  {
    img: "https://static.wixstatic.com/media/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_6f93a2a737b14a32ae26b17f51e6dbf1~mv2.jpg",
    courseName: "iOS Development",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_4323db1079614633a653e2ff9a95738e~mv2.jpg",
    courseName: "React",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_5487da3fc590472dbb3599f7575df2d1~mv2.jpg",
    courseName: "Intro to Python",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_d9e4b267142542e98dbcdf183d766651~mv2.jpg",
    courseName: "Advanced Python",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_41969c5f1e6b4a269bf1d790a52e465b~mv2.jpg",
    courseName: "Advanced Cybersecurity Course",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dd355dc915d14264afd4ce2a9d2b0e12~mv2.jpg",
    courseName: "ToT - Training of Trainers",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_0fc678e4e2e04f8dacc747a4e2fbb6e6~mv2.jpg",
    courseName: "Blockchain",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_dda966974c014319bd5623526510b47c~mv2.jpg",
    courseName: "DevOps",
  },
  {
    img: "https://static.wixstatic.com/media/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg/v1/fill/w_453,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/dd97f4_8cc30cf0258d45a6ad2298ebec33550a~mv2.jpg",
    courseName: "Information Security Governance",
  },
];

const faQuestions = [
  {
    question: "როგორ ხდება კურსებზე რეგისტრაცია და შერჩევა?",
    answer: `კურსზე რეგისტრაციისთვის უნდა გაიარო რამდენიმე ეტაპი:
    I ეტაპი - პირველ ეტაპზე საჭიროა, შეავსო სასურველი კურსისთვის განკუთვნილი სარეგისტრაციო ფორმა, რომელიც 
    განთავსებულია კურსის შიდა გვერდზე. კურსზე რეგისტრაციის დასრულების შემდეგ დაიწყება შემოსული განცხადებების გადარჩევა. 
    II ეტაპი - შერჩევის მეორე ეტაპი კურსების მიხედვით განსხვავებულია, ზოგიერთი კურსისთვის მოიცავს პრე-ტესტს, 
    ზოგიერთ კურსზე კი უნარების ტესტს, სადაც მინიმალური ზღვარის გადალახვის შემთხვევაში გადახვალ შერჩევის 
    შემდეგ ეტაპზე.
    III ეტაპი - მესამე ეტაპი კურსების მიხედვით განსხვავდება: Advance კურსებზე, სადაც მოითხოვება გარკვეული 
    ტექნიკური ცოდნა, მონაწილეებმა უნდა დაწერონ ტექნიკური ტესტი ცოდნის დონის შესამოწმებლად, ხოლო კურსებზე, სადაც რაიმე
     ტიპის წინასწარი ცოდნა მოთხოვნილი არ არის უნდა შეასრულოთ ტექნიკური დავალება, რაც თქვენი კვლევისა და 
     თვითსწავლის უნარს ამოწმებს.
    IV ეტაპი - შერჩევის ბოლო მეოთხე ეტაპი მოიცავს გასაუბრებას შესარჩევ კომისიასთან. გასაუბრების წარმატებით 
    გავლის შემთხვევაში ჩაირიცხებით კურსზე და გაფორმდება შესაბამისი ხელშეკრულება.
    * სანამ კურსზე დარეგისტრირდები მნიშვნელოვანია, ყურადღებით წაიკითხო კურსის აღწერა, ნახო რას ისწავლი 
    კურსის განმავლობაში და გაიგო გააჩნია თუ არა კურსს დასწრების წინაპირობა. 
          
          `,
  },
  {
    question: "შემიძლია თუ არა ერთზე მეტ კურსზე რეგისტრაცია?",
    answer: `TBC X USAID ტექნოლოგიური განათლებისთვის პროგრამაში 
          თითოეულ კანდიდატს აქვს მხოლოდ ერთი კურსის გავლის შესაძლებლობა. 
          გარდა Information Security და Python კურსებისა, სადაც Basic დონის გავლის შემდეგ 
          შესაძლებელია სწავლის გაგრძელება Advance დონეზე.`,
  },
  {
    question: "რა ღირს სწავლა პროგრამის ფარგლებში?",
    answer: `პროგრამის ფარგლებში კურსებზე სწავლა სრულიად დაფინანსებულია თიბისი ბანკისა და USAID-ის მიერ.`,
  },
];

const sliderImages = [
  [
    "https://static.wixstatic.com/media/93e8a3_a356bb7d201f4f47870683655e9e4120~mv2.png/v1/fill/w_371,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%204_2x_edited.png",
    "https://static.wixstatic.com/media/93e8a3_eaf33552ffd5463e96a5f776dda00111~mv2.png/v1/fill/w_364,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/White%20horiz.png",
    "https://static.wixstatic.com/media/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png/v1/fill/w_377,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_ae4ade72135b4c7eaa531290232fe5aa~mv2.png",
  ],
  [
    "https://static.wixstatic.com/media/93e8a3_b595f31239344928802dd7135813e17c~mv2.png/v1/fill/w_374,h_107,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Tegeta%20logo%20geo.png",
    "https://static.wixstatic.com/media/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png/v1/fill/w_282,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/93e8a3_aca86c1c067d4f8585c3c2cb1b0a0178~mv2.png",
    "https://static.wixstatic.com/media/93e8a3_b6ed8fb2602e4670bc83d1fd4a7d9283~mv2.png/v1/fill/w_471,h_143,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/MicrosoftTeams-image%20(9).png",
  ],
  [
    "https://static.wixstatic.com/media/93e8a3_ef7860c1a2854f1c8fc20f867ffa30ab~mv2.png/v1/fill/w_343,h_97,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UFC%20GEO%20PNG_edited.png",
  ],
];

document.addEventListener("DOMContentLoaded", function () {
  //populate courses
  const coursesContainer = document.getElementById("courses");

  // Function to create a course element
  function createCourseElement(course) {
    const courseElement = document.createElement("div");
    courseElement.classList.add("course");

    courseElement.innerHTML = `
      <div class="course-image">
        <img src="${course.img}" alt="">
      </div>
      <div class="course-info">
        <div class="course-title-status">
          <span>${course.courseName}</span>
          <span>რეგისტრაცია დასრულებულია</span>
        </div>
        <div class="course-details">
          <!-- Add your SVG and link here -->
          <a href="#">კურსის დეტალები</a>
        </div>
      </div>
    `;

    return courseElement;
  }
  // Populate the courses container
  courses.forEach(function (course) {
    const courseElement = createCourseElement(course);
    coursesContainer.appendChild(courseElement);
  });

  //nav menu button

  const navButton = document.getElementById("dropdown");
  const asideElement = document.querySelector("aside");

  const toggleSideMenu = () => {
    const backdropElement = document.querySelector(".backdrop");

    if (asideElement.classList.contains("open")) {
      backdropElement.classList.remove("active");
      asideElement.classList.remove("open");
      navButton.classList.remove("xified");
      document.removeEventListener("click", closeSideMenuOnClickOutside);
    } else {
      backdropElement.classList.add("active");
      navButton.classList.add("xified");
      asideElement.classList.add("open");
      document.addEventListener("click", closeSideMenuOnClickOutside);
    }
  };

  const closeSideMenuOnClickOutside = (event) => {
    if (
      !asideElement.contains(event.target) &&
      !navButton.contains(event.target)
    ) {
      // Clicked outside the sidebar and the button
      asideElement.classList.remove("open");
      document.querySelector(".backdrop").classList.remove("active");
      document.removeEventListener("click", closeSideMenuOnClickOutside);
    }
  };

  navButton.onclick = (e) => {
    toggleSideMenu();
  };

  //slider

  const sliderInner = document.querySelector(".slider-inner");
  const leftBtn = document.querySelector(".left-slider-btn");
  const rightBtn = document.querySelector(".right-slider-btn");
  const bullets = document.querySelectorAll(".bullet");

  //POPULATE SLIDER
  //Loop through each array in sliderImages
  sliderImages.forEach((imageArray, index) => {
    // Create a container for each set of images
    const sliderImagesContainer = document.createElement("div");
    if (index === 0) {
      sliderImagesContainer.classList.add("active-slide");
    }
    sliderImagesContainer.classList.add("slider-images-container");

    // Loop through each image URL in the array and create an img element
    imageArray.forEach((imageURL) => {
      const imgElement = document.createElement("img");
      imgElement.src = imageURL;
      imgElement.alt = ""; // Add alternative text if needed

      // Append each img element to the sliderImagesContainer
      sliderImagesContainer.appendChild(imgElement);
    });

    // Append the sliderImagesContainer to the sliderInner
    sliderInner.appendChild(sliderImagesContainer);
  });

  //SLIDER LOGIC
  let currentIndex = 0;
  const totalImages = document.querySelectorAll(
    ".slider-images-container"
  ).length;

  const slideInterval = 3000; // Change this value to set the interval between slides (in milliseconds)
  let autoSlideTimer;

  function startAutoSlide() {
    autoSlideTimer = setInterval(function () {
      if (currentIndex < totalImages - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateSlider();
    }, slideInterval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlideTimer);
  }

  startAutoSlide(); // Start automatic sliding when the page loads

  rightBtn.addEventListener("click", function () {
    stopAutoSlide();
    if (currentIndex < totalImages - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
    startAutoSlide(); // Restart automatic sliding after manual navigation
  });

  leftBtn.addEventListener("click", function () {
    stopAutoSlide();
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalImages - 1;
    }
    updateSlider();
    startAutoSlide(); // Restart automatic sliding after manual navigation
  });

  bullets.forEach(function (bullet, index) {
    bullet.addEventListener("click", function () {
      stopAutoSlide();
      currentIndex = index;
      updateSlider();
      startAutoSlide(); // Restart automatic sliding after manual navigation
    });
  });

  function updateSlider() {
    const isSmallScreen = window.innerWidth < 600;
    // Update the active style for image containers
    document
      .querySelectorAll(".slider-images-container")
      .forEach(function (container, index) {
        container.classList.toggle("active-slide", index === currentIndex);
      });

    if (isSmallScreen) {
      sliderInner.style.transform = `translateX(${-100 * currentIndex}%)`;
    } else {
      // Reset the transform on larger screens
      sliderInner.style.transform = "";
    }

    // Update the active style for bullets
    bullets.forEach((bullet, index) => {
      bullet.classList.toggle("active-bullet", index === currentIndex);
    });
  }

  //QA
  const questionsContainer = document.querySelector(".questions");

  // Loop through the questions and create HTML elements dynamically
  faQuestions.forEach((faQuestion) => {
    // Create question container
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("single-question");

    // Create question element
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");
    questionElement.innerHTML = `<h3>${faQuestion.question}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path class="arrowDown" d="M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z"></path>
    </svg>`;

    // Create answer element
    const answerElement = document.createElement("div");
    answerElement.classList.add("answer");
    answerElement.textContent = faQuestion.answer;

    // Append question and answer to question container
    questionContainer.appendChild(questionElement);
    questionContainer.appendChild(answerElement);

    // Append the question container to the main container
    questionsContainer.appendChild(questionContainer);
  });
  const questions = document.querySelectorAll(".single-question");

  questions.forEach((question) => {
    question.addEventListener("click", toggleAnswer);
  });

  function toggleAnswer(event) {
    let content = event.currentTarget.querySelector(".answer");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingTop = null;
      content.style.paddingBottom = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.paddingTop = "10px";
      content.style.paddingBottom = "10px";
    }
  }
});
