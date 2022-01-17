<template>
  <!-- Page content -->
  <div class="content">
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
    <div class="note">
    </div>
  </div>
</template>