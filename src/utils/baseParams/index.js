// 我的任务-编辑本试图
const viewDef = {
  base: {
    resId: 823,
    tblAlias: 'viewDef',
    operationID: 51,
    isNeedConfirm: 0,
    showProgressBar: 0,
    showStyle: 0,
    isOperatorSingleRec: 0,
    level: 1,
    condition: 'mainMenuName = Splenwise软件开发管理平台主菜单, viewName=我的任务',
    rel: '编辑本视图',
    btnShowStyle: 0,
    EDITALAIS: 'viewDef',
    curTblAlias: '我的任务',
  },
  vars: {}
}

// 二级菜单界面
const secondaryMenuPage = {
  base: {
    rel: '二级菜单界面',
    resId: 344,
    tblAlias: '二级菜单组界面管理界面',
    operationID: 51,
    isBlur: 1,
    EDITALAIS: '二级菜单界面',
    curTblAlias: '操作入口界面管理界面',
  },
  vars: {}
}

export  {
  viewDef,
  secondaryMenuPage,
}
