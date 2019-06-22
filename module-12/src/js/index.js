"use strict";

const formBookmark = document.querySelector('.js-form');
const list = document.querySelector('.bookmarks-list');
const source = document.querySelector('#urls-card').innerHTML.trim();
const template = Handlebars.compile(source);
const siteName = document.querySelector('.js-siteName');
const siteUrl = document.querySelector('.js-siteUrl');
const addBtn = document.querySelector('.add');

addBtn.addEventListener('click', saveBookmarks);
formBookmark.addEventListener('click', deleteBookmarks);

function saveBookmarks(event) {
  event.preventDefault();

  if (!siteName.value || !siteUrl.value) {
    alert('Будь-ласка введіть дані')
    return;
  }

  let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  let regex = new RegExp(expression);

  if (!siteUrl.value.match(regex)) {
    alert('Будь ласка введіть валідний URL');
    return false;
  }

  const bookmarks = [];
  localStorage.getItem('bookmarks', JSON.stringify(bookmarks))

  const bookmark = {
    name: siteName.value,
    url: siteUrl.value
  }
  if (localStorage.getItem('bookmarks') == null) {
    const bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    list.innerHTML = template(bookmarks);

  } else {
    if (!localStorage.getItem('bookmarks').includes(bookmark.url)) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      bookmarks.unshift(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      alert('Така закладка вже існує')
    }

    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    list.innerHTML = template(bookmarks);

  }

}

function deleteBookmarks(event) {
  event.preventDefault();
  const card = event.target.closest('.card');
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  console.log(bookmarks);

  const url = card.querySelector('.site-url a').textContent;
  console.log('url:', url);

  const newBoolmarks = bookmarks.filter(e => e.url !== url);
  console.log('bookmarks:', newBoolmarks);

  card.remove();
  localStorage.setItem('bookmarks', JSON.stringify(newBoolmarks));
}



