<template>
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
</template>

<script>
    export default {
    name: 'footer-component',
    props: {
      msg: String
  }
  }
</script>

<style scoped>

</style>