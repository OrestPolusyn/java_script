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
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    bookmarks.unshift(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  list.innerHTML = template(bookmarks);
}

function deleteBookmarks(event) {
  event.preventDefault();
  console.log(event.child);
}



