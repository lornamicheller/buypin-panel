<template>
    <div style="background: #1e1e1e;">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8" style="border-left: 1px solid grey; border-right: 1px solid grey; background: white; height: 100vh; overflow: scroll; padding-bottom: 30px;">
                    <div class="container">
                        <img src="../assets/buypinlogo-2.png" class="logo" style=" display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;">
                        <h1 class="store-title">Registrar Tienda</h1>
                    </div>
                    <form>
                        <div class="form-group">
                            <label class="form-title" for="exampleInputEmail1">Correo Electrónico</label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-group">
                            <label class="form-title" for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control">
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
                            <button type="submit" data-toggle="modal" data-target="#exampleModalCenter" class="btn submit-btn">Registrar</button>
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
                    <div class="modal-body">
                        <div class="row justify-cntent-center">
                            <div class="col-12">
                                <p style="font-family: 'Montserrat', sans-serif; font-weight: 400; font-size: 15px;">Estaremos verificando su información para que la tienda sea registrada.</p>
                            </div>
                        </div>
                    </div>
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

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    /* body {
        background: #1e1e1e;
    } */
    
    .store-title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 50px;
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