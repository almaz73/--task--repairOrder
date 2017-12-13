<template>
  <div id="app">
    <div class="repair_header">
      Константинопольский К.
      <span class="icon-settings icons"></span>
      <span class="icon-logout icons"></span>
    </div>
    <router-link to="/RepairMD">RepairMD</router-link>
    <router-link to="/RepairListMD">RepairListMD</router-link>
    <router-link to="/RepairDetailMD">RepairDetailMD</router-link>
    <router-link to="/RepairOrderMD">RepairOrderMD</router-link>
    <router-link to="/RepairDateMD">RepairDateMD</router-link>
    <router-link to="/RepairDoneMD">RepairDoneMD</router-link>
    <router-view v-if="repairJSON"></router-view>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'
  import RepairData from './datas/RepairData'
  import RepairMD from './components/RepairMD'
  import RepairListMD from './components/RepairListMD'
  import RepairDetailMD from './components/RepairDetailMD'
  import RepairOrderMD from './components/RepairOrderMD'
  import RepairDateMD from './components/RepairDateMD'
  import RepairDoneMD from './components/RepairDoneMD'


  var router = new VueRouter({
    routes: [
      {path: "/RepairMD", component: RepairMD},
      {path: "/RepairListMD", component: RepairListMD},
      {path: "/RepairDetailMD", component: RepairDetailMD},
      {path: "/RepairOrderMD", component: RepairOrderMD},
      {path: "/RepairDateMD", component: RepairDateMD},
      {path: "/RepairDoneMD", component: RepairDoneMD},
    ]
  });
  var myRouter = router

  export default {
    name: 'app',
    components: {
      RepairMD,
      RepairData,
      RepairListMD,
      RepairDetailMD,
      RepairOrderMD,
      RepairDateMD,
      RepairDoneMD
    },
    asyncComputed: {
      repairJSON(){
        return new Promise((resolve, reject) => {
          // получаем через промисы JSON
          setTimeout(function () {
//            console.log(" ==получил JSON= ")
            resolve(RepairData.dataJson)
          }, 200)
        })
      }
    },
    router: router,
    data(){
      return {
        idService: null
      }
    },
    methods: {
      onChoiceService: function (id) {
        // выбрали вид сервиса, переходим на список работ
        this.idService = id
        this.$router.push('/RepairListMD')
      },
      onChoiceWork: function (id) {
        console.log(" ==id= ", id)
        // выбрали вид работ, переходим на детали
        this.idWork = id
        this.$router.push('/RepairDetailMD')
      }
    }
  }
</script>

<style lang="scss">
  $font_path: '~@/assets/fonts/';
  $dark_blue_color: #476878;
  $default_text_color: #2f444e;
  $green_link: #5ead19;
  $red_link: #d0011b;

  @font-face {
    font-family: 'DINPro-Regular';
    src: url($font_path + 'DINPro-Regular.eot?#iefix') format('embedded-opentype'),
    url($font_path + 'DINPro-Regular.woff') format('woff'),
    url($font_path + 'DINPro-Regular.ttf') format('truetype'),
    url($font_path + 'DINPro-Regular.svg#Gotham-Light') format('svg');
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
  }

  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'DINPro-Regular', Helvetica, Arial, sans-serif;
    color: $default_text_color;
    font-size: 18px;
  }

  //<editor-fold desc="Заголовок" defaultstate="collapsed">
  .repair_header {
    background: $dark_blue_color;

    text-align: right;
    padding: 27px 0;
    color: #fff;
  }

  .repair_header .icons {
    vertical-align: middle;
    font-size: 24px;
    cursor: pointer;
  }

  .repair_header .icon-settings {
    padding-left: 10px
  }

  .repair_header .icon-logout {
    padding-left: 30px;
    padding-right: 15px;
  }

  //</editor-fold>
  //<editor-fold desc="Контент" defaultstate="collapsed">
  .repair_content {
    margin: 0 auto;
    width: 454px;
    padding: 50px 0;
  }

  .repair_content hr {
    background: rgba(89, 106, 114, 0.2);
    height: 1px;
    border: 0;
    margin: 19px 0;
  }

  .repair_content .title_head {
    font-size: 44px;
    padding: 10px 0 35px 0;
  }

  .repair_content .teaser {
    padding-bottom: 5px;
  }

  .repair_content a {
    color: $green_link;
    text-decoration: none;
    cursor: pointer;
  }

  .repair_content a:hover {
    color: $red_link
  }

  .repair_content span {
    margin-left: 5px;
    float: right;
  }

  //</editor-fold>
</style>
