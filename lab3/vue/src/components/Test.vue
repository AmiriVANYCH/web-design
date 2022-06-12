<template>
    <div class="question" id="question">

        <table class="table">
            <tr class="table-butt">
                <td align="center">
                    <h1 class="h3 mb-3 fw-normal text-center">Запитання {{qastionID}} з 40 </h1>
                </td>

            </tr>


        </table>

        <table class="table mb-4">
            <tr>
                <td colspan="3">

                    <span v-html="qastion"></span>

                </td>
            </tr>
            <tr>
                <td colspan="3" class="text-center">Оберіть одну правильну відповідь</td>
            </tr>



            <template v-for="answer in answers" v-bind:key="answer">
                <tr>
                    <td colspan="3">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" v-bind:value="answer" v-model="selectedAnswer[qastionID]">
                            <label class="form-check-label">{{answer.text}}</label>
                        </div>
                    </td>
                </tr>
            </template>


            <tr class="table-butt">
                <td>
                    <button class="w-50 btn btn-sg btn-primary" @click="prev">Назад</button>
                </td>
                <td>
                </td>

                <td align="right">
                    <button class="w-50 btn btn-sg btn-primary" @click="next">{{b_mes}}</button>

                </td>
            </tr>

        </table>

    </div>
</template>

<script>
    import UserDataService from "../services/UserDataService";
    import QastionDataService from "../services/QastionDataService";
    import AnswerDataService from "../services/AnswerDataService";

    export default {
        name: "test",
        data() {

            return {
                answers: {},
                selectedAnswer:[],
                qastionID: 1,
                profile: this.getUser(),
                qastion:'',
                qastionfun: this.get_qastion(1),
                test_len: 3,
                b_mes: 'Далі'
            }


        },
        methods: {

            prev() {
                if (this.qastionID > 1) {
                    this.qastionID = this.qastionID - 1;
                    this.get_qastion(this.qastionID)
                }
                if (this.qastionID == this.test_len-1) {
                    this.b_mes = 'Дальше'// eslint-disable-line no-mixed-spaces-and-tabs
                }


            },
            next() {
                if (this.qastionID == this.test_len) {alert("Данні збережено на сервері");this.$router.push("/profile")}
                if (this.qastionID < this.test_len) {
                    this.qastionID = this.qastionID + 1;
                    this.get_qastion(this.qastionID)
                    if (this.qastionID == this.test_len) {
                        this.b_mes = 'Завершити';
                    }

                }
                



            },


            get_qastion(qastionIDres) {
                this.qastionID = qastionIDres;
                QastionDataService.getQastion(this.qastionID)
                    .then(response => { this.qastion = response.data.text })// eslint-disable-line no-mixed-spaces-and-tabs
                    .catch(e => { console.log(e); });// eslint-disable-line no-mixed-spaces-and-tabs

                AnswerDataService.getAnswer(this.qastionID)
                    .then(response => { this.answers = response.data })// eslint-disable-line no-mixed-spaces-and-tabs
                    .catch(e => { console.log(e); });// eslint-disable-line no-mixed-spaces-and-tabs

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

}
     };

</script>


