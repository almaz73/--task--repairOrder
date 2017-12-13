<template>
  <div>
    <div class="repair_content">
      <div class="title_head">
        {{title}}



        <div class="div_center summa">
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
      var JSON = this.$parent.repairJSON
      var idService = this.$parent.idService
      var idWork = this.$parent.idWork
      this.idWork = idWork
      if (idService && idWork) {
        var myWorks = JSON.children.find(data => data.id == idService)
        var myDetails = myWorks.children.find(data => data.id == idWork)
        this.title = myDetails.name
        this.tarif = myDetails.data.tarif
      } else {
        //попали без данных, переходим на главную
        this.$parent.$router.push('/')
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
        console.log(" === ", this.idWork, this.amount * this.tarif)
        this.$parent.onAddWork(this.idWork, this.title, this.amount * this.tarif)
      }
    }
  }
</script>
