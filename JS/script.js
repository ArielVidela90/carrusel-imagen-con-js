let swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 80,
  grabCursor: true,
  loop: true,
  breakpoints: {
    991: {
      slidesPerView: 3,
    },
  },
});

function days() {
  let date = new Date();
  let dia = date.getDate();
  let mes = date.getMonth() + 1;
  let anio = date.getFullYear();

  dia = ("0" + dia).slice(-2);
  mes = ("0" + mes).slice(-2);

  let fecha = dia + "/" + mes + "/" + anio;
  document.getElementById("mydays").innerHTML = fecha;
}

days();

function time() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let digitaltime = h + ":" + m + ":" + s + " ";

  // + session;
  document.getElementById("myclock").innerHTML = digitaltime;

  setInterval(time, 1000);
}
time();
