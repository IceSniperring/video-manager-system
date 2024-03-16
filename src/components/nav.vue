<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
    <div class="container">
      <a href="#" class="navbar-brand ms-5">
        <img src="../assets/logo.png" alt="Logo" width="40" height="40"/>
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
        <ul class="navbar-nav ms-auto me-5">
          <li class="nav-item">
            <a href="../../index.html" class="nav-link">首页</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">推荐</a>
          </li>
          <li class="dropdown">
            <a class="nav-link dropdown-toggle" id="nav-class-dropdown-menu-button" data-bs-toggle="dropdown" aria-expanded="false">
              分类
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="nav-class-dropdown-menu-button">
              <li><a class="dropdown-item" href="#">番剧</a></li>
              <li><a class="dropdown-item" href="#">电影</a></li>
              <li><a class="dropdown-item" href="#">音乐</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="login.html" class="nav-link">账户</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.dropdown-item {
  transition: ease-in-out .3s;
}
</style>