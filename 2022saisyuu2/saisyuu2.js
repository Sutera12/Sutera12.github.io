const btn = document.querySelector("#btn-dark-mode");

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;

darkModeMediaQuery.addListener((e) => {
  const darkModeOn = e.matches;
  if (darkModeOn) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode-settings', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('dark-mode-settings', 'light');
  }
});

btn.addEventListener("change", () => {
  if (btn.checked === true) {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode-settings', 'dark');
  }else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('dark-mode-settings', 'light');
  }
});

if(localStorage.getItem('dark-mode-settings')==='dark') {
  document.body.classList.add('dark-mode');
  btn.checked = true;
}else if (localStorage.getItem('dark-mode-settings')==='light') {
  document.body.classList.add('light-mode');
}



const pagetop_btn = document.querySelector(".pagetop");

pagetop_btn.addEventListener("click", scroll_top);

function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}

