export const works = [
  {
    folder: "online-shop-system",
    title: "Online Shop System with Node-js",
    link: "https://drive.google.com/drive/folders/13645d8pe6cwY5B-XYWRCuF8l-mg91yv9?usp=drive_link",
    size: 12,
  },
  {
    folder: "facebook-node-js",
    title: "Facebook with Node-js",
    link: `https://drive.google.com/file/d/13ekxvT2HtFxYg8zu4fYzRFcYt8Qz0Nwf/view?usp=drive_link`,
    size: 8,
  },

  {
    folder: "facebook-react",
    title: "Facebook with React-js",
    link: `https://drive.google.com/file/d/13S6NeV_GkxMOkc4vR3-VbOgTOaWWbIkH/view?usp=drive_link`,
    size: 6,
  },
  { folder: "blog-node-js", title: "Blog with Node-js", link: "", size: 5 },
  {
    folder: "todo-list-node-js",
    title: "Todo List with Node-js",
    link: "",
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
