export const works = [
  {
    folder: "online-shop-system",
    title: "Online Shop System with Node-js",
    link: "https://vimeo.com/940647848",
    size: 12,
  },
  {
    folder: "facebook-node-js",
    title: "Facebook with Node-js",
    link: `https://vimeo.com/940640159`,
    size: 8,
  },
  {
    folder: "facebook-react",
    title: "Facebook with React-js",
    link: `https://vimeo.com/940635816`,
    size: 6,
  },
  {
    folder: "blog-node-js",
    title: "Blog with Node-js",
    link: "https://github.com/choxii13",
    size: 5,
  },
  {
    folder: "todo-list-node-js",
    title: "Todo List with Node-js",
    link: "https://github.com/choxii13",
    size: 6,
  },
  {
    folder: "bergify-page",
    title: "Bergify Page",
    link: "https://choxii13.github.io/Bergify-Page/",
    size: 11,
  },
  {
    folder: "facebook-page",
    title: "Facebook Page",
    link: "https://choxii13.github.io/facebook-design/",
    size: 6,
  },
  {
    folder: "restaurant-page",
    title: "Restaurant Page",
    link: "https://choxii13.github.io/landing-page/",
    size: 4,
  },
  {
    folder: "first-portfolio",
    title: "First Portfolio Page",
    link: "https://choxii13.github.io/My-Portfolio-Joshua-Teoxon/",
    size: 6,
  },
];

export let worksHtml = "";
for (let i = 0; i < works.length; i++) {
  worksHtml += `
<div class="works">
<img src="./images/${works[i].folder}/1.png" alt="${works[i].title}">
<div class="works-action">
    <h3>${works[i].title}</h3>
    <div class="works-action-icon">
        <i class="bi-eye"></i>
      <a class="bi-link-45deg" href="${works[i].link}"> </a>
    </div>
</div>
</div>
`;
}
