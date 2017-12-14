<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}</div>
      <span class="summa_text">
        {{totalAmmount}}
        <span>&#8381</span>
      </span>
      Выберите удобный день и время

    </div>
  </div>
</template>
<script>
  export default{
    name: 'RepairDateMD',
    data(){
      return {
        title: 'Ремонт',
        totalAmmount: 222
      }
    },
    created: function () {
      let orderArr = this.$parent.orderArr
    }
  }
</script>
