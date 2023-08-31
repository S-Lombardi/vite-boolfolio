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
  
  <div class="container">

    <div class="row">
      <AppLoader v-if="loading"></AppLoader>
        <div class="col-12 col-md-6 col-lg-4 d-flex flex-wrap" v-for="project in works" :key="project" v-else>

          <div class="card mt-5 d-flex flex-column justify-content-between">

            <!-- IMMAGINE -->
            <div class="card-img-top">
              <img class="img-fluid" :src="`${baseUrl}/storage/${project.image}`" :alt="project.title">
            </div>
            <!-- TITOLO -->
            <div>
              <h5 class="card-title text-uppercase"> 
                {{project.title}}
              </h5>
            </div>
            

          </div>

        </div>
    </div>
  </div>
    
</template>

<style lang="scss">

.card{
    img{
        width: 100%;
        height: 250px;
    }
}

</style>
