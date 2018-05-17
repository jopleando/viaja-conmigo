<template>

  
    <div class="row">
        <nav class="navbar">
            <ul class="nav nav-pills nav-stacked">
              <router-link :to="{name :'panelLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fas fa-user fa-fw"></i>Panel de usuario</a></router-link>
              <router-link :to="{name :'tripsLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fas fa-suitcase fa-fw"></i>Viajes publicados</a></router-link>
              <router-link :to="{name :'messagesLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="far fa-envelope fa-fw"></i>Mensajes</a></router-link>
              <router-link :to="{name :'profilesLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fas fa-users fa-fw"></i>Perfiles de usuarios</a></router-link>
              <router-link :to="{name :'settingsLink'}" tag="li" class="nav-item"><a class="nav-link" href=""><i class="fa fa-cogs fa-fw"></i>Ajustes</a></router-link>
            </ul>
        </nav>
            <router-view></router-view>
    </div>


    


  
</template>

<style>
@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css);

body{
  margin-top:20px;
}
.fa-fw {
  width: 2em;
}
  
</style>

