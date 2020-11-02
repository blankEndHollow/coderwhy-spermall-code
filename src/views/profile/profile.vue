<template>
  <div>
    <nav-bar class="profile_nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <section class="aui-flexView">
            <section class="aui-scrollView">
                <div class="aui-flex aui-flex-header">
                    <div class="aui-loaned-user">
                        <img src="~assets/img/profile/user-logo.png" alt="">
                    </div>
                    <div class="aui-flex-box">
                        <h1>136****7554</h1>
                    </div>
                    <div class="aui-flex-arrow">
                        <span>未实名</span>
                    </div>
                </div>
                <div class="aui-flex aui-flex-color">
                    <div class="aui-flex-box">
                        <p>为了保障您的利益，请实名认证后付款</p>
                    </div>
                </div>
                <div class="divHeight"></div>
                <div class="aui-course-list">
                    <a href="javascript:;" class="aui-flex b-line">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-001.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>收藏夹</h2>
                        </div>
                    </a>
                    <a href="javascript:;" class="aui-flex b-line">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-002.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>足迹</h2>
                        </div>
                    </a>
                    <a href="javascript:;" class="aui-flex">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-003.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>信用卡进度</h2>
                        </div>
                    </a>
                    <div class="divHeight"></div>
                    <a href="javascript:;" class="aui-flex b-line">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-004.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>关注店铺</h2>
                        </div>
                    </a>
                    <a href="javascript:;" class="aui-flex">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-005.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>客服</h2>
                        </div>
                    </a>
                    <div class="divHeight"></div>
                    <a href="javascript:;" class="aui-flex b-line">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-006.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>意见反馈</h2>
                        </div>
                    </a>
                    <a href="javascript:;" class="aui-flex b-line">
                        <div class="aui-cou-img">
                            <img src="~assets/img/profile/icon-min-007.png" alt="">
                        </div>
                        <div class="aui-flex-box">
                            <h2>关于我们</h2>
                        </div>
                    </a>
                </div>
            </section> 
        </section>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
export default {
  name:"profile"
 ,components:{
   NavBar
 }
}
</script>
<style  scoped>
  @import url('~assets/css/profile.css');
  .profile_nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>