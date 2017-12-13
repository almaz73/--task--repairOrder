<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <span class="span_rigth">
          {{child.sum | filterMoney}}
          <span v-if="child.sum!==0">&#8381</span>
          <!--<span class="span_rigth icon-trash"></span>-->
          <img
            class="trash"
            src="../assets/trach.png"
            @click="onRemoveWork(child.idWork)"
          >
        </span>
        <a @click="$parent.onChoiceWork(child.idWork)">{{child.title}} </a>

      </div>

      <hr noshade/>
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
    created: function () {
      var orderArr = this.$parent.orderArr
      if (orderArr) {
        this.title = "Заказ ремонта"
        this.children = orderArr
      } else {
        //попали без данных, переходим на главную
        this.$parent.$router.push('/')
      }
    },
    methods: {
      onRemoveWork: function (idWork) {
        this.$parent.onRemoveWork(idWork)
        this.children = this.children.filter(el => {
          return el.idWork !== idWork
        })
      }
    }
  }
</script>
