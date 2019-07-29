<template>
    <div style="background: #1e1e1e;">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logo prueba.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/Products"><i class="fas fa-wine-bottle icon3"></i>Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/subCategory"><i class="icon3 fas fa-align-left"></i>Sub- Categorías</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/storeOrders"><i class="fas fa-align-left icon3"></i>Órdenes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/storeProfile" style="color: #FD5440 !important"><i class="fas fa-map-marker-alt icon3"></i>Perfil de Tienda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8" style="border-left: 1px solid grey; border-right: 1px solid grey; background: white; height: 100vh; overflow: scroll; padding-bottom: 30px;">
                    <div class="container" style="margin-top: 100px;">
                        <!-- <img src="../assets/buypin-logo.png" class="logo"> -->
                        <h1 class="store-title">Editar Información de tienda</h1>
                    </div>
                    <form>
                        <div class="form-group">
                            <label class="form-title" for="exampleInputEmail1">Correo Electrónico</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-title" for="exampleInputPassword1">Nombre de tienda:</label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-title" for="exampleInputPassword1">Teléfono:</label>
                            <input type="number" class="form-control" min="10">
                        </div>
                        <div class="form-group">
                            <label class="form-title" for="exampleInputPassword1">Categoría:</label>
                            <select class="form-control">
                                <option class="title-category"> </option>
                                <option class="title-category">Auto Parts</option>
                                <option class="title-category">Bebidas Alcohólicas</option>
                                <option class="title-category">Clothing</option>
                                <option class="title-category">Convinience Store</option>
                                <option class="title-category">Farmacia</option>
                                <option class="title-category">Ferretería</option>
                                <option class="title-category">Foodtruck</option>
                                <option class="title-category">Panadería</option>
                                <option class="title-category">Restaurantes</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <div class="row justify-content-center">
                                <div clas="col-4" style="margin: 10px; margin-top: 0;">
                                    <h1 class="title-schedule">Días</h1>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn delete-active">Domingo</button>
                                    </div>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn">Lunes</button>
                                    </div>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn">Martes</button>
                                    </div>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn">Miércoles</button>
                                    </div>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn">Jueves</button>
                                    </div>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn">Viernes</button>
                                    </div>
                                    <div class="day-container">
                                        <button type="button" class="btn btn-primary delete-btn">Sábado</button>
                                    </div>

                                </div>
                                <div clas="col-4" style="margin: 10px; margin-top: 0;">
                                    <h1 class="title-schedule">Apertura</h1>

                                    <!-- Sunday Input -->
                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                    <!-- Monday Input -->
                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                    <!--Tuesday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                    <!-- Wednesday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                    <!-- Thursday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                    <!-- Friday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                    <!-- Saturday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00AM</option>
                                        <option class="title-category">12:30AM</option>
                                        <option class="title-category">1:00AM</option>
                                        <option class="title-category">1:30AM</option>
                                        <option class="title-category">2:00AM</option>
                                        <option class="title-category">2:30AM</option>
                                        <option class="title-category">3:00AM</option>
                                        <option class="title-category">3:30AM</option>
                                        <option class="title-category">4:00AM</option>
                                        <option class="title-category">4:30AM</option>
                                        <option class="title-category">5:00AM</option>
                                        <option class="title-category">5:30AM</option>
                                        <option class="title-category">6:00AM</option>
                                        <option class="title-category">6:30AM</option>
                                        <option class="title-category">7:00AM</option>
                                        <option class="title-category">7:30AM</option>
                                        <option class="title-category">8:00AM</option>
                                        <option class="title-category">8:30AM</option>
                                        <option class="title-category">9:00AM</option>
                                        <option class="title-category">9:30AM</option>
                                        <option class="title-category">10:00AM</option>
                                        <option class="title-category">10:30AM</option>
                                        <option class="title-category">11:00AM</option>
                                        <option class="title-category">11:30AM</option>
                                    </select>

                                </div>
                                <div clas="col-4" style="margin: 10px; margin-top: 0;">
                                    <h1 class="title-schedule">Clausura</h1>

                                    <!-- Sunday Input -->
                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                    <!-- Monday Input -->
                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                    <!--Tuesday Input -->
                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                    <!-- Wednesday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                    <!-- Thursday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                    <!-- Friday Input -->

                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                    <!-- Saturday Input -->
                                    <select class="form-control start-schedule">
                                        <option class="title-category">12:00PM</option>
                                        <option class="title-category">12:30PM</option>
                                        <option class="title-category">1:00PM</option>
                                        <option class="title-category">1:30PM</option>
                                        <option class="title-category">2:00PM</option>
                                        <option class="title-category">2:30PM</option>
                                        <option class="title-category">3:00PM</option>
                                        <option class="title-category">3:30PM</option>
                                        <option class="title-category">4:00PM</option>
                                        <option class="title-category">4:30PM</option>
                                        <option class="title-category">5:00PM</option>
                                        <option class="title-category">5:30PM</option>
                                        <option class="title-category">6:00PM</option>
                                        <option class="title-category">6:30PM</option>
                                        <option class="title-category">7:00PM</option>
                                        <option class="title-category">7:30PM</option>
                                        <option class="title-category">8:00PM</option>
                                        <option class="title-category">8:30PM</option>
                                        <option class="title-category">9:00PM</option>
                                        <option class="title-category">9:30PM</option>
                                        <option class="title-category">10:00PM</option>
                                        <option class="title-category">10:30PM</option>
                                        <option class="title-category">11:00PM</option>
                                        <option class="title-category">11:30PM</option>
                                    </select>

                                </div>
                            </div>
                        </div>

                        <div class="input-group mb-3" style="margin-top: 20px;">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile02">
                                <label class="custom-file-label" for="inputGroupFile02" style="font-family: 'Montserrat', sans-serif; font-size: 13px;">Foto de tienda</label>
                            </div>
                            <!-- <div class="input-group-append">
                              <button class="btn btn-outline-secondary" type="button" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 33px; background: #FD5440; color: white; border: 0;">Subir</button>
                          </div> -->
                        </div>
                        <div class="button-position">
                            <button type="submit" data-toggle="modal" data-target="#exampleModalCenter" class="btn submit-btn">Editar</button>
                        </div>
                    </form>
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

    .store-title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: center;
        margin-top: 100px;
        margin-bottom: 50px;
        font-size: 20px;
    }
    
    .form-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
    }
    
    .form-control {
        border-radius: 0;
        border-left: none;
        border-top: none;
        border-right: none;
        -webkit-appearance: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
    }
    
    .submit-btn {
        background-color: #FD5440;
        border: none;
        padding: 8px;
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 15px;
        letter-spacing: 1px;
        width: 200px;
        -webkit-box-shadow: 0 8px 6px -6px black;
        -moz-box-shadow: 0 8px 6px -6px black;
        box-shadow: 0 8px 6px -6px black;
        margin: 5px;
    }
    
    .button-position {
        width: 200px;
        margin: auto;
    }
    
    .title-schedule {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: center;
        font-size: 20px;
    }
    
    .day-container {
        margin-bottom: 10px;
        text-align: center;
    }
    
    .delete-btn {
        width: 100px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 13px;
        background: transparent;
        border-radius: none;
        color: grey;
        border-color: #FFC93A;
    }

    .delete-btn:hover {
        width: 100px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 13px;
        background: #FFC93A;
        color: white;
        border-color: #FFC93A;
    }

    .delete-active {
        background: #FFC93A;
        color: white;
    }
    
    .start-schedule {
        margin-bottom: 10px;
        border: 1px solid rgb(199, 199, 199);
        border-radius: 5px;
        margin-top: 3px;
        padding-left: 17px;
    }

</style>