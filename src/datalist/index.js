import $ from 'jquery'
import Vue from 'vue/dist/vue.esm'
import { getParam } from '../index'

console.log(getParam('code'))

const app = new Vue({
    el: '#datalist',
    data: {
        odList: [] //[
        //     {
        //         code: '1',
        //         area: '川崎',
        //         category: '人口',
        //         word: '人口',
        //         value: '30,000',
        //         unit: '人'
        //     },
        //     {
        //         code: '2',
        //         area: '川崎',
        //         category: '人口',
        //         word: '人口',
        //         value: '30,000',
        //         unit: '人'
        //     }
        // ]
    },
    methods: {
        add: () => {
            location.href = './submit.html'
        },
        edit: (code) => {
            location.href = './edit.html?code=' + code
        }
    }
})

$(window).on('load', () => {
    $.ajax({
        url: 'http://localhost:3000/v1/ods/',
        type: 'get'
    }).done((rawData) => {
        app.odList = rawData
    }).fail((error) => {
        console.log(error)
    })
})