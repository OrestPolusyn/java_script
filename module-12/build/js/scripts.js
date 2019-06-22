"use strict";

var formBookmark = document.querySelector('.js-form');
var list = document.querySelector('.bookmarks-list');
var source = document.querySelector('#urls-card').innerHTML.trim();
var template = Handlebars.compile(source);
var siteName = document.querySelector('.js-siteName');
var siteUrl = document.querySelector('.js-siteUrl');
var addBtn = document.querySelector('.add');
addBtn.addEventListener('click', saveBookmarks);
formBookmark.addEventListener('click', deleteBookmarks);

function saveBookmarks(event) {
  event.preventDefault();

  if (!siteName.value || !siteUrl.value) {
    alert('Будь-ласка введіть дані');
    return;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.value.match(regex)) {
    alert('Будь ласка введіть валідний URL');
    return false;
  }

  var bookmarks = [];
  localStorage.getItem('bookmarks', JSON.stringify(bookmarks));
  var bookmark = {
    name: siteName.value,
    url: siteUrl.value
  };

  if (localStorage.getItem('bookmarks') == null) {
    var _bookmarks = [];

    _bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(_bookmarks));
    list.innerHTML = template(_bookmarks);
  } else {
    if (!localStorage.getItem('bookmarks').includes(bookmark.url)) {
      var _bookmarks3 = JSON.parse(localStorage.getItem('bookmarks'));

      _bookmarks3.unshift(bookmark);

      localStorage.setItem('bookmarks', JSON.stringify(_bookmarks3));
    } else {
      alert('Така закладка вже існує');
    }

    var _bookmarks2 = JSON.parse(localStorage.getItem('bookmarks'));

    localStorage.setItem('bookmarks', JSON.stringify(_bookmarks2));
    list.innerHTML = template(_bookmarks2);
  }
}

function deleteBookmarks(event) {
  event.preventDefault();
  var card = event.target.closest('.card');
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  console.log(bookmarks);
  var url = card.querySelector('.site-url a').textContent;
  console.log('url:', url);
  var newBoolmarks = bookmarks.filter(function (e) {
    return e.url !== url;
  });
  console.log('bookmarks:', newBoolmarks);
  card.remove();
  localStorage.setItem('bookmarks', JSON.stringify(newBoolmarks));
}