<script setup>
</script>

<template>
  <div class="container">
    <div id="head-container">
      <div id="recommend-and-carousel" class="d-flex flex-row">
        <div id="carousel-dark" class="carousel slide pt-3 float-start w-75"
             data-bs-ride="carousel">
          <!--轮播图-->
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel-dark" data-bs-slide-to="0" class="active"
                    aria-current="true"
                    aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel-dark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel-dark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
              <!--轮播图图片位置-->
              <img src="../assets/img/no1.png" class="d-block w-100 h-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="../assets/img/no2.png" class="d-block w-100 h-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="5000">
              <img src="../assets/img/no3.png" class="d-block w-100 h-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carousel-dark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carousel-dark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div id="recommend-content" class="float-end">
          <div class="row justify-content-end">
            <div class="col col-sm-auto pt-3">
              <!--视频卡片-->
              <a class="d-flex justify-content-center" href="PlayPage.html">
                <div class="card h-50 text-white bg-dark">
                  <img src="../assets/img/hqdefault.webp" alt=",">
                  <div class="card-body">
                    <!--lorem是测试文本-->
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
                      cupiditate dicta dolorum ducimus excepturi exercitationem facere id ipsa iusto maiores
                      necessitatibus,
                      pariatur, perspiciatis rem sunt totam vitae voluptates voluptatibus?</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col col-sm-auto pt-3">
              <!--视频卡片-->
              <a class="d-flex justify-content-center" href="PlayPage.html">
                <div class="card h-50 text-white bg-dark">
                  <img src="../assets/img/hqdefault.webp" alt=",">
                  <div class="card-body">
                    <!--lorem是测试文本-->
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
                      cupiditate dicta dolorum ducimus excepturi exercitationem facere id ipsa iusto maiores
                      necessitatibus,
                      pariatur, perspiciatis rem sunt totam vitae voluptates voluptatibus?</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col col-sm-auto pt-3">
              <!--视频卡片-->
              <a class=" d-flex justify-content-center" href="PlayPage.html">
                <div class="card h-50 text-white bg-dark">
                  <img src="../assets/img/hqdefault.webp" alt=",">
                  <div class="card-body">
                    <!--lorem是测试文本-->
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa
                      cupiditate dicta dolorum ducimus excepturi exercitationem facere id ipsa iusto maiores
                      necessitatibus,
                      pariatur, perspiciatis rem sunt totam vitae voluptates voluptatibus?</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col col-sm-auto pt-3">
              <a class="d-flex justify-content-center" href="#">
                <div class="card h-50 text-white bg-dark">
                  <img src="../assets/img/hqdefault.webp" alt=",">
                  <div class="card-body">
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi corporis
                      dolor
                      eaque eveniet excepturi exercitationem inventore necessitatibus numquam perferendis quasi quia
                      quod
                      ratione repellat, sint soluta tempora temporibus veniam.</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col col-sm-auto pt-3">
              <a class="d-flex justify-content-center" href="#">
                <div class="card h-50 text-white bg-dark">
                  <img src="../assets/img/hqdefault.webp" alt=",">
                  <div class="card-body">
                    <p class="card-text">标题</p>
                  </div>
                </div>
              </a>
            </div>
            <div class="col col-sm-auto pt-3">
              <a class="d-flex justify-content-center" href="#">
                <div class="card h-50 text-white bg-dark">
                  <img src="../assets/img/hqdefault.webp" alt=",">
                  <div class="card-body">
                    <p class="card-text">标题</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-5"></div>
    <div id="normal-recommend">
      <div class="row justify-content-between">
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam beatae commodi
                  deserunt enim esse facere iste libero provident quas quibusdam quidem ratione, repellat sint soluta,
                  suscipit totam veritatis voluptatem.</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center" href="#">
            <div class="card h-50 text-white bg-dark">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 1200px) {
  #head-container {
    display: none;
  }
}

#recommend-and-carousel {
  width: 100%;
  height: 400px;
  overflow: hidden;
}

#carousel-dark {
  height: 400px;
}

/*卡片标题*/
.card-text {
  max-width: 12em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.card {
  border: none;
}

.col img {
  width: 240px;
  border-radius: 4px;
  transition: ease-in-out .3s;
}

.col img:hover {
  transform: scale(1.03);
}

.carousel-inner {
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.carousel-inner img {
  border-radius: 5px;
  height: 430px;
  width: auto;
}

.row a {
  text-decoration: none;
}

.row a p {
  transition: ease-in-out .3s;
}

.row a p:hover {
  filter: brightness(60%);
  word-spacing: 2px;
}


</style>