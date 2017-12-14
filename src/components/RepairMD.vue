<template>
  <div>
    <div class="repair_content">
      <div class="title_head">{{title}}</div>
      <div class="teaser">{{teaser_card}}</div>
      <div v-for="child in children">
        <hr noshade/>
        <a @click="$parent.onChoiceService(child.id)">{{child.title}}</a>
      </div>
      <hr noshade/>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'RepairMD',
    components: {
    },
    created: function () {
      let JSON = this.$parent.repairJSON
      this.title = JSON.title
      this.teaser_card = JSON.teaser_card
      this.children = JSON.children
    }
  }
</script>
