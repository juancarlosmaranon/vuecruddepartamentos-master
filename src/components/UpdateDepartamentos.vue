<template>
  <div>
    <h2>Update</h2>
    <div v-if="departamento">
        <!-- Sacamos los datos del departamento que queremos modificar -->
        <form method="post" v-on:submit.prevent="updateDepartamento()">
            <label>Numero:</label>
            <input type="hidden" v-model="departamento.numero" class="form-control" />
            <label>Nombre:</label>
            <input type="text" v-model="departamento.nombre" class="form-control"/>
            <label>Numero:</label>
            <input type="text" v-model="departamento.localidad" class="form-control"/>
            <button class="btn btn-info">Modificar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamento';
const service = new ServiceDepartamentos;

export default {
    name:"UpdateDepartamentos",
    methods:{
        updateDepartamento(){
            service.updateDepartamento(this.departamento).then(res => {
                console.log(res)
                this.$router.push('/');
            })
        }
    },
    data(){
        return{
            departamento: null,
            idDepartamento: 0
        }
    },
     mounted(){
        //recogemos el parametro id y lo definimos
        this.id = this.$route.params.id;
        //Buscamos el departamento con su id y ponemos el resultado
        service.findDepartmento(this.id).then(result => {
            this.departamento = result;
        })

     }


}
</script>

<style>

</style>