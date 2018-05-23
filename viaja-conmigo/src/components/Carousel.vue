<template>
  <div id="vueJustSlider" class="col-md-12 col-12">
    <div class=" title-2 col-md-12 text-center">
        <h1 class="text-center ">Experiencias de otros viajeros </h1>
        <h2 class="text-center mb-5 ">Inspirate </h2>
        
      </div>
      <div class="no-mode-translate-demo-wrapper">
        <transition name="no-mode-translate-fade">
            <div v-for="(item, i) in source" @click="play" v-if="current == i" v-bind:key="i"  :class="to">
              <img :src="item.src" :alt="item.title" class="images-3">
            </div>
        </transition>
        <button type="button" class="next btn btn-1 mt-4" @click="next">
          >>>
        </button>
      </div>
  </div>
</template>

<script>
let timer
export default {
  name: 'just-slider',
  props: {
    source: {
      type: Array,
      default: function(){
        return [{
          src : 'src/assets/home.jpg',
          title: 'first'
        },{
          src: 'src/assets/home-1.jpg',
          title: 'second'
        },{
          src : 'src/assets/home-4.jpg',
          title: 'third'
        },{
          src : 'src/assets/home-5.jpg',
          title: 'four'
        },{
          src: 'src/assets/home-3.jpg',
          title: 'five'
        }]
      }
    },
    delay: {
      type: Number,
      default: 6e3
    },
  },
  data() {
    return {
      current: 0,
      to: 'right'
    }
  },
  mounted(){
    this.preload( () => this.play() )
  },
  methods: {
    previous(){
      this.pause()
      if (this.current == 0) {
        this.current = this.source.length - 1
      } else {
        this.current--
      }
      this.to = 'left'
      this.play()
    },
    next() {
      this.pause()
      if (this.current == this.source.length - 1) {
        this.current = 0
      } else {
        this.current++
      }
      this.to = 'right'
      this.play()
    },
    pause() {
      clearInterval(timer)
    },
    play() {
      timer = setInterval(this.next, this.delay)
    },
    preload(cb) {
      if (window.fetch) {
        this.source.forEach( item => {
          let img = new Image()
          img.src = item.src
        })
      }
      cb && cb()
    }
  }
}
</script>

<style>
.images-3{
height: 500px;
border: 1px solid;

}
#vueJustSlider {
min-height: 600px;
position: relative;
top: -63px;
.no-mode-translate-demo-wrapper {
position: relative;
display: flex;
justify-content: space-between;
.previous,
.next {
z-index: 2;

}
.previous {
align-self: flex-start;
}
.next {
align-self: flex-end;
}
}
.no-mode-translate-demo-wrapper div {
position: absolute;
width: 100%;
img {
margin: 0 auto;
display: block;
}
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
transition: all 1s;
}
.no-mode-translate-fade-enter,
.no-mode-translate-fade-leave-active {
opacity: 0;
}
.no-mode-translate-fade-enter,
.no-mode-translate-fade-enter.right,
.no-mode-translate-fade-leave-active.left {
transform: translateX(20%);
}
.no-mode-translate-fade-leave-active,
.no-mode-translate-fade-leave-active.right,
.no-mode-translate-fade-enter.left {
transform: translateX(-20%);
}
}
h2{
color:black;
font-family: 'Shadows Into Light', cursive;
}
</style>