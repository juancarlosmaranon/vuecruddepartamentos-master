import axios from "axios";
import Global from "@/Global";



export default class ServiceDepartamentos {

    getDepartamentos(){
        return new Promise(function(resolve){
            var request = "/api/Departamentos/";
            var url = Global.urlDepartamentos + request;
            var departamentos = [];
            axios.get(url).then(res =>{
                departamentos = res.data,
                resolve(departamentos)
            });
        });
    }

    //Le pasamos el objeto departamento
    insertarDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "/api/departamentos";
            var url = Global.urlDepartamentos + request;
            //Metemos todos los datos al nuevo objeto departamento
            axios.post(url, departamento).then(res=>{
                resolve(res)
            })
            
        });
    }

    //Metodo para buscar un departamento en la api
    //Recibimos el ID del departamento
    findDepartmento(id){
        return new Promise(function(resolve){
            var request = "/api/departamentos/ " + id;
            var url = Global.urlDepartamentos + request;
            var departamento = {};
            //Metemos todos los datos al nuevo objeto departamento
            axios.get(url).then(res=>{
                departamento = res.data,
                resolve(departamento)
            })
            
        });
    }

    //Metodo para modificar un departamento
    //Recibimos el dato del objeto departamento
    updateDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "/api/departamentos";
            var url = Global.urlDepartamentos + request;
            axios.put(url, departamento).then(res => {
                console.log(res);
                resolve(res);
            });
        });
    }

    //Metodo para eliminar recibiendo un id de DeptartamentosComponent (linea 33)
    eliminarDepartamento(id){
        return new Promise(function(resolve){
            var request = "/api/departamentos/" + id;
            var url = Global.urlDepartamentos + request;
            axios.delete(url).then(res=>{
                resolve(res);
            });
        });
    }
}