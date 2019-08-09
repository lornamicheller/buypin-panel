<template>
  <div>
    <div class="container-fluid log-in-bg">
      <div class="container logo">
        <img src="../assets/buypin-logo.png" class="logo" />
      </div>
      <div class="container center-div">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12">
            <div class="card">
              <div class="card-body">
                <form>
                  <div class="row justify-content-center">
                    <h1 class="login-title">Inicio</h1>
                    <div class="col-12">
                      <div class="row justify-contain-center">
                        <div class="col-1">
                          <i class="icon fas fa-user"></i>
                        </div>
                        <div class="col-11">
                          <input
                            class="email"
                            type="email"
                            placeholder="Correo Electrónico"
                            v-model="email"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="row justify-contain-center">
                        <div class="col-1">
                          <i class="icon fas fa-lock"></i>
                        </div>
                        <div class="col-11">
                          <input
                            class="password"
                            type="password"
                            placeholder="Contraseña"
                            v-model="password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <router-link class="forgot-btn" to="#">
                    <h5
                      style="font-size: 15px; font-weight: 300; text-align: center"
                    >¿Olvidó contraseña?</h5>
                  </router-link>
                  <div class="button-position">
                    <!-- <router-link to="/Products"> -->
                      <button @click="signIn" type="submit" class="btn submit-btn">Iniciar</button>
                    <!-- </router-link> -->
                    <router-link to="/storeForm">
                      <button type="submit" class="btn submit-btn2">Registrar Tienda</button>
                    </router-link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Parse from "parse";
export default {
  name: 'HelloWorld',
  data() {
    return {
        email: null,
        password: null
    };
  },
  methods: {
    signIn() {

      if(this.email == null || this.email == '' || this.password == null || this.password == '')
      {
        alert("¡Los campos son requeridos!");
      }

      Parse.User.logIn(this.email, this.password).then(resp => {
          console.log("Logged in successfully", resp);
          if (resp.get("isAdmin") == true) { //logs in user if he is admin and redirects to HIS stores product page
            this.$router.push("/products");
            console.log("regular admin logged in");
          } else {                          //logs in user if he is SUPER admin and redirects to view all stores which belong to other admins
            this.$router.push("/adminStores"); 
            console.log("super admin logged in");
          }
        }, err => {
          console.log("Error logging in", err);
          alert("Email o contraseña incorrectos.");
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.log-in-bg {
  height: 100vh;
  background-image: url("../assets/background panel admin.jpg");
  background-size: cover;
}

.center-div {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: -25px;
}

.logo {
  width: 300px;
  height: 300px;
  object-fit: contain;
  padding-top: 150px;
}

.card {
  padding-top: 50px;
  padding-bottom: 40px;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.925);
}

.login-title {
  text-align: center;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;

  font-size: 25px;
}

.icon {
  color: #fd5440;
  font-size: 20px;
}

.email,
.password {
  margin-bottom: 30px;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(185, 185, 185);
  font-family: "Montserrat", sans-serif;

  font-weight: 300;
  background-color: transparent;
}

.forgot-btn {
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-family: "Montserrat", sans-serif;

  font-weight: 600;
}

.forgot-btn:hover {
  text-decoration: none;
  color: #fd5440;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
}

.button-position {
  display: flex;
  width: 420px;
  margin: auto;
}

.submit-btn {
  background-color: #fd5440;
  border: none;
  padding: 8px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  width: 200px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  margin: 5px;
}

.submit-btn2 {
  background-color: #ffc93a;
  border: none;
  padding: 8px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  width: 200px;
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  margin: 5px;
}
</style>