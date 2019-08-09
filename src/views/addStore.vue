<template>
    <div>
        <div class="form-group">
              <label class="form-title" for="exampleInputEmail1">Correo Electrónico</label>
              <input  type="text" class="form-control"  v-model="email"/>
            </div>

            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              style="font-family: 'Montserrat', sans-serif; font-size: 13px; height: 34px; background: #FFC93A; border: 0;"
              @click="viewData()"
            >Close</button>
    </div>
</template>


<script lang="js">
// import Parse from "parse";

export default {
  name: 'HelloWorld',
  data() {
    return {
        email: ''
    }
  },
  mounted:function()
  {
     if(Parse.User.current() == null)
            {
                this.$router.push('/HelloWorld');
            }
  },
  methods: {

      viewData()
      {
          console.log(this.email);
      }
    // signIn() {
    //   Parse.User.logIn(this.email, this.password).then(resp => {
    //       console.log("Logged in successfully", resp);
    //       if (resp.get("isAdmin") == true) {
    //         this.$router.push("/products");
    //         console.log("regular admin logged in");
    //       } else {
    //         this.$router.push("/adminStores");
    //         console.log("super admin logged in");
    //       }
    //     }, err => {
    //       console.log("Error logging in", err);
    //     }
    //   );
    // }
  }
};
</script>
