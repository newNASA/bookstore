function showContent(contentType) {
  const iqtibos = document.querySelector('.iqtibos');
  const taqriz = document.querySelector('.taqriz');
  const kitob_li = document.querySelectorAll('.kitob-haqida .top ul li');

  kitob_li.forEach(li => li.style.color = '');

  if (contentType === 'iqtibos') {
    iqtibos.style.display = 'flex';
    taqriz.style.display = 'none';
    kitob_li[1].style.color = 'var(--cream)';
    kitob_li[2].style.color = 'var(--light-gray)';
  } else if (contentType === 'taqriz') {
    iqtibos.style.display = 'none';
    taqriz.style.display = 'flex';
    kitob_li[1].style.color = 'var(--light-gray)';
    kitob_li[2].style.color = 'var(--cream)';
  }
}

function kitob_tavsiya() {
  const kt_bottom = document.querySelector('.kitob-tavsiya .bottom');
  kt_bottom.classList.toggle('kt_notscroll');
}

function comment(contentType) {
  const comment = document.querySelector('.comment');
  const textarea = document.querySelector('.comment textarea');

  if (contentType === 'close') {
    if (textarea.value.trim() !== '') {
      comment.style.display = 'none';
    }
  } else if (contentType === 'open') {
    comment.style.display = 'flex';
  } else if (contentType === 'close-nocomment') {
    comment.style.display = 'none';
  }
}

const author_li = document.querySelectorAll('.author_li button');
const books_li = document.querySelectorAll('.book_li button');
books_li[0].style.color = 'var(--cream)';
author_li[0].style.color = 'var(--cream)';

function li_clicked(index) {
  books_li.forEach((button, i) => {
    button.style.color = i === index ? 'var(--cream)' : 'var(--light-gray)';
  });
  author_li.forEach((button, i) => {
    button.style.color = i === index ? 'var(--cream)' : 'var(--light-gray)';
  })
}

function displayImage() {
  const fileInput = document.getElementById("fileInput");
  const bookImg = document.getElementById("bookImg");

  if (fileInput.files.length > 0) {
    const reader = new FileReader();

    reader.onload = function (e) {
      bookImg.style.backgroundImage = `url(${e.target.result})`;
    };

    reader.readAsDataURL(fileInput.files[0]);
  } else {
    bookImg.style.backgroundImage = "none";
  }
}
