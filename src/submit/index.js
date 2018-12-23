import $ from 'jquery'
import Vue from 'vue/dist/vue.esm'

const odBase = {
    area: '',
    category: '',
    word: '',
    value: '',
    unit: '',
    url: ''
}

const app = new Vue({
    el: '#submit',
    data: {
        message: null,
        odCommon: {
            prefectures: '',
            municipality: '',
            category: '',
            categoryElse: ''
        },
        select: {
            prefectures: [],
            municipalities: [{code: '', name: ''}, {code: '1', name: '川崎市中原区'}, {code: '2', name: '川崎市田端区'}],
            categories: [{code: '', name: ''}, {code: '1', name: '人口'}, {code: '2', name: '保育所'}]
        },
        ods: [{
            district: '',
            word: '',
            value: '',
            unit: '',
            url: ''
        }]
    },
    methods: {
        plus: (index) => {
            let obj = Object.assign({}, odBase)
            app.ods.splice(index + 1, 0, obj)
        },
        minus: (index) => {
            app.ods.splice(index, 1)
        },
        setMunicipality: () => {
            $.ajax({
                url: 'http://localhost:3000/v1/od/',
                type: 'get'
            }).done(() => {
                app.raw = {}
                app.od = {}
            }).fail((error) => {
                app.message = '市区町村を取得する処理でエラーが発生しました。時間を置いてからリトライしてください。'
                console.log(error)
            })
        },
        add: () => {
            $.ajax({
                url: 'http://localhost:3000/v1/od/',
                type: 'get',
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

$(window).on('load', () => {
    $.ajax({
        url: 'http://localhost:3000/prefectures/',
        type: 'get'
    }).done((result) => {
        console.log(result)
        result.unshift({code: '', name: ''})
        app.select.prefectures = result
    }).fail((error) => {
        app.message = '県を取得する処理でエラーが発生しました。時間を置いてからリトライしてください。'
        console.log(error)
    })
})