import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'runbefore',
            component: relove => {
                return require(['@/page/runbefore/runbefore'], relove)
            }
        }, {
            path: '/index',
            name: 'Index',
            component: relove => {
                return require(['@/page/index'], relove)
            }
        }, {
            path: '/about',
            name: 'About',
            component: relove => {
                return require(['@/page/about'], relove)
            }
        }, {
            path: '/vip',
            name: 'VIP',
            component: relove => {
                return require(['@/page/vip'], relove)
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: relove => {
                return require(['@/page/register/register'], relove)
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: relove => {
                return require(['@/page/login/login'], relove)
            }
        },
        {
            path: '/game',
            name: 'Game',
            component: relove => {
                return require(['@/page/game/game'], relove)
            },
            // 是否需要登录
            meta: { role: true }
        },
        {
            path: '/ptElc',
            name: 'ptElc',
            component: relove => {
                return require(['@/page/ptElc/ptElc'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/me',
            name: 'me',
            component: relove => {
                return require(['@/page/me/me'], relove)
            }
        },
        {
            path: '/pay',
            name: 'pay',
            component: relove => {
                return require(['@/page/pay/pay'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/discount',
            name: 'discount',
            component: relove => {
                return require(['@/page/discount/discount'], relove)
            }
        },
        {
            path: '/discountDetail',
            name: 'discountDetail',
            component: relove => {
                return require(['@/page/discount/discountDetail'], relove)
            }
        },
        {
            path: '/message',
            name: 'message',
            component: relove => {
                return require(['@/page/message/message'], relove)
            }
        },
        {
            path: '/takeout',
            name: 'takeout',
            component: relove => {
                return require(['@/page/takeout/takeout'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/addbank',
            name: 'addbank',
            component: relove => {
                return require(['@/page/takeout/addbank'], relove)
            }
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: relove => {
                return require(['@/page/tutorial/tutorial'], relove)
            }
        },
        {
            path: '/rechargeTutorial',
            name: 'rechargeTutorial',
            component: relove => {
                return require(['@/page/tutorial/rechargeTutorial'], relove)
            }
        },
        {
            path: '/platTutorial',
            name: 'platTutorial',
            component: relove => {
                return require(['@/page/tutorial/platTutorial'], relove)
            }
        },
        {
            path: '/withdrawTutorial',
            name: 'withdrawTutorial',
            component: relove => {
                return require(['@/page/tutorial/withdrawTutorial'], relove)
            }
        },
        {
            path: '/friend_recommendation',
            name: 'friendRecommendation',
            component: relove => {
                require(['@/page/friend_recommendation'], relove)
            },
            meta: { role: true }
        }, {
            path: '/friend_recommendation_table',
            name: 'friendRecommendationTable',
            component: relove => {
                require(['@/page/friend_recommendation/table'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/tutorialAboutUs',
            name: 'tutorialAboutUs',
            component: relove => {
                return require(['@/page/tutorial/tutorialAboutUs'], relove)
            }
        },
        {
            path: '/technologySupport',
            name: 'technologySupport',
            component: relove => {
                return require(['@/page/tutorial/technologySupport'], relove)
            }
        },
        {
            path: '/contactUs',
            name: 'contactUs',
            component: relove => {
                return require(['@/page/tutorial/contactUs'], relove)
            }
        }, {
            path: '/about',
            name: 'About',
            component: relove => {
                return require(['@/page/about'], relove)
            }
        }, {
            path: '/vip',
            name: 'VIP',
            component: relove => {
                return require(['@/page/vip'], relove)
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: relove => {
                return require(['@/page/register/register'], relove)
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: relove => {
                return require(['@/page/login/login'], relove)
            }
        },
        {
            path: '/game',
            name: 'Game',
            component: relove => {
                return require(['@/page/game/game'], relove)
            },
            // 是否需要登录
            meta: { role: true }
        },
        {
            path: '/ptElc',
            name: 'ptElc',
            component: relove => {
                return require(['@/page/ptElc/ptElc'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/me',
            name: 'me',
            component: relove => {
                return require(['@/page/me/me'], relove)
            }
        },
        {
            path: '/pay',
            name: 'pay',
            component: relove => {
                return require(['@/page/pay/pay'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/discount',
            name: 'discount',
            component: relove => {
                return require(['@/page/discount/discount'], relove)
            }
        },
        {
            path: '/discountDetail',
            name: 'discountDetail',
            component: relove => {
                return require(['@/page/discount/discountDetail'], relove)
            }
        },
        {
            path: '/message',
            name: 'message',
            component: relove => {
                return require(['@/page/message/message'], relove)
            }
        },
        {
            path: '/takeout',
            name: 'takeout',
            component: relove => {
                return require(['@/page/takeout/takeout'], relove)
            },
        },
        {
            path: '/addbank',
            name: 'addbank',
            component: relove => {
                return require(['@/page/takeout/addbank'], relove)
            }
        },
        {
            path: '/remit',
            name: 'remit',
            component: relove => {
                return require(['@/page/remit/remit'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/personinfo',
            name: 'personinfo',
            component: relove => {
                return require(['@/page/personinfo/personinfo'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/changepwd',
            name: 'changepwd',
            component: relove => {
                return require(['@/page/changepwd/changepwd'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/infobind',
            name: 'infobind',
            component: relove => {
                return require(['@/page/infobind/infobind'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/tutorial',
            name: 'tutorial',
            component: relove => {
                return require(['@/page/tutorial/tutorial'], relove)
            }
        },
        {
            path: '/rechargeTutorial',
            name: 'rechargeTutorial',
            component: relove => {
                return require(['@/page/tutorial/rechargeTutorial'], relove)
            }
        },
        {
            path: '/platTutorial',
            name: 'platTutorial',
            component: relove => {
                return require(['@/page/tutorial/platTutorial'], relove)
            }
        },
        {
            path: '/withdrawTutorial',
            name: 'withdrawTutorial',
            component: relove => {
                return require(['@/page/tutorial/withdrawTutorial'], relove)
            }
        },
        {
            path: '/tutorialAboutUs',
            name: 'tutorialAboutUs',
            component: relove => {
                return require(['@/page/tutorial/tutorialAboutUs'], relove)
            }
        },
        {
            path: '/technologySupport',
            name: 'technologySupport',
            component: relove => {
                return require(['@/page/tutorial/technologySupport'], relove)
            }
        },
        {
            path: '/contactUs',
            name: 'contactUs',
            component: relove => {
                return require(['@/page/tutorial/contactUs'], relove)
            }
        },
        {
            path: '/payoutrecord',
            name: 'payoutrecord',
            component: relove => {
                return require(['@/page/payoutrecord/payoutrecord'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/limitrecord',
            name: 'limitrecord',
            component: relove => {
                return require(['@/page/limitrecord/limitrecord'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/discountrecord',
            name: 'discountrecord',
            component: relove => {
                return require(['@/page/discountrecord/discountrecord'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/bankcardset',
            name: 'bankcardset',
            component: relove => {
                return require(['@/page/bankcardset/bankcardset'], relove)
            }
        }, {
            path: '/delegate',
            name: 'delegate',
            component: relove => {
                return require(['@/page/delegate/delegate'], relove)
            }
        }, {
            path: '/payoutrecordtable',
            name: 'payoutrecordtable',
            component: relove => {
                return require(['@/page/payoutrecord/payoutrecordtable'], relove)
            },
            meta: { role: true }
        }, {
            path: '/limitrecordtable',
            name: 'limitrecordtable',
            component: relove => {
                return require(['@/page/limitrecord/limitrecordtable'], relove)
            },
            meta: { role: true }
        }, {
            path: '/discountrecordtable',
            name: 'discountrecordtable',
            component: relove => {
                return require(['@/page/discountrecord/discountrecordtable'], relove)
            },
            meta: { role: true }
        },
        {
            path: '/notice',
            name: 'notice',
            component: relove => {
                return require(['@/page/notice/notice'], relove)
            }
        }, {
            path: '/discountapply',
            name: 'discountapply',
            component: relove => {
                return require(['@/page/discountapply/discountapply'], relove)
            },
            meta: { role: true }
        }, {
            path: '/service',
            name: 'service',
            component: relove => {
                return require(['@/page/service/service'], relove)
            }
        }, {
            path: '/forgetpwd',
            name: 'forgetpwd',
            component: relove => {
                return require(['@/page/forgetpwd/forgetpwd'], relove)
            }
        }, {
            path: '/resetpwd',
            name: 'resetpwd',
            component: relove => {
                return require(['@/page/forgetpwd/resetpwd'], relove)
            }
        }
    ],
    mode: 'history'
})