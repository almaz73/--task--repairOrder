<template>
  <div>

    <div class="repair_header">
      Константинопольский К.
      <span class="icon-settings icons"></span>
      <span class="icon-logout icons"></span>
    </div>
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
    props: {
      title: {
        type: String,
        require: true
      },
      teaser_card: {
        type: String
      },
      children: {
        type: Array
      },
    }
  }
</script>
