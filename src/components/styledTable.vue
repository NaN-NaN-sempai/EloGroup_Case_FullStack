<template>
  <div class="styledTable"
    @click="tableClick">
    <table
      :id="id">
      <tr class="tableHeader">      
        <th v-for="elHeaders in headers" :key="elHeaders">
          <checkBox v-if="elHeaders.includes('insertCheckBox')" 
            :inputClick="inputClick" />
          <span v-else>{{ elHeaders }}</span>
        </th>
      </tr>
      
      <tr v-for="(elContainer, preventObjectInKey) in content" :key="preventObjectInKey"> 
        <td v-for="(elContent, preventObjectInKey) in elContainer" :key="preventObjectInKey"
          @click="controller">
          <checkBox v-if="elContent.includes('insertCheckBox')" :id="elContent.split('=')[1]" />
          <p v-else>{{ elContent }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "styledTable",
  props: {
    id: {
      type: String
    },
    headers: {
      type: Array,
      default: () => []
    },
    content: {
      type: Array,
      default: () => []
    },
    inputClick: {
      type: Function,
      default: () => ()=>{}
    },
    controller: {
      type: Function,
      default: () => ()=>{}
    },
    tableClick: {
      type: Function,
      default: () => ()=>{}
    }
  },
  components: {
    checkBox: () => import('@/components/checkBox.vue')
  }
}
</script>

<style>
.styledTable table {
  font-size: 13px;
  border: solid 1px var(--mainColor);
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

.styledTable td, .styledTable th {
  border: solid 1px var(--mainColor);
  text-align: center;
  height: 60px;
  width: 30%;
  word-break: break-all;
}
.styledTable th {
  background: var(--tableHeaderBackgorund);
  color: var(--tableHeaderColor); 
}

.styledTable tr {
  background: var(--tableRowColorBackground);
  color: var(--tableRowColor);
}
.styledTable tr:nth-child(even) {
  background: var(--tableEvenBackground);
}
</style>