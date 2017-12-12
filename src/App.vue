<template>
  <div id="app">
    <RepairMD
      v-if="repairSJON"
      :title = "repairSJON.title"
      :teaser_card = "repairSJON.teaser_card"
      :children="repairSJON.children"
    />
    <RepairData/>
<!--!!! {{ repairSJON }}  json получен  !!!-->

  </div>
</template>

<script>
  import RepairMD from './components/RepairMD'
  import RepairData from './datas/RepairData'
  export default {
    name: 'app',
    components: {
      RepairMD,
      RepairData
    },
    asyncComputed: {
      repairSJON(){
        return new Promise((resolve, reject) => {
          // получаем через промисы JSON
          setTimeout(function () {
            console.log(" ==получил JSON= " )
            resolve(RepairData.dataJson)
          }, 200)
        })
      }
    }
  }
</script>

<style lang="scss">
  $font_path: '~@/assets/fonts/';
  $dark_blue_color: #476878;
  $default_text_color: #2f444e;

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
  }

  //<editor-fold desc="Заголовок" defaultstate="collapsed">
  .repair_header {
    background: $dark_blue_color;
    font-size: 18px;
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
  }

  //</editor-fold>
</style>
