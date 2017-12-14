<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <span class="span_rigth">{{child.data.tarif | filterMoney}} <span
          v-if="child.data.tarif!==0">&#8381</span></span>
        <a @click="$parent.onChoiceWork(child.id)">{{child.name}} </a>
      </div>
      <hr noshade/>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'RepairListMD',
    data(){
      return {
        title: '',
        children: {}
      }
    },
    created: function () {
      var JSON = this.$parent.repairJSON
      var idService = this.$parent.idService
      if (idService) {
        var myWorks = JSON.children.find(data => data.id == idService)
        this.title = myWorks.title
        this.children = myWorks.children
      } else {
        //попали без данных, переходим на главную
        this.$parent.$_goToComponent('')
      }
    }
  }
</script>
