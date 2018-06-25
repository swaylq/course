<template>
  <div class="container">
    <table>
      <tr v-for="i in 3" :key="i">
        <td v-for="j in 3" :key="j"></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
}



table {
  margin: 0 auto;
  box-shadow: 0 2px 6px 0 #88c8f6;
  /* border-spacing: 0; */
}
tr {
  height: 50px;
}
td {
  box-sizing: border-box;
  width: 200px;
  color: #fff;
  background: #88c8f5;
}
</style>
