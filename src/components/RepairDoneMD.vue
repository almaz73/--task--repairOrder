<template>
  <div>
    <div class="repair_content">
      <div class="div_center img_top">
        <img src="../assets/icon.png">
      </div>
      <div class="title_head div_center">
        <div>{{myOrder}}</div>
        <div> {{date}}</div>
      </div>
      <div>Заказ оформлен. При необходимости, диспетчер свяжется с вами для уточнения</div>
    </div>
    <div class="div_center link_top">
      <b><a @click="$parent.$_goToComponent('RepairOrderMD')">Мои заказы</a></b>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'RepairDoneMD',
    data(){
      return {
        myOrder: "",
        date: ""
      }
    },
    created: function () {
      let idService = this.$parent.idService
      let idWork = this.$parent.idWork
      if (idService && idWork) {
        this.$parent.isData = true;
        this.myOrder = this.$parent.myOrder
        this.date = this.$parent.myDate + " в " + this.$parent.myTime
      } else {
        //попали без данных, переходим на главную
        this.$parent.$_goToComponent('')
      }

    }
  }
</script>
