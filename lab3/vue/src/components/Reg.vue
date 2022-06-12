<template>
    <div class="reg">

        <img class="mb-4 rounded mx-auto d-block" src="img/logo.png" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal text-center">Реєстрація</h1>


        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-md-5 col-lg-6 colm">
                    <div class="form-floating">
                        <input type="text" class="form-control" v-model="floatingName">
                        <label for="floatingInput">Імя</label>
                        <div id="st_form_er_name" style="color:red" value=""></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-6 colm">
                    <div class="form-floating">
                        <input type="email" class="form-control" v-model="floatingEmail">
                        <label for="floatingPassword">Електронна пошта</label>
                        <div id="st_form_er_mail" style="color:red" value=""></div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-sm-6 col-md-5 col-lg-6 colm">
                    <div class="form-floating">
                        <input type="password" class="form-control" autocomplete="on" v-model="floatingPassword">
                        <label for="floatingPassword">Пароль</label>
                        <div id="st_form_er_pass" style="color:red" value=""></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-6 colm">
                    <div class="form-floating">
                        <input type="password" class="form-control" autocomplete="on" v-model="floatingRePassword">
                        <label for="floatingRePassword">Повторіть пароль</label>
                        <div id="st_form_er_rpass" style="color:red" value=""></div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-sm-6 col-md-5 col-lg-6 colm">
                    <div class="form-floating">
                        <input type="date" class="form-control" v-model="floatingDate">
                        <label for="floatingPassword">День народження</label>
                        <div id="st_form_er_BD" style="color:red" value=""></div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-5 col-lg-6 colm">
                    <select class="form-select " aria-label="sex" v-model="sex">
                        <option selected>Стать</option>
                        <option value="1">Чоловік</option>
                        <option value="2">Жінка</option>
                    </select>
                    <div id="st_form_er_sex" style="color:red" value=""></div>
                </div>

            </div>

        </div>


        <button class="w-100 btn btn-lg btn-primary" @click="reg_b">Зареєструватися</button>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2022 Іван Зеленяк КВ-93</p>

    </div>
</template>

<script>
    import UserDataService from "../services/UserDataService";

    export default {
        name: "reg",
        data() {

            return {

                    floatingEmail: '',
                    floatingPassword: '',
                    floatingName: '',
                    floatingDate: '',
                    sex: 'Стать',
                    floatingRePassword: '',
                }

            
        },
        methods: {
            reg_b() {
                document.getElementById('st_form_er_name').innerText = document.getElementById('st_form_er_pass').innerText = document.getElementById('st_form_er_mail').innerText = document.getElementById('st_form_er_rpass').innerText = document.getElementById('st_form_er_BD').innerText = document.getElementById('st_form_er_sex').innerText = " "

                var valid = true;// eslint-disable-line no-mixed-spaces-and-tabs

                if (this.floatingName.length > 0) {
                    if (this.floatingName.length < 3) { valid = false; document.getElementById('st_form_er_name').innerText = 'Ім\'я має менше 3 символів' }
                    if (this.floatingName.length > 12) { valid = false; document.getElementById('st_form_er_name').innerText = 'Ім\'я має більше 12 символів' }
                }
                else {
                    valid = false; document.getElementById('st_form_er_name').innerText = 'І\'мя не введено';
                }

                if (this.floatingEmail.length == 0) {
                    valid = false; document.getElementById('st_form_er_mail').innerText = 'Введіть електронну адресу';
                }


                if (this.floatingPassword.length > 0) {
                    if (this.floatingPassword < 8) { valid = false; document.getElementById('st_form_er_pass').innerText = 'Пароль має менше 8 символів.' }
                    if (this.floatingPassword > 32) { valid = false; document.getElementById('st_form_er_pass').innerText = 'Ім\'я має більше 32 символів' }
                }
                else {
                    valid = false; document.getElementById('st_form_er_pass').innerText = 'Пароль не введено';
                }
                if (this.floatingRePassword.length > 0) {
                    if (!(this.floatingPassword === this.floatingRePassword)) { valid = false; document.getElementById('st_form_er_rpass').innerText = 'Паролі не збігаються' }
                }
                if (this.floatingDate === "") { valid = false; document.getElementById('st_form_er_BD').innerText = 'Введіть день народження' }


                if (this.sex === 'Стать') { valid = false; document.getElementById('st_form_er_sex').innerText = 'Стать не введено' }
                if (valid) {
                    var data = {
                        name: this.floatingName,
                        mail: this.floatingEmail,
                        pass: this.floatingPassword,
                        bd: this.floatingDate,
                        sex: this.sex
                    };
                    UserDataService.create(data)
                    .then(response => {console.log(response.data);})// eslint-disable-line no-mixed-spaces-and-tabs
        	    .catch(e => {console.log(e);});// eslint-disable-line no-mixed-spaces-and-tabs
                    this.$router.push("/")
                }
            }
        }
    };

</script>


