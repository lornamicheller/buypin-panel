<template>
    <div style="height: 100vh;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logo prueba.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link  active" to="/adminStores"><i class="fas fa-home icon3"></i>Tiendas</router-link>
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
                        <router-link class="nav-link" to="/adminDrivers" style="color: #FD5440 !important"><i class="fas fa-users icon3"></i>Conductores</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-12 col-sm-12" style="padding: 0; background: white; ">
                    <div class="card" style=" border-top-left-radius: 0; border-top-right-radius: 0; border: 0;">
                        <img :src="driverPicture" class="card-img-top" style="border-top-left-radius: 0; border-top-right-radius: 0;">
                        <div class="card-body">
                            <h5 class="card-title">{{driverName}}</h5>
                            <p class="email-title2"><i class="fas fa-phone" style="margin-right: 5px;"></i> {{driverPhone}}</p>
                            <p class="email-title"><i class="fas fa-envelope" style="margin-right: 5px;"></i> {{driverEmail}}</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12" style="background: white; overflow: scroll;">
                    <h1 class="licence-title">Licencia de conducir</h1>
                    <div class="position-img">
                        <img :src="driverLicense" style=" width:300px; height:500px; object-fit:contain">
                    </div>
                    <h1 class="licence-title">Licencia de vehículo</h1>
                    <div class="position-img">
                        <img :src="carLicense" style=" width:300px; height:500px; object-fit:contain">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Parse from 'parse'
    export default {
        data() {
            return {
                driverInfo:null,
                driverName:null,
                driverPhone:null,
                driverPicture:null,
                driverEmail:null,
                driverLicense:null,
                carLicense:null,
                

            }
        },
        mounted: function()
        {
             if(Parse.User.current() == null)
            {
                this.$router.push('/HelloWorld');
            }
            
            this.driverInfo = this.$route.params.data;
            console.log(this.driverInfo);
                this.getDriverInfo();
                this.carInfo();
        },
        methods:
        {
            getDriverInfo()
            {
                this.driverPicture = this.driverInfo.get('driverLicensePicture').url();
                this.driverName = this.driverInfo.get('fullName');
                this.driverPhone = this.driverInfo.get('phoneNumber');
                this.driverEmail = this.driverInfo.get('username');
                this.driverLicense = this.driverInfo.get('licensePic').url();

            },
            carInfo()
            {
                 Parse.Cloud.run('getCarInfo', { //get the user store
                  userId: this.driverInfo.id
                }).then (result => {
                console.log(result);
                this.carLicense = result.get('licensePic').url();
                }, (error) => {
                console.log(error);
                });
            }
        }
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
    }
    
    .card-title,
    .card-body {
        font-family: 'Montserrat', sans-serif;
        color: rgb(146, 146, 146);
    }
    
    .email-title {
        font-size: 13px;
        color: rgb(146, 146, 146);
        border-bottom: 1px solid rgb(189, 189, 189);
        padding-bottom: 20px;
    }
    
    .email-title2 {
        font-size: 13px;
        color: rgb(146, 146, 146);
    }
    /* .position-img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    } */
    
    .licence-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        margin-top: 20px;
    }
</style>