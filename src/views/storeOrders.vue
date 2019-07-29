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
                        <router-link class="nav-link active" to="/Products"><i class="fas fa-wine-bottle icon3"></i>Productos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/subCategory"><i class="icon3 fas fa-align-left"></i>Sub- Categorías</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/storeOrders" style="color: #FD5440 !important"><i class="fas fa-align-left icon3"></i>Órdenes</router-link>
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


        <div class="container-fluid" style="padding: 0;">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th class="table-title" scope="col">#</th>
                        <th class="table-title" scope="col">Email Cliente</th>
                        <th class="table-title" scope="col">Fecha de compra</th>
                        <th class="table-title" scope="col">Nombre de cliente</th>
                        <th class="table-title" scope="col">Teléfono de cliente</th>
                        <th class="table-title" scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="table-content" scope="row">1</th>
                        <td class="table-content">email@test.com</td>
                        <td class="table-content">1 - Agosto - 19</td>
                        <td class="table-content">Jane Doe</td>
                        <td class="table-content">787-456-5353</td>
                        <td class="table-content">
                            <button type="button" data-toggle="modal" data-target="#exampleModalCenter" class="see-btn">Ver</button>
                            <button type="button" class="delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">2</th>
                        <td class="table-content">email@test.com</td>
                        <td class="table-content">1 - Agosto - 19</td>
                        <td class="table-content">Jane Doe</td>
                        <td class="table-content">787-456-5353</td>
                        <td class="table-content">
                            <button type="button" data-toggle="modal" data-target="#exampleModalCenter" class="see-btn">Ver</button>
                            <button type="button" class="delete-btn">Borrar</button>
                        </td>
                    </tr>
                    <tr>
                        <th class="table-content" scope="row">3</th>
                        <td class="table-content">email@test.com</td>
                        <td class="table-content">1 - Agosto - 19</td>
                        <td class="table-content">Jane Doe</td>
                        <td class="table-content">787-456-5353</td>
                        <td class="table-content">
                            <button type="button" data-toggle="modal" data-target="#exampleModalCenter" class="see-btn">Ver</button>
                            <button type="button" class="delete-btn">Borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- modal see order info -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content add-product-form">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle" style="font-family: 'Montserrat', sans-serif;">Información de Orden</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h1 class="modal-title-address">Dirección</h1>
                        <p class="address-info"><b>Address:</b> Angora Central Park</p>
                        <p class="address-info"><b>Ciudad:</b> Aguadilla</p>
                        <p class="address-info"><b>Zipcode:</b> 00603</p>
                    </div>
                     <div class="modal-body">
                        <h1 class="modal-title-address">Información de Pago</h1>
                        <p class="address-info"><b>Tarjeta:</b> Visa</p>
                        <p class="address-info"><b>Fecha de vencimiento:</b> 1123</p>
                        <p class="address-info"><b>Nombre en tarjeta:</b> Jane Doe</p>
                        <p class="address-info"><b>Número de referencia:</b> 763673</p>
                        <p class="address-info"><b>Total:</b> $11.63</p>
                    </div>
                    <div class="modal-body" style="height: 300px; overflow: scroll;">
                        <div class="row justify-content-center">
                            <div class="col-6" style="margin-bottom: 20px;">
                                <img class="center-img" src="../assets/032731.jpg" width="100px" height="100px">
                                <p class="address-info2"><b>Nombre de producto:</b> Coca Cola</p>
                                <p class="address-info2"><b>Precio:</b> $1.63</p>
                                <p class="address-info2"><b>Cantidad de compra:</b> 1</p>
                            </div>
                            <div class="col-6">
                                <img class="center-img" src="../assets/19crimes.jpg" width="100px" height="100px">
                                <p class="address-info2"><b>Nombre de producto:</b> Coca Cola</p>
                                <p class="address-info2"><b>Precio:</b> $1.63</p>
                                <p class="address-info2"><b>Cantidad de compra:</b> 1</p>
                            </div>
                            <div class="col-6">
                                <img class="center-img" src="../assets/adobo.jpeg" width="100px" height="100px">
                                <p class="address-info2"><b>Nombre de producto:</b> Coca Cola</p>
                                <p class="address-info2"><b>Precio:</b> $1.63</p>
                                <p class="address-info2"><b>Cantidad de compra:</b> 1</p>
                            </div>
                            <div class="col-6">
                                <img class="center-img" src="../assets/montes.jpg" width="100px" height="100px">
                                <p class="address-info2"><b>Nombre de producto:</b> Coca Cola</p>
                                <p class="address-info2"><b>Precio:</b> $1.63</p>
                                <p class="address-info2"><b>Cantidad de compra:</b> 1</p>
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
        <!-- modal see order info -->
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

    .table-title {
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
        height: 35px;
        border: none;
        color: white;
        font-weight: 400;
        width: 100px;
    }
    
    .see-btn {
        background: rgba(212, 42, 42, 0.836);
        height: 35px;
        border: none;
        color: white;
        font-weight: 400;
        width: 100px;
    }

    .modal-title-address {
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
    }

    .address-info {
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        color: rgb(143, 143, 143);
        margin: 2px;
    }

     .address-info2 {
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        color: rgb(143, 143, 143);
        margin: 2px;
        text-align: center;
    }

    .center-img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
</style>