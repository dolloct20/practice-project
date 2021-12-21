<template>
  <!-- Page content -->
  <div class="container">
    <div class="basic-info">
      <h1>基本資料</h1>
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
      <!-- <form>
        <input type='checkbox' id='checkbox' value=''>
      </form> -->      
    </div>
    <div class='container'>
      <div class='project'>
        <h1>住院計畫</h1>
        <table></table>
      </div>
    </div>
    <form>
      <div class="sex">
        <label>Sex:</label>
        <input type="checkbox" id="checkbox" value="male" required>
        <label>Male</label>
        <input type="checkbox" id="checkbox" value="female" required>
        <label>Female</label>
      </div>

      <label>Role:</label>
      <select v-model="role">
        <option value="主治醫師">主治醫師</option>
        <option value="住院醫師">住院醫師</option>
        <option value="實習醫師">實習醫師</option>
      </select>

      <label>Skills</label>
      <input type='text' v-model='tempSkill' @keyup.alt="addSkill">
      <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteSkill(skill)">{{ skill }}</span>
      </div>

      <div class="submit">
        <button>submit</button>
      </div>
    </form>
  </div>

<!-- <p>Country: {{ country }}</p> -->
<p> Role:  {{ role }}  </p>
  
</template>

<script>
export default {
  data() {
    return {
      country:'',
      data:[],
      role: '',
      tempSkill: '',
      skills: []
    }
  },
  methods: {
    addSkill(e) {
      if (e.key === ',' && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill)
        }
        this.tempSkill = ''
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item 
      })

    }
  }
}
</script>

<style scoped>
body{
  height: 100%
}
form {
  display: block;
}
/* label{
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
} */

input, select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill{
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
.submit{
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
}
</style>