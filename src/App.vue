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

    <ContentMenu
      class="top_arrows"
      :idService="idService"
      :orderArr="orderArr"
      :isData="isData"
      :matchedComponent="matchedComponent"
    />
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


  let router = new VueRouter({
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
            resolve(RepairData.dataJson)
          }, 200)
        })
      }
    },
    router: router,
    data(){
      return {
        idService: null,        // id услуги
        idWork: null,           // id работы
        fromBascketSumma: null, // сумма , если пришли менять количество из корзины
        orderArr: [],           // набор корзины
        isData: false,          // уже открыли панель выбора даты
        matchedComponent: '',    // имя текущего открытого компонента
        myDate:'29 апреля',
        myTime:'10:00',
        myOrder:'Ремонт, 2 услуги'
      }
    },
    methods: {
      /**
       * Выбрали вид услуг, переходим на список работ
       *
       * @param id {Number}
       */
      onChoiceService: function (id) {
        this.idService = id
        this.$_goToComponent('RepairListMD')
      },
      /**
       * Выбрали вид работ, переходим на детали
       *
       * @param idWork {Number}
       * @param sum {Number} пришли из корзины менять количество
       */
      onChoiceWork: function (idWork, sum) {
        this.idWork = idWork
        this.fromBascketSumma = sum;
        this.$_goToComponent('RepairDetailMD')
      },
      /**
       * Добавляем в корзину работу
       *
       * @param idWork {Number}
       * @param title {String}
       * @param sum {Number}
       */
      onAddWork: function (idWork, title, sum) {

        // исключить дублирование работ
        let exist = this.orderArr.find(el => {
          if (el.idWork === idWork) {
            return el.sum = sum
          }
        })

        if (!exist) {
          this.orderArr.push({idWork, title, sum})
        }

        this.$_goToComponent('RepairOrderMD')
      },
      /**
       * Удаляем из корзины работу
       *
       * @param idWork {Number}
       */
      onRemoveWork: function (idWork) {
        this.orderArr = this.orderArr.filter(el => {
          return el.idWork !== idWork
        })
      },
      /**
       * Переход к компоненту
       * @param val {String} Имя компонента
       */
      $_goToComponent: function (val) {
        val = (val === "RepairMD") ? "/" : val
        this.$router.push('/' + val)
        this.$_updateMatchedComponent()
      },
      /**
       * Обновление для указателя ContentMenu
       */
      $_updateMatchedComponent: function () {
        this.matchedComponent = this.$router.getMatchedComponents()[0].name
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
  $width_list: 454px;
  $color_dark_blue: #596a72;

  @font-face {
    font-family: 'DINPro-Regular';
    src: url($font_path + 'DINPro-Regular.eot?#iefix') format('embedded-opentype'),
    url($font_path + 'DINPro-Regular.woff') format('woff'),
    url($font_path + 'DINPro-Regular.ttf') format('truetype'),
    url($font_path + 'DINPro-Regular.svg#Gotham-Light') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    color: $green_link;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    color: $red_link
  }

  .bold_text {
    font-weight: bold;
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
    width: $width_list;
    padding-top: 52px;
  }

  .repair_content {
    margin: 0 auto;
    width: $width_list;
  }

  .repair_content hr {
    background: rgba(89, 106, 114, 0.2);
    height: 1px;
    border: 0;
    margin: 18.5px 0;
  }

  .repair_content .title_head {
    font-size: 44px;
    margin: 5px 0 38px 0;
  }

  .repair_content .teaser {
    padding-bottom: 5px;
  }

  .repair_content .span_rigth {
    margin-left: 5px;
    float: right;
  }

  .div_center {
    text-align: center;
  }

  .button_add {
    display: inline-block;

    height: 50px;
    background-color: #8bc541;
    font-size: 18px;
    color: white;
    cursor: pointer;
  }

  .button_add span {
    display: block;
    text-align: center;
    margin: 0 40px;
    padding-top: 11px;
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
    margin-bottom: 40px;
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

  .summa_text {
    margin: 30px 0;
    display: block;
    text-align: center;
    font-size: 36px;
  }

  //</editor-fold>
  //<editor-fold desc="Контрол выбора даты" defaultstate="collapsed">
  .control_data {
    margin: 40px 0 70px 0;
  }

  .control_data .window_date {
    border: 1px solid $color_dark_blue;
    padding: 14px 5px 20px 20px;
    margin-right: 10px;
  }
  .control_data .window_date > span{
    padding: 10px 20px;
    margin: 0 10px 0 30px;
    position: relative;
    cursor: pointer;
  }
  .control_data .arrow_down{
    position: absolute;
    top:20px;
    border: 5px solid transparent; /* Прозрачные границы */
    border-top: 8px solid $color_dark_blue; /* Добавляем треугольник */
  }

  //</editor-fold>
  //<editor-fold desc="Done" defaultstate="collapsed">
  .img_top{
    margin-top: 50px;
  }
  .link_top{
    margin-top: 43px;
  }
  //</editor-fold>


</style>
