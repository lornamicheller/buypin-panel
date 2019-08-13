<template>
    <div>
        <div class="container-fluid fixed" style="padding: 0;">
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
                            <router-link class="nav-link" to="/Waitlist" style="color: #FD5440 !important"><i class="fas fa-map-marker-alt icon3"></i>Zipcodes / Áreas</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/adminDrivers"><i class="fas fa-users icon3"></i>Conductores</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/deliverySchedule"><i class="fas fa-align-left icon3"></i>Schedule Fee</router-link>
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
        </div>

        <div class="container-fluid">
            <h1 class="product-title">Zipcodes</h1>
            <button type="button" class="btn btn-primary add-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus" style="margin-right: 10px;"></i>Añadir Zipcode</button>
        </div>

        <div class="container-fluid" style="padding: 0;">
            <table class="table table-hover table-dark" style="margin-bottom: 0;">
                <thead>
                    <tr>
                        <!-- <th class="title-table" scope="col">#</th> -->
                        <th class="title-table" scope="col">Zipcode</th>
                        <th class="title-table" scope="col">Pueblo</th>
                        <th class="title-table" scope="col">DeliveryFee</th>
                        <th class="title-table" scope="col">Borrar Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="zip in zipcodes" :key="zip">
                        <!-- <th class="table-content" scope="row">1</th> -->
                        <th class="table-content">{{zip.get('zipcode')}}</th>
                        <th class="table-content">{{zip.get('city')}}</th>
                        <th class="table-content">${{zip.get('deliveryFee')}}</th>
                        <td class="table-content">
                            <button @click="deleteZipCode(zip)" type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <!-- <tr>
                        <th class="table-content" scope="row">2</th>
                        <th class="table-content">00682</th>
                        <th class="table-content">Mayaguez</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">3</th>
                        <th class="table-content">00662</th>
                        <th class="table-content">Isabela</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">4</th>
                        <th class="table-content">00603</th>
                        <th class="table-content">Aguadilla</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">5</th>
                        <th class="table-content">00605</th>
                        <th class="table-content">Aguadilla</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">6</th>
                        <th class="table-content">00602</th>
                        <th class="table-content">Aguada</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">7</th>
                        <th class="table-content">00610</th>
                        <th class="table-content">Añasco</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">8</th>
                        <th class="table-content">00677</th>
                        <th class="table-content">Rincón</th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>

        <!-- modal add product -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content add-product-form">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Información Básica</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row justify-cntent-center">
                            <div class="col-12">
                                <div class="category">
                                    <label class="form-label" for="exampleInputEmail1">Zipcode</label>
                                    <input v-model="newZipCode" type="text" class="form-control category modal-form" aria-describedby="basic-addon1">
                                </div>

                                <div class="category">
                                    <label class="form-label" for="exampleInputEmail1">DeliveryFee</label>
                                    <input v-model="newDeliveryFee" type="number" class="form-control category modal-form" aria-describedby="basic-addon1">
                                </div>

                                <div class="category">
                                    <label class="form-label" for="exampleInputEmail1">Pueblo</label>
                                    <input v-model="newCity" type="text" class="form-control category modal-form" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FFC93A; border: 0;">Close</button>
                        <button @click="createNewZipCode" type="button" class="btn btn-primary" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FD5440; border: 0;">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal add product -->

    </div>
</template>

<script>
import Parse from 'parse';
    export default {
        data() {
            return {
                selected: null,
                zipcodes:null,

                newZipCode:null,
                newDeliveryFee:null,
                newCity:null

            }
        },
        mounted: function()
        {
             if(Parse.User.current() == null)
            {
                this.$router.push('/HelloWorld');
            }
            this.getAllZipCode();
        },
        methods:
        {
            getAllZipCode()
            {
                 Parse.Cloud.run('getAllZipCodes', { //get the user store
                }).then (result => {
                // console.log(result);
                this.zipcodes = result;
                console.log(this.zipcodes);
                }, (error) => {
                console.log(error);
                });
            },
            deleteZipCode(zip)
            {
                console.log(zip);

                zip.destroy().then(result=>
                {
                    console.log("delete");
                    this.getAllZipCode();
                });
            },

            createNewZipCode()
            {
                console.log(this.newZipCode);
                console.log(this.newDeliveryFee);
                console.log(this.newCity);
                 Parse.Cloud.run('createZipCode', { //get the user store
                 city: this.newCity,
                 deliveryFee: parseFloat(this.newDeliveryFee),
                 zip: this.newZipCode
                }).then (result => {
                console.log("Add new ZipCode");
                this.getAllZipCode();
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
    
    .title-table {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 15px;
        text-align: center;
    }
    
    .table-content {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 13px;
        text-align: center;
    }
    
    .delete-btn {
        background: #FFC93A;
        border: none;
        font-weight: 300;
        width: 80px;
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
    }
    
    .add-btn {
        background: #FD5440;
        font-family: 'Montserrat', sans-serif;
        border: none;
        font-weight: 300;
        width: 150px;
        font-size: 13px;
        margin-left: 10px;
        margin-bottom: 20px;
    }
    
    .product-title {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        margin-left: 10px;
        margin-top: 20px;
    }
    
    .category {
        border-radius: 0;
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-color: rgb(212, 212, 212);
        -webkit-appearance: none;
    }
    
    .form-label {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
    }
    
    .category-img {
        width: 90px;
        height: 70px;
        object-fit: contain;
    }
</style>