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
                       <button class="logout" @click="logOut()"><i class="fas fa-sign-out-alt icon3"></i>Logout</button>
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
                            <!-- <label v-if="email == '' || email == null" class="form-title" for="exampleInputEmail1">Correo Electrónico</label> -->
                            <label  class="form-title" for="exampleInputEmail1">Correo Electrónico: </label>
                            <input v-model="email" id="email" type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <!-- <label v-if="nameStore == null || nameStore == ''" class="form-title" for="exampleInputPassword1">Nombre de tienda:</label> -->
                            <label  class="form-title" for="exampleInputPassword1">Nombre de tienda:</label>
                            <input v-model="nameStore" id="name" type="text" class="form-control">
                        </div>
                        <div class="form-group">
                            <!-- <label v-if="phoneNumber == null || phoneNumber == ''" class="form-title" for="exampleInputPassword1">Teléfono:</label> -->
                            <label  class="form-title" for="exampleInputPassword1">Teléfono: </label>
                            <input v-model="phoneNumber" id="phone" type="number" class="form-control" min="10">
                        </div>
                        <div class="form-group">
                            <!-- <label v-if="category == null || category == ''" class="form-title" for="exampleInputPassword1">Categoría:</label> -->
                            <label  class="form-title" for="exampleInputPassword1">Categoría: </label>
                            <select v-model="category" id="category" class="form-control">
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
                    <button @click="switchDay('Sunday',status)" id="sun"  type="button" class="btn btn-primary delete-btn delete-active">Domingo</button>
                    <!-- <h1>{{statusSun}}</h1>  -->
                  </div>
                  <div class="day-container">
                    <button @click="switchDay('Monday',status)" id="mon"  type="button" class="btn btn-primary delete-btn">Lunes</button>
                  </div>
                  <div class="day-container">
                    <button @click="switchDay('Tuesday',status)" id="tue"  type="button" class="btn btn-primary delete-btn">Martes</button>
                  </div>
                  <div class="day-container">
                    <button @click="switchDay('Wednesday',status)" id="wed" type="button" class="btn btn-primary delete-btn">Miércoles</button>
                  </div>
                  <div class="day-container">
                    <button @click="switchDay('Thursday',status)" id="thu" type="button" class="btn btn-primary delete-btn">Jueves</button>
                  </div>
                  <div class="day-container">
                    <button @click="switchDay('Friday',status)"  id="fri" type="button" class="btn btn-primary delete-btn">Viernes</button>
                  </div>
                  <div class="day-container">
                    <button @click="switchDay('Saturday',status)" id="sat" type="button" class="btn btn-primary delete-btn">Sábado</button>
                  </div>
                </div>
                <div clas="col-4" style="margin: 10px; margin-top: 0;">
                  <h1 class="title-schedule">Apertura</h1>


                                    <!-- Sunday Input -->
                                   <select v-model="SundayAM" id="sunAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
                    <option  selected >0:00AM</option>
                    <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>

                  <!-- Monday Input -->
                  <select v-model="MondayAM" id="monAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
                    <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>

                  <!--Tuesday Input -->

                  <select v-model="TuesdayAM" id="tueAM" :disabled="true"  class="form-control start-schedule" placeholder="0:00AM">
                    <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>

                  <!-- Wednesday Input -->

                  <select v-model="WednesdayAM" id="wedAM" :disabled="true"  class="form-control start-schedule" placeholder="0:00AM">
                    <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>

                  <!-- Thursday Input -->

                  <select v-model="ThursdayAM" id="thuAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
                    <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>

                  <!-- Friday Input -->

                  <select v-model="FridayAM" id="friAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
                     <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>

                  <!-- Saturday Input -->

                  <select v-model="SaturdayAM" id="satAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
                     <option value="12:00AM" class="title-category">12:00AM</option>
                    <option value="12:30AM" class="title-category">12:30AM</option>
                    <option value="1:00AM" class="title-category">1:00AM</option>
                    <option value="1:30AM" class="title-category">1:30AM</option>
                    <option value="2:00AM" class="title-category">2:00AM</option>
                    <option value="2:30AM" class="title-category">2:30AM</option>
                    <option value="3:00AM" class="title-category">3:00AM</option>
                    <option value="3:30AM" class="title-category">3:30AM</option>
                    <option value="4:00AM" class="title-category">4:00AM</option>
                    <option value="4:30AM" class="title-category">4:30AM</option>
                    <option value="5:00AM" class="title-category">5:00AM</option>
                    <option value="5:30AM" class="title-category">5:30AM</option>
                    <option value="6:00AM" class="title-category">6:00AM</option>
                    <option value="6:30AM" class="title-category">6:30AM</option>
                    <option value="7:00AM" class="title-category">7:00AM</option>
                    <option value="7:30AM" class="title-category">7:30AM</option>
                    <option value="8:00AM" class="title-category">8:00AM</option>
                    <option value="8:30AM" class="title-category">8:30AM</option>
                    <option value="9:00AM" class="title-category">9:00AM</option>
                    <option value="9:30AM" class="title-category">9:30AM</option>
                    <option value="10:00AM" class="title-category">10:00AM</option>
                    <option value="10:30AM" class="title-category">10:30AM</option>
                    <option value="11:00AM" class="title-category">11:00AM</option>
                    <option value="11:30AM" class="title-category">11:30AM</option>
                  </select>
                </div>
                <div clas="col-4" style="margin: 10px; margin-top: 0;">
                  <h1 class="title-schedule">Clausura</h1>

                  <!-- Sunday Input -->
                  <select v-model="SundayPM" id="sunPM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
                    <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>

                  <!-- Monday Input -->
                  <select v-model="MondayPM" id="monPM" :disabled="true"  class="form-control start-schedule" placeholder="0:00PM">
                    <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>

                  <!--Tuesday Input -->
                  <select v-model="TuesdayPM" id="tuePM" :disabled="true"  class="form-control start-schedule" placeholder="0:00PM">
                   <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>

                  <!-- Wednesday Input -->

                  <select v-model="WednesdayPM" id="wedPM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
                    <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>

                  <!-- Thursday Input -->

                  <select v-model="ThursdayPM" id="thuPM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
                    <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>

                  <!-- Friday Input -->

                  <select v-model="FridayPM" id="friPM" :disabled="true"  class="form-control start-schedule" placeholder="0:00PM">
                    <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>

                  <!-- Saturday Input -->
                  <select v-model="SaturdayPM" id="satPM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
                    <option value="12:00PM" class="title-category">12:00PM</option>
                    <option value="12:30PM" class="title-category">12:30PM</option>
                    <option value="1:00PM" class="title-category">1:00PM</option>
                    <option value="1:30PM" class="title-category">1:30PM</option>
                    <option value="2:00PM" class="title-category">2:00PM</option>
                    <option value="2:30PM" class="title-category">2:30PM</option>
                    <option value="3:00PM" class="title-category">3:00PM</option>
                    <option value="3:30PM" class="title-category">3:30PM</option>
                    <option value="4:00PM" class="title-category">4:00PM</option>
                    <option value="4:30PM" class="title-category">4:30PM</option>
                    <option value="5:00PM" class="title-category">5:00PM</option>
                    <option value="5:30PM" class="title-category">5:30PM</option>
                    <option value="6:00PM" class="title-category">6:00PM</option>
                    <option value="6:30PM" class="title-category">6:30PM</option>
                    <option value="7:00PM" class="title-category">7:00PM</option>
                    <option value="7:30PM" class="title-category">7:30PM</option>
                    <option value="8:00PM" class="title-category">8:00PM</option>
                    <option value="8:30PM" class="title-category">8:30PM</option>
                    <option value="9:00PM" class="title-category">9:00PM</option>
                    <option value="9:30PM" class="title-category">9:30PM</option>
                    <option value="10:00PM" class="title-category">10:00PM</option>
                    <option value="10:30PM" class="title-category">10:30PM</option>
                    <option value="11:00PM" class="title-category">11:00PM</option>
                    <option value="11:30PM" class="title-category">11:30PM</option>
                  </select>
                </div>
              </div> 
            </div>
                         <div class="input-group mb-3" style="margin-top: 20px;">
              <div class="custom-file">
                <input @change="onFileSelected" type="file" class="custom-file-input" id="inputGroupFile02" />
                <label
                  class="custom-file-label"
                  for="inputGroupFile02"
                  style="font-family: 'Montserrat', sans-serif; font-size: 13px;"
                >Foto de tienda</label>
              </div>
                            <!-- <div class="input-group-append">
                              <button class="btn btn-outline-secondary" type="button" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 33px; background: #FD5440; color: white; border: 0;">Subir</button>
                          </div> -->
                        </div>
                        <div class="button-position">
                            <button @click="editInfo()" type="submit" data-toggle="modal" data-target="#exampleModalCenter" class="btn submit-btn">Guardar</button>
                        </div>
                    </form>
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
                email: '',
        password: '',
        nameStore:'',
        phoneNumber:'',
        category:'',
        picture:null,
        //status switch
        statusSun:boolean,
        statusMon:boolean,
        statusTue:boolean,
        statusWed:boolean,
        statusThu:boolean,
        statusFri:boolean,
        statusSat:boolean,
        //am valu
        SundayAM:"",
        MondayAM:'',
        TuesdayAM:'',
        WednesdayAM:'',
        ThursdayAM:'',
        FridayAM:'',
        SaturdayAM:'',

        // pm Value
        SundayPM:"",
        MondayPM:'',
        TuesdayPM:'',
        WednesdayPM:'',
        ThursdayPM:'',
        FridayPM:'',
        SaturdayPM:'',

        //array
        schedule:null,
        buttonChane:'',
        status:boolean,

        colorMonday:'',
        colorTuesday:'',
        colorWednesday:'green',
        colorThursday:'',
        colorFriday:'',
        colorSaturday:'',
        validate:'',

        info:null

            }
        },mounted: function() {

           if(Parse.User.current() == null)
            {
                this.$router.push('/HelloWorld');
            }
            this.getInfo();
        this.status = false;
        console.log(this.status);
        this.statusFri = true;
        console.log(this.statusFri);
        this.statusMon = false;
        console.log(this.statusMon);
        this.statusWed = true;
        console.log(this.statusWed);
        this.statusSat = true;
        console.log(this.statusSat);
        this.statusTue = true;
        console.log(this.statusTue);
        this.statusThu = true;
        console.log(this.statusThu);
        this.statusSun = true;
        console.log(this.statusSun);
    //  this.schedule = [];
    },

      methods: {
          getInfo()
          {
               Parse.Cloud.run('getStore', {
                userId: Parse.User.current().id
                }).then((result) => {
                   
                    this.info=result;
                 console.log(this.info);

                 this.checkInfo();

            //    console.log(result);
                })

          },

           logOut() {
            Parse.User.logOut().then((resp) => {
              console.log('Logged out successfully', resp);
              // this.openPage();
               this.$router.push("/"); 
            }, err => {
              console.log('Error logging out', err);


            });
        },

          editInfo()
          { 
              // edit user
                let user = Parse.User.current();
                user.set('email', this.email) ;

                user.save().then(result=>{
                    console.log("Saved");
                });

             //store 
             
             let store = this.info;
             var schedule = [];

             

                //set array
             if(this.SundayAM != null && this.SundayPM != null)
            {
            let myObj = {"day":"Sunday", "start": this.SundayAM, "end":this.SundayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);
            }

            // monday

            if(this.MondayAM != null && this.MondayPM != null)
            {
            let myObj = {"day":"Monday", "start": this.MondayAM, "end":this.MondayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);
            }

            //tuesday
            if(this.TuesdayAM != null && this.TuesdayPM != null)
            {
            let myObj = {"day":"Tuesday", "start": this.TuesdayAM, "end":this.TuesdayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);
            }

            //wednesday

            if(this.WednesdayAM != null && this.WednesdayPM != null)
            {
            let myObj = {"day":"Wednesday", "start": this.WednesdayAM, "end":this.WednesdayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);
            }

            //thursday

            if(this.ThursdayAM != null && this.ThursdayPM != null)
            {
            let myObj = {"day":"Thursday", "start": this.ThursdayAM, "end":this.ThursdayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);
            }

            //friday

            if(this.FridayAM != null && this.FridayPM != null)
            {
            let myObj = {"day":"Friday", "start": this.FridayAM, "end":this.FridayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);
            }

            if(this.SaturdayAM != null && this.SaturdayPM != null)
            {
            let myObj = {"day":"Saturday", "start": this.SaturdayAM, "end":this.SaturdayPM};
            console.log(myObj);
            schedule.push(myObj);

            console.log(this.schedule);

            }

             if(this.nameStore == null || this.nameStore == '' || this.phoneNumber == null || this.phoneNumber == '' || this.category == null || this.category == '' || this.schedule == null || this.schedule == '' || this.picture == null || this.picture == '')
             {
               alert("Todos los campos son requeridos.");
             }



            //set values
             store.set('Name',this.nameStore);
             store.set('Phone', this.phoneNumber);
             store.set('subCategories', this.category);
             store.set('Schedule',schedule);
             store.set('storePicture', this.picture);

             //save
             store.save().then(result=>
             {
                 console.log("Saved!!!");
                 this.getInfo();
             });





          },
          checkInfo()
          {
              //general data
              this.email = this.info.get('employee').get('email');
              document.getElementById('email').value = this.email;
              this.nameStore = this.info.get('Name');
              document.getElementById('name').value = this.nameStore;
              this.phoneNumber = this.info.get('Phone');
              document.getElementById('phone').value = this.phoneNumber;
              this.category = this.info.get('subCategories');
              document.getElementById('category').value = this.category;

              this.picture = this.info.get('storePicture');

              //schedule 

              let schedule = this.info.get('Schedule');

              for(let i =0; i < schedule.length; i ++)
              {
                  if(schedule[i].day == "Sunday")
                  {
                      this.SundayAM = schedule[i].start;
                      this.SundayPM = schedule[i].end;
                      document.getElementById("sun").style.backgroundColor = "#ffc93a";
                      this.buttonChane = '#ffc93a';
                      this.status = false;
                      this.statusSun = true;
                      document.getElementById('sunAM').removeAttribute("disabled");
                      document.getElementById('sunAM').value = this.SundayAM;
                      document.getElementById('sunPM').removeAttribute("disabled");
                      document.getElementById('sunPM').value= this.SundayPM;
                  }
                  if(schedule[i].day == "Monday")
                  {
                      this.MondayAM = schedule[i].start;
                      this.MondayPM = schedule[i].end;
                      document.getElementById("mon").style.backgroundColor = "#ffc93a";
                      this.colorMonday = '#ffc93a';
                      this.status = false;
                      this.statusMon = true;
                      document.getElementById('monAM').removeAttribute("disabled");
                      document.getElementById('monAM').value = this.MondayAM;
                      document.getElementById('monPM').removeAttribute("disabled");
                      document.getElementById('monPM').value = this.MondayPM;
                  }
                  if(schedule[i].day == "Tuesday")
                  {
                      this.TuesdayAM = schedule[i].start;
                      this.TuesdayPM = schedule[i].end;
                      document.getElementById("tue").style.backgroundColor = "#ffc93a";
                      this.colorTuesday = '#ffc93a';
                      this.status = false;
                      this.statusTue = true;
                      document.getElementById('tueAM').removeAttribute("disabled");
                       document.getElementById('tueAM').value= this.TuesdayAM;
                      document.getElementById('tuePM').removeAttribute("disabled");
                      document.getElementById('tuePM').value = this.TuesdayPM;
                  }
                  if(schedule[i].day == "Wednesday")
                  {
                      this.WednesdayAM = schedule[i].start;
                      this.WednesdayPM = schedule[i].end;
                      document.getElementById("wed").style.backgroundColor = "#ffc93a";
                      this.colorWednesday = 'red';
                      this.status = false;
                      this.statusWed = true;
                      document.getElementById('wedAM').removeAttribute("disabled");
                      document.getElementById('wedAM').value = this.WednesdayAM;
                      document.getElementById('wedPM').removeAttribute("disabled");
                      document.getElementById('wedPM').value = this.WednesdayPM;
                  }
                  if(schedule[i].day == "Thursday")
                  {
                      this.ThursdayAM = schedule[i].start;
                      this.ThursdayPM = schedule[i].end;
                      document.getElementById("thu").style.backgroundColor = "#ffc93a";
                      this.colorThursday = '#ffc93a';
                      this.status = false;
                      this.statusThu = true;
                      document.getElementById('thuAM').removeAttribute("disabled");
                      document.getElementById('thuAM').value = this.ThursdayAM;
                      document.getElementById('thuPM').removeAttribute("disabled");
                      document.getElementById('thuPM').value = this.ThursdayPM;
                  }
                  if(schedule[i].day == "Friday")
                  {
                      this.FridayAM = schedule[i].start;
                      this.FridayPM = schedule[i].end;
                      document.getElementById("fri").style.backgroundColor = "#ffc93a";
                      this.colorFriday = '#ffc93a';
                      this.status = false;
                      this.statusFri = true;
                      document.getElementById('friAM').removeAttribute("disabled");
                      document.getElementById('friAM').value = this.FridayAM;
                      document.getElementById('friPM').removeAttribute("disabled");
                       document.getElementById('friPM').value = this.FridayPM;
                  }
                  if(schedule[i].day == "Saturday")
                  {
                      this.SaturdayAM = schedule[i].start;
                      this.SaturdayPM = schedule[i].end;
                      document.getElementById("sat").style.backgroundColor = "#ffc93a";
                      this.colorSaturday = '#ffc93a';
                      this.status = false;
                      this.statusSat = true;
                      document.getElementById('satAM').removeAttribute("disabled");
                      document.getElementById('satAM').value = this.SaturdayAM;
                      document.getElementById('satPM').removeAttribute("disabled");
                      document.getElementById('satPM').value = this.SaturdayPM;

                  }
              }
          },
onFileSelected(event)
    {


var self = this;
      const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

async function Main() {
   const file = document.querySelector('.custom-file-input').files[0];
  
   self.picture =  await toBase64(file);
  console.log(self.picture);

  const base64Image = self.picture;
const name = 'photo.jpeg';
const parseFile = new Parse.File(name, {
        base64: base64Image
      });
      // convierte la foto a base64
      parseFile.save().then((savedFile) => {
        console.log('file saved:' + savedFile);

          self.picture = savedFile;
          console.log(self.picture.url());
        // this.savedPhoto = savedFile;

      }, (err) => {
        console.log('error grabando file: ' + err);
        alert(err);
      });

       console.log(self.picture);




}

Main();

    },
switchDay(parameter,status)
    { 
      this.buttonColor = '#FFF'; //desired Color
      //Sunday
    if(parameter == "Sunday" && status == true)
    {
      document.getElementById("sun").style.backgroundColor = "#ffc93a";
      
      this.buttonChane = '#ffc93a';
      this.status = false;
      this.statusSun = true;
       document.getElementById('sunAM').removeAttribute("disabled");
        document.getElementById('sunPM').removeAttribute("disabled");
      console.log("change White Sunday"+ this.buttonChane + " " + this.statusSun);
    }
    if(parameter == "Sunday" && status == false)
    {
      document.getElementById("sun").style.backgroundColor = "transparent";
       document.getElementById('sunAM').setAttribute("disabled","disabled");
        document.getElementById('sunPM').setAttribute("disabled","disabled");
      this.buttonChane ='#FFF';
      this.status = true;
      this.statusSun = false;

      
      

    }

    // Monday
    if(parameter == "Monday" && status == true)
    {
      document.getElementById("mon").style.backgroundColor = "#ffc93a";
      this.colorMonday = '#ffc93a';
      this.status = false;
      this.statusMon = true;
      document.getElementById('monAM').removeAttribute("disabled");
      document.getElementById('monPM').removeAttribute("disabled");

      
      console.log("change White"+ this.colorMonday + " " + this.statusMon);
    }
    if(parameter == "Monday" && status == false)
    {
      document.getElementById("mon").style.backgroundColor = "transparent";
       document.getElementById('monAM').setAttribute("disabled","disabled");
        document.getElementById('monPM').setAttribute("disabled","disabled");
      this.colorMonday ='red';
      this.status = true;
      this.statusMon = false;
      console.log("change White"+ this.colorMonday + " " + this.statusMon);

    }

    //  Tuesday

    if(parameter == "Tuesday" && status == true)
    {
      document.getElementById("tue").style.backgroundColor = "#ffc93a";
      this.colorTuesday = '#ffc93a';
      this.status = false;
      this.statusTue = true;
        document.getElementById('tueAM').removeAttribute("disabled");
        document.getElementById('tuePM').removeAttribute("disabled");
      console.log("change White"+ this.colorTuesday + " " + this.status);
    }
    if(parameter == "Tuesday" && status == false)
    {
      document.getElementById("tue").style.backgroundColor = "transparent";
      this.colorTuesday ='#FFF';
      this.status = true;
      this.statusTue = false;
      document.getElementById('tueAM').setAttribute("disabled","disabled");
       document.getElementById('tuePM').setAttribute("disabled","disabled");
      console.log("change yellow"+ this.colorTuesday + " " + this.status);

    }

    // Wednesday
    if(parameter == "Wednesday" && status == true)
    {
      document.getElementById("wed").style.backgroundColor = "#ffc93a";
      this.colorWednesday = 'red';
      this.status = false;
      this.statusWed = true;
       document.getElementById('wedAM').removeAttribute("disabled");
       document.getElementById('wedPM').removeAttribute("disabled");
      console.log("change White"+ this.colorWednesday + " " + this.status);
    }
    if(parameter == "Wednesday" && status == false)
    {
      document.getElementById("wed").style.backgroundColor = "transparent";
      this.colorWednesday ='blue';
      this.status = true;
       this.statusWed = false;
       document.getElementById('wedAM').setAttribute("disabled","disabled");
       document.getElementById('wedPM').setAttribute("disabled","disabled");
      console.log("change White"+ this.colorWednesday + " " + this.status);

    }

    //  Thursday

    if(parameter == "Thursday" && status == true)
    {
      document.getElementById("thu").style.backgroundColor = "#ffc93a";
      this.colorThursday = '#ffc93a';
      this.status = false;
      this.statusThu = true;
      document.getElementById('thuAM').removeAttribute("disabled");
      document.getElementById('thuPM').removeAttribute("disabled");
      console.log("change White"+ this.buttonChane + " " + this.status);
    }
    if(parameter == "Thursday" && status == false)
    {
      document.getElementById("thu").style.backgroundColor = "transparent";
      this.colorThursday ='#FFF';
      this.status = true;
      this.statusThu =false;
       document.getElementById('thuAM').setAttribute("disabled","disabled");
       document.getElementById('thuPM').setAttribute("disabled","disabled");
      console.log("change White"+ this.buttonChane + " " + this.status);

    }

    //  Friday

    if(parameter == "Friday" && status == true)
    {
      document.getElementById("fri").style.backgroundColor = "#ffc93a";
      this.colorFriday = '#ffc93a';
      this.status = false;
      this.statusFri = true;
       document.getElementById('friAM').removeAttribute("disabled");
       document.getElementById('friPM').removeAttribute("disabled");
      console.log("change White"+ this.buttonChane + " " + this.status);
    }
    if(parameter == "Friday" && status == false)
    {
      document.getElementById("fri").style.backgroundColor = "transparent";
      this.colorFriday ='#FFF';
      this.status = true;
      this.statusFri = false;
       document.getElementById('friAM').setAttribute("disabled","disabled");
       document.getElementById('friPM').setAttribute("disabled","disabled");
      console.log("change White"+ this.buttonChane + " " + this.status);

    }

    // Saturday

    if(parameter == "Saturday" && status == true)
    {
      document.getElementById("sat").style.backgroundColor = "#ffc93a";
      this.colorSaturday = '#ffc93a';
      this.status = false;
      this.statusSat = true;
       document.getElementById('satAM').removeAttribute("disabled");
       document.getElementById('satPM').removeAttribute("disabled");
      console.log("change White"+ this.buttonChane + " " + this.status);
    }
    if(parameter == "Saturday" && status == false)
    {
      document.getElementById("sat").style.backgroundColor = "transparent";
      this.colorSaturday ='#FFF';
      this.status = true;
      this.statusSat = false;
      document.getElementById('satAM').setAttribute("disabled","disabled");
      document.getElementById('satPM').setAttribute("disabled","disabled");
      console.log("change White"+ this.buttonChane + " " + this.status);

    }

      

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

    .logout
    {
      background-color: #1e1e1e !important;
      border-color: #1e1e1e !important;;
      color:white;
      margin-top: 5px;
    }

    .logout:hover{
      color: #FD5440 !important;
        transition: .5s;
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

    /* .delete-active {
        background: #FFC93A;
        color: white;
    } */
    
    .start-schedule {
        margin-bottom: 10px;
        border: 1px solid rgb(199, 199, 199);
        border-radius: 5px;
        margin-top: 3px;
        padding-left: 17px;
    }

</style>