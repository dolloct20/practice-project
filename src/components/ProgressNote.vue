<template>
  <!-- The navbar -->
  <div class="nav">
    <div class='nav-icon'>
      <button>
        <i class="fas fa-hospital-alt"></i>
        <div>WanFang</div>
      </button>
    </div>
    <div class="nav-user">
      <input type="text" placeholder="Search..">
      <button><i class="fas fa-bell"></i></button>
      <button><i class="fas fa-user-circle"></i></button>
      <span class="nav-text">Hi, yuting!!</span>
    </div>
  </div>
  <!-- The sidebar -->
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
      <a href="/Dashboard">
        <span class='icon'>
          <i class="fas fa-fw fa-clipboard-list"></i>
        </span>
        Dashboard
      </a>
    </div>
    <div>
      <a href="/Notes">
        <span class='icon'>
        <i class="fas fa-fw fa-procedures"></i>
        </span>
        Notes
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
    <div class="basic-info">
      This is progress note
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
      <div>
      </div>
    </div>
  </div>
  
</template>