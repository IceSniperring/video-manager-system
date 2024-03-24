<script>
</script>

<template>
  <button id="fresh-button" class="position-absolute btn btn-outline-secondary"
          type="button" role="button" >
    <i class="bi bi-arrow-clockwise" id="fresh-icon"></i>
  </button>
  <div class="container">
    <div id="normal-recommend">
      <div class="row justify-content-between row-cols-4 g-3 d-flex">
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="/Pages/PlayPage/">
            <div class="card h-50">
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
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
              <img src="../assets/img/hqdefault.webp" alt=",">
              <div class="card-body">
                <p class="card-text">标题</p>
              </div>
            </div>
          </a>
        </div>
        <div class="col col-sm-auto pt-3">
          <a class="d-flex justify-content-center rounded-2" href="#">
            <div class="card h-50">
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
@keyframes arrow-rotate {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 1200px) {
  #head-container {
    display: none;
  }

  #fresh-button {
    display: none;
  }
}

#recommend-and-carousel {
  width: 100%;
  height: 426px;
  overflow: hidden;
}

#carousel-dark {
  height: 400px;
}

#fresh-button {
  bottom: 40px;
  left:95%;
  width:50px;
  height: 50px;
}

#fresh-icon:hover {
  animation: .3s linear alternate arrow-rotate;
}
/*卡片标题*/
.card-text {
  max-width: 12em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}

.card {
  border: none;
}

.col img {
  width: 300px;
  border-radius: 4px;
  transition: ease-in-out .3s;
}

.col img:hover {
  filter: brightness(60%);
}

.row a {
  text-decoration: none;
}

.row a p {
  transition: ease-in-out .3s;
}

.row a p:hover {
  filter: brightness(80%);
  word-spacing: 2px;
}
</style>