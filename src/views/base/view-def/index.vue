<script setup>
import api from '@/api'
import { viewDef } from '@/utils/baseParams'

api.main({
  ...viewDef.base,
  ...viewDef.vars,
}).then((res) => {
  console.log('编辑本视图 main', res)
})

</script>

<template>
<CommonPage show-footer></CommonPage>
</template>

<style lang="scss" scoped>

</style>
