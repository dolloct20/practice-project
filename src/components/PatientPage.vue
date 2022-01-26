<template>
  <!-- Page content -->
  <div class="wrapper">
    <div class="basic_profile">
      <table>
        <thead>
          <tr>
              <th colspan="5">Basic Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>病歷號</td>
            <td>床號</td>
            <td>姓名</td>
            <td>生日</td>
            <td>病房</td>
          </tr>
          <tr v-for='data in datas' :key='data.id'>
            <td> {{ data.chr_no }}</td>
            <td> {{ data.bed_no }}</td>
            <td> {{ data.name }}</td>
            <td>{{ data.birthdate}}</td>
            <td>{{ data.ward }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="lab">
      <table>
        <thead>
          <tr>
              <th colspan="5">Lab</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>病歷號</td>
            <td>床號</td>
            <td>姓名</td>
            <td>生日</td>
            <td>病房</td>
          </tr>
          <tr v-for='data in datas' :key='data.id'>
            <td> {{ data.chr_no }}</td>
            <td> {{ data.bed_no }}</td>
            <td> {{ data.name }}</td>
            <td>{{ data.birthdate}}</td>
            <td>{{ data.ward }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="note">
      <p>here is 3</p>
    </div>
  </div>
</template>


<style scoped>

.wrapper {
 
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(300px, auto);
  background-color: mintcream;
}

.basic_profile{
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  background-color: rebeccapurple;
} 

.lab{
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  background-color: gold;
} 

.note{
  grid-column-start: 3;
  grid-row-start: 2;
  background-color: peachpuff;
} 

</style>