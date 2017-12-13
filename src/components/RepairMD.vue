<template>
  <div>
    <div class="repair_content">
      <ContentMenu/>
      <div class="title_head">{{title}}</div>
      <div class="teaser">{{teaser_card}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <a href="#">{{child.title}}</a>
      </div>
      <hr noshade/>
    </div>
  </div>
</template>
<script>
  import ContentMenu from './ContentMenu'
  export default{
    name: 'RepairMD',
    components: {
      ContentMenu
    },
    created: function () {
      var JSON = this.$parent.repairJSON
      if (JSON) {
        this.title = JSON.title
        this.teaser_card = JSON.teaser_card
        this.children = JSON.children
      }
    },
    methods: {}
  }
</script>
