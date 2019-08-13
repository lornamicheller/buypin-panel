<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logo prueba.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li class="nav-item">
                        <router-link class="nav-link active" to="/adminStores"><i class="fas fa-home icon3"></i>Tiendas</router-link>
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
                            <router-link class="nav-link" to="/adminReports" style="color: #FD5440 !important"><i class="fas fa-list icon3"></i>Reportes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                        </li>
                    </ul>
            </div>
        </nav>

        <h1 style="font-family: 'Montserrat', sans-serif; font-size: 25px; font-weight: 500; margin-left: 100px; margin-top: 50px;">Reportes</h1>

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12" style="margin: 10px;">
                    <div class="card">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h5 class="card-title">Total Sales</h5>
                            <p class="card-text">$50,000</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12" style="margin: 10px;">
                    <div class="card">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h5 class="card-title">Total Today</h5>
                            <p class="card-text">$2,500</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12" style="margin: 10px;">
                    <div class="card">
                        <!-- <img src="..." class="card-img-top" alt="..."> -->
                        <div class="card-body">
                            <h5 class="card-title">Total Sale Month</h5>
                            <p class="card-text">$18,500</p>
                        </div>
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
        font-size: 13px;
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
    
    .card-title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        text-align: center;
        color: white;
    }

     .card-text {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        color: white;
    }
    
    .card {
        background: #FD5440 !important;
        border: 0;
        box-shadow: 0 8px 6px -6px black;
    }
</style>