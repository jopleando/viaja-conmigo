<template>
    
    <div class="row text-center" id="login">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <div class="account-wall">
                <form class="form-signin" @submit="createUser">
                    <span id="reauth-email" class="reauth-email"></span>
                    <h2>Create una cuenta </h2>
                   <!-- <input type="name"  class="form-control" placeholder="Nombre" required autofocus v-model="name">
                    <input type="lastName"  class="form-control" placeholder="Apellidos" required autofocus v-model="lastName">
                    <input type="gender"  class="form-control" placeholder="Genero" required autofocus v-model="gender">
                     <input type="date"  class="form-control" placeholder="Fecha de nacimiento" required autofocus v-model="date">
                     <input type="description"  class="form-control" placeholder="Pequeña descripción sobre ti" required v-model="description">-->
                    <input type="email" id="inputEmail" class="form-control" placeholder="Email" required autofocus v-model="email">
                    <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required v-model="password">
                    
                    <button class="btn btn-lg btn-1 btn-block" type="submit">Registrate</button>
                     <router-link :to="{'name':'loginLink'}"><a class="nav-link"> Vuelve atrás </a></router-link>
                    <span v-if="errorMsg !== ''" class="login-error-msg">{{ errorMsg }}</span>
                    <span v-if="successMsg !== ''" class="login-success-msg">{{ successMsg }}</span>
                </form><!-- /form -->
            </div><!-- /card-container -->
        </div>
    </div>
</template>

<script>
import {auth} from '../firebase'
import {db} from '../firebase'
let registerRef= db.ref('register')

export default {

    firebase:{
        register:registerRef,
    },
    data(){
        return{
            
           /* name:"",
            lastName:"",
            gender:"",
            date:"",
            description:"",*/
            email: "",
            password: "",
            successMsg: "",
            errorMsg: "",
        }
    },
    methods:{
        createUser(){
            auth.createUserWithEmailAndPassword(this.email,this.password).then((user)=>{

                this.successMsg = "New user created successfully!";
                this.errorMsg = "";

                setTimeout(function(){this.$router.replace({name:'panelLink'})}.bind(this),5000);


            })
            .catch((err)=>{
                this.errorMsg = err.message;
            })
        

    }
    /*addUser(){
        this.sending=true
            registerRef.push(this.name, this.lastname,this.gender,this.date, this.description).then(()=>{
                this.sending=false
         

            })
            this.$router.push({name: 'panelLink', params:{ newPartner: this.newPartner}})
            }*/
        }
    }


</script>


<style scoped>
h2{
    color:black;
    font-family: 'Shadows Into Light', cursive;
}

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
