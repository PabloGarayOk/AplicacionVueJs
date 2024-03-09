<template>
    <div>
        <AppHeader />
        <div class="container">
            <form action="" class="form-horizontal mt-5">
                <!-- Fila 1 -->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group left">
                            <label for="nombre" class="control-label left">Nombre *</label>
                            <input type="text" class="form-control" name="nombre" id="nombre" v-model="form.nombre">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group left">
                            <label for="apellido" class="control-label left">Apellido</label>
                            <input type="text" class="form-control" name="apellido" id="apellido" v-model="form.apellido">
                        </div>
                    </div>
                </div>
                <!-- Fila 2 -->
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group left">
                            <label for="dni" class="control-label">DNI *</label>
                            <input type="text" class="form-control" name="dni" id="dni" v-model="form.dni">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group left">
                            <label for="fechaNacimiento" class="control-label">Fecha de Nacimiento</label>
                            <input type="text" class="form-control" name="fechaNacimiento" id="fechaNacimiento" v-model="form.fechaNacimiento" placeholder="AAAA-MM-DD">
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group left">
                            <label for="genero" class="control-label">Género</label>
                            <input type="text" class="form-control" name="genero" id="genero" v-model="form.genero">
                        </div>
                    </div>
                </div>
                <!-- Fila 3 -->
                <div class="form-group left">
                    <label for="direccion" class="control-label">Dirección</label>
                    <input type="text" class="form-control" name="direccion" id="direccion" v-model="form.direccion">
                </div>
                <!-- Fila 4 -->
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group left">
                            <label for="tel" class="control-label">Teléfono</label>
                            <input type="text" class="form-control" name="tel" id="tel" v-model="form.tel">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group left">
                            <label for="email" class="control-label">E-mail *</label>
                            <input type="text" class="form-control" name="email" id="email" v-model="form.email">
                        </div>
                    </div>
                </div>
                <!-- Fila 5 -->
                <div class="form-group mt-4">
                    <button type="button" class="btn btn-primary boton-mr-2" v-on:click="guardar()">Guardar</button>
                    <button type="button" class="btn btn-dark"  v-on:click="salir()">Salir</button>
                </div>
            </form>
        </div><!-- Fin container -->
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios';
// import FormularioNuevo from '@/components/FormularioNuevo.vue';
export default {
    name: 'NuevoView',
    components: {
        AppHeader,
        AppFooter,
        // FormularioNuevo
    },
    data:function(){
        return {
            form:{
                "dni": "",
                "nombre": "",
                "apellido": "",
                "genero": "",
                "fechaNacimiento": "",
                "direccion": "",
                "tel": "",
                "email": "",
                "token": ""
            },
            // mostrarMensajeExito: false // Inicialmente, ocultamos el mensaje de éxito
        };
    },
    methods:{
        guardar(){
            const url = 'https://apirest.pablogaray.com.ar/pacientes.php';
            this.form.token = localStorage.getItem("token");
            axios.post(url, this.form)
            .then(response => { // <<<--- aca se puede poner cualquier nombre ej: response
                console.log(response); // Imprime una respuesta mas específica del servidor en la consola
                // this.$router.push('/dashboard');
            })
            .catch(error => {
                console.error('Error al enviar la solicitud DELETE:', error); // Imprime cualquier error que ocurra
            });
        },
        salir(){
            this.$router.push('/dashboard');
        }
    }
}
</script>
<style>
.left{
    text-align: left;
}
.boton-mr-2{
    margin-right: 10px;
}
</style>