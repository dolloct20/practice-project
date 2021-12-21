<template>
  <!-- The sidebar -->
  <div class="nav">
    <div class='nav-icon'>
      <router-link to='/'>
        <button>
          <i class="fas fa-hospital-alt"></i>
          <div>WanFang</div>
        </button>
      </router-link>
    </div>
    <div class="nav-user">
      <form class="search-bar">
        <input  v-model="search" placeholder="Search..">
        <button type='submit'><i class="fas fa-search"></i></button>
        <div v-if="isVisible" class='search-table'>
            <tr v-for="patient in searchData" :key='patient.chr_no' @click="goToPatientPage(patient)">
              <td>{{ patient.name }}</td>
              <td>{{ patient.fee_no }}</td>
              <td>{{ patient.ward }}</td>
            </tr>
          <!-- <ul>
            <li v-for="s in searchData" :key='s.chr_no' >
              {{ s.name }} // {{s.fee_no}}
            </li>
          </ul> -->
        </div>
      </form>
      <button><i class="fas fa-bell"></i></button>
      <button><i class="fas fa-user-circle"></i></button>
      <span class="nav-text">Hi, yuting!!</span>
    </div>
  </div>
  <div class="sidebar">
    <div>
      <router-link class='active' to='/dashboard'>
        <span class="icon">
          <i class="fas fa-clipboard-list"></i>
        </span>Dashboard
      </router-link>
    </div>
    <div>
    <router-link to='/note'>
        <span class='icon'>
        <i class="fas fa-procedures"></i>
        </span>Notes
    </router-link>
    </div>
  </div>

  <!-- Page content -->
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipdList: [],
      search: '',
      isVisible: false
    }
  },
  created() {
    fetch('http://10.65.1.66:3001/api/ipd.list')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.ipdList = data;
      }).catch(error => {
        console.log(error);
      })
  },
  methods:{
    goToPatientPage(patient){
      this.$router.push({path: `/note/${patient.fee_no}`})
    }
  },
  computed:{
    searchData() {
      if(this.search != '' && this.search) {
        // this.isVisible = true;
        return this.ipdList.filter(d => 
          d.fee_no.toLowerCase().includes(this.search.toLowerCase()) ||
          d.name.includes(this.search) ||
          d.ward.toLowerCase().includes(this.search.toLowerCase()))
      }else{
        return false
      }
    }
  },
  watch:{
    search: function() {
      if(this.search) {
        this.isVisible = true;
      } else{
        this.isVisible = false;
      }
    }
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
  z-index: 999;
}

/*navigation logo */
div.nav-icon button { 
  background-color: #E2AC29;
  color: black;
  padding: 10px 15px;
  font-size: 25px;
  margin: 10px;
  border-radius: 0px;
} 

.nav .nav-user button {
  background-color: #D34C7B;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  font-size: 20px;
  border-radius: 20px;
}

.nav-text{
  display: flex;
  margin-left: 12px;
}

div.nav-user {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-user .search-bar {
  display: flex; 
  padding: 10px;
  margin-top: 0px;
  z-index: 999;
}
.nav-user .search-bar button{
  background-color: #777;
  display: inline-block;
}
.nav-user input {
  background-color: gainsboro;
  display: inline-flex;
  padding: 10px;
  margin: 5px;
  border: none;
  font-size: 15px;
  border-radius: 20px;
}
.search-table{
  z-index: 999;
  background-color: aquamarine;
  width: 355px;
  height: 150px;
  position: absolute;
  display: flex;
  justify-content: center;
  overflow: auto;
  flex-wrap: wrap;
  top: 80px;
}
/* ul, li{
  color: white;
  margin: 5px;
  background-color: bisque;
  text-align: center;
} */


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
  text-align: center;
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
  opacity: 0.7;
  font-weight: bolder;
}
/* Page content. */
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
td {
  padding: 10px;
  font-size: 18px;
  border-bottom: 1px solid #586180;
}

/* .search-table tr:hover {
  background-color: #ddd;
  border-bottom: 2.5px solid #586180;
} */

</style>

// On screens that are less than 700px wide, make the sidebar into a topbar 
// @media screen and (max-width: 700px) {
//   .sidebar {
//     width: 100%;
//     height: auto;
//     position: relative;
//   }
//   .sidebar a {
//     float: left;
//   }
//   div.content {
//     margin-left: 0;
//   }
// }


// On screens that are less than 400px, display the bar vertically, instead of horizontally 
// @media screen and (max-width: 400px) {
//   .sidebar a {
//     text-align: center;
//     float: none;
//   }
// }
