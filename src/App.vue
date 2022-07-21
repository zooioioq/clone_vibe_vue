<template>
  <!-- wrap -->
  <div class="wrap">
    <!-- header -->
    <header class="header">
      <!-- headerLogo -->
      <h1 class="headerLogo"> NAVER VIBE </h1>
      <!-- // headerLogo -->
      <!-- loginBtn -->
      <div class="loginBtn">
        <p><a href="#"> 로그인 </a></p>
      </div>
      <!-- // loginBtn -->
      <!-- searchBox -->
      <div class="searchBox">
        <form>
          <input type="text" class="search" placeholder="VIBE 검색">
        </form>
      </div>
      <!-- // searchBox -->
      <!-- nav -->
      <nav class="nav">
        <ul>
          <li v-for="(n,v) in navList" :key="v"><span><a href="#">{{ navList[v] }}</a></span></li>
        </ul>
      </nav>
      <!-- // nav -->
      <!-- subLink -->
      <div class="subLink">
        <ul>
          <li v-for="(s,b) in subLink" :key="b"><a href="#"> {{ subLink[b] }} </a></li>
        </ul>
      </div>
      <!-- // subLink -->
      <!-- CSLink -->
      <div class="CSLink">
        <ul>
          <li v-for="(c,s) in CSLink" :key="s"><a href="#"> {{ CSLink[s] }} </a></li>
        </ul>
      </div>
      <!-- // CSLink -->
      <!-- headerBtn -->
      <div class="headerBtn">
        <p class="highlight"><a href="#"> 멤버십 구독 </a></p>
        <p><a href="#"> 데스크톱앱 설치 </a></p>
      </div>
      <!-- // headerBtn -->
    </header>
    <!-- // header -->



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
  name: 'App',
  data(){
    return{ // 데이터 보관함
      navList : ['투데이','차트','최신앨범','DJ 스테이션','VIBE MAG','이달의 노래'],
      subLink : ['#내돈내듣','ON STAGE','VIBE 오디오'],
      CSLink : ['서비스 소개','VIBE 멤버십'],
      musicTitle : '어제 너는 나를 버렸어',
      artist : '10cm',
      mIndiBtn : ['mix','prev','play','next','repeat'],
      nowTime : '01:25',
      totalTime : '03:52',
    }
  },
  components: {
  }
}
</script>

<style>
</style>
