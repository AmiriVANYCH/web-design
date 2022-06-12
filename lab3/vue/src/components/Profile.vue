<template>
    <main class="reg">

        <table class="table mb-4">

            <tr>
                <td colspan="3" class="text-center">Профіль</td>
            </tr>
            <tr>
                <td>
                    Імя
                </td>
                <td>

                    <div class="form-floating">
                        <input type="text" class="form-control" v-model="floatingName" v-bind:disabled="isDisabled">
                        <div id="st_form_er_name" style="color:red" value=""></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Електронна пошта
                </td>
                <td>

                    <div class="form-floating">
                        <input type="email" class="form-control" v-model="floatingEmail" v-bind:disabled="isDisabled">
                        <div id="st_form_er_mail" style="color:red" value=""></div>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    Стать
                </td>
                <td>
                    <select class="form-select " aria-label="sex" v-bind:disabled="isDisabled" v-model="sex">
                        <option selected>Стать</option>
                        <option selected="selected" value="1">Чоловік</option>
                        <option value="2">Жінка</option>
                    </select>
                    <div id="st_form_er_sex" style="color:red" value=""></div>
                </td>
            </tr>
            <tr>
                <td>
                    День народження
                </td>
                <td>

                    <div class="form-floating">
                        <input type="date" class="form-control" v-model="floatingDate" v-bind:disabled="isDisabled">
                        <div id="st_form_er_BD" style="color:red" value=""></div>
                    </div>
                </td>
            </tr>

            <tr class="table-butt">
                <td align="center" colspan="3">
                    <button class="btn btn-sg btn-primary botom " @click="profile_b()">{{b_mes}}</button>
                </td>
            </tr>

        </table>

    </main>
</template>
<script>
    import UserDataService from "../services/UserDataService";

    export default {
        name: "sing",
        data() {
            return {
                isDisabled: true,
                profile: this.getUser(),
                profEdit: false,
                floatingEmail: '',
                floatingName: '',
                floatingDate: '',
                sex: '',
                id: '',
                b_mes: 'Редагувати'
            }


        },
        methods: {
            profile_b() {
                this.isDisabled = !this.isDisabled;
                if (this.isDisabled) {
                    this.b_mes = 'Редагувати'
                    var data = {
                        name: this.floatingName,
                        mail: this.floatingEmail,
                        pass: this.floatingPassword,
                        bd: this.floatingDate,
                        sex: this.sex
                    };
                    UserDataService.update(this.id, data);
                }	
		else{
 			this.b_mes = 'Зберегти';// eslint-disable-line no-mixed-spaces-and-tabs

                }
               
            },
            getUser() {
                UserDataService.getUser()
                    .then(response => {
                        console.log(response.data.exist)
                        if (response.data.exist == 1) {
                            console.log(response.data.data)
                            this.floatingEmail = response.data.data.mail,
                                this.floatingName = response.data.data.name,
                                this.floatingDate = response.data.data.bd,
                                this.sex = response.data.data.sex;
                            this.id = response.data.data.id;

                        } else { this.$router.push("/sing") }
                    })
                    .catch(e => { this.$router.push("/sing") });


            }
        },
    };
</script>



