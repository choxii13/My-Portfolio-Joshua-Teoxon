export const services = [
  {
    icon: "bi-code-slash",
    title: "Front-end Development",
    para: "Create interactive websites and developing new features. Building reusable code and components that interact with users",
  },
  {
    icon: "bi-brush",
    title: "Web Design",
    para: "Create visual elements and layouts with minimal code. Translating design into functional website. Clear and concise web design.",
  },
  {
    icon: "bi-palette",
    title: "UI/UX Design",
    para: "Making a product that is enjoyable, accessible and pleasing to the eye of user. Improving the user interaction with products.",
  },
  {
    icon: "bi-gear",
    title: "Backend Development",
    para: "Creating server-side-application. Develop each element of the server-side maitaining and debugging codes in website. api, databases, and logic.",
  },
  {
    icon: "bi-window",
    title: "Web Development",
    para: "Full functionality of the web development like shoppee, lazada etc. Interactive website with backend. Ensuring the website to function properly.",
  },
  {
    icon: "bi-shield-exclamation",
    title: "Security",
    para: "Creating security for website used by many companies hashed, csrf attacks, injections, authorizations, and authentication.",
  },
];

export let servicesHtml = " ";
for (let i = 0; i < services.length; i++) {
  servicesHtml += `
  <div class='services'>
    <div class='icon-design'>
      <i class='${services[i].icon}'></i>
    </div>
    <h4> ${services[i].title} </h4>
    <p>
    ${services[i].para}.
    </p>
  </div>`;
}
