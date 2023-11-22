const products = [
  {
    image:      './images/mandoo.jpg',
    name:       'what',
    price:      '30,000원',
    ceo:        './images/pic01.jpg',
    expanation: 'n-Sydney College in Virginia'
  },
  {
    image:      './images/pizon.jpg',
    name:       'what',
    price:      '20,000원',
    ceo:        './images/pic02.jpg',
    expanation: 'This book is a treatise on the theory '
  },
  {
    image:      './images/lotion.jpg',
    name:       'what',
    price:      '40,000원',
    ceo:        './images/pic03.jpg',
    expanation: 'The standard chunk of Lorem Ipsum'
  },
  {
    image:      './images/dalfona.jpg',
    name:       'what',
    price:      '90,000원',
    ceo:        './images/pic04.jpg',
    expanation: 'There are many variations'
  },
  {
    image:      './images/mandoo.jpg',
    name:       'what',
    price:      '30,000원',
    ceo:        './images/pic01.jpg',
    expanation: 'n-Sydney College in Virginia'
  },
  {
    image:      './images/pizon.jpg',
    name:       'what',
    price:      '20,000원',
    ceo:        './images/pic02.jpg',
    expanation: 'This book is a treatise on the theory '
  },
  {
    image:      './images/lotion.jpg',
    name:       'what',
    price:      '40,000원',
    ceo:        './images/pic03.jpg',
    expanation: 'The standard chunk of Lorem Ipsum'
  },
  {
    image:      './images/dalfona.jpg',
    name:       'what',
    price:      '90,000원',
    ceo:        './images/pic04.jpg',
    expanation: 'There are many variations'
  },
  {
    image:      './images/mandoo.jpg',
    name:       'what',
    price:      '30,000원',
    ceo:        './images/pic01.jpg',
    expanation: 'n-Sydney College in Virginia'
  },
  {
    image:      './images/pizon.jpg',
    name:       'what',
    price:      '20,000원',
    ceo:        './images/pic02.jpg',
    expanation: 'This book is a treatise on the theory '
  },
  {
    image:      './images/lotion.jpg',
    name:       'what',
    price:      '40,000원',
    ceo:        './images/pic03.jpg',
    expanation: 'The standard chunk of Lorem Ipsum'
  },
  {
    image:      './images/dalfona.jpg',
    name:       'what',
    price:      '90,000원',
    ceo:        './images/pic04.jpg',
    expanation: 'There are many variations'
  },
];


function pro() {
  const goodsContainer = document.querySelector('.goods');
  products.forEach((element) => {
    goodsContainer.innerHTML += `
 <div class="products">

    <div class="grid-container2">
      <div>
        <div class="small-container">
          <img class="profilepic" src="${element.image}" alt="">
        </div>
        <div class="content">
          <div class="small-pic">
            <img src="${element.ceo}" alt="">
          </div>
          <div class="text">
            <p>${element.name}</p>
            <p>${element.expanation} </p>
             <p>${element.price}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
  });
};

pro();
