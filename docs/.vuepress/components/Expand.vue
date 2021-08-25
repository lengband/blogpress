<template>
  <div>
    <div>{{title}} >></div>
    <slot name="expand" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '详情'
    }
  },
  data () {
    return {}
  }
}
</script>