<template>
    <div>
        <div class="container">
            <div v-if="mostrarMensaje" class="alert alert-success mt-4" :role="tipo">
                {{ mensaje }}
            </div>
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
                            <label for="tel" class="control-label">Teléfono *</label>
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
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'FormularioNuevo',
    components: {
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
            mostrarMensaje: false, // Inicialmente, ocultamos el mensaje
            mensaje: "", // Mensaje a mostrar
            tipo: ""// Tipo de alerta
        };
    },
    methods:{
        guardar(){
            const url = 'https://apirest.pablogaray.com.ar/pacientes.php';
            this.form.token = localStorage.getItem("token");
            axios.post(url, this.form)
            .then(response => {
                console.log(response);
                // Capturamos el ID
                this.responseId = response.data.result.pacienteId;
                this.noInsert = "-1 no insertamos nada.";
                if (this.responseId == this.noInsert){
                    // Mostramos el mensaje de paciente NO guardado.
                    this.datosMensaje(`No se guardo el paciente. Por favor complete los campos necesarios e intente nuevamente.`, "alert", 5000);
                }else{
                    // Limpiamos el formulario
                    this.form.dni = "",
                    this.form.nombre = "",
                    this.form.apellido = "",
                    this.form.genero = "",
                    this.form.fechaNacimiento = "",
                    this.form.direccion = "",
                    this.form.tel = "",
                    this.form.email = "",          
                    // Mostramos el mensaje de exito
                    this.datosMensaje(`Paciente ID: ${this.responseId} agregado con éxito. Redirigiendo al Dashboard`, "alert", 3000);
                    setTimeout(() => {
                        this.$router.push('/dashboard');
                    }, 3000);
                }        
            })
            .catch(error => {
                console.error('Error al enviar la solicitud DELETE:', error);
                this.datosMensaje("Error al guardar", "danger", 3000);
            });
        },
        salir(){
            this.$router.push('/dashboard');
        },
        datosMensaje(texto, tipo, delay) {
            this.mensaje = texto;
            this.tipo = tipo;
            this.mostrarMensaje = true;
            setTimeout(() => {
                this.mostrarMensaje = false;
            }, delay);
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