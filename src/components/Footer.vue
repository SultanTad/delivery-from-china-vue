<script setup>
import { ref, onMounted } from "vue";
import Highcharts from "highcharts";
const container = ref(null);

onMounted(() => {
  Highcharts.chart(container.value.id, {
    chart: {
      width: 189,
      height: 126,
    },
    tooltip: { enabled: false },
    credits: { enabled: false },
    title: {
      text: "",
    },
    yAxis: {
      labels: {
        align: "left",
        x: 0,
        y: -2,
      },
      title: {
        text: "",
      },
    },
    plotOptions: {
      series: {
        lineWidth: 1,
        marker: {
          fillColor: "rgb(54, 106, 220)",
          lineColor: "rgb(54, 106, 220)",
          radius: 1,
        },
      },
    },

    series: [
      {
        name: "John",
        data: [0, 10, 15, 5, 15, 3, 18],
        color: "rgb(159, 164, 175)",
        enableMouseTracking: false,
      },
    ],
  });
});
</script>
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <ul class="footer__inner">
          <div class="footer__logo">
            <img src="/images/Tao585.webp" alt="" />
          </div>
          <li>
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <a href="">О нас</a>
              </li>
              <li class="footer__nav-item">
                <a href="">Помощь</a>
              </li>
              <li class="footer__nav-item">
                <a href="">Доставка</a>
              </li>
              <li class="footer__nav-item">
                <a href="">Карго</a>
              </li>
              <li class="footer__nav-item">
                <a href="">Выкуп</a>
              </li>
              <li class="footer__nav-item">
                <a href="">Новости</a>
              </li>
            </ul>
          </li>
          <li class="footer__exchange-rates footer-order">
            <dl>
              <div class="exchange-rates__box">
                <dt>Текущий курс</dt>
                <dd>1 ¥ = <span>12,53 ₽</span></dd>
                <dd>1 $ = <span>92,02 ₽</span></dd>
              </div>
              <dd>
                <div ref="container" id="container"></div>
              </dd>
            </dl>
          </li>
          <li class="footer__work-time">
            <dl>
              <dt>Время работы</dt>
              <dd>Москва</dd>
              <dd class="work-time__box">
                <p>Пн-Сб с 09:00 до 18:00</p>
                <p>Вс - выходной</p>
              </dd>
              <dd>Китай</dd>
              <dd class="work-time__box">
                <p>Пн-Сб с 09:00 до 18:00</p>
                <p>Вс - выходной</p>
              </dd>
            </dl>
          </li>
          <li class="footer__contact-us">
            <dl>
              <dt>Связаться с нами</dt>
              <dd>
                <p>Номер в России</p>
                <a href="tel:+79999999999">+7 (999) 999-99-99</a>
              </dd>
              <dd>
                <p>Номер в Китае</p>
                <a href="tel:+8699999999999">+86 99999999999</a>
              </dd>
              <dd>
                <a href="mailto:chinatao@mail.com">chinatao@mail.com</a>
              </dd>
            </dl>
            <ul class="social__list">
              <li class="social__list-item">
                <a href="">
                  <img src="/images/inst.svg" alt="" />
                </a>
              </li>
              <li class="social__list-item">
                <a href="">
                  <img src="/images/telegram.svg" alt="" />
                </a>
              </li>
              <li class="social__list-item">
                <a href="">
                  <img src="/images/vk.svg" alt="" />
                </a>
              </li>
              <li class="social__list-item">
                <a href="">
                  <img src="/images/social-network.svg" alt="" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="copyright">© China-Tao 2024 все права защищены</div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: rgb(243, 243, 246);
  position: relative;
  margin-top: -36px;
}

.footer-wrapper {
  padding: 56px 0;
  font-family: "Mulish";
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer__nav-list {
  display: flex;
  flex-direction: column;
  gap: 16px 0;
}

.footer__exchange-rates span {
  color: rgb(54, 106, 220);
}

.footer__exchange-rates dl dt,
.footer__work-time dl dt,
.footer__contact-us dl dt {
  font-size: 18px;
  font-weight: 700;
  line-height: 23px;
  font-family: "Mulish";
  margin-bottom: 20px;
}

.footer__exchange-rates dl dd img {
  margin-top: 20px;
}

.work-time__box {
  margin-top: 12px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
}

.footer__contact-us dl dd {
  margin-bottom: 20px;
}

.footer__contact-us dl dd p {
  font-size: 12px;
  color: rgb(159, 164, 175);
  font-family: "Mulish";
}

.social__list {
  display: flex;
  gap: 0 24px;
}

.copyright {
  max-width: 135px;
  line-height: 15px;
  font-size: 12px;
}

.highcharts-container svg rect {
  fill: rgb(243, 243, 246);
}

.highcharts-legend,
.highcharts-axis-labels,
.highcharts-axis.highcharts-yaxis,
.highcharts-axis.highcharts-xaxis,
.highcharts-grid.highcharts-yaxis-grid {
  display: none;
}

.highcharts-axis-line {
  stroke: rgb(159, 164, 175);
}

@media (max-width: 769px) {
  .copyright {
    max-width: unset;
    float: right;
    margin-top: -20px;
  }

  .footer-order {
    order: 5;
  }

  .footer__exchange-rates dl {
    display: flex;
    gap: 0 32px;
  }
}

@media (max-width: 700px) {
  .footer__inner {
    flex-direction: column;
    gap: 30px 0;
    margin-bottom: 30px;
    justify-content: unset;
    flex-wrap: unset;
  }

  .footer__nav-list {
    display: none;
  }

  .footer-order {
    order: unset;
  }

  .copyright {
    float: unset;
    margin-top: unset;
  }

  .footer__exchange-rates dl {
    flex-direction: column;
  }
}
</style>
