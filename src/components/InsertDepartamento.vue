<template>
  <div>
    <h1>INSERTAR DEPARTAMENTOS</h1>
    <h1 style="color:coral">{{mensaje}}</h1>
    <!-- Si no ponemos el prevent nos da error al hacer el post -->
    <form method="POST" v-on:submit.prevent="insertarDepartamento()">
        <label>Introduce un numero:</label>
        <input type="number"  v-model="departamento.numero" class="form-control"/>
        <label>Introduce un nombre:</label>
        <input type="text" v-model="departamento.nombre" class="form-control"/>
        <label>Introduce una localidad:</label>
        <input type="text"  v-model="departamento.localidad" class="form-control"/>
        <button class="btn btn-primary">Crear Departamento</button>
    </form>
  </div>
</template>

<script>
// import Global from '@/Global';
// import axios from 'axios';
import ServiceDepartamentos from '@/services/ServiceDepartamento';
const service = new ServiceDepartamentos();

export default {
    name:"InsertDepartamento",
    methods:{
        insertarDepartamento(){
            service.insertarDepartamento(this.departamento).then(result => {
                this.$router.push("/");
                console.log(result)
            });
        }
    },
    data(){
        return {
            mensaje:"",
            departamento: {
                numero:0,
                nombre:"",
                localidad: ""
            }
        }
    }
}
</script>

<style scoped>
    input{
        width: 30;
        margin: 0 auto;
    }
</style>