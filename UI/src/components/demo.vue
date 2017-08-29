<template>
  <div>
      gsdgsgsg
      <button type="button" name="button" @click="apple">gsgs</button>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        num:'123'
      }
    },
    computed: {
    },

    methods:{
      childMethod() {
        alert('childMethod do...')
      },
      apple(){
        this.$parent.app()
      }
    },
    created(){
    }
  }
</script>
