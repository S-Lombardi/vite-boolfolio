<script>
export default {
    data(){
        return{
            menuItem: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Portfolio',
                    routeName: 'portfolio'
                },
                {
                    label: 'Contact',
                    routeName: 'contact'
                },
            ]

        }
    },
    
}
</script>


<template lang="">
    <div class="container-fluid bg-dark">
        <div class="row justify-content-">
            <!-- COL-LEFT -->
            <div class="col">
                
                <strong class="text-light text-uppercase">
                    Boolfolio
                </strong>
                
            </div>
            
            <!-- COL-RIGHT - LINK PAGINE -->
            <div class="col">
                <ul class="list-unstyled text-light">
                    <!--  -->
                    <li v-for="(item,index) in menuItem" :key='index'>
                        <router-link class="nav-link" :to="{name: item.routeName}">
                            {{item.label}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
</template>


<style lang="scss">



    
</style>