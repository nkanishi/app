Vue.component('banner-member', {
   template: `<div class="banner">
    <img class = "top2" src="images/top.jpg">
     
   </div>`
 });
 
 Vue.component('banner-new', {
   template: `<div class="banner">
   <img class = "top2" src="images/uni7.png">
    
   </div>`
 });
 
 Vue.component('banner-env', {
   template: `<div class="banner">
   <img class = "top2" src="images/ayu.jpg">
     
   </div>`
 });
 Vue.component('banner-new2', {
   template: `<div class="banner">
   <img class = "top2" src="images/ikura7.png">
     
   </div>`
 });
 Vue.component('banner-new3', {
   template: `<div class="banner">
   <img class = "top2" src="images/fish7.png">
     
   </div>`
 });
 Vue.component('banner-new4', {
   template: `<div class="banner">
   <img class = "top2" src="images/matu7.png">
     
   </div>`
 });
 


var app = new Vue({ 
     el: '#app', 
     created: function() {
      let that = this;
      this.interval = setInterval(function(){
        that.current = (that.current + 1) % that.components.length;
      }, 2000);
    },
    beforeDestroy: function() {
      clearInterval(this.interval);
    },
    computed: {
      currentBanner: function() {
        return 'banner-' + this.components[this.current];
      }
    },
     data: { 
        ActiveBtn: false ,
        current: 0,
    components: [ 'member', 'new', 'env', 'new2', 'new3', 'new4']
      } 
   }) 
  