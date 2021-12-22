<template>
  <!-- Page content -->
  <div class="content">
    <div class="table">
      <h2>Table</h2>
        <div>
        </div>
        <table>
           <tr>
              <th>床號</th>
              <th>姓名</th>
              <th>性別</th>
              <th>主治醫師</th>
            </tr>
            <tr v-for='data in datas' :key='data.id'>
              <th> {{ data.bed_no }}</th>
              <th> {{ data.name }}</th>
              <th>{{ data.sex }}</th>
              <th>{{ data.ward }}</th>
            </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: []
    }
  },
  created() {
    fetch('http://10.65.1.66:3001/api/ipd.list')
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.datas = data;
      }).catch(error => {
        console.log(error);
      })
  }
}
</script>

<style>
/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  top: 100px;
  left: 250px;
  right: 0px;
  bottom: 0px;
  margin: 15px 15px;
  padding: 1px 10px;
  position: fixed;
}

/* Table */
table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid #586180;
  
}
tr:hover{
  background-color: #ddd;
  border-bottom: 2.5px solid #586180;
}

</style>