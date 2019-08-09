<template>
    <div style="background: #272727; height: 100vh; overflow: scroll;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logo prueba.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link  active" to="/adminStores" style="color: #FD5440 !important"><i class="fas fa-home icon3"></i>Tiendas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/calendar"><i class="icon3 fas fa-align-left"></i>Categorías</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/PatientsInfo"><i class="fas fa-align-left icon3"></i>Órdenes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/Waitlist"><i class="fas fa-map-marker-alt icon3"></i>Zipcodes / Áreas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/adminDrivers"><i class="fas fa-users icon3"></i>Conductores</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/deliverySchedule"><i class="fas fa-align-left icon3"></i>Schedule Fee</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container" style="margin-top: 100px; background: white; border: 1px solid rgb(192, 192, 192);">
            <ul class="nav nav-pills nav-fill nav-position">
                <li class="nav-item second-nav">
                    <router-link class="nav-link3" to="/adminStores">Tiendas</router-link>
                </li>
                <li class="nav-item third-nav">
                   <button @click="request" class="nav-link2">Solicitud</button>
                </li>
            </ul>

            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <!-- <th class="header" scope="col">#</th> -->
                        <th class="header" scope="col">Nombre de tienda</th>
                         <th class="header" scope="col">Status</th>
                        <th class="header" scope="col">Actions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="store in allStore" :key="store">
                        <!-- <th class="header" scope="row">{{increment()}}</th> -->
                        <td class="content">{{store.get('Name')}}</td>
                        <td v-if="store.get('activate') != null" class="content">{{store.get('activate')}}</td>
                         <td v-if="store.get('activate') == null" class="content">false</td>
                        <td class="content">
                            <button @click="viewInfo(store)" type="button" class="see-btn">Ver</button>
                            <button v-if="store.get('activate') == true" @click="turnOff(store)"  type="button" class="delete-btn">Desactivar</button>
                            <button v-if="store.get('activate') != true" @click="turnOn(store)" type="button" class="delete-btn">Activar</button>
                        </td>
                    </tr>
                    <!-- <tr>
                        <th class="header" scope="row">2</th>
                        <td class="content">Rock N Go</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">3</th>
                        <td class="content">Hamburger Foodtruck</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">4</th>
                        <td class="content">Pizza City Truck</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">5</th>
                        <td class="content">Colmado San Vicente</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">6</th>
                        <td class="content">El Mercado</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">7</th>
                        <td class="content">Souptruck</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">8</th>
                        <td class="content">La Playa Truck</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">9</th>
                        <td class="content">Panadería Don Juan</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr>
                    <tr>
                        <th class="header" scope="row">10</th>
                        <td class="content">Pasta Restaurant</td>
                        <td class="content">
                            <router-link to="/acceptStores"><button type="button" class="see-btn">Ver</button></router-link>
                            <button type="button" class="delete-btn">Desactivar</button>

                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>
import Parse from 'parse';
    export default {
        data() {
            return {
                allStore:null,
                counter: null,
                newvalue:null,
                finish:null

            }
        },mounted: function() {
    //   console.log(this.user);
     if(Parse.User.current() == null)
            {
                this.$router.push('/HelloWorld');
            }
    this.counter =0;
    this.newvalue =0;
    this.finish =0;
      this.gettingStores();
      // this.createProducts();
    },
    methods:
    {
        gettingStores()
        {
            Parse.Cloud.run('getAllStore', { //get the user store
             }).then (result => {
            // console.log(result);
            this.allStore = result;
            console.log(this.allStore);
            }, (error) => {
             console.log(error);
             });
        },

        increment()
        {

            
            this.newvalue = this.counter++;
            console.log("counter", this.newvalue);
            this.finish = this.newvalue;


            return this.finish;
        },

        viewInfo(data)
        {
            console.log(data);
            this.$router.push({ name: 'acceptStores', params: { data } });
            
        },

        request()
        {
            this.$router.push({name: 'acceptStore'});
        },

        turnOff(store)
        {
            console.log(store);

            store.set('activate', false);

            store.save().then(result=>
            {
                console.log("turn off");
                this.gettingStores();
            });
        },

        turnOn(store)
        {
            console.log(store);

            store.set('activate', true);

            store.save().then(result=>
            {
                console.log("turn ON");
                this.gettingStores();
            });
        }
    },
}
</script>

<style scoped>
    .navbar,
    .navbar-expand-lg,
    .navbar-light,
    .bg-light {
        background: #1e1e1e !important;
    }
    
    .nav-item {
        font-family: 'Montserrat', sans-serif;
    }
    
    .nav-link {
        color: white !important;
        font-weight: 200;
        font-size: 17px;
        /* letter-spacing: 1px; */
        margin-left: 20px;
        margin-right: 20px;
        transition: .5s;
    }
    
    .nav-link:hover {
        color: #FD5440 !important;
        font-weight: 200;
        font-size: 16px;
        /* letter-spacing: 1px; */
        margin-left: 20px;
        margin-right: 20px;
    }
    
    .logo-link {
        position: absolute;
        left: 20px;
        top: 10px;
    }
    
    .logo {
        width: 70px;
        height: 50px;
        object-fit: contain;
        margin-right: 30px;
    }
    
    .navbar-toggler {
        border: 2px solid rgb(184, 184, 184) !important;
    }
    
    .fa-bars {
        color: rgb(184, 184, 184);
        font-size: 25px;
    }
    
    .icon3 {
        color: #FFC93A;
        margin-right: 10px;
    }
    
    .nav-link2 {
        color: white !important;
        font-weight: 300;
        font-size: 14px;
        transition: .5s;
        text-decoration: none;
        border-color: rgb(44, 44, 44);
        background-color: rgb(44, 44, 44);
    }

    .nav-link3 {
        color: white !important;
        font-weight: 300;
        font-size: 14px;
        transition: .5s;
        text-decoration: none;
        border-color: #FD5440;
        background-color: #FD5440;
    }
    
    .nav-position {
        padding-top: 30px;
    }
    
    .second-nav {
        background: #FD5440;
        height: 50px;
        padding-top: 13px;
    }
    
    .third-nav {
        background: rgb(44, 44, 44);
        height: 50px;
        padding-top: 13px;
    }
    
    .second-nav:hover {
        background: rgba(253, 83, 64, 0.692);
        height: 50px;
        padding-top: 13px;
        transition: .5s;
    }
    
    .third-nav:hover {
        background: rgba(44, 44, 44, 0.692);
        height: 50px;
        padding-top: 13px;
        transition: .5s;
    }
    
    .header {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 13px;
        text-align: center
    }
    
    .content {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        text-align: center;
        padding-top: 10px;
    }
    
    .delete-btn {
        background: rgba(212, 42, 42, 0.836);
        height: 35px;
        border: none;
        color: white;
        font-weight: 400;
        width: 100px;
    }
    
    .see-btn {
        background: rgb(44, 44, 44);
        height: 35px;
        border: none;
        color: white;
        font-weight: 400;
        width: 100px;
    }
</style>