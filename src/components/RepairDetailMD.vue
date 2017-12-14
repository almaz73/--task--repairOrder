<template>
  <div>
    <div class="repair_content">
      <div class="title_head">
        {{title}}

        <div class="div_center summa_text">
          {{tarif * amount}}
          <span>&#8381</span>
        </div>
        <div class="control_add_count" v-if="tarif!==0">
          <span class="sp_left" @click="onCalculate(-1)">
            <span class="horizont"></span>
          </span>
          <span class="sp_right" @click="onCalculate(1)">
            <span class="horizont"></span>
            <span class="vertical"></span>
          </span>
          <span class="sp_text">
            {{amount}} × {{tarif}}
            <span v-if="tarif!==0">&#8381</span>
           </span>
        </div>
        <div class="button_add" @click="addWork">
          <span>
            Добавить к заказу
          </span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'RepairDetailMD',
    data(){
      return {
        title: '',
        tarif: 0,
        amount: 1,
        idWork: null
      }
    },
    created: function () {
      let JSON = this.$parent.repairJSON
      let idService = this.$parent.idService
      let idWork = this.$parent.idWork
      let fromBascketSumma = this.$parent.fromBascketSumma
      this.idWork = idWork
      if (idService && idWork) {
        let myWorks = JSON.children.find(data => data.id === idService)
        let myDetails = myWorks.children.find(data => data.id === idWork)
        this.title = myDetails.name
        this.tarif = myDetails.data.tarif
        this.amount = (fromBascketSumma) ? fromBascketSumma / this.tarif : 1
      } else {
        //попали без данных, переходим на главную
        this.$parent.$_goToComponent('')
      }
    },
    methods: {
      onCalculate: function (val) {
        this.amount += val;
        if (this.amount < 1) {
          this.amount = 1
        }
      },
      addWork: function () {
        this.$parent.onAddWork(this.idWork, this.title, this.amount * this.tarif)
      }
    }
  }
</script>
