<template>
  <div>

    <div class="repair_header">
      Константинопольский К.
      <span class="icon-settings icons"></span>
      <span class="icon-logout icons"></span>
    </div>
    <div class="repair_content">

      <hr noshade/>
      {{title}}
      {{teaser_card}}

      <div v-for="child in children">{{child.title}}</div>



    </div>
  </div>
</template>
<script>

  export default{
    name: 'RepairMD',
    components: {},
    props: {
      title: {
        type: String,
        require: true
      },
      teaser_card:{
         type:String
      },
      children:{
        type:Array
      },
    }
  }
</script>
