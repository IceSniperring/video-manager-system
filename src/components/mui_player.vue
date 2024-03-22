<script>
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'

export default {
  mounted() {
    const mp = new MuiPlayer({
      container: '#mui-player',
      title: '贾玲被骂是真不冤枉啊',
      src: './src/assets/video/贾玲被骂是真不冤枉啊.mp4', // 视频地址
      themeColor:'#9fdde2', // 自定义主题颜色
      showMiniProgress:true,
      closeControlsTimer:2500,
      plugins:[
        new MuiPlayerDesktopPlugin({
          customSetting:[{
            functions:'清晰度',
            model:'select',
            show:true,
            childConfig:[
              {functions:'暂时无法切换',selected:true},
              {functions:'蓝光1080P'},
              {functions:'超清'},
              {functions:'高清'},
              {functions:'标清'},
            ],
            onToggle:function(data,selected,back) {
              // Action
            }
          },], // 设置组配置
        })
      ]
    });
  }

}
</script>

<template>
  <div id="title" class="pb-4">
    <h4>标题</h4>
  </div>
  <div id="mui-player"></div>
  <div id="comment-menu" class="row pt-4">
    <div id="thumbs-up" class="col col-2"><i class="bi bi-hand-thumbs-up-fill"></i>
      <span>点赞</span></div>
    <div id="star" class="col col-2"><i class="bi bi-star-fill"></i>
      <span>收藏</span>
    </div>
    <div id="thumbs-down" class="col col-2"><i class="bi bi-hand-thumbs-down-fill"></i>
      <span>不喜欢</span>
    </div>
  </div>
  <hr>
</template>

<style scoped>
  #comment-menu {
    font-size: 20px;
  }

  #comment-menu span{
    font-size: 14px;
    padding-left: 6px;
  }

  #comment-menu>div:hover{
    cursor: pointer;
  }

  div>i {
    color: gray;
    transition: .2s;
  }

  div>i:hover {
    color: orange;
  }
</style>