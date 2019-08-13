<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logo prueba.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <!-- <li class="nav-item">
                        <router-link class="nav-link active" to="/Products"><i class="fas fa-wine-bottle icon3"></i>Productos</router-link>
                    </li> -->
                     <li class="nav-item">
                        <router-link class="nav-link active" to="/adminStores"><i class="fas fa-home icon3"></i>Tiendas</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/calendar" style="color: #FD5440 !important"><i class="icon3 fas fa-align-left"></i>Categorías</router-link>
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
                        <router-link class="nav-link" to="/adminReports"><i class="fas fa-list icon3"></i>Reportes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid">
            <h1 class="product-title">Categorías</h1>
            <button type="button" class="btn btn-primary add-btn disabled" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus" style="margin-right: 10px;"></i>Crear categoría</button>
        </div>

        <div class="container-fluid" style="padding: 0;">
            <table class="table table-hover table-dark" style="margin-bottom: 0;">
                <thead>
                    <tr >
                        <!-- <th class="title-table" scope="col">#</th> -->
                        <th class="title-table" scope="col">Nombre</th>
                        <th class="title-table" scope="col">Imagen de Categoría</th>
                        <th class="title-table" scope="col">Borrar Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="store in categories" :key="store">
                        <!-- <th class="table-content" scope="row">1</th> -->
                        <th class="table-content">{{store.get('name')}}</th>
                        <th class="table-content">
                            <img class="category-img" :src="store.get('categoryImg').url()">
                        </th>
                        <td class="table-content">
                            <button @click="deleteItem(store)" type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <!-- <tr>
                        <th class="table-content" scope="row">2</th>
                        <th class="table-content">Bebidas Alcohólicas</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/alcholl.png">
                        </th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">3</th>
                        <th class="table-content">Clothing</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/clothing.png">

                        </th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">4</th>
                        <th class="table-content">Convinience Store</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/convenecesrote.png">

                        </th>

                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">5</th>
                        <th class="table-content">Farmacia</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/farmacia.png">

                        </th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">6</th>
                        <th class="table-content">Ferretería</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/ferretería.png">

                        </th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">7</th>
                        <th class="table-content">Foodtruck</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/foodtruck.png">
                        </th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">8</th>
                        <th class="table-content">Panadería</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/panaderia.png">
                        </th>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">9</th>
                        <th class="table-content">Restaurantes</th>
                        <th class="table-content">
                            <img class="category-img" src="../assets/restaurant.png">
                        </th>
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
                                    <label class="form-label" for="exampleInputEmail1">Nombre</label>
                                    <input v-model="categoryName" type="text" class="form-control category modal-form" aria-describedby="basic-addon1">
                                </div>

                                <div class="input-group mb-3" style="margin-top: 20px;">
                                    <div class="custom-file">
                                        <input @change="onFileSelected"   type="file" class="custom-file-input" id="inputGroupFile02">
                                        <label class="custom-file-label" for="inputGroupFile02" style="font-family: 'Montserrat', sans-serif; font-size: 13px;">Choose file</label>
                                    </div>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FD5440; color: white; border: 0;">Upload</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FFC93A; border: 0;">Close</button>
                        <button @click="createCategory" type="button" class="btn btn-primary" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FD5440; border: 0;">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal add product -->

    </div>
</template>

<script>
import Parse from 'parse'
    export default {
        data() {
                return {
                    categories:null,
                    categoryName:null,
                    categoryImg:null

                }
            },
            mounted: function()
            {
                if(Parse.User.current() == null)
                {
                this.$router.push('/HelloWorld');
                }
                this.getCategorys();
            },
            methods:
            {
                getCategorys()
                {
                     Parse.Cloud.run('getCategories', { //get the user store
                    }).then (result => {
                    // console.log(result);
                    this.categories = result;
                    console.log(this.categories);
                    }, (error) => {
                    console.log(error);
                    });
                },
                deleteItem(data)
                {
                    console.log(data);

                    data.destroy().then(result =>
                    {
                        console.log("delete");
                        this.getCategorys();
                    })
                },

                createCategory()
                {
                    console.log("Entrando a create caregory");
                     Parse.Cloud.run('createCategory', { //get the user store
                     categoryName: this.categoryName,
                     categoryImg: this.categoryImg
                    }).then (result => {
                        console.log(result);
                        this.getCategorys();
                    }, (error) => {
                    console.log(error);
                    });
                    
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

                async function Main() 
                {
                    const file = document.querySelector('.custom-file-input').files[0];
                    
                    self.categoryImg =  await toBase64(file);
                    console.log(self.categoryImg);

                    const base64Image = self.categoryImg;
                    const name = 'photo.jpeg';
                    const parseFile = new Parse.File(name, {
                            base64: base64Image
                        });
                        // convierte la foto a base64
                        parseFile.save().then((savedFile) => {
                            console.log('file saved:' + savedFile);

                            self.categoryImg = savedFile;
                            console.log(self.categoryImg.url());
                            // this.savedPhoto = savedFile;

                        }, (err) => {
                            console.log('error grabando file: ' + err);
                            alert(err);
                        });

                        console.log(self.picture);

                }

                Main();

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