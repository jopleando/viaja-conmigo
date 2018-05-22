<template>

    <div class="row text-center" id="login">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <div class="account-wall">
                <a href="/" class="title navbar-brand"><img src="src/assets/logo1.png" class="img-fluid" alt="Responsive image" height="50px" width="50px"></a>
                <form class="form-signin" @submit="login">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model="email">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
                <button class="btn btn-lg btn-1 btn-block" type="submit">
                    Conectate</button>
                <router-link :to="{'name':'ressetLink'}"><a class="nav-link">¿Olvidaste la contraseña?</a></router-link>
                <router-link :to="{'name':'registerLink'}"><a class="nav-link">¿No tienes una cuenta?</a></router-link>
                <span v-if="errorMsg !== ''" class="login-error-msg">{{ errorMsg }}</span>
                </form>
            </div>
        </div>
    </div>
  


</template>

<script>
import {auth} from '../firebase'
import {db} from '../firebase'
let userRef=db.ref('user')

export default {

    data(){
        return{
            email: "",
            password:"",
            errorMsg: "",
           
        }
    },
    methods:{
        login(){
            auth.signInWithEmailAndPassword(this.email,this.password)
            .then((user)=>{
                this.$router.replace({name: 'homeLink'});
            })
            .catch((error)=>{
                this.errorMsg = err.message;
            })
        }
    }/*,
    ready: function () {

        // Auth
        auth.onAuthStateChanged(function (user) {
            if (user) {
                console.info('Conectado: ', user);
                vm.autentificado = true;
                vm.usuarioActivo = user;
            } else {
                console.warn('No conectado');
                vm.autentificado = false;
                vm.usuarioActivo = null;
            }
        });
    },*/

}
</script>	

<style>
.form-signin
{
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
}
.form-signin .form-signin-heading, .form-signin .checkbox
{
    margin-bottom: 10px;
}
.form-signin .checkbox
{
    font-weight: normal;
}
.form-signin .form-control
{
    position: relative;
    font-size: 16px;
    height: auto;
    padding: 10px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-signin .form-control:focus
{
    z-index: 2;
}
.form-signin input[type="text"]
{
    margin-bottom: -1px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}
.form-signin input[type="password"]
{
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.account-wall
{
    margin-top: 20px;
    padding: 40px 0px 20px 0px;
    background-color: #f7f7f79e;;
    -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.18);
    position: relative;
    left: 459px;
    top: 61px;
}


.login-title
{
    color: #555;
    font-size: 18px;
    font-weight: 400;
    display: block;
}
.profile-img
{
    width: 96px;
    height: 96px;
    margin: 0 auto 10px;
    display: block;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
}
.need-help
{
    margin-top: 10px;
}
.new-account
{
    display: block;
    margin-top: 10px;
}


</style>