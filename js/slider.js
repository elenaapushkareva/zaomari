"use strict";

const sliderImg = [
  "url(img/slide1-bg.jpg)",
  "url(img/slide2-bg.png)",
  "url(img/slide3-bg.png)",
  "url(img/slide4-bg.png)",
  "url(img/slide5-bg.png)"
];

const sliderHeadingText = [
  "Экологически чистая курочка для питания всей семьи",
  "Самая сочная, нежная и хрустящая курочка-гриль в нашем гриль-баре!",
  "Натуральная, вкусная и полезная молочная продукция ЗАО “Марийское”",
  "Идеальный куриный шницель “Де-Воляй” на ужин за 15 минут!",
  "Идеальные куриные фрикадельки на ужин за 15 минут!"
];

const sliderBannerText = [
  "Курица содержит витамины группы А, В и Е, важнейшие аминокислоты и белок. наша курочка особенно полезна, так как не содержит гормонов роста и ее качество контролируется на всех этах производства.",
  "В нашем гриль-баре можно попробовать вкуснейшие блюда на гриле из курицы, приготовленные по фирменным семейным рецептам.  Все сочное, яркое по вкусу и приготовлено из отлично промариннованого мяса!",
  "Мы производим большой ассортимент полезных молочных продуктов, богатых витаминами и питательными веществами, необходимыми для организма  и нормального функционирования всех жизненно важных систем.",
  "Для приготовления полезного и вкусного ужина не нужно тратить много времени - мы предлагаем полуфабрикаты из мяса курицы, которые помогут сделать полноценный обед или ужин, когда на готовку совершенно нет времени. ",
  "Для приготовления полезного и вкусного ужина не нужно тратить много времени - мы предлагаем полуфабрикаты из мяса курицы, которые помогут сделать полноценный обед или ужин, когда на готовку совершенно нет времени."
];

const sliderBtnText = [
  "Смотреть каталог",
  "Адрес-гриль бара",
  "Смотреть каталог",
  "Смотреть каталог",
  "Смотреть каталог"
];

let sliderPic = document.getElementById("slide_el");
let sliderHeading = document.getElementById("main-heading");
let sliderBanner = document.getElementById("banner-text");
let sliderBtn = document.getElementById("btn-text");
let dots = document.getElementsByClassName("dot");
let step = 1;

setInterval(() => {
  let prevStep;
  if (step >= 1) {
    prevStep = step - 1;
  } else {
    prevStep = sliderImg.length;
  }

  if (step >= sliderImg.length) {
    step = 0;
  }

  dots[prevStep].classList.remove("active-dot");
  dots[step].classList.add("active-dot");
  sliderPic.style.backgroundImage = sliderImg[step];
  sliderBanner.innerHTML = sliderBannerText[step];
  sliderHeading.innerHTML = sliderHeadingText[step];
  sliderBtn.innerHTML = sliderBtnText[step];
  step++;
}, 5000);
