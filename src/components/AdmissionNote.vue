<template>
  <!-- Page content -->
  <div class="content">
    This is admission note
    <div class="basic-info">
      <h2>基本資料</h2>
      <table> 
        <tr>
            <th>床號 </th>
            <th>姓名</th>
            <th>年齡</th>
        </tr>
        <tr>
          <td>
          </td>
          <td>
          </td>
          <td>
          </td>
        </tr>
      </table>
      <div class="container">
        <form>
          <label>123</label> 
          <input type="text">
          <label>321</label> 
          <input type="text">
          <div>
            <select v-model='country'>
              <option value='japan'>Japan</option>
              <option value='taiwan'>Taiwan</option>
              <option value='Korea'>Korea</option>
            </select>
          </div>
        </form>
        <form>
          <label>456</label> 
          <input type="text">
          <input type="checkbox" id="checkbox" value="male" v-model="checked">
          <label for="checkbox">Male</label>
          <input type="checkbox" id="checkbox" value="female" v-model="checked">
          <label for="checkbox">Female</label>
        </form>
      </div>
    </div>
    <p>Country: {{ country }}</p>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      country:'',
      checked:'',
      data:[]

    }
  },
  created(){
    fetch("http://10.65.1.66:3001/api/ipd.list")
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.datas = data.datas;
      }).catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>
input[type=text]:focus {
  background-color: #ddd;
  outline: none;
}
</style>