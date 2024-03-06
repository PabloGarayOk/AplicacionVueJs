<template>
    <div>
        <AppHeader />

        <div class="container">
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Paciente Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">DNI</th>
                        <th scope="col">Tel</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- para recorrer los registros usamos "v-for" -->
                    <!-- para editar los registros usamos "v-on (onClick)" -->
                    <tr v-for="paciente in listapacientes" :key="paciente.Paciente_Id" v-on:click="editar(paciente.Paciente_Id)">
                        <th scope="row">{{ paciente.Paciente_Id }}</th>
                        <td>{{ paciente.Nombre }}</td>
                        <td>{{ paciente.Apellido }}</td>
                        <td>{{ paciente.DNI }}</td>
                        <td>{{ paciente.Tel }}</td>
                        <td>{{ paciente.Email }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios'
export default {
    name: 'DashboardView',
    // creamos el metodo data que es donde estan definidas todas las variales de la tabla
    data(){
        return {
            listapacientes:null,
            pagina:1,
        }
    },
    components:{
        AppHeader,
        AppFooter
    },
    // creamos un array de metodos
    methods:{
        editar(id){
            this.$router.push('editar/' + id);
        }
    },    
    // para traer los datos a la tabla necesitamos una funcion del ciclo de vida del componente
    // que se llama "mounted" y se ejecuta una vez que el componente haya sido montado.
    // le concatenamos la pagina para que pueda hacer la paginacion
    mounted:function(){
        // let direccion = "http://api.solodata.es/pacientes.php?page=" + this.pagina;
        // let direccion = 'http://www.apirest.free.nf/pacientes.php?page=' + this.pagina;
        let direccion = "https://apirest.pablogaray.com.ar/pacientes.php?page=" + this.pagina;
        axios.get(direccion).then( data => {
            this.listapacientes = data.data;
        })
    }

}
</script>
<style>
</style>