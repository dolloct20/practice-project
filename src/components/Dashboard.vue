<template>
  <!-- The sidebar -->
  <div class="nav">
    <div class='nav-icon'>
      <i class="fas fa-hospital-alt"></i>
      <div>WanFang</div>
    </div>
    <div class="nav-user">
      <input type="text" placeholder="Search..">
      <button><i class="fas fa-bell"></i></button>
      <button><i class="fas fa-user-circle"></i></button>
      <span class="nav-text">Hi, yuting!!</span>
    </div>
  </div>
  <div class="sidebar">
    <div>
      <a class='active' href="#home">
        <span class="icon">
          <i class="fas fa-home"></i>
        </span>
        Home
      </a>
    </div>
    <div>
      <a href="#news">
        <span class='icon'>
          <i class="fas fa-fw fa-clipboard-list"></i>
        </span>
        Dashboard
      </a>
    </div>
    <div>
      <a href="#contact">
        <span class='icon'>
        <i class="fas fa-fw fa-procedures"></i>
        </span>
        Data
      </a>
    </div>
    <div>
      <a href="#about">
        <span class='icon'>
        <i class="fas fa-fw fa-file-medical-alt"></i>
        </span>
        About
      </a>
    </div>
  </div>

  <!-- Page content -->
  <div class="content">
    <div class="table">
      <h2>Table</h2>
        <div>
        </div>
        <table>
            <tr v-for='data in datas' :key='data.id'>
              <th> {{ data.bedno }}</th>
              <th> {{ data.name }}</th>
              <th>{{ data.age }}</th>
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
    fetch('./PatientList.json')
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

<style>
/* The navigation menu */

.nav{
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #586180;
  font-size: 20px;
}
.nav-text{
  display: flex;
  white-space:nowrap;
  align-items: center;
  margin-left: 20px;
}

/* navigation icon */
.nav-icon {
  /* background-color: #E2AC29; */
  font-size: 25px;
  margin: 30px;
}
.nav button {
  background-color: #D34C7B;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  font-size: 20px;
  border-radius: 20px;
}
.nav-user {
  background-color: gainsboro;
  display: inline-flex;
  padding: 10px;
}
.nav-user input {
  display: block;
  padding: 10px;
  margin: 5px;
  border: none;
  font-size: 15px;
  border-radius: 20px;
}

/* The side navigation menu */
.sidebar {
  margin-top: 100px;
  padding: 0;
  width: 250px;
  background-color: #ddd;
  position: fixed;
  height: 100%;
  overflow: auto;
  font-size: 20px;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: #586180;
  padding: 20px;
  margin: 0px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #586180;
  color: white;
  font-weight: bolder;
}

/* Links on mouse-over */
.sidebar a:hover {
  background-color: #586180;
  color: white;
  opacity: 0.6;
  font-weight: bolder;
}

.icon {
  margin-right: px;
  font-size: 20px;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  top: 100px;
  left: 250px;
  right: 0px;
  bottom: 0px;
  margin: 15px 15px;
  padding: 1px 10px;
  
  overflow: hidden;
  position: fixed;
}

/* Table */
table {
  margin-top: 20px;
  border-collapse: collapse;
  border: 1px solid #586180;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 15px;
}

tr:nth-child(even) {
  background-color: #ddd;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
/* @media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
/* @media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
} */ 
</style>