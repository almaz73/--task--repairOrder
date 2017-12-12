<template>
  <div id="app">
    <RepairMD/>
  </div>


</template>

<script>
  import RepairMD from './components/RepairMD'
  export default {
    name: 'app',
    components: {
      RepairMD
    }
  }
</script>

<style lang="scss">
  /*@import '../node_modules/simple-line-icons/css/simple-line-icons.css'*/

  $font_path: '~@/assets/fonts/';

  @font-face {
    font-family: 'DINPro-Regular';
    src: url($font_path + 'DINPro-Regular.eot?#iefix') format('embedded-opentype'),
    url($font_path + 'DINPro-Regular.woff') format('woff'),
    url($font_path + 'DINPro-Regular.ttf')  format('truetype'),
    url($font_path + 'DINPro-Regular.svg#Gotham-Light') format('svg');
    font-weight: normal;
    font-style: normal;
    line-height: 1.5;
  }


  body{
    margin:0;
    padding:0;
  }
  #app {
    font-family: "DINPro-Regular";
    /*font-family: 'DINPro-Regular', Helvetica, Arial, sans-serif;*/
    color: #2c3e50;

  }

  .repair_header {
    /*font-family: "DINPro-Regular";*/
    font-family: 'DINPro-Regular', Helvetica, Arial, sans-serif;
    background: #476878;
    height: 82px;
    font-size: 18px;
    text-align: right;
    padding-right: 15px;
    padding-top: 40px;
    color: #fff;
  }
  .repair_header .icons{
    vertical-align: middle;
    font-size: 24px;
  }
</style>
