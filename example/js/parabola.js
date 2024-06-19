// @ts-check

(function () {
  /** @type {HTMLElement} */
  const leftBtn = document.querySelector(".the-btn.blue");
  /** @type {HTMLElement} */
  const leftTarget = document.querySelector(".target.blue");
  /** @type {HTMLElement} */
  const rightBtn = document.querySelector(".the-btn.green");
  /** @type {HTMLElement} */
  const rightTarget = document.querySelector(".target.green");

  function createBall() {
    const el = document.createElement("div");
    el.className = "ball";
    el.innerHTML = `<div class="inner"></div>`;
    el.addEventListener("animationend", function() {
      el.remove();
    });
    return el;
  }

  /**
   * 发射小球
   * @param {HTMLElement} target
   * @param {HTMLElement} self 
   */
  function onLaunch(target, self) {
    const ball = createBall();
    const ballRadius = 20;
    const targetRect = target.getBoundingClientRect();
    const selfRect = self.getBoundingClientRect();
    ball.style.top = selfRect.top - ballRadius + "px";
    ball.style.left = selfRect.left + ballRadius + "px";
    
    const distanceX = targetRect.left - selfRect.left;
    const distanceY = targetRect.top - selfRect.top;
    ball.style.setProperty("--x-distance", `${distanceX}px`);
    ball.style.setProperty("--y-distance", `${distanceY}px`);
    document.body.appendChild(ball);
  }

  leftBtn.addEventListener("click", e => onLaunch(leftTarget, leftBtn));
  rightBtn.addEventListener("click", e => onLaunch(rightTarget, rightBtn));
})();
