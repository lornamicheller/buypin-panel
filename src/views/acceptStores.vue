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
                        <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-14" style="padding: 0; background: white; ">
                    <div class="card" style=" border-top-left-radius: 0; border-top-right-radius: 0; border: 0;">
                        <img src="../assets/stores.jpg" class="card-img-top" style="border-top-left-radius: 0; border-top-right-radius: 0; width: 600px; margin-top: 70px;">
                        <div class="card-body">
                          <h3 class="store-name"><span style="font-weight: 700;">Nombre de tienda: </span>El Colmado Don Vicente</h3>
                          <h3 class="store-name"><span style="font-weight: 700;">Correo electrónico de tienda: </span>elcolmado@test.com</h3>
                          <h3 class="store-name"><span style="font-weight: 700;">Teléfono de tienda: </span>787-763-0303</h3>
                          <h3 class="store-name"><span style="font-weight: 700;">Categoría: </span>Alcohol</h3>


                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th class="table-title" scope="col">Días Disponibles</th>
                                        <th class="table-title" scope="col">Horario de Apertura:</th>
                                        <th class="table-title" scope="col">Horario de Clausura:</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="table-content">Domingo</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>
                                   <tr>
                                        <td class="table-content">Lunes</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>
                                   <tr>
                                        <td class="table-content">Martes</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>
                                    <tr>
                                        <td class="table-content">Miércoles</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>
                                    <tr>
                                        <td class="table-content">Jueves</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>
                                    <tr>
                                        <td class="table-content">Viernes</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>
                                    <tr>
                                        <td class="table-content">Sábado</td>
                                        <td class="table-content">12:00AM</td>
                                        <td class="table-content">12:00PM</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
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
    
    .card-title {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
    }

    .table-title {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 13px;
    }
     .table-content {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 13px;
    }

    .store-name {
      font-family: 'Montserrat', sans-serif;
      text-align: center;
      font-size: 15px;
      font-weight: 300;
    }
</style>