<script>
export default {
  data() {
    return {
      upload_video: true,
      manage_upload: false,
      fileName: '未选择文件'
    }
  },

  methods:{
    getFilename(){
      let file = this.$refs['upload']
      this.fileName = file.files[0].name
    }
  }
}
</script>

<template>
  <ul class="navbar-nav w-10 position-absolute border d-flex flex-column align-items-center shadow-lg" id="menu">
    <li class="nav-item mt-3 mb-3">
      <div class="circle text-center" :class="{active:upload_video}">
        <a class="nav-link" @click="upload_video=!upload_video;manage_upload=false" href="#">
          <i class="bi bi-upload"></i> <br>投稿
        </a>
      </div>
    </li>
    <li class="nav-item  mt-3 mb-3">
      <div class="circle text-center" :class="{active:manage_upload}">
        <a class="nav-link" @click="manage_upload=!manage_upload;upload_video=false" href="#">
          <i class="bi bi-journal-album"></i> <br>稿件管理
        </a>
      </div>
    </li>
  </ul>
  <div class="pt-2" style="height: 700px" >
    <div v-show="upload_video===false&manage_upload===false" class="text-center">
      <p class="fs-3 text-secondary">请选择左侧功能</p>
    </div>
    <div class="container w-50 align-self-center" v-show="upload_video">
      <div class="mb-3 text-center">
        <label for="formFile" class="form-label fs-4 text-secondary">请选择稿件</label>
        <br>
        <!--模拟input file-->
        <div id="input-file" class="border border-3 rounded-3 text-secondary fs-6">
          <input type="file" id="formFile" accept="video/*" class="opacity-0 w-100"
                 ref="upload" @change="getFilename">
          <button type="button" class="btn">上传文件</button>
          <div id="file-show">{{ fileName }}
            <br>
            <i class="bi bi-file-earmark-arrow-up-fill" style="font-size: 60px"></i>
            <br>拖拽到此处也可上传
          </div>
        </div>
        <input type="submit" value="提交" class="mt-3 w-100 btn border">
      </div>
    </div>
    <div class="container w-50 text-center h-100 overflow-auto border border-3 rounded-3" v-show="manage_upload">
      <div> <label for="" class="form-label fs-4 text-secondary text-center">稿件管理</label></div>

      <!--一个卡片，动态生成-->
      <div class="row row-cols-1 d-inline-block">
        <div class="col col-sm-auto d-flex flex-row justify-content-center" href="#">
          <div class="card mb-3 shadow" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 overflow-hidden">
                <img src="/assets/img/hqdefault.webp" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="manage" class="ms-2 d-flex flex-column justify-content-between">
            <button type="button" class="btn btn-dark"  style="font-size: 14px">编辑</button>
            <button type="button" class="btn btn-danger mb-3"  style="font-size: 14px">删除</button>
          </div>
        </div>
      </div>
      <hr>

      <div class="row row-cols-1 d-inline-block">
        <div class="col col-sm-auto d-flex flex-row justify-content-center" href="#">
          <div class="card mb-3 shadow" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 overflow-hidden">
                <img src="/assets/img/hqdefault.webp" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="manage" class="ms-2 d-flex flex-column justify-content-between">
            <button type="button" class="btn btn-dark"  style="font-size: 14px">编辑</button>
            <button type="button" class="btn btn-danger mb-3"  style="font-size: 14px">删除</button>
          </div>
        </div>
      </div>
      <hr>

      <div class="row row-cols-1 d-inline-block">
        <div class="col col-sm-auto d-flex flex-row justify-content-center" href="#">
          <div class="card mb-3 shadow" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 overflow-hidden">
                <img src="/assets/img/hqdefault.webp" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="manage" class="ms-2 d-flex flex-column justify-content-between">
            <button type="button" class="btn btn-dark"  style="font-size: 14px">编辑</button>
            <button type="button" class="btn btn-danger mb-3"  style="font-size: 14px">删除</button>
          </div>
        </div>
      </div>
      <hr>

      <div class="row row-cols-1 d-inline-block">
        <div class="col col-sm-auto d-flex flex-row justify-content-center" href="#">
          <div class="card mb-3 shadow" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 overflow-hidden">
                <img src="/assets/img/hqdefault.webp" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="manage" class="ms-2 d-flex flex-column justify-content-between">
            <button type="button" class="btn btn-dark"  style="font-size: 14px">编辑</button>
            <button type="button" class="btn btn-danger mb-3"  style="font-size: 14px">删除</button>
          </div>
        </div>
      </div>
      <hr>

      <div class="row row-cols-1 d-inline-block">
        <div class="col col-sm-auto d-flex flex-row justify-content-center" href="#">
          <div class="card mb-3 shadow" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4 overflow-hidden">
                <img src="/assets/img/hqdefault.webp" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <p class="card-text text-start">This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>
          <div id="manage" class="ms-2 d-flex flex-column justify-content-between">
            <button type="button" class="btn btn-dark"  style="font-size: 14px">编辑</button>
            <button type="button" class="btn btn-danger mb-3"  style="font-size: 14px">删除</button>
          </div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 70px;
  height: 70px;
  transition: .2s ease-in-out;
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
  height: 210px;
  top: 40%;
  border-radius: 50px;
  font-size: 14px;
}

#menu .active {
  background-color: orange;
  box-shadow: none;
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

#input-file {
  height: 300px;
}

#input-file #file-show {
  position: relative;
  top:-100%;
}

#input-file .btn {
  background-color: orange;
  border-radius: 8px;
  border: none;
  height: 50px;
  width:20%;
  padding: 10px;
  z-index: -10;
  position: relative;
  top:-25%;
  transition: .5s ease;
}

#input-file .btn{
  text-align: center;
}

#input-file:hover .btn {
  box-shadow: 0 0 2px 2px orange;
}

#file-show {
  z-index: -10;
}

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
}

hr {
  border-width: 2px;
  border-radius: 20px;
}

/*chrome内核适配*/
::-webkit-scrollbar {
  width: 0;
}

/*Mozilla内核适配*/
::-moz-scrolled-canvas {
  width: 0;
}
</style>