class StarRating extends HTMLElement {
  constructor() {
    super();

    let score = this.getAttribute("score");
    // console.log("my present value is:" + score);
    let total = this.getAttribute("total");
    // console.log("my total value is:" + total);

    let minimum = this.getAttribute("min");
    // console.log("the minimum value is:" + minimum);

    let rating = ((+score - +minimum) * 5) / (+total - +minimum);
    console.log("the rating value is:" + rating);

    let value = Math.floor(rating);
    console.log("the value is:" + value);

    var template = "";
    for (let i = 0; i < value; i++) {
      template += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }

    if (+rating % 1)
      template += `<i class="fa fa-star-half" aria-hidden="true"></i>`;
    this.innerHTML = template;
  }
}

window.customElements.define("star-rating", StarRating);
