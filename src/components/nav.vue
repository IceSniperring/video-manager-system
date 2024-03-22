<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-transparent navbar-light fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand" id="nav-icon">
        <img src="../assets/logo.png" alt="Logo" width="50px" height="50px">
      </a>

      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-menu">
        <div class="nav-item position-absolute top-50 start-50 translate-middle">
          <div id="search-bar" class="navbar-nav input-group">
            <input type="search" placeholder="搜索些什么？"
                   class="form-control shadow p-3 ps-4"
                   id="search-form">
            <button class="btn"><i class="bi bi-search icon-font"></i></button>
          </div>
        </div>
        <div class="navbar-nav ms-auto" id="navbar-main">
          <div class="border rounded-5 shadow ps-3 pe-3 pt-1 pb-1 bg-light" id="nav-menu-primary">
            <ul class="navbar-nav">
              <li class="nav-item rounded-5 m-sm-1">
                <a href="../../index.html" class="nav-link"><i class="bi bi-house"></i> 首页</a>
              </li>
              <li class="nav-item rounded-5 m-sm-1">
                <a href="#" class="nav-link"><i class="bi bi-columns-gap"></i> 推荐</a>
              </li>
              <li class="dropdown nav-item rounded-5 m-sm-1">
                <a class="nav-link dropdown-toggle" id="nav-class-dropdown-menu-button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false">
                  <i class="bi bi-list"></i> 分类
                </a>
                <ul class="dropdown-menu rounded-4 rounded-bottom-5" aria-labelledby="nav-class-dropdown-menu-button">
                  <li><a class="dropdown-item rounded-5" href="#">番剧</a></li>
                  <li><a class="dropdown-item rounded-5" href="#">电影</a></li>
                  <li><a class="dropdown-item rounded-5" href="#">音乐</a></li>
                </ul>
              </li>
              <li class="nav-item rounded-5 m-sm-1">
                <a href="login.html" class="nav-link"> <i class="bi bi-person-bounding-box"></i> 账户</a>
              </li>
              <li>
                <button type="button" class="btn rounded-5 m-1"><i class="bi bi-box-arrow-up"></i> 投稿</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media screen and (max-width: 1200px) {
  #search-bar {
    display: none;
  }
}

.dropdown-item {
  transition: ease-in-out .3s;
}

#nav-icon {
  width:50px;
  height: 50px;
  transition: .3s ease-in-out;
}

#nav-icon:hover {
  transform: scale(1.2);
}

#nav-menu-primary .nav-item {
  transition: .3s ease-in-out;
}

#nav-menu-primary .nav-item:hover {
  background-color: orange;
  box-shadow: 0 0 2px 2px orange;
}

#search-form {
  font-size:14px;
  border-radius: 30px 0 0 30px;
  transition: .3s ease-in-out;
}

#search-form:focus {
  border-color: darksalmon;
  border-width: 2px;
}

#search-bar {
  width: 400px;
}

#search-bar .btn {
  width: 20%;
  border-radius: 0 30px 30px 0;
  background-color: orange;
  transition: .3s ease-in-out;
}

#search-bar .btn:hover {
  box-shadow: 0 0 2px 2px orange;
}

#navbar-main {
  font-size: 14px;
}

li > .btn {
  background-color: orange;
  border-radius: 30px;
  transition: .3s ease-in-out;
  box-shadow: 0 0 1px 1px orange;
}

li > .btn:hover {
  box-shadow: 0 0 2px 2px orange;
}

i {
  font-size: 90%;
}

.fixed-top {
  z-index: 10;
}
</style>