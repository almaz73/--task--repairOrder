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
        <span class="window_date" >{{myDate}}
          <span @click="viewDate = !viewDate">
            <span class="arrow_down"></span>
          </span>
            <div class="panelDate panelDays small_text" v-if="viewDate">
              <div v-for="day in DAYS">
                <a class="bt" @click="onChoiceDay(day.day)"> {{day.day | moment("DD MMM") | russ }} </a>
              </div>
            </div>
        </span>
        <span class="window_date">{{myTime}}
          <span @click="viewTime=!viewTime">
            <span class="arrow_down"></span>
          </span>
            <div class="panelDate panelTimes small_text"  v-if="viewTime">
              <div v-for="hour in HOURS">
                <a class="bt" @click="onChoiceHour(hour)"> {{hour}} </a>
              </div>
            </div>


        </span>
      </div>
      <div class="button_add" @click="onOrder">
          <span>
              Заказать
          </span>
      </div>
    </div>
  </div>
</template>
<script>
  let today = new Date();
  let W_arr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  let M_arr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  export default{
    name: 'RepairDateMD',
    data(){
      return {
        title: 'Ремонт',
        totalAmmount: 0,
        positions: 0,
        DAYS:[],
        HOURS:[],
        myDate:'',
        myTime:'',
        viewDate: false,
        viewTime: false,
      }
    },
    created: function () {
      let orderArr = this.$parent.orderArr
      this.myDate = this.$parent.myDate
      this.myTime = this.$parent.myTime


      if (this.myDate === ''){
        this.onChoiceDay(new Date())
      }

      if (this.myTime === ''){
        this.onChoiceHour('15:00')
      }

      for(let i=0; i<30; i++){
        let nextDay = new Date()
        nextDay.setDate(today.getDate()+i)
        this.DAYS.push({day: nextDay} )
      }
      for(let i=1; i<=24; i++){
        this.HOURS.push(i+":00")
      }

      orderArr.forEach(el => {
        this.totalAmmount += el.sum
        this.positions++
      })

      this.$parent.myOrder = this.title+", "+this.positions+" "+this.wordSelection
    },
    computed: {
      wordSelection: function () {
        let val = (this.positions) ? this.positions.toString ().slice (-1) : ''
        if (val === "1") {
          return "услуга"
        } else if (val === "2" || val === "3" || val === "4") {
          return "услуги"
        }
        return "услуг"
      }
    },
    methods:{
      onChoiceDay: function (val) {
        let D = val.getDate ()
        let M = val.getMonth ()
        let W = val.getDay ()

        this.myDate = D + " " + M_arr[M] + ", " + W_arr[W]
        this.$parent.myDate = this.myDate
        this.viewDate = false
      },
      onChoiceHour: function(val){
        this.myTime = val
        this.$parent.myTime = this.myTime
        this.viewTime = false
      },
      onOrder: function(){
        this.$parent.$_goToComponent('RepairDoneMD')
      }
    }
  }
</script>
