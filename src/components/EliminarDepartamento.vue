<template>
  <div>
    <h1>Eliminar departamento</h1>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamento';

const service = new ServiceDepartamentos();
export default {
    name:"EliminarDepartamento",
    // methods:{
    //         Swal.fire({
    // title: 'Are you sure?',
    // text: "You won't be able to revert this!",
    // icon: 'warning',
    // showCancelButton: true,
    // confirmButtonColor: '#3085d6',
    // cancelButtonColor: '#d33',
    // confirmButtonText: 'Yes, delete it!'
    // }).then((result) => {
    // if (result.isConfirmed) {
    //     Swal.fire(
    //     'Deleted!',
    //     'Your file has been deleted.',
    //     'success'
    //     )
    // }
    // })
    // }
    mounted(){


       var id = this.$route.params.id;
       service.eliminarDepartamento(id).then(res=>{
            console.log(res);
            //Lo redirijimos a la pagina principal
            this.$router.push("/");
       });
    }
}
</script>

<style></style>
