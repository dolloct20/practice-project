<template>
  <!-- Page content -->
  <div class="content">
    <!-- <div class="table">
      <h2>Table</h2>
        <div>
        </div>
        <table>
           <tr>
              <th>床號</th>
              <th>姓名</th>
              <th>性別</th>
              <th>主治醫師</th>
              <th>備註</th>
            </tr>
            <tr v-for='data in datas' :key='data.id' @click="$emit('goToPatientNote', data)">
              <td> {{ data.bed_no }}</td>
              <td> {{ data.name }}</td>
              <td> {{ data.sex }}</td>
              <td> {{ data.ward }}</td>
              <td><button class="icon"><i class="far fa-edit"></i></button><button class="icon"><i class="fas fa-capsules"></i></button><button class="icon"><i class="fas fa-user-md"></i></button><button class="delete"><i class="fas fa-trash-alt"></i></button></td>
            </tr>
        </table> -->
        <div class="pagination">
          <ul>
            <li class="btn prev"><span><i class="fas fa-angle-left"></i>Prev</span></li>
            <li class="num active"><span>1</span></li>
            <li class="num"><span>2</span></li>
            <li class="dots"><span>...</span></li>
            <li class="num"><span>4</span></li>
            <li class="num"><span>5</span></li>
            <li class="dots"><span>...</span></li>
            <li class="num"><span>7</span></li>
            <li class="btn next"><span>Next<i class="fas fa-angle-right"></i></span></li>
          </ul>
        </div>
        <tfoot>
          <tr>
            <td colspan="5">
              <nav class="pagination">
                <a :click="prev()" class="button">Previous</a>
                <a :click="next()" class="button">Next page</a>
                <ul>
                  <li v-for="(p, index) in pageCount" :key="index">
                    <a v-if="pageNo == p" :click="page(p)" class="button is-primary">{{p}}</a>
                    <a v-else :click="page(p)" class="button">{{p}}</a>
                  </li>
                </ul>
              </nav>
            </td>
          </tr>
          <!-- https://www.youtube.com/watch?v=y8Y6oe5CKXs 參考 -->
          <!-- <tr>
            <td colspan="3">
              <button  v-on:click="first()" class="button">First</button>
              <button v-on:click="prev()" class="button">Prev</button>
              <span style="padding-top:1em;">{{pageNo}}/{{pageCount}}</span>
              <button v-on:click="next()" class="button">Next</button>
              <button v-on:click="last()" class="button">Last</button>
            </td>
          </tr> -->
        </tfoot>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      datas: [],
      users: [],
      pageNo: 1,
      pageSize: 10,
      pageCount: 0
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
  },
  methods:{
    page(pageNo){ 
     
     this.virtualService({
        pageNo: pageNo,
        pageSize: this.pageSize
      });
    },
    prev(){
      if(this.pageNo > 1){ 
        this.pageNo -= 1; 
        this.virtualService({
          pageNo:this.pageNo,
          pageSize:this.pageSize
        });
      }
    },
    next() {
      if(this.pageNo < this.pageCount) {
        this.pageNo += 1;
        this.virtualService({
          pageNo:this.pageNo,
          pageSize:this.pageSize
        });
      }
    }
  }
}
</script>

<style>
/* Page content */
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
div.table{
  overflow: scroll; 
  height: 1000px;
}

table {
  margin-top: 20px;
  border-collapse: collapse;
  table-layout: auto;
  overflow:scroll; 
  width: 100%;
}

th, td {
  padding: 15px;
  border-bottom: 1px solid #586180;
  
}
tr:hover{
  background-color: #ddd;
  border-bottom: 2.5px solid #586180;
}

button.icon {
  background-color: #E2AC29;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  font-size: 20px;
  border-radius: 10px;
}
button.delete {
  background-color: #fa6c61;
  color: white;
  padding: 10px 15px;
  margin: 5px;
  font-size: 20px;
  border-radius: 10px;
}

/* pagination */
div.pagination { 
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
  padding: 10px;
  background: #E7E975;
}
.pagination ul{
  display: flex;
  background: #fff;
  padding: 5px;
  border-radius: 25px;
}

.pagination ul li{
  list-style-type: none;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination ul li.num {
  border-radius: 50%;
  height: 45px;
  width: 45px;
  padding: 5px;
  margin: 0 5px;
}
.pagination ul li.dots{
  font-size: 20px;
  cursor: pointer;
}

.pagination ul li.btn{
  background: #ddd;
  padding: 5px;
}

.pagination ul li.prev{
  border-radius: 20px 0px 0px 20px;
}

.pagination ul li.next{
  border-radius: 0px 20px 20px 0px;
}

.pagination ul li.num:hover, 
.pagination ul li.active,
.pagination ul li.btn:hover{
  background: #E7E975;
  font-weight: 700;
}
</style>