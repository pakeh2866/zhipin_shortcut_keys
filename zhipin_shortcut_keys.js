// ==UserScript==
// @name         Boss直聘快捷键筛选简历
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  上下左右快捷筛选简历
// @author       pakeh
// @match        https*://www.zhipin.com/*
// @include      https*:/www.zhipin.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    //创建right的函数
    function rightrun() {
        const listConversationOperate = document.getElementsByClassName('conversation-operate')
        if (!listConversationOperate.length) {
            return;
        }
        const btnListChangYongYu = listConversationOperate[0].getElementsByClassName('changyongyu');
        if (!btnListChangYongYu.length) {
            return;
        }
        const otherButton = btnListChangYongYu[0]

        setTimeout(() => {
            console.log(otherButton.textContent);
            otherButton.click()
        }, 400)
        //第二步点击
        setTimeout(() => {
            const phraseContent_find = document.getElementsByClassName('phrase-content')
            console.log('phraseContent_find:', phraseContent_find)
            console.log('phraseContent_find:', phraseContent_find.length)
            if (!phraseContent_find.length) {
                return;
            }
            const btn_send = phraseContent_find[0].getElementsByClassName('phrase-send');
            console.log('btn_send:', btn_send)
            const secondButton = btn_send[0]
            setTimeout(() => {
                console.log(secondButton.textContent);
                secondButton.click()
            }, 300)
        }, 500)
    };

    // left的触发事件
    function leftrun() {
        const listConversationOperate = document.getElementsByClassName('not-fit-wrap')
        console.log('第一阶段的值', listConversationOperate)
        if (!listConversationOperate.length) {
            return;
        }
        const btnListntf = listConversationOperate[0].getElementsByClassName('operate-btn');
        console.log('第二阶段的值', btnListntf)
        if (!btnListntf.length) {
            return;
        }
        const leftButton = btnListntf[0]
        console.log('不合适按钮的值', leftButton)

        //修改display的值
        const divElement = listConversationOperate[0].getElementsByClassName('not-fit-wrap');;
        console.log('divElement的值', divElement);
        console.log('style的值', divElement[0].style);
        console.log('display的值', divElement[0].style.display);
        divElement[0].style.display = null;
        console.log('display的值', divElement[0].style.display);
        setTimeout(() => {
            setTimeout(() => {
                console.log('开始点击')
                leftButton.click();
            }, 400)
        }, 400)
    };

    //检测方向键按键，触发不同的函数。
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { // 以回车键为例
            console.log('按下ArrowRight')
            rightrun();
        } else if (e.key === 'ArrowLeft') {
            console.log('按下ArrowLeft')
            leftrun();
        }
    });
})();
