import $ from 'jquery'
import Vue from 'vue/dist/vue.esm'
import { getParam } from '../index'

const app = new Vue({
    el: '#edit',
    data: {
        message: null,
        od: {
            code: '',
            area: '',
            category: '',
            word: '',
            value: '',
            unit: '',
            url: '',
            createDatetime: '',
            updateDatetime: ''
        }
    },
    methods: {
        update: () => {
            app.message = null
            $.ajax({
                url: 'http://localhost:3000/v1/od/' + getParam('code'),
                type: 'put',
                data: app.od
            }).done(() => {
                location.href = './datalist.html?code=' + getParam('code')
            }).fail((error) => {
                app.message = '更新処理でエラーが発生しました。時間を置いてからリトライしてください。'
                console.log(error)
            })
        },
        cancel: () => {
            location.href = './datalist.html'
        }
    }
})

$(window).on('load', () => {
    $.ajax({
        url: 'http://localhost:3000/v1/od/' + getParam('code'),
        type: 'get'
    }).done((rowData) => {
        const data = rowData
        app.od = data
    }).fail((error) => {
        app.message = '取得処理でエラーが発生しました。時間を置いてからリトライしてください。'
        console.log(error)
    })
})