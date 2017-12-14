<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}, {{positions}} {{wordSelection}}</div>
      <span class="summa_text">
        {{totalAmmount}}
        <span>&#8381</span>
      </span>
      <b>Выберите удобный день и время</b>
      <div class="control_data">
        <span class="window_date">29 апреля, сб
          <span @click="onChangeDate">
            <span class="arrow_down"></span>
          </span>
            <div class="panelDate panelDays">
              <span v-for="day in DAYS">
                {{day.day | moment("DD MMM") | russ }}
              </span>
            </div>
        </span>
        <span class="window_date">10:00
          <span @click="onChangeTime">
            <span class="arrow_down"></span>
          </span>
            <!--<div class="panelDate panelTimes">9239042384290</div>-->
        </span>
      </div>
      <div class="button_add" @click="$parent.$_goToComponent('RepairDoneMD')">
          <span>
              Заказать
          </span>
      </div>
    </div>
  </div>
</template>
<script>
  let today = new Date();
  export default{
    name: 'RepairDateMD',
    data(){
      return {
        title: 'Ремонт',
        totalAmmount: 0,
        positions: 0,
        wordSelection: "услуг",
        DAYS:[]
      }
    },
    created: function () {
      let orderArr = this.$parent.orderArr

      for(let i=0; i<30; i++){
        var nextDay = new Date()
        nextDay.setDate(today.getDate()+i)
        this.DAYS.push({day: nextDay} )
      }
      orderArr.forEach(el => {
        this.totalAmmount += el.sum
        this.positions++
      })
      if (this.positions) {
        switch (this.positions.toString().slice(-1)) {
          case "1":
            this.wordSelection = "услуга";
            break;
          case "2":
            this.wordSelection = "услуги";
            break;
        }
      }
    },
    methods:{
      onChangeTime: function(){
        console.log(" ==time= " )
      },
      onChangeDate: function(){
        console.log(" ==onChangeDate= " )
      }
    }
  }
</script>
