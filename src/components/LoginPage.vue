<template>
  <form @submit.prevent='handleLogin'>
      <h1>Login</h1>
      <label> Username: </label>
      <input type='username' required v-model='user.username'>
      
      <label> Password: </label>
      <input type='password' required v-model='user.password'>
      
      <div v-if='passwordError' class='error'> {{ passwordError }} </div>
      <div class='submit'>
          <button @click="userLogin">LOGIN</button>
      </div>
  </form>
  <p>Username: {{ user.username }}</p>
  <p>Password: {{ user.password }}</p>

</template>

<script>
export default {
    data(){
        return{
          user: {
            id: '',
            username: '',
            password: ''
          },
          passwordError: ''
        }
    },
    
    methods:{
        handleLogin() {
            // validate password
          this.user.passwordError = this.user.password.length > 5 ? '' : 'Password must be at least 6 chars long'
        },
        userLogin() {
          this.$store.commit(
            'setUserData', { userData: this.user }
            );
          this.$router.push('/');
        }
    }
}
</script>

<style>
    h1{
        color: #777;
        text-align: center;
    }
    form {
        width: 420px;
        margin: 20px auto;
        background: white;
        text-align: left;
        padding: 30px;
        border-radius: 10px;
    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1.2px;
        font-weight: bold;
    }
    input {
        display: block;
        padding: 15px 3px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1.5px solid #ddd;
        color: ＃555;
    }
    button {
        background: #4c5870;
        border: 0;
        padding: 10px 50px;
        margin-top: 30px;
        color: white;
        border-radius: 20px;
        opacity: 0.8;
    }
    button:hover {
        opacity: 1;
        cursor: pointer;
    }
    .submit {
        text-align: center;
    }
</style>