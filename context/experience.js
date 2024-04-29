const experience = [
  {
    school: "Cielito Zamora Senior High School",
    major: `Intern Teacher`,
    year: "03/2023-06/2023",
    para: `In this on the job tranining, I teach three subjects and
    it is about <strong> HTML </strong>, <strong>CSS</strong> and
    <strong> Javascript </strong>. The learning materials that I have was w3schools.com.
    I learned how to improve my skills in coding while teaching my students.
    It was easy becase I have background in coding.`,
  },
  {
    school: "React - The Complete Guide 2024 <br> (incl. React Router & Redux)",
    major: "IT - Programmer",
    year: "2017-2019",
    para: `In this bootcamp, I learned about <strong> reusing code and building components </strong>.
    It enhances the speed of the program or website. It is easy to
    <strong> manipulate the DOM </strong>
    than using only javascript and it can create website quickly.
    It helps to have an efficient website and <strong> clean and concise code</strong>.`,
  },
  {
    school: `100 Days of Code - 2024 Web Development <br> Bootcamp`,
    major: "Certificate of Completion in Udemy",
    year: "01/2024 - 03/2024",
    para: `In this bootcamp, I learned about frontend development and backend development.
    I understand how the <strong> SEO</strong> and website works in the webpage.
    I learned <strong> mvc pattern </strong>, <strong>sessions</strong>,
    <strong> authentications </strong> and
    different attack in
    websites such as <strong> sql injection</strong>, <strong> csrf attacks</strong>
    and <strong> xss attacks</strong>.`,
  },
  {
    school: "Data Structures + Algorithms",
    major: "Certificate of Completion in Udemy",
    year: "03/2024-04/2024",
    para: ` In this bootcamp, I understand how fast and efficient the website runs in the webpages.
    I learned the basic <strong>Big O notation,
    data structures, linked lists, queues, stacks and  trees.</strong>`,
  },
];

import { educationExp } from "./educations.js";

export const experienceHtml = educationExp(experience);
