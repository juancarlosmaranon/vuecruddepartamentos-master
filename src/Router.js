import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue';
import InsertDepartamentos from './components/InsertDepartamento.vue';
import DetallesDepartamento from './components/DetallesDepartamento.vue';
import UpdateDepartamentos from './components/UpdateDepartamentos.vue'
import EliminarDepartamento from './components/EliminarDepartamento.vue';

const routes = [
    {
        path: "/", component: DepartamentosComponent
    },
    {
        path: "/insertar", component: InsertDepartamentos
    },
    {
        //Recibimos 3 parametros en el path
        path: "/detalles/:numero/:nombre/:localidad", component: DetallesDepartamento
    },
    {
        //Recibimos 3 parametros en el path
        path: "/update/:id", component: UpdateDepartamentos
    },
    {
        
        path: "/eliminar/:id", component: EliminarDepartamento
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;