"use strict";

/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

function createPostCard({ img, title, text, link }) {

  const card = document.createElement('div');
  card.classList.add('cart');

  const cardImage = document.createElement('img');
  cardImage.classList.add('image');
  cardImage.setAttribute('src', img);
  cardImage.setAttribute('alt', 'IMAGE');

  const cardTitle = document.createElement('h4');
  cardTitle.classList.add('title');
  cardTitle.textContent = title;

  const cardText = document.createElement('p');
  cardText.classList.add('text');
  cardText.textContent = text;

  const cardLink = document.createElement('a');
  cardLink.classList.add('site');
  cardLink.setAttribute('href', link);
  cardLink.textContent = 'Link'

  card.append(cardImage, cardTitle, cardText, cardLink);

  return card;
}


function createCards(arr) {
  return arr.reduce((acc, el) => [...acc, createPostCard(el)], []);
}

const htmlNode = document.querySelector('.node');

createCards(posts).map(el => {
  htmlNode.append(el);
});
