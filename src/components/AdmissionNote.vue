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
      <div class="radio">
        <label>Sex:</label>
        <label>
          <input type="radio" id="choice1" name='sex' value="male" >
          <span>Male</span>
        </label>
        <label>
          <input type="radio" id="choice2" name='sex' value="female">
          <span>Female</span>
        </label>
      </div>
      <div class="radio">
        <label>Smoking history:</label>
        <label>
          <input type="radio" id="choice1" name='smoking' value="yes" >
          <span>Yes</span>
        </label>
        <label>
          <input type="radio" id="choice2" name='smoking' value="no">
          <span>No</span>
        </label>
      </div>
      <div class="radio">
        <label>Drinking history:</label>
        <label>
          <input type="radio" id="choice1" name='drinking' value="yes" >
          <span>Yes</span>
        </label>
        <label>
          <input type="radio" id="choice2" name='drinking' value="no">
          <span>No</span>
        </label>
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
div.radio{
  display: flex;
  align-items: center;
}
select:focus{
  outline: 0;
  border-color: #AFD0C9
}

input[type="text"]:focus{
  outline: 0;
  border-color: #AFD0C9
}

input[type="radio"] {
  position: absolute;
  display: none;
}

input[type="radio"]:checked + span {
  color: white;
  background-color: #555;
}

input[type="radio"]:checked + span:before {
  box-shadow: inset 0 0 0 2em #AFD0C9;
  
}

label span {
  display: flex;
  align-items: center;
  padding: 0.7em 2em 0.7em 0.7em; 
  border-radius: 10em;
  margin-left: 1em;
  transition: 0.25s ease;
  cursor: pointer;
  background-color: #eee;
}

label span:hover{
  background-color: #AFD0C9;
  color: white;
}

/* radio dot */
label span:before{
  display: flex;
  flex-shrink: 0;
  content: "";
  background-color: #eee;
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  margin-right: 1em;
  transition: 0.3s ease;
  box-shadow: inset 0 0 0 0.35em #ddd;
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