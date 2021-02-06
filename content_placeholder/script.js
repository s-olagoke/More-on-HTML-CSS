const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const auth_name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 5000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1504747189370-d40b785144cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyYXNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, cumque!';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  auth_name.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove('animated-bg-text');
  });
}
