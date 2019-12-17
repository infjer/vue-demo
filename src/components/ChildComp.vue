<template>
    <div>
        <div>
            confirm: {{this.val.confirm}}
        </div>
        <div>
            cancel: {{this.val.cancel}}
        </div>
    </div>
</template>

<script>
export default {
  inject: ['val']
}
</script>

<style lang='less' scoped>

</style>
