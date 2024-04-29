const skills = [
  { title: "HTML/CSS", percent: "95%", class: "html-css" },
  { title: "Javascript", percent: "90%", class: "javascript" },
  { title: "React", percent: "85%", class: "react" },
  { title: "Node-js", percent: "80%", class: "node-js" },
  { title: "API", percent: "80%", class: "api" },
  { title: "Ui", percent: "80%", class: "ui" },
];

export let skillHtml = " ";
for (let i = 0; i < skills.length; i++) {
  skillHtml += `
  <div class='skills'>
    <div class='title'>
      <h5> ${skills[i].title}</h5>
      <h5> ${skills[i].percent}</h5>
    </div>
    <div class='rail'>
      <div class='percent ${skills[i].class}'></div>
      <div class='stoppage'></div>
    </div>
  </div>`;
}
