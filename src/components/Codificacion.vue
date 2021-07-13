<template>

  <section class="src-components-codificacion">
    <input 
      type="text" 
      id="codificacion" 
      name="codificacion"
      class="form-control"
      autocomplete="off"
      v-model="texto"
    >

    <h4>Cantidad: {{Cantidad}}</h4>
    <h4>{{ texto | codificado }} (codificado)</h4>
    <h4>{{ texto | mayuscula }} (mayúscula)</h4>
    <h4>{{ texto | minuscula }} (minúscula)</h4>
    <h4>{{ texto | maymin }} (mayúscula y minúscula)</h4>
    <h4>{{ texto | minmay }} (minúscula y mayúscula)</h4>


    <hr>

    <p>Respuestas: 1:B-C 2:B 3:C 4:B 5:B </p>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-codificacion',
    props: {

    },
    mounted () {

    },
    data () {
      return {
        texto: ''
      }
    },
    methods: {

    },
    computed: {
      Cantidad(){
        return this.texto.length
      }
    }
}


</script>

<style scoped lang="css">
  .src-components-codificacion {

  }
</style>
