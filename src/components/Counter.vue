<template>
  <div>
    Clicked: {{ $store.state.count }} times.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters([
    ]),
    methods: mapActions([
      'increment',
      'decrement'
    ])
  }
</script>
