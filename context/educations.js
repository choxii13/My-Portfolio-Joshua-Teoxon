const education = [
  {
    school: "Polytechnic University of the Philippines",
    major: `Bachelors of Business Technology
    and Livelihood Education <br>
    Major in Information Communication Techology`,
    year: "2019-2023",
    para: `In this school, I learned about 
    teaching and coding. I have a subject of 
    <strong> web development </strong> 
    and develop a front-end website with 
    our information for our project and got good grades on it.
    After that, I started pursuing my career in web development 
    and bought udemy certificate to enhance my skills.
    Also, I love and enjoy coding.`,
  },
  {
    school: "Cielito Zamora Senior High School",
    major: "IT - Programmer",
    year: "2017-2019",
    para: `In this school, I learned the basic programming.
    I learned how to create website using
    <strong> HTML </strong>,<strong>CSS</strong> and
    <strong> Javascript </strong>,
    I developed a simple restaurant website in my first school year.
    In my 2nd year, I learned about <strong>Java</strong> programming
    and develop a student information with <strong>sql</strong> databases for my thesis.`,
  },
];

export function educationExp(value) {
  let educationHtml = `<div class="straight-line"> </div> `;
  for (let i = 0; i < value.length; i++) {
    educationHtml += `
  <div class='education'>
    <div class='educ-para'>
      <p>
        ${value[i].para}
      </p>
    </div>
    <div class='educ-num'>
      <p>0${i + 1}</p>
    </div>
    <div class='educ-title'>
      <h3>${value[i].school}</h3>
      <h4>
       ${value[i].major}
      </h4>
      <h5> ${value[i].year}</h5>
    </div>
  </div>`;
  }

  return educationHtml;
}

export const educationHtml = educationExp(education);
