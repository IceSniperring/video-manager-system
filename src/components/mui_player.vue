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
            zIndex:0,
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
  <div id="mui-player" class="container"></div>
</template>

<style scoped>

</style>