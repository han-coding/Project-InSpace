import AbstractView from "./AbstractView.js";
import NavComponent from "../js/common/nav.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    //this.postId = params.id;
    this.setTitle("Main Page");
  }

  getHtml() {
    return (
      NavComponent() +
      `<div class="main-container">
        <div class="main-section">
          <div class="main-section__info">
            <div id="ticket-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-geo"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"
                />
              </svg>
              <span>A-1</span>
            </div>
            <div id="seat-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-hourglass-top"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 1 0 0-1h-1v-1a4.5 4.5 0 0 0-2.557-4.06c-.29-.139-.443-.377-.443-.59v-.7c0-.213.154-.451.443-.59A4.5 4.5 0 0 0 12.5 3V2h1a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h1v1a4.5 4.5 0 0 0 2.557 4.06c.29.139.443.377.443.59v.7c0 .213-.154.451-.443.59A4.5 4.5 0 0 0 3.5 13v1h-1a.5.5 0 0 0-.5.5zm2.5-.5v-1a3.5 3.5 0 0 1 1.989-3.158c.533-.256 1.011-.79 1.011-1.491v-.702s.18.101.5.101.5-.1.5-.1v.7c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13v1h-7z"
                />
              </svg>
              <span>2021-12-20 13:00:00</span>
            </div>
            <div id="check-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-ticket-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13Z"
                />
              </svg>
              <span>100시간 충전권</span>
            </div>
          </div>
          <div class="main-section__timer">
            <canvas id="timer" width="400" height="400"></canvas>
          </div>
          <div class="main-section__btn--check-in">
            <a href="/ticket" data-link
              ><button class="btn" type="button" id="check-in__btn--extend-time">시간 연장하기</button></a
            >
            <a href="/select" data-link
              ><button class="btn" type="button" id="btn--move-seat">좌석 이동하기</button></a
            >
            <a href="javascript:void(0);"
              ><button class="btn" type="button" onclick="checkInOut(true)">
                퇴실하기
              </button></a
            >
          </div>
          <div class="main-section__btn--check-out">
            <a href="/" data-link
              ><button class="btn" type="button" id="check-out__btn--extend-time">시간 연장하기</button></a
            >
            <a href="/" data-link
              ><button class="btn" type="button" id="btn--select-seat">좌석 선택하기</button></a
            >
          </div>
        </div>
      </div>
    </div>`
    );
  }

  defaultFunc() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
    document.getElementById("root").appendChild(script);

    const $checkIn = document.querySelector(".main-section__btn--check-in");
    const $checkOut = document.querySelector(".main-section__btn--check-out");

    const selectSeatBtn = document.querySelector("#btn--select-seat");
    const moveSeatBtn = document.querySelector("#btn--move-seat");
    const extendTimeBtnIn = document.querySelector(
      "#check-in__btn--extend-time"
    );
    const extendTimeBtnOut = document.querySelector(
      "#check-out__btn--extend-time"
    );

    //퇴실 메인
    selectSeatBtn.addEventListener("click", function () {
      sessionStorage.setItem("path", "select");
    });
    extendTimeBtnOut.addEventListener("click", function () {
      sessionStorage.clear();
      sessionStorage.setItem("history", "before");
      sessionStorage.setItem("path", "extend");
    });

    // 이용중 메인
    moveSeatBtn.addEventListener("click", function () {
      sessionStorage.clear();
      sessionStorage.setItem("history", "using");
      sessionStorage.setItem("path", "move");
    });
    extendTimeBtnIn.addEventListener("click", function () {
      sessionStorage.clear();
      sessionStorage.setItem("history", "using");
      sessionStorage.setItem("path", "extend");
    });

    const endTime = new Date("2021-12-21 21:00:00");

    const progressColor = "#BCCBEA";
    const circleColor = "#EDF0EB";
    const lineWidth = 40;

    const canvas = document.getElementById("timer");
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    let now = new Date();
    let elapsed = endTime.getTime() - now.getTime();

    const data = 0;

    // function runTimer(){
    //   if (elapsed > 0) {
    //     var interval = setInterval(function () {
    //       drawTimer(ctx);
    //     }, 1000);
    //   } else {
    //     drawTimer(ctx);
    //   }
    // }

    if (elapsed > 0) {
      var interval = setInterval(function () {
        drawTimer(ctx);
      }, 1000);
    } else {
      drawTimer(ctx);
    }

    function btnRerange() {}

    function checkInOut(flag) {
      if (flag) {
        $checkIn.style.display = "none";
        $checkOut.style.display = "grid";

        clearInterval(interval);
        drawTimer(ctx);
      } else {
        interval();
      }
    }

    function drawTimer(ctx) {
      //timer process circle
      const restTimeHour = (elapsed > 0 ? elapsed : 0) / (1000 * 60 * 60);

      const hour = 24;
      const degrees = (restTimeHour / hour) * 100;
      const radians = (degrees * Math.PI) / 50;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // backgroud circle
      ctx.beginPath();
      ctx.strokeStyle = circleColor;
      ctx.lineWidth = lineWidth;
      // ctx.shadowBlur = 5;
      // ctx.shadowColor = "#9fa0a4";
      // ctx.shadowOffsetX = 0;
      // ctx.shadowOffsetY = 1;
      ctx.arc(
        canvasHeight / 2,
        canvasWidth / 2,
        canvasWidth / 3,
        0,
        Math.PI * 4,
        false
      );
      ctx.imageSmoothingEnabled = true;
      ctx.closePath();
      ctx.stroke();

      // progressBar
      ctx.beginPath();
      ctx.strokeStyle = progressColor;
      ctx.lineWidth = lineWidth;
      ctx.arc(
        canvasHeight / 2,
        canvasWidth / 2,
        canvasWidth / 3,
        0 - (90 * Math.PI) / 180,
        radians - (90 * Math.PI) / 180,
        false
      );
      ctx.stroke();

      // progress update text
      ctx.fillStyle = "#000000";
      ctx.font = "16pt Noto Sans KR";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.textAlign = "center";

      if (elapsed > 0) {
        ctx.fillText("잔여시간", canvasWidth / 2, canvasHeight / 2 - 10);
      } else {
        ctx.fillText("잔여시간없음", canvasWidth / 2, canvasHeight / 2 + 10);
      }

      if (elapsed > 0) {
        now = new Date();
        elapsed = endTime.getTime() - now.getTime();

        const restTime = new Date(elapsed);
        let seconds = parseInt(elapsed / 1000);
        let minutes = parseInt(seconds / 60);
        let hours = parseInt(minutes / 60);

        minutes = minutes - hours * 60;
        seconds = seconds - (minutes * 60 + hours * 60 * 60);

        ctx.font = "22pt Noto Sans KR";
        const outputTextPerc = `${hours < 10 ? `0${hours}` : hours}:${
          minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;
        ctx.fillText(outputTextPerc, canvasWidth / 2, canvasHeight / 2 + 27);
      }
    }
  }
}
