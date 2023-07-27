import data from "./data.json" assert { type: "json" };
console.log(data);

$(document).ready(function () {
  $(".breakdown").html(
    data.map(
      (a) =>
        `<div class="d-flex breakdownrow"><img src="${a.icon}"/><div class="${a.category}">${a.category}</div><div class="score"><b>${a.score}</b>/<span>100</span></div></div>`
    )
  );

  $(".result").text(
    `${Math.floor(data.reduce((total, a) => total + a.score, 0) / data.length)}`
  );
});
