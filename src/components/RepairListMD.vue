<template>
  <div>
    <div class="repair_content">
      <ContentMenu/>
      <div class="title_head">{{title}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <a>{{child.name}}</a>
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
        var myService = JSON.children.find(data => data.id == idService)
        this.title = myService.title
        this.children = myService.children
      } else {
        //попали без данных, переходим на главную
        this.$parent.$router.push('/RepairMD')
      }
    }
  }
</script>
