<script>  
  import axios from 'axios';

  export default{
    name: 'AppMain',
    data(){
      return{
        //Recupero localost della pagina Portoflio creata con Laravel
        baseUrl: 'http://localhost:8000',
        works: [],
        loading: true,

        

      }
    },
    created(){
      this.getWorks();
    },
    methods:{
      getWorks(){
        this.loading = true;
        axios.get(`${this.baseUrl}/api/works`).then((response) => {

          console.log(response);
        if(response.data.success){
          this.works = response.data.results;
          this.loading = false;
        }
        else{

        }

        })
      }
    },
  }
</script>

<template>
  <div>
    <div class="container">
    
      <div class="row">
        <div class="col-12" v-for="project in works" :key="project">

          <div class="card">
            {{project.title}}
            
          </div>

        </div>
      </div>
    </div>

  </div>
  
</template>

<style scoped>

</style>
