<script setup>

</script>

<template>
  <div id="title" class="pt-4">
    <h4>🎉猜你喜欢</h4>
  </div>
  <div class="row row-cols-1 d-inline-block">
    <a class="col col-sm-auto" href="#">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4 overflow-hidden">
              <img src="/assets/img/hqdefault.webp" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
    </a>
    <a class="col col-sm-auto">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 overflow-hidden">
            <img src="/assets/img/hqdefault.webp" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="col col-sm-auto">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 overflow-hidden">
            <img src="/assets/img/hqdefault.webp" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="col col-sm-auto">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 overflow-hidden">
            <img src="/assets/img/hqdefault.webp" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="col col-sm-auto">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 overflow-hidden">
            <img src="/assets/img/hqdefault.webp" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="col col-sm-auto">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 overflow-hidden">
            <img src="/assets/img/hqdefault.webp" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
    <a class="col col-sm-auto">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 overflow-hidden">
            <img src="/assets/img/hqdefault.webp" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p class="card-text text-break">This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
/*卡片标题*/
.card-text {
  max-width: 12em;
  overflow: hidden;
  display: -webkit-box;
  /*文字换行4次，此后省略*/
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
}

.card {
  border: none;
}

.col img {

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