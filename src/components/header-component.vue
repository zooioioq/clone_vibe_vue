<template>
  <!-- header -->
  <header class="header">
    <!-- headerLogo -->
    <h1 class="headerLogo"> NAVER <span>VIBE</span> </h1>
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
        <li>
          <router-link to="/"> 투데이 </router-link>
          <router-link to="/chart"> 차트 </router-link>
          <router-link to="/new"> 최신앨범 </router-link>
          <router-link to="/dj"> DJ스테이션 </router-link>
          <router-link to="/mag"> VIBE MAG </router-link>
          <router-link to="/month"> 이달의 노래 </router-link>
          <router-link to="/box"> 보관함 </router-link>
        </li>
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
</template>

<script>
    export default {
    name: 'header-component',
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>