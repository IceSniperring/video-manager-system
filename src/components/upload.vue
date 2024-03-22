<script>
export default {
  data() {
    return {
      upload_video: true,
      manage_upload: false
    }
  }
}
</script>

<template>
  <ul class="navbar-nav w-10 position-absolute border d-flex flex-column align-items-center shadow-lg" id="menu">
    <li class="nav-item mt-3 mb-3">
      <div class="circle text-center">
        <a class="nav-link" @click="upload_video=!upload_video;manage_upload=false" href="#">
          <i class="bi bi-upload"></i> <br>投稿
        </a>
      </div>
    </li>
    <li class="nav-item  mt-3 mb-3">
      <div class="circle text-center">
        <a class="nav-link" @click="manage_upload=!manage_upload;upload_video=false" href="#">
          <i class="bi bi-journal-album"></i> <br>稿件管理
        </a>
      </div>
    </li>
  </ul>
  <div class="container border w-50" v-show="upload_video">
    <div class="mb-3 text-center">
      <label for="formFile" class="form-label fs-3">请选择稿件</label>
      <br>
      <input type="file" id="formFile" accept="video/*" class="rounded-2">
      <input type="submit" value="提交" class="mt-3 w-100 btn border">
    </div>
  </div>
  <div class="container border w-50" v-show="manage_upload">2</div>
</template>

<style scoped>
.circle {
  width: 70px;
  height: 70px;
  transition: .3s ease-in-out;
  border-radius: 40px;
  background-color: gray;;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.6);
}

.circle:hover {
  background-color: orange;
  box-shadow: 0 0 2px 2px orange;
}

.w-10 {
  width: 100px;
}

a i {
  font-size: 20px;
}

#menu {
  height: 21%;
  top: 40%;
  border-radius: 50px;
  font-size: 14px;
}

input.btn {
  border-radius: 20px;
  transition: .3s ease-in-out;
  background-color: orange;
}

input.btn:hover {
  border-radius: 5px;
}

#formFile {
  border: 3px dashed gray;
  width: 100%;
  height: 300px;
}

input[type="file"]::file-selector-button {
  background-color: orange;
  border-radius: 8px;
  border: none;
  height: 50px;
  position: relative;
  top:80%;
  left:40%;
  width:20%;
  padding: 10px;
  transition: .5s ease;
}

input[type="file"]{
  text-align: center;
}

input[type="file"]:hover::file-selector-button {
  box-shadow: 0 0 2px 2px orange;
}
</style>