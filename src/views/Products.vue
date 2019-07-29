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
                        <router-link class="nav-link active" to="/Products" style="color: #FD5440 !important"><i class="fas fa-wine-bottle icon3"></i>Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/subCategory"><i class="icon3 fas fa-align-left"></i>Sub- Categorías</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/storeOrders"><i class="fas fa-align-left icon3"></i>Órdenes</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/storeProfile"><i class="fas fa-map-marker-alt icon3"></i>Perfil de Tienda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/"><i class="fas fa-sign-out-alt icon3"></i>Logout</router-link>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid">
            <h1 class="product-title">Productos</h1>
            <button type="button" class="btn btn-primary add-btn" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-plus" style="margin-right: 10px;"></i>Crear producto</button>
        </div>

        <div class="container-fluid">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1" style="border-radius: 0; border-left: none; border-top: none; border-right: none;"><i class="fas fa-search"></i></span>
                </div>
                <input type="text" class="form-control search-input" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>

        <div class="container-fluid" style="padding: 0;">
            <table class="table table-hover table-dark">
                <thead>
                    <tr>
                        <th class="title-table" scope="col">#</th>
                        <th class="title-table" scope="col">Nombre</th>
                        <th class="title-table" scope="col">Precio</th>
                        <th class="title-table" scope="col">Precio Regular</th>
                        <th class="title-table" scope="col">Categoría(s)</th>
                        <th class="title-table" scope="col">Sub-Categoría(s)</th>
                        <th class="title-table" scope="col">Borrar Productos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="table-content" scope="row">1</th>
                        <th class="table-content">Coca Cola</th>
                        <td class="table-content">$ 1.99</td>
                        <td class="table-content">$ 1.99</td>
                        <td class="table-content">Convinience Store</td>
                        <td class="table-content">Bebida</td>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">2</th>
                        <th class="table-content">Agua Dasani</th>
                        <td class="table-content">$ 1.99</td>
                        <td class="table-content">$ 1.99</td>
                        <td class="table-content">Panadería</td>
                        <td class="table-content">Bebida</td>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">3</th>
                        <th class="table-content">Adobo Goya</th>
                        <td class="table-content">$ 2.99</td>
                        <td class="table-content">$ 2.99</td>
                        <td class="table-content">Convinience Store</td>
                        <td class="table-content">Condimentos</td>
                        <td class="table-content">
                            <button type="button" class="btn btn-primary delete-btn">Borrar</button>
                        </td>
                    </tr>
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
                                    <input type="text" class="form-control modal-form" aria-describedby="basic-addon1">
                                </div>
                                <div class="category">
                                    <label class="form-label" for="exampleInputEmail1">Precios</label>
                                    <input type="number" class="form-control modal-form" aria-describedby="basic-addon1">
                                </div>

                                <div class="dropdown">
                                    <div class="form-group">
                                        <label class="form-label" for="exampleFormControlSelect1">Sub-categorías</label>
                                        <select class="form-control category" style="font-family: 'Montserrat', sans-serif; font-size: 13px;" id="exampleFormControlSelect1">
                                            <option class="title-category"> </option>
                                            <option class="title-category">Alcohol</option>
                                            <option class="title-category">Higiene</option>
                                            <option class="title-category">Refrigerios</option>
                                            <option class="title-category">Hogar</option>
                                        </select>
                                    </div>
                                </div>


                                    <div class="input-group mb-3" style="margin-top: 20px;">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="inputGroupFile02">
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
                        <button type="button" class="btn btn-primary" style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FD5440; border: 0;">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal add product -->
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

<style>
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
    
    .search-input {
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-radius: 0;
        font-family: 'Montserrat', sans-serif;
    }
    
    .input-group-text {
        background: rgba(255, 255, 255, 0);
    }
    
    .add-product-form {
        width: 600px !important;
    }
    
    .modal-title {
        font-family: 'Montserrat', sans-serif;
    }
    
    .modal-form {
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-radius: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
    }
    
    .form-label {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
    }
    
    .title-category {
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-weight: 300;
    }
    
    .category {
        border-radius: 0;
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-color: rgb(212, 212, 212);
        -webkit-appearance: none;
    }
    
    .btn-secondary2 {
        background: transparent;
        border-bottom: 1px solid rgb(214, 214, 214);
        border-radius: 0;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        width: 100%;
        color: rgb(148, 148, 148);
    }
    
    .dropdown-toggle::after {
        display: none;
    }

    .custom-file-input {
        border-top: 0 !important;
    }
</style>