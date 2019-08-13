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
                            <router-link class="nav-link" to="/adminStores"><i class="fas fa-home icon3"></i>Tiendas</router-link>
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
                            <router-link class="nav-link" to="/deliverySchedule" style="color: #FD5440 !important"><i class="fas fa-align-left icon3"></i>Schedule Fee</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/adminReports"><i class="fas fa-list icon3"></i>Reportes</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                        </li>
                    </ul>
            </div>
        </nav>


        <div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="container">
                        <img src="../assets/buypinlogo-2.png" class="logo" style=" display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;" />
                        <h1 class="store-title">Delivery Fee Schedule</h1>
                    </div>
                    <form>

                        <div class="form-group">
                            <div class="row justify-content-center">
                                <div clas="col-3" style="margin: 10px; margin-top: 0;">

                                    <h1 class="title-schedule">Días</h1>
                                    <div class="day-container">
                                        <button @click="switchDay('Sunday',status)" id="sun" type="button" class="btn btn-primary delete-btn delete-active">Domingo</button>
                                        <!-- <h1>{{statusSun}}</h1>  -->
                                    </div>
                                    <div class="day-container">
                                        <button @click="switchDay('Monday',status)" id="mon" type="button" class="btn btn-primary delete-btn">Lunes</button>
                                    </div>
                                    <div class="day-container">
                                        <button @click="switchDay('Tuesday',status)" id="tue" type="button" class="btn btn-primary delete-btn">Martes</button>
                                    </div>
                                    <div class="day-container">
                                        <button @click="switchDay('Wednesday',status)" id="wed" type="button" class="btn btn-primary delete-btn">Miércoles</button>
                                    </div>
                                    <div class="day-container">
                                        <button @click="switchDay('Thursday',status)" id="thu" type="button" class="btn btn-primary delete-btn">Jueves</button>
                                    </div>
                                    <div class="day-container">
                                        <button @click="switchDay('Friday',status)" id="fri" type="button" class="btn btn-primary delete-btn">Viernes</button>
                                    </div>
                                    <div class="day-container">
                                        <button @click="switchDay('Saturday',status)" id="sat" type="button" class="btn btn-primary delete-btn">Sábado</button>
                                    </div>
                                </div>
                                <div clas="col-3" style="margin: 10px; margin-top: 0;">
                                    <h1 class="title-schedule">Apertura</h1>

                                    <!-- Sunday Input -->
                                    <select v-model="SundayAM" id="sunAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
                                        <option selected>0:00AM</option>
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

                                    <select v-model="TuesdayAM" id="tueAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
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

                                    <select v-model="WednesdayAM" id="wedAM" :disabled="true" class="form-control start-schedule" placeholder="0:00AM">
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

                                <!-- Fee -->
                                <div clas="col-3" style="margin: 10px; margin-top: 0;">
                                    <h1 class="title-schedule">Fee</h1>

                                    <!-- Sunday Input -->
                                    <div>
                                        <input v-model="deliverySun" type="number" id="delSun" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                    <!-- Monday Input  -->
                                    <div>
                                        <input v-model="deliveryMon" type="number" id="delMon" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                    <!-- Tuesday Input  -->
                                    <div>
                                        <input v-model="deliveryTue" type="number" id="delTue" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                    <!-- Wednesday Input  -->
                                    <div>
                                        <input v-model="deliveryWed" type="number" id="delWed" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                    <!-- Thursday Input  -->
                                    <div>
                                        <input v-model="deliveryTh" type="number" id="delTh" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                    <!-- Friday Input  -->
                                    <div>
                                        <input v-model="deliveryFri" type="number" id="delFri" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                    <!-- Saturday Input  -->
                                    <div>
                                        <input v-model="deliverySat" type="number" id="delSat" :disabled="true" class="form-control start-schedule" style="width: 100px;">
                                    </div>
                                </div>

                                <!-- end Fee -->

                                <!-- end Fee  -->

                                <div clas="col-3" style="margin: 10px; margin-top: 0;">
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
                                    <select v-model="MondayPM" id="monPM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
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
                                    <select v-model="TuesdayPM" id="tuePM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
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

                                    <select v-model="FridayPM" id="friPM" :disabled="true" class="form-control start-schedule" placeholder="0:00PM">
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

                        <div class="button-position">
                            <button type="submit" data-toggle="modal" data-target="#exampleModalCenter" class="btn submit-btn" @click="viewData()">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- modal alert -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content add-product-form">
                    <div class="modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLongTitle">Información Básica</h5> -->
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <!-- <div class="modal-body">
            <div class="row justify-cntent-center">
              <div class="col-12">
                <p
                  style="font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 15px;"
                >Estaremos verificando su información para que la tienda sea registrada.</p>
              </div>
            </div>
          </div> -->
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FFC93A; border: 0;">Close</button>
                        <!-- <button type="button" class="btn btn-primary" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FD5440; border: 0;">Save changes</button> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- modal Alert -->
    </div>
</template>

<script lang="js">
    import Parse from "parse";

    export default {
        name: "storeForm",

        components: {
            data() {
                return {
                    email: '',
                    password: '',
                    nameStore: '',
                    phoneNumber: '',
                    category: '',
                    picture: null,
                    //status switch
                    statusSun: boolean,
                    statusMon: boolean,
                    statusTue: boolean,
                    statusWed: boolean,
                    statusThu: boolean,
                    statusFri: boolean,
                    statusSat: boolean,
                    //am valu
                    SundayAM: "",
                    MondayAM: '',
                    TuesdayAM: '',
                    WednesdayAM: '',
                    ThursdayAM: '',
                    FridayAM: '',
                    SaturdayAM: '',

                    // pm Value
                    SundayPM: "",
                    MondayPM: '',
                    TuesdayPM: '',
                    WednesdayPM: '',
                    ThursdayPM: '',
                    FridayPM: '',
                    SaturdayPM: '',

                    //fee

                    deliverySun: '',
                    deliveryMon: '',
                    deliveryTue: '',
                    deliveryWed: '',
                    deliveryTh: '',
                    deliveryFri: '',
                    deliverySat: '',

                    //array
                    schedule: null,
                    buttonChane: '',
                    status: boolean,

                    colorMonday: '',
                    colorTuesday: '',
                    colorWednesday: 'green',
                    colorThursday: '',
                    colorFriday: '',
                    colorSaturday: '',
                    validate: '',

                };
            }
        },
        mounted: function() {

            if (Parse.User.current() == null) {
                this.$router.push('/HelloWorld');
            }

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

            viewData() {
                    this.schedule = [];
                    console.log(this.email);
                    console.log(this.password);
                    console.log(this.nameStore);
                    console.log(this.phoneNumber);
                    console.log(this.category);
                    console.log(this.SundayAM);

                    // sunday
                    if (this.SundayAM != null && this.SundayPM != null) {
                        let myObj = {
                            "day": "Sunday",
                            "start": this.SundayAM,
                            "end": this.SundayPM,
                            "fee": this.deliverySun
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);
                    }

                    // monday

                    if (this.MondayAM != null && this.MondayPM != null) {
                        let myObj = {
                            "day": "Monday",
                            "start": this.MondayAM,
                            "end": this.MondayPM,
                            "fee": this.deliveryMon
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);
                    }

                    //tuesday
                    if (this.TuesdayAM != null && this.TuesdayPM != null) {
                        let myObj = {
                            "day": "Tuesday",
                            "start": this.TuesdayAM,
                            "end": this.TuesdayPM,
                            "fee": this.deliveryTue
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);
                    }

                    //wednesday

                    if (this.WednesdayAM != null && this.WednesdayPM != null) {
                        let myObj = {
                            "day": "Wednesday",
                            "start": this.WednesdayAM,
                            "end": this.WednesdayPM,
                            "fee": this.deliveryWed
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);
                    }

                    //thursday

                    if (this.ThursdayAM != null && this.ThursdayPM != null) {
                        let myObj = {
                            "day": "Thursday",
                            "start": this.ThursdayAM,
                            "end": this.ThursdayPM,
                            "fee": this.deliveryTh
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);
                    }

                    //friday

                    if (this.FridayAM != null && this.FridayPM != null) {
                        let myObj = {
                            "day": "Friday",
                            "start": this.FridayAM,
                            "end": this.FridayPM,
                            "fee": this.deliveryFri
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);
                    }

                    if (this.SaturdayAM != null && this.SaturdayPM != null) {
                        let myObj = {
                            "day": "Saturday",
                            "start": this.SaturdayAM,
                            "end": this.SaturdayPM,
                            "fee": this.deliverySat
                        };
                        console.log(myObj);
                        this.schedule.push(myObj);

                        console.log(this.schedule);

                    }

                    //   console.log("Foto", this.picture);
                    this.signUserUp();

                    console.log("Schedule", this.schedule);

                },

                signUserUp() {
                    if (this.schedule == null || this.schedule.length == 0) {
                        alert("Debe completar al menos un campo");
                    }

                    Parse.Cloud.run('createDeliverySchedule', { //get the user store
                        schedule: this.schedule
                    }).then(result => {
                        console.log(result);
                    }, (error) => {
                        console.log(error);
                    });
                },

                check(value) {

                    console.log(value);
                    if (value == "Sunday" && this.statusSun == true) {
                        document.getElementById("sun").style.backgroundColor = "lightblue";
                        console.log(true);
                        this.statusSun = false;
                        console.log("Status", this.statusSun);
                        return;
                    }
                    if (value == "Sunday" && this.statusSun == false) {
                        document.getElementById("sun").style.backgroundColor = "transparent";
                        console.log("Es true");
                        this.statusSun = true;
                        console.log(this.statusSun);
                        return;
                    }

                },

                // signIn() {
                //   console.log(this.email);
                //   console.log(this.password);

                // //   Parse.User.logIn(this.email, this.password).then(
                // //     resp => {
                // //       console.log("Logged in successfully", resp);
                // //       if (resp.get("isAdmin") == true) {
                // //         this.$router.push("/Product");
                // //         console.log('regular admin logged in');
                // //       } else {
                // //         this.$router.push("/adminStores");
                // //         console.log('super admin logged in');
                // //       }
                // //     },
                // //     err => {
                // //       console.log("Error logging in", err);
                // //     }
                // //   );
                // },

                switchDay(parameter, status) {
                    this.buttonColor = '#FFF'; //desired Color
                    //Sunday
                    if (parameter == "Sunday" && status == true) {
                        document.getElementById("sun").style.backgroundColor = "#ffc93a";

                        this.buttonChane = '#ffc93a';
                        this.status = false;
                        this.statusSun = true;
                        document.getElementById('sunAM').removeAttribute("disabled");
                        document.getElementById('sunPM').removeAttribute("disabled");
                        document.getElementById('delSun').removeAttribute("disabled");
                        console.log("change White Sunday" + this.buttonChane + " " + this.statusSun);
                    }
                    if (parameter == "Sunday" && status == false) {
                        document.getElementById("sun").style.backgroundColor = "transparent";
                        document.getElementById('sunAM').setAttribute("disabled", "disabled");
                        document.getElementById('sunPM').setAttribute("disabled", "disabled");
                        document.getElementById('delSun').setAttribute("disabled", "disabled");
                        this.buttonChane = '#FFF';
                        this.status = true;
                        this.statusSun = false;

                    }

                    // Monday
                    if (parameter == "Monday" && status == true) {
                        document.getElementById("mon").style.backgroundColor = "#ffc93a";
                        this.colorMonday = '#ffc93a';
                        this.status = false;
                        this.statusMon = true;
                        document.getElementById('monAM').removeAttribute("disabled");
                        document.getElementById('monPM').removeAttribute("disabled");
                        document.getElementById('delMon').removeAttribute("disabled");
                        console.log("change White" + this.colorMonday + " " + this.statusMon);
                    }
                    if (parameter == "Monday" && status == false) {
                        document.getElementById("mon").style.backgroundColor = "transparent";
                        document.getElementById('monAM').setAttribute("disabled", "disabled");
                        document.getElementById('monPM').setAttribute("disabled", "disabled");
                        document.getElementById('delMon').setAttribute("disabled", "disabled");
                        this.colorMonday = 'red';
                        this.status = true;
                        this.statusMon = false;
                        console.log("change White" + this.colorMonday + " " + this.statusMon);

                    }

                    //  Tuesday

                    if (parameter == "Tuesday" && status == true) {
                        document.getElementById("tue").style.backgroundColor = "#ffc93a";
                        this.colorTuesday = '#ffc93a';
                        this.status = false;
                        this.statusTue = true;
                        document.getElementById('tueAM').removeAttribute("disabled");
                        document.getElementById('tuePM').removeAttribute("disabled");
                        document.getElementById('delTue').removeAttribute("disabled");
                        console.log("change White" + this.colorTuesday + " " + this.status);
                    }
                    if (parameter == "Tuesday" && status == false) {
                        document.getElementById("tue").style.backgroundColor = "transparent";
                        this.colorTuesday = '#FFF';
                        this.status = true;
                        this.statusTue = false;
                        document.getElementById('tueAM').setAttribute("disabled", "disabled");
                        document.getElementById('tuePM').setAttribute("disabled", "disabled");
                        document.getElementById('delTue').setAttribute("disabled", "disabled");
                        console.log("change yellow" + this.colorTuesday + " " + this.status);

                    }

                    // Wednesday
                    if (parameter == "Wednesday" && status == true) {
                        document.getElementById("wed").style.backgroundColor = "#ffc93a";
                        this.colorWednesday = 'red';
                        this.status = false;
                        this.statusWed = true;
                        document.getElementById('wedAM').removeAttribute("disabled");
                        document.getElementById('wedPM').removeAttribute("disabled");
                        document.getElementById('delWed').removeAttribute("disabled");
                        console.log("change White" + this.colorWednesday + " " + this.status);
                    }
                    if (parameter == "Wednesday" && status == false) {
                        document.getElementById("wed").style.backgroundColor = "transparent";
                        this.colorWednesday = 'blue';
                        this.status = true;
                        this.statusWed = false;
                        document.getElementById('wedAM').setAttribute("disabled", "disabled");
                        document.getElementById('wedPM').setAttribute("disabled", "disabled");
                        document.getElementById('delWed').setAttribute("disabled", "disabled");
                        console.log("change White" + this.colorWednesday + " " + this.status);

                    }

                    //  Thursday

                    if (parameter == "Thursday" && status == true) {
                        document.getElementById("thu").style.backgroundColor = "#ffc93a";
                        this.colorThursday = '#ffc93a';
                        this.status = false;
                        this.statusThu = true;
                        document.getElementById('thuAM').removeAttribute("disabled");
                        document.getElementById('thuPM').removeAttribute("disabled");
                        document.getElementById('delTh').removeAttribute("disabled");
                        console.log("change White" + this.buttonChane + " " + this.status);
                    }
                    if (parameter == "Thursday" && status == false) {
                        document.getElementById("thu").style.backgroundColor = "transparent";
                        this.colorThursday = '#FFF';
                        this.status = true;
                        this.statusThu = false;
                        document.getElementById('thuAM').setAttribute("disabled", "disabled");
                        document.getElementById('thuPM').setAttribute("disabled", "disabled");
                        document.getElementById('delTh').setAttribute("disabled", "disabled");
                        console.log("change White" + this.buttonChane + " " + this.status);

                    }

                    //  Friday

                    if (parameter == "Friday" && status == true) {
                        document.getElementById("fri").style.backgroundColor = "#ffc93a";
                        this.colorFriday = '#ffc93a';
                        this.status = false;
                        this.statusFri = true;
                        document.getElementById('friAM').removeAttribute("disabled");
                        document.getElementById('friPM').removeAttribute("disabled");
                        document.getElementById('delFri').removeAttribute("disabled");
                        console.log("change White" + this.buttonChane + " " + this.status);
                    }
                    if (parameter == "Friday" && status == false) {
                        document.getElementById("fri").style.backgroundColor = "transparent";
                        this.colorFriday = '#FFF';
                        this.status = true;
                        this.statusFri = false;
                        document.getElementById('friAM').setAttribute("disabled", "disabled");
                        document.getElementById('friPM').setAttribute("disabled", "disabled");
                        document.getElementById('delFri').setAttribute("disabled", "disabled");
                        console.log("change White" + this.buttonChane + " " + this.status);

                    }

                    // Saturday

                    if (parameter == "Saturday" && status == true) {
                        document.getElementById("sat").style.backgroundColor = "#ffc93a";
                        this.colorSaturday = '#ffc93a';
                        this.status = false;
                        this.statusSat = true;
                        document.getElementById('satAM').removeAttribute("disabled");
                        document.getElementById('satPM').removeAttribute("disabled");
                        document.getElementById('delSat').removeAttribute("disabled");
                        console.log("change White" + this.buttonChane + " " + this.status);
                    }
                    if (parameter == "Saturday" && status == false) {
                        document.getElementById("sat").style.backgroundColor = "transparent";
                        this.colorSaturday = '#FFF';
                        this.status = true;
                        this.statusSat = false;
                        document.getElementById('satAM').setAttribute("disabled", "disabled");
                        document.getElementById('satPM').setAttribute("disabled", "disabled");
                        document.getElementById('delSat').setAttribute("disabled", "disabled");
                        console.log("change White" + this.buttonChane + " " + this.status);

                    }

                }

        }
    };
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
    
    .store-title {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 50px;
    }
    
    .form-title {
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
    }
    
    .form-control {
        border-radius: 0;
        border-left: none;
        border-top: none;
        border-right: none;
        -webkit-appearance: none;
        font-family: "Montserrat", sans-serif;
        font-size: 13px;
    }
    
    .submit-btn {
        background-color: #fd5440;
        border: none;
        padding: 8px;
        color: white;
        font-family: "Montserrat", sans-serif;
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
        font-family: "Montserrat", sans-serif;
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
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 13px;
        background: transparent;
        border-radius: none;
        color: grey;
        border-color: #ffc93a;
    }
    
    .delete-btn:hover {
        width: 100px;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 13px;
        background: #ffc93a;
        color: white;
        border-color: #ffc93a;
    }
    
    .active {
        width: 100px;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 13px;
        background: #ffc93a;
        color: white;
        border-color: #ffc93a;
    }
    /* .delete-active {
  background: #ffc93a;
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