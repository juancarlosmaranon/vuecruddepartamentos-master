<template>
  <div>
    <h1>Departamentos</h1>
    <div v-if="status == false">
        <img src="./../assets/images/load.gif"/>
    </div>
    <table class="table table-bordered table-info" v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>LOCALIDAD</th>
          <th>DETALLES</th>
          <th>UPDATE</th>
          <th>ELIMINAR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="departamento in departamentos" :key="departamento.numero">
          <td>{{departamento.numero}}</td>
          <td>{{departamento.nombre}}</td>
          <td>{{departamento.localidad}}</td>
          <td>
            <!-- Hacemos el to con : para hacer un bilding -->
            <!-- Vamos  a pasarle estos parametros a detalles departamento -->
            <router-link :to="'/detalles/' + departamento.numero + '/' + departamento.nombre + '/' + departamento.localidad " class="btn btn-warning" >DETALLES</router-link>

          </td>
          <td>
            <router-link :to="'/update/' + departamento.numero  "  class="btn btn-info">UPDATE</router-link>
          </td>
          <td>
            <router-link :to="'/eliminar/' + departamento.numero  "  class="btn btn-danger">ELIMINAR</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamento from './../services/ServiceDepartamento';
const service = new ServiceDepartamento;

export default {
  name:"DepartamentosComponent",
  methods:{
    loadDepartamentos(){
      service.getDepartamentos().then(result => {
        this.departamentos = result
        this.status = true
      })
    }
  },
  data(){
    return{
       departamentos: [],
       status: false
    }
    

  },
  mounted(){
    this.loadDepartamentos();
  }
  
}
</script>

<style scooped>
  table {
    width: 20px;
    margin: 0 auto;
  }
</style>