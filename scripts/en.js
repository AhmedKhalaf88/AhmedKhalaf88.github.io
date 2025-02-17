function updateContentToEN() {
  document.querySelector("#aboutNav").textContent = "About";
  document.querySelector("#aboutNav").title = "About";
  document.querySelector("#skillNav").textContent = "Skills";
  document.querySelector("#skillNav").title = "Skills";
  document.querySelector("#experienceNav").textContent = "Experience";
  document.querySelector("#experienceNav").title = "Experience";
  document.querySelector("#educationNav").textContent = "Education";
  document.querySelector("#educationNav").title = "Education";
  document.querySelector("#contentNav").textContent = "Contact";
  document.querySelector("#contentNav").title = "Contact";

  document.querySelector("#downloadCVLink").textContent = "Download CV";
  document.querySelector("#downloadCVLink").href =
    "https://drive.google.com/file/d/179teNGuHmwwAhivabTNpQiO3swxKVkeg/view?usp=sharing";
  document.querySelector("#hireMeLink").textContent = "Hire me";

  document.querySelector("#aboutMeTitle").textContent = "About Me";
  document.querySelector(
    "#aboutmeStatement"
  ).innerHTML = `Enthusiastic frontend developer currently based in Dresden
                  with a proven aptitude for fast-paced frontend learning,
                  actively pursuing junior positions or internships. Have a
                  solid foundation in ES6 and React. Pasionate to learn and
                  work with the micro-frontend arch and applying either build
                  or runtime integration between apps .`;
  document.querySelector("#personalDetails").textContent = "Personal Details";
  document.querySelector("#age").textContent = "Date Of Birth";
  document.querySelector("#phone").textContent = "Phone";
  document.querySelector("#address").textContent = "Address";

  document.querySelector("#skillsContent").textContent = "Skills";

  document.querySelector("#experienceTitle").textContent = "Work Experience";
  document.querySelector("#workAt1").textContent = "at manatec GmbH";
  document.querySelector("#workAt2").textContent = "at Modis GmbH";
  document.querySelector("#workAt3").textContent =
    "at Industrial Testing & Research Center";
  document.querySelector("#workDate1").textContent =
    "March, 2023 - August, 2023";
  document.querySelector("#workDate2").textContent =
    "May, 2021 - February, 2023";
  document.querySelector("#workDate3").textContent =
    "November, 2014 - October, 2015";
  document.querySelector("#workDetails1").innerHTML = `<li>
                        Developed custom Odoo modules to meet specific client
                        requirements, ensuring compatibility with existing
                        systems and adherence to best coding practices.
                      </li>
                      <li>
                        Collaborated with senior developers to troubleshoot
                        and debug complex issues within the Odoo framework,
                        demonstrating problem-solving skills and a proactive
                        approach to resolving challenges.
                      </li>
                      <li>
                        Assisted in the implementation of new features and
                        functionalities in Odoo applications, contributing to
                        the overall improvement of the software's usability
                        and performance.
                      </li>
                      <li>
                        Participated in code reviews and quality assurance
                        processes to maintain high standards of code integrity
                        and reliability, actively seeking feedback to enhance
                        personal skills and proficiency in Odoo development.
                      </li>`;
  document.querySelector("#workDetails2").innerHTML = ` <li>
                        Provided timely technical support to end-users,
                        resolving hardware and software issues efficiently to
                        minimize downtime.
                      </li>
                      <li>
                        Demonstrated strong troubleshooting skills, diagnosing
                        problems accurately and implementing effective
                        solutions to restore functionality.
                      </li>
                      <li>
                        Assisted in the maintenance of IT infrastructure,
                        including software updates, system configurations, and
                        network optimizations.
                      </li>
                      <li>
                        Delivered excellent customer service, ensuring clear
                        communication and user education to prevent recurring
                        issues and enhance user satisfaction.
                      </li>`;
  document.querySelector("#workDetails3").innerHTML = `<li>
                        Offered prompt assistance to end-users, swiftly
                        addressing technical challenges with both hardware and
                        software to maintain productivity levels.
                      </li>
                      <li>
                        Exhibited proficiency in problem-solving, accurately
                        identifying and resolving issues to ensure seamless
                        operation of IT systems.
                      </li>
                      <li>
                        Contributed to the upkeep of IT assets, overseeing
                        software upgrades, system configurations, and network
                        enhancements.
                      </li>
                      <li>
                        Provided exceptional support to users, fostering
                        effective communication and imparting knowledge to
                        prevent future issues and elevate user experience.
                      </li>`;

  document.querySelector("#educationTitle").textContent = "Education";
  document.querySelector("#bachelorDate").textContent =
    "October, 2007 - January, 2013";
  document.querySelector("#bachelorFrom").textContent =
    "from Damascus University";

  document.querySelector("#courseTitle").textContent = "Courses";
  document.querySelector("#courseFrom1").textContent = "from Udemy";
  document.querySelector("#courseDate1").textContent = "March, 2024";
  document.querySelector("#courseFrom2").textContent = "from Udemy";
  document.querySelector("#courseDate2").textContent = "November, 2023";
  document.querySelector("#courseName").textContent =
    "Modular Training for IT Specialists";
  document.querySelector("#courseFrom3").textContent = "from Robotron";
  document.querySelector("#courseDate3").textContent = "January, 2020";

  document.querySelector("#bankApp").textContent =
    "Banking solution application that is developed using Vanilla JavaScript.";
  document.querySelector("#test").innerHTML = `For testing, use these Accounts:
                    <div >Account 1: </div><span>username: js , password: 1111</span>
                    <div> Account 2: </div><span>username: jd , password: 2222</span>`;
  document.querySelector("#guessGame").textContent =
    "A game that is developed using Vanilla JavaScript.";
  document.querySelector("#PigGame").textContent =
    "A game that is developed using Vanilla JavaScript.";
  document.querySelector("#usepopcorn").textContent =
    "This app, developed using React, allows you to search for movies, rate them, and add them to your watched list.";
  document.querySelector("#billSplit").textContent =
    "This app, developed using React, allows you to split the bill with your friends.";
  document.querySelector("#travelList").textContent =
    "This app, developed using React, allows you to create a list of items for your travel.";
  document.querySelector("#leonDesign").textContent =
    "This design is created with html and css.";
  document.querySelector("#weather").textContent =
    "This React app lets you easily check the current weather, keeping you updated on the latest conditions.";
  document.querySelector("#bankWebDesign").textContent =
    "This is a bank website design developed using Vanilla JavaScript.";
  document.querySelector("#quiz").textContent =
    "This React-based application lets you challenge your React knowledge with an interactive quiz.";
  document.querySelector("#worldwise").textContent =
    "This React-based application provides details about the cities and countries you've visited, including the dates of your visits.";
  document.querySelector("#mapty").textContent =
    "This app, developed with Vanilla JavaScript, allows you to save all your workouts, including details such as duration, distance, location, date, and type of workout, whether running or cycling.";
  document.querySelector("#pizza-menu").textContent =
    "This React-based application provides a pizza menu where users can quickly order pizzas from the menu. Users can add pizzas to the cart, specify the number of pizzas, set the priority level of the order, and provide a delivery address for the order.";
  document.querySelector("#forkify").textContent =
    "This application allows you to explore a variety of recipes along with their ingredients. You can upload and create your own recipes, adjust ingredient quantities to fit your needs, bookmark your favorite dishes, and manage your personalized recipe collection.";
  document.querySelector("#wild-oasis").textContent =
    "A user-friendly application for the efficient management of a hotel in the Wild Oasis. Users can add and manage hotel guests, create, edit, and delete bookings, and handle check-ins and check-outs. The platform also allows for easy cabin management and provides a dashboard with statistics on bookings, check-ins, check-outs, and revenue—all in an intuitive and seamless experience.";
  document.querySelector("#wild-oasis-website").textContent =
    "The Wild Oasis is a Next.js-powered booking platform where users can browse stunning cabins, log in to reserve their stay, select dates, and manage their bookings with ease. The site offers a seamless experience, allowing guests to update or cancel reservations while learning more about the hotel and its offerings.";

  document.querySelector("#contactTitle").textContent = "Contact";
}
