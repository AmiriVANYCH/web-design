<template>
    <main class="form-signin">
            <img class="mb-4" src="img/logo.png" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">Вхід</h1>

            <div class="form-floating">
                <input type="email" class="form-control" v-model="floatingEmail" placeholder="name@example.com">
                <label for="floatingInput">Елкутронна пошта</label>
                <div id="st_form_er_mail" style="color:red" value=""></div>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" v-model="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Пароль</label>
                <div id="st_form_er_pass" style="color:red" value=""></div>
            </div>
            <button class="w-100 btn btn-lg btn-primary" @click="sing_b">Увійти</button>
            <p class="mt-5 mb-3 text-muted text-center">&copy; 2022 Іван Зеленяк КВ-93</p>

    </main>

</template>

<script>
    import UserDataService from "../services/UserDataService";

    export default {
        name: "sing",
        data() {

            return {

                    floatingEmail: '',
                    floatingPassword: '',
                }

            
        },
        methods: {
            sing_b() {
                document.getElementById('st_form_er_pass').innerText = document.getElementById('st_form_er_mail').innerText =  " ";
        var valid = true;
        if (this.floatingEmail == "") {
            valid = false; 
            document.getElementById('st_form_er_mail').innerText = 'Введіть електронну адресу';
        }


        if (this.floatingPassword != "") {
            if (this.floatingPassword.length < 8) { valid = false; document.getElementById('st_form_er_pass').innerText = 'Пароль має менше 8 символів.' }
            if (this.floatingPassword.length > 32) { valid = false; document.getElementById('st_form_er_pass').innerText = 'Ім\'я має більше 32 символів' }
        }
        else {
            valid = false; document.getElementById('st_form_er_pass').innerText = 'Пароль не введено';
        }
         	if (valid) {// eslint-disable-line no-mixed-spaces-and-tabs
                    var data = {
                        mail: this.floatingEmail,
                        pass: this.floatingPassword,
                    };
                    UserDataService.singVer(data)
                    .then(response => {
                     console.log(); 
                    if(response.data.exist == 1){
                         this.$router.push({name:"profile",params: {Id: response.data.id}})
                    }
                    else{
                        document.getElementById('st_form_er_pass').innerText = "Користувач не найдений"
                    }

                      })// eslint-disable-line no-mixed-spaces-and-tabs
        	    .catch(e => {console.log(e);});// eslint-disable-line no-mixed-spaces-and-tabs
                }

    
            }
        }
    };

</script>




