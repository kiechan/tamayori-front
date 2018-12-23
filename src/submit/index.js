import $ from 'jquery'
import Vue from 'vue/dist/vue.esm'

const app = new Vue({
    el: '#submit',
    data: {
        message: null,
        raw: {
            words: '',
            url: ''
        },
        od: {
            area: '',
            category: '',
            word: '',
            value: '',
            unit: '',
            url: ''
        }
    },
    methods: {
        add: () => {
            $.ajax({
                url: 'http://localhost:3000/v1/od/',
                type: 'post',
                data: app.od
            }).done(() => {
                app.raw = {}
                app.od = {}
            }).fail((error) => {
                app.message = '追加処理でエラーが発生しました。時間を置いてからリトライしてください。'
                console.log(error)
            })
        }
    }
})
