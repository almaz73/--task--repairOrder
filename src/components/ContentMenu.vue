<template>
  <div class="small_text" v-if="matchedComponent!=='RepairDoneMD'">
    <a v-if="idService!==null && matchedComponent!=='RepairMD'"
       @click="$parent.$_goToComponent('')">Услуги</a>
    <span
      v-else
      :class="(matchedComponent==='RepairMD')?'bold_text':''">Услуги
    </span>
    &nbsp;·&nbsp;
    <a v-if="matchedComponent!=='RepairOrderMD' && orderArr && orderArr.length>0"
       @click="$parent.$_goToComponent('RepairOrderMD')">Заказ</a>
    <span
      v-else
      :class="(matchedComponent==='RepairOrderMD')?'bold_text':''">Заказ
    </span>
    &nbsp;·&nbsp;
    <a v-if="matchedComponent!=='RepairDateMD' && isData"
       @click="$parent.$_goToComponent('RepairDateMD')">Дата и время</a>
    <span
      v-else
      :class="(matchedComponent==='RepairDateMD')?'bold_text':''">Дата и время
    </span>
  </div>
</template>
<script>
  export default{
    name: 'ContentMenu',
    props: {
      idService: {
        type: Number
      },
      orderArr: {
        type: Array
      },
      isData: {
        type: Boolean
      },
      matchedComponent: {
        type: String
      }
    }
  }
</script>

<style scoped>
  .small_text {
    font-size: 14px;
  }
</style>
