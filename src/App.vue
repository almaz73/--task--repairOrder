<template>
  <div id="app">
    <div class="repair_header">
      Константинопольский К.
      <span class="icon-settings icons"></span>
      <span class="icon-logout icons"></span>
    </div>

    <!--<router-link to="/">RepairMD</router-link>-->
    <!--<router-link to="/RepairListMD">RepairListMD</router-link>-->
    <!--<router-link to="/RepairDetailMD">RepairDetailMD</router-link>-->
    <!--<router-link to="/RepairOrderMD">RepairOrderMD</router-link>-->
    <!--<router-link to="/RepairDateMD">RepairDateMD</router-link>-->
    <!--<router-link to="/RepairDoneMD">RepairDoneMD</router-link>-->

    <ContentMenu class="top_arrows"/>
    <router-view v-if="repairJSON"></router-view>
  </div>
</template>

<script>
  import VueRouter from 'vue-router'
  import RepairData from './datas/RepairData'
  import ContentMenu from './components/ContentMenu'
  import RepairMD from './components/RepairMD'
  import RepairListMD from './components/RepairListMD'
  import RepairDetailMD from './components/RepairDetailMD'
  import RepairOrderMD from './components/RepairOrderMD'
  import RepairDateMD from './components/RepairDateMD'
  import RepairDoneMD from './components/RepairDoneMD'


  var router = new VueRouter({
    routes: [
      {path: "/", component: RepairMD},
      {path: "/RepairListMD", component: RepairListMD},
      {path: "/RepairDetailMD", component: RepairDetailMD},
      {path: "/RepairOrderMD", component: RepairOrderMD},
      {path: "/RepairDateMD", component: RepairDateMD},
      {path: "/RepairDoneMD", component: RepairDoneMD},
    ]
  });

  export default {
    name: 'app',
    components: {
      RepairMD,
      RepairData,
      ContentMenu,
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
        idService: null,
        orderArr: []
      }
    },
    methods: {
      onChoiceService: function (id) {
        // выбрали вид сервиса, переходим на список работ
        this.idService = id
        this.$router.push('/RepairListMD')
      },
      onChoiceWork: function (id) {
        // выбрали вид работ, переходим на детали
        this.idWork = id
        this.$router.push('/RepairDetailMD')
      },
      onAddWork: function (idWork, title, sum) {
        // добавляем в корзину работу
        this.orderArr.push({idWork, title, sum})
        this.$router.push('/RepairOrderMD')
      },
      onRemoveWork: function (idWork) {
        // удаялем из корзины работу
        this.orderArr = this.orderArr.filter(el => {
          return el.idWork !== idWork
        })
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
    padding: 27.5px 0;
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

  .top_arrows {
    margin: 0 auto;
    width: 454px;
    padding-top: 52px;
  }

  .repair_content {
    margin: 0 auto;
    width: 454px;
  }

  .repair_content hr {
    background: rgba(89, 106, 114, 0.2);
    height: 1px;
    border: 0;
    margin: 18.5px 0;
  }

  .repair_content .title_head {
    font-size: 44px;
    padding: 5px 0 38px 0;
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

  .repair_content .span_rigth {
    margin-left: 5px;
    float: right;
  }

  .repair_content .div_center {
    text-align: center;
  }

  .summa {
    padding: 30px 0;
    font-size: 36px;
  }

  .button_add {
    margin-top: 40px;
    width: 220px;
    height: 50px;
    background-color: #8bc541;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }

  .button_add span {
    display: block;
    text-align: center;
    width: 200px;
    margin: 0px auto;
    padding-top: 10px;
  }

  img.trash {
    margin-left: 30px;
    vertical-align: text-bottom;
    cursor: pointer
  }

  //</editor-fold>
  //<editor-fold desc="Калькулятор добавления" defaultstate="collapsed">
  .control_add_count {
    position: relative;
    height: 40px;
    border-radius: 5px;
    background-color: rgba(94, 173, 25, 0.05);
    font-size: 18px;

    /*border: 1px solid red;*/

  }

  .control_add_count .sp_left, .control_add_count .sp_right {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 4px;
    cursor: pointer;
  }

  .control_add_count .horizont {
    position: absolute;
    width: 14px;
    height: 2px;
    left: 8px;
    top: 14px;
    background-color: #d0011b;
  }

  .control_add_count .vertical {
    position: absolute;
    width: 2px;
    height: 14px;
    left: 14px;
    top: 8px;
    background-color: #5ead19;
  }

  .sp_left {
    border: 1px solid #d0011b;
    left: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .sp_right {
    border: 1px solid #5ead19;
    left: 41px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  .sp_right .horizont {
    background-color: #5ead19;
  }

  .sp_text {
    position: absolute;
    right: 46px;
    top: 8px;
  }

  //</editor-fold>
</style>
