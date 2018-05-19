<template>

  
    <div class="row" id="menu">
      <div class="">
        <nav class="navbar-3 col-12">
            <ul class="nav nav-pills nav-stacked">
              <router-link :to="{name :'panelLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fas fa-user fa-fw"></i>Panel de usuario</a></router-link>
              <router-link :to="{name :'tripsLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fas fa-suitcase fa-fw"></i>Viajes publicados</a></router-link>
              <router-link :to="{name :'messagesLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="far fa-envelope fa-fw"></i>Mensajes</a></router-link>
              <router-link :to="{name :'profilesLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fas fa-users fa-fw"></i>Perfiles de usuarios</a></router-link>
              <router-link :to="{name :'settingsLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fa fa-cogs fa-fw"></i>Ajustes</a></router-link>
            </ul>
        </nav>
        </div>
    <div class="col-12">
       <router-view></router-view>

    </div>
     
    </div>
    



    


  
</template>

<style>
@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);

#menu{
  background-color: #ffffff8f !important;
  border-bottom: 1px solid #e4e4e4;
  box-shadow: inset 0 -1px 0 0 #ffffff0d, 0 1px 6px rgba(0,0,0,.1);
  height: 46px;
}

.nav-pills{
  position: relative;
    left: 196px;
}


.fa-fw {
  width: 2em;
}
  
</style>

