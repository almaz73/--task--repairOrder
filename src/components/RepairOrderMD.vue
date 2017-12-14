<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <span class="span_rigth">
          {{child.sum | filterMoney}}
          <span v-if="child.sum!==0">&#8381</span>
          <img
            class="trash"
            src="../assets/trach.png"
            @click="onRemoveWork(child.idWork)"
          >
        </span>
        <a @click="$parent.onChoiceWork(child.idWork, child.sum, child.idService)">{{child.title}} </a>

      </div>

      <hr noshade/>
      <a @click="$parent.$_goToComponent('')">+ Добавить еще одну услугу </a>

      <span class="summa_text">
        {{totalAmmount}}
        <span>&#8381</span>
      </span>

      <div class="button_add" @click="$parent.$_goToComponent('RepairDateMD')">
          <span>
            К выбору даты и времени →
          </span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'RepairOrderMD',
    data(){
      return {
        title: '',
        children: {}
      }
    },
    computed: {
      totalAmmount: function () {
        let sum = 0;
        this.children.forEach(el => {
          sum += el.sum
        })
        return sum
      }
    },
    created: function () {
      let orderArr = this.$parent.orderArr
      if (orderArr) {
        this.title = "Заказ ремонта"
        this.children = orderArr
      } else {
        //попали без данных, переходим на главную
        this.$parent.$_goToComponent('')
      }
    },
    methods: {
      /**
       * удалим выбронную работу
       */
      onRemoveWork: function (idWork) {
        this.$parent.onRemoveWork(idWork)
        this.children = this.children.filter(el => {
          return el.idWork !== idWork
        })
      }
    }
  }
</script>
