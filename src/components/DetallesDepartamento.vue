<template>
  <div>
    <h1>DETALLES DEPARTAMENTO</h1>
    <router-link to="/" class="btn btn-info">Volver a HOME</router-link>
    <h2 style="color:crimson">
      <!-- Accedemos a los parametros definidos en DepartamentosComponent -->
      Nombre: {{$route.params.nombre}}
      Localidad: {{$route.params.nombre}}
    </h2>
  </div>
</template>

<script>
export default {
    home:"DetallesDepartamento",

}
</script>

<style>

</style>