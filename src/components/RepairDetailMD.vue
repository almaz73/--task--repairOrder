<template>
  <div>
    <div class="repair_content">
      <ContentMenu/>
      <div class="title_head">{{title}}</div>
      <!--<div v-for="child in children">-->
      <!--<hr noshade/>-->
      <!--<a>{{child.name}}</a>-->
      <!--</div>-->
      <!--<hr noshade/>-->
    </div>
  </div>
</template>
<script>
  import ContentMenu from './ContentMenu'
  export default{
    name: 'RepairDetailMD',
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
      var idWork = this.$parent.idWork
      console.log(" ==idWork= ", idWork)
      if (idService && idWork) {
        var myWorks = JSON.children.find(data => data.id == idService)
        var myDetails = myWorks.children.find(data => data.id == idWork)
        this.title = myDetails.name
      } else {
        //попали без данных, переходим на главную
        this.$parent.$router.push('/RepairMD')
      }
    }
  }
</script>
