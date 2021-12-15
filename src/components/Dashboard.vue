<template>
<link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet">
  <!-- The sidebar -->
  <div class="nav">
    <h1><i class="fas fa-hospital-alt">WanFang</i></h1>
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>

  </div>
  <div class="sidebar">
    <a class="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>

  <!-- Page content -->
  <div class="content">
    ..
  </div>
  
</template>



<style scoped>


/* The navigation menu */
.nav{
  width: 100%;
  height: 100px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  background-color: white;
  color: black;
  font-size: 20px;
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
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 250px;
  padding: 1px 10px;
  height: 1000px;
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