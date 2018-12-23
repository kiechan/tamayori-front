import $ from 'jquery'
import Vue from 'vue/dist/vue.esm'

const app = new Vue({
    el: '#login',
    data: {
        loginInfo: {
            id: '',
            password: ''
        }
    },
    methods: {
        login: () => {
            console.log(app.loginInfo.password)
            if (app.loginInfo.password == 'kie-chan') {
                location.href = './datalist.html'
            }
        }
    }
})
