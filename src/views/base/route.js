const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Test',
  path: '/base',
  component: Layout,
  redirect: '/base/index',
  meta: {
    title: '基础功能',
    icon: 'majesticons:compass-line',
    order: 1,
  },
  children: [
    {
      name: 'myTasksBaseComponents',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '我的任务',
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
    {
      name: 'viewDef',
      path: 'view-def',
      component: () => import('./view-def/index.vue'),
      meta: {
        title: '编辑本视图',
        icon: 'material-symbols:auto-awesome-outline-rounded',
        keepAlive: true,
      },
    },
    {
      name: 'Unocss',
      path: 'unocss',
      component: () => import('./unocss/index.vue'),
      meta: {
        title: 'Unocss',
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
    {
      name: 'KeepAlive',
      path: 'keep-alive',
      component: () => import('./keep-alive/index.vue'),
      meta: {
        title: 'KeepAlive',
        icon: 'material-symbols:auto-awesome-outline-rounded',
        keepAlive: true,
      },
    },
  ],
}
