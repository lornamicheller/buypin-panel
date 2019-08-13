<template>
    <div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <img class="logo" src="../assets/logomiapplogin.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">Instructions</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="#">Calendar</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">Patients' Information</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="#">Waitlist</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Profile</router-link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<style scoped>
    .navbar,
    .navbar-expand-lg,
    .navbar-light,
    .bg-light {
        background: rgb(39, 39, 39) !important;
    }
    
    .nav-item {
        font-family: 'Poppins', sans-serif;
    }
    
    .nav-link {
        color: white !important;
        font-weight: 200;
        font-size: 13px;
        /* letter-spacing: 1px; */
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
</style>