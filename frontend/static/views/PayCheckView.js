import AbstractView from "./AbstractView.js";
import NavComponent from "../js/common/nav.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle = "Paycheck Page";
  }

  getHtml() {
    return (
      NavComponent() +
      `<div class="pay-check-bg">
      <main class="pay-check-container">
        <div class="payment-box">
          <h2 class="pay-chekc-title">Check <br> the payment!</h2>
          <div class="total-price-box">
                <h1 class="total-price-box__title">총 결제금액:</h1>
                <h1 class="total-price-box__price">12,000원</h1>
              </div>
          <div class="info-payments">
            <li class="info-payment">성함<a>김민규</a></li>
            <li class="info-payment">결제금액<a>12,000원</a></li>
            <li class="info-payment">결제수단<a>카드결제</a></li>
            <li class="info-payment">결제일시<a>2021.12.14 15:45</a></li>
          </div>
          <a href='/main' data-link><input type="button" value="확인" id="payment-Btn" /></a>
        </div>
      </main>
    </div>
    `
    );
  }

  defaultFunc() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    document.getElementById("root").appendChild(script);
  }
}
