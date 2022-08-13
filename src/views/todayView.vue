<template>
  <!-- wrap -->
  <div class="wrap">
    <!-- footer -->
    <footer class="footer">
      <!-- musicInfo -->
      <div class="musicInfo">
        <img src="" alt="">
        <p class="Title"> {{ musicTitle }} </p>
        <span> {{ artist }} </span>
        <div class="btnArea">
          <button type="button" class="like"></button>
          <button type="button" class="lyrics"></button>
          <button type="button" class="more"></button>
        </div>
      </div>
      <!-- // musicInfo -->
      <!-- musicIndicater -->
      <div class="musicIndicater">
        <ul>
          <li v-for="mIndiBtn in mIndiBtn" :key="mIndiBtn"><button type="button" :class="mIndiBtn"></button></li>
        </ul>
      </div>
      <!-- // musicIndicater -->
      <!-- otherStatus -->
      <div class="otherStatus">
        <!-- timeline -->
        <div class="timeline">
          {{nowTime}} / {{totalTime}}
        </div>
        <!-- // timeline -->
        <!-- volume -->
        <div class="volume">
          <button type="button" class="volume"></button>
          <input type="range" min="0" max="10">
        </div>
        <!-- // volume -->
        <!-- playList -->
        <div class="playList">
          <button type="button" class="playList"></button>
        </div>
        <!-- // playList -->
      </div>
      <!-- // otherStatus -->
    </footer>
    <!-- // footer -->
  </div>
  <!-- // wrap -->
</template>
<script>
  export default {
    components: {
    },
    data(){
      return{ // 데이터 보관함
        subLink : ['#내돈내듣','ON STAGE','VIBE 오디오'],
        CSLink : ['서비스 소개','VIBE 멤버십'],
        musicTitle : '어제 너는 나를 버렸어',
        artist : '10cm',
        mIndiBtn : ['mix','prev','play','next','repeat'],
        nowTime : '01:25',
        totalTime : '03:52',
      }
    }
  }
</script>
<style>
  @import "../../src/assets/css/package.css";
</style>