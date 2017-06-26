import Vue from 'vue'
import Router from 'vue-router'
import tao from '@/components/tao'
import only from '@/components/only'
import orderManage from '@/components/user/orderManage'
import member from '@/components/my/member'
import userProfit from '@/components/userProfit'
import details from '@/components/user/order/details'
import taobao from '@/components/user/order/taobao'
import smTicket from '@/components/user/order/smTicket'
import profitTao from '@/components/user/profit/profitTao'
import withDrawals from '@/components/user/withdrawals/withDrawals'
import withDrawalsDetail from '@/components/user/withdrawals/withDrawalsDetail'
import profitDetails from '@/components/user/profit/profitDetails'
import consumeDetails from '@/components/consumeDetails'
import BigImg from '@/components/bigImg.vue'
import accountManage from '@/components/user/accountManage'
import accountInfor from '@/components/user/account/accountInfor'
import accountDetail from '@/components/user/account/accountDetail'
import memberType from '@/components/user/account/memberType'
import orderManagement from '@/components/user/account/orderManagement'
import accountSecurity from '@/components/settings/security/accountSecurity'
import subAccountMe from '@/components/settings/subAccount/subAccountMe'
import newAdministrator from '@/components/newAdministrator'
import roleCreation from '@/components/roleCreation'
import shopInfo from '@/components/shops/account/shopInformation.vue'
import shopSign from '@/components/shops/sign/shopSign.vue'
import shopRebate from '@/components/shops/rebate/shopRebate.vue'
import taobaoDetail from '@/components/shops/rebate/taobaoDetail.vue'
import profitRebList from '@/components/shops/rebate/profitRebList.vue'
import extensionList from '@/components/distribution/Extension/extensionList.vue'



Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/only',
      name: 'only',
      component: only,
      children:[
        {
          path: '/only/tao',
          name: 'tao',
          component: tao,
          children:[
            {       
              path: '/only/tao/orderManage',
              name: 'orderManage',
              component: orderManage,
              children:[
                {
                path: '/only/tao/orderManage/taobao',
                name: 'taobao',
                component: taobao
                },
                {
                path: '/only/tao/orderManage/smTicket',
                name: 'smTicket',
                component: smTicket
                }
              ]
            },
            {
              path: '/only/tao/member',
              name: 'member',
              component: member 
            },
            {
              path: '/only/tao/userProfit',
              name: 'userProfit',
              component: userProfit,
              children:[
                  {
                    path: '/only/tao/userProfit/profitTao',
                    name: 'profitTao',
                    component: profitTao
                  }
              ]
            },
            {
              path: '/only/tao/withDrawals',
              name: 'withDrawals',
              component: withDrawals
            },
            {
              path: '/only/tao/shopInfo',
              name: 'shopInfo',
              component: shopInfo
            },
            {
              path: '/only/tao/shopSign',
              name: 'shopSign',
              component: shopSign
            },
            {
              path: '/only/tao/shopRebate',
              name: 'shopRebate',
              component: shopRebate
            },
            {
              path: '/only/tao/extensionList',
              name: 'extensionList',
              component: extensionList
            },
            {
              path: '/only/tao/accountManage',
              name: 'accountManage',
              component: accountManage,
              children:[
                  {
                    path: '/only/tao/accountManage/accountInfor',
                    name: 'accountInfor',
                    component: accountInfor
                  },
                  {
                    path: '/only/tao/accountManage/memberType',
                    name: 'memberType',
                    component: memberType
                  },
                  {
                    path: '/only/tao/accountManage/orderManagement',
                    name: 'orderManagement',
                    component: orderManagement
                  }
              ]
            },
            {
              path: '/only/tao/accountSecurity',
              name: 'accountSecurity',
              component: accountSecurity
            },
            {
              path: '/only/tao/subAccountMe',
              name: 'subAccountMe',
              component: subAccountMe
            },
            {
              path: '/only/tao/newAdministrator',
              name: 'newAdministrator',
              component: newAdministrator
            }
          ]
        },
        {
          path: '/only/details/:id/:order_number',
          name: 'details',
          component: details
        },
        {
          path: '/only/taobaoDetail',
          name: 'taobaoDetail',
          component: taobaoDetail
        },
        {
          path: '/only/profitRebList',
          name: 'profitRebList',
          component: profitRebList
        },
         {
          path: '/only/withDrawalsDetail/:memberId/:id/:status',
          name: 'withDrawalsDetail',
          component: withDrawalsDetail
        },
        {
          path: '/only/tao/profitDetails',
          name: 'profitDetails',
          component: profitDetails
        },
        {
          path: '/only/tao/consumeDetails',
          name: 'consumeDetails',
          component: consumeDetails
        },
        {
          path: '/only/tao/accountDetailr',
          name: 'accountDetail',
          component: accountDetail
        },
        {
          path: '/only/tao/roleCreation',
          name: 'roleCreation',
          component: roleCreation
        }
      ]
    },
    {
          path: '*',
          redirect: '/only/tao/member'
    }

  ]
})
