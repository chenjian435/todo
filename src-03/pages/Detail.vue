<template>
  <ul>
    <li>
      {{ id }}
      {{title }}
    </li>
  </ul>
</template>

<script>
export default {
  name:'Detail',
  props:['id','title']

}
</script>

<style>

</style>