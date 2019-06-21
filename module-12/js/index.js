"use strict";

const formBookmark = document.querySelector('.js-form');
const list = document.querySelector('.bookmarks-list');
const source = document.querySelector('#urls-card').innerHTML.trim();
const template = Handlebars.compile(source);
const siteName = document.querySelector('.js-siteName');
const siteUrl = document.querySelector('.js-siteUrl');
const addBtn = document.querySelector('.add');
const deleteBtn = document.querySelector('.delete');

addBtn.addEventListener('click', saveBookmarks);
formBookmark.addEventListener('click', deleteBookmarks);

function saveBookmarks(event) {
  event.preventDefault();

  if (!siteName.value || !siteUrl.value) {
    alert('Будь-ласка введіть дані')
    return;
  }

  const bookmark = {
    name: siteName.value,
    url: siteUrl.value
  }
  if (localStorage.getItem('bookmarks') == null) {
    const bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    if (!localStorage.getItem('bookmarks').includes(bookmark.url)) {
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      bookmarks.unshift(bookmark);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
      alert('NOOOOOOO')

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

  for (let i = 0; i < bookmarks.length; i++) {
    if (card) {
      bookmarks.splice(i, 1)
      filter(e => e.url !== bookmarks[i]);
    }
  }
  card.remove();
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}



