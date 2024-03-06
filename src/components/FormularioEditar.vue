<template>
    <div class="container">
        <form action="" class="form-horizontal mt-5">
            <!-- Fila 1 -->
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group left">
                        <label for="nombre" class="control-label left">Nombre</label>
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
                        <label for="dni" class="control-label">DNI</label>
                        <input type="text" class="form-control" name="dni" id="dni" v-model="form.dni">
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group left">
                        <label for="fechaNacimiento" class="control-label">Fecha de Nacimiento</label>
                        <input type="text" class="form-control" name="fechaNacimiento" id="fechaNacimiento" v-model="form.fechaNacimiento">
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
                        <label for="email" class="control-label">E-mail</label>
                        <input type="text" class="form-control" name="email" id="email" v-model="form.email">
                    </div>
                </div>
            </div>
            <!-- Fila 5 -->
            <div class="form-group mt-4">
                <button type="button" class="btn btn-primary" v-on:click="editar()">Editar</button>
                <button type="button" class="btn btn-danger">Eliminar</button>
                <button type="button" class="btn btn-dark">Salir</button>
            </div>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
export default {
  props: ['formData'], // Define los props que esperas recibir
  data() {
    return {
      form: this.formData // Usa los datos recibidos en form
    }
  },
  methods: {
    editar(){
        let url = "https://apirest.pablogaray.com.ar/pacientes.php"
        axios.put(url, this.form)
        .then( data => {
            console.log(data);
        })
    }
  }
}
</script>
<style scoped>
.left{
    text-align: left;
}
</style>