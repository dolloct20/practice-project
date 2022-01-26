<template>
  <!-- Page content -->
  <div class="content">
    <div class="content-btn">
      <div>
        <button @click="editAdmissonNote">Admission Note</button>
        <button @click="editProgressNote">Progress Note</button>
        <button @click="editDischargeNote">Discharge Note</button>
      </div>
      <patient-page></patient-page>
    </div>
    <p></p>
  </div>
</template>

<script>
import PatientPage from './PatientPage.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    PatientPage
  },
  methods:{

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


/* tr:nth-child(even) {
  background-color: #ddd;
} */

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