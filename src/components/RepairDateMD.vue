<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}, {{positions}} {{wordSelection}}</div>
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
        totalAmmount: null,
        positions: null,
        wordSelection: "услуг"
      }
    },
    created: function () {
      let orderArr = this.$parent.orderArr
      let positions = 0
      orderArr.forEach(el => {
        this.totalAmmount += el.sum
        this.positions++
      })
      switch (this.positions.toString().slice(-1)) {
        case "1":
          this.wordSelection = "услуга";
          break;
        case "2":
          this.wordSelection = "услуги";
          break;
      }
    }
  }
</script>
