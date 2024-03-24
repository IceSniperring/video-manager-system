<script>
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import MuiPlayerDesktopPlugin from 'mui-player-desktop-plugin'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  components: {FontAwesomeIcon},
  data(){
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      like_count:140021,
      star_count:0,
      dislike_count:0,
    }
  },
  methods:{
    //点赞逻辑
    like_method(){
      this.isActive1=!this.isActive1;this.isActive3=false;
      if(this.isActive1===true){
        this.like_count+=1;
        if(this.dislike_count>0){
          this.dislike_count-=1;
        }
      }else {
        this.like_count-=1;
      }
    },
    //收藏逻辑
    star_method(){
      this.isActive2=!this.isActive2
      if(this.isActive2===true){
        this.star_count+=1;
      }else {
        this.star_count-=1;
      }
    },
    //不喜欢逻辑
    dislike_method(){
      this.isActive3=!this.isActive3;this.isActive1=false;
      if(this.isActive3===true){
        this.dislike_count+=1;
        if(this.like_count>0){
          this.like_count-=1;
        }
      }else {
        this.dislike_count-=1;
      }
    }
  },

  mounted() {
    const mp = new MuiPlayer({
      container: '#mui-player',
      title: '贾玲被骂是真不冤枉啊',
      src: '/assets/video/贾玲被骂是真不冤枉啊.mp4', // 视频地址
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
    <div id="like" class="col col-2" @click="like_method">
      <font-awesome-icon :icon="['fas', 'heart']"
                         :class="{active:isActive1&!isActive3}"
                         id="like-icon"/>
      <span v-show="like_count===0">点赞</span>
      <span v-show="like_count!==0">{{like_count}}</span>
    </div>
    <div id="star" class="col col-2"  @click="star_method">
      <font-awesome-icon :icon="['fas', 'star']"
                         :class="{active:isActive2}"
                         id="star-icon"/>
      <span v-show="star_count===0">收藏</span>
      <span v-show="star_count!==0">{{star_count}}</span>
    </div>
    <div id="dislike" class="col col-2" @click="dislike_method">
      <font-awesome-icon :icon="['fas', 'heart-broken']"
                         :class="{active:isActive3&!isActive1}"
                         id="dislike-icon"/>
      <span v-show="dislike_count===0">不喜欢</span>
      <span v-show="dislike_count!==0">{{dislike_count}}</span>
    </div>
  </div>
  <hr>
</template>

<style scoped>
  #comment-menu {
    font-size: 18px;
  }

  #comment-menu span{
    font-size: 18px;
    padding-left: 6px;
  }

  #comment-menu>div:hover{
    cursor: pointer;
  }

  #like-icon,
  #star-icon,
  #dislike-icon {
    color: gray;
    transition: .1s ease-in-out;
  }
  #like:hover #like-icon {
    color: pink;
  }
  #dislike:hover #dislike-icon {
    color: pink;
  }
  #star:hover #star-icon {
    color: pink;
  }

  #like-icon.active,
  #star-icon.active,
  #dislike-icon.active {
    color: pink;
  }
</style>