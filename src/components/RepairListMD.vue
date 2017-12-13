<template>
  <div>
    <div class="repair_content">
      <ContentMenu/>
      <div class="title_head">{{title}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <span>{{child.data.tarif | filterMoney}} <span v-if="child.data.tarif!==0">&#8381</span></span>
        <a @click="$parent.onChoiceWork(child.id)">{{child.name}} </a>
      </div>
      <hr noshade/>
    </div>
  </div>
</template>
<script>
  import ContentMenu from './ContentMenu'
  export default{
    name: 'RepairListMD',
    components: {
      ContentMenu
    },
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
        this.$parent.$router.push('/RepairMD')
      }
    },
    filters: {
      filterMoney: function (val) {
        if (val == 0) {
          return "Бесплатно"
        } else {
          return val;
        }
      }
    }
  }
</script>
