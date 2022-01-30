// const leftBtn = document.querySelector("#left");
// const rightBtn = document.querySelector("#right");
// const items = document.querySelector("#items");
// const computedStyles = getComputedStyle(items);


// rightBtn.addEventListener("click", e => {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right)

//   if (currentRight < 500) {
//     items.style.right = `${currentRight + 100}px`;
//   }

// });

// leftBtn.addEventListener("click", e => {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right)

//   if (currentRight > 0) {
//     items.style.right = `${currentRight - 100}px`;
//   }

// });

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const itemsList = document.querySelector("#items");
// const computedStyles = window.getComputedStyle(itemsList);
// const items = document.querySelectorAll(".item");


// const minRiht = 0;
// const itemWidth = getComputedStyle(items[0]).width;
// const step = parseInt(itemWidth);
// const preShowItems = 300 / step;
// const maxRiht = (items.length - preShowItems) * step;
// let currentRight = 0;

// itemsList.style.right = currentRight;

// right.addEventListener ("click", e => {
//   e.preventDefault();

//   if (currentRight < maxRiht) {
//     currentRight += step;
//     itemsList.style.right = `${currentRight}px`
//   }

// })

// left.addEventListener ("click", e => {
//   e.preventDefault();

//   if (currentRight > minRiht) {
//     currentRight -= step;
//     itemsList.style.right = `${currentRight}px`
//   }

// })