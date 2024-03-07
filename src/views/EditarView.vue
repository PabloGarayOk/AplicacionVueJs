<template>
    <div>
        <AppHeader />
        <FormularioEditar :formData="form" />
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios'
import FormularioEditar from '@/components/FormularioEditar.vue';
export default {
    name: 'EditarView',
    components: {
        AppHeader,
        AppFooter,
        FormularioEditar
    },
    // creamos la funcion data para guardar el id que nos pasan por parametro y los datos
    // solicitados con el metodo get
    data:function(){
        return {
            form:{
                "pacienteId": "",
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
    
    // creamos la funcion para buscar los datos correspondientes al id pasado por parametro
    mounted:function(){
        this.form.pacienteId = this.$route.params.id;
        let direccion = 'https://apirest.pablogaray.com.ar/pacientes.php?id=' + this.form.pacienteId;
        axios.get(direccion).then( datos => {
            // this.listapacientes = data.data;
            // console.log(datos);
            // Igualamos los datos del paciente con los campos para el formulario
            this.form.dni = datos.data[0].DNI;
            this.form.nombre = datos.data[0].Nombre;
            this.form.apellido = datos.data[0].Apellido;
            this.form.genero = datos.data[0].Genero;
            this.form.fechaNacimiento = datos.data[0].FechaNacimiento;
            this.form.direccion = datos.data[0].Direccion;
            this.form.tel = datos.data[0].Tel;
            this.form.email = datos.data[0].Email;
            this.form.token = localStorage.getItem("token");
            // console.log(this.form);
        })
    },
    /* methods:{
        editar(){
        const url = 'https://apirest.pablogaray.com.ar/pacientes.php';
        axios.put(url, this.form)
            .then(data => {// <<<--- aca se puede poner cualquier nombre ej: response
                console.log(data); // Imprime la respuesta del servidor en la consola
                // console.log(response.data); // Imprime una respuesta mas específica del servidor en la consola
                this.mostrarMensajeExito = true; // Mostramos el mensaje de éxito
            })
            .catch(error => {
                console.error('Error al enviar la solicitud PUT:', error); // Imprime cualquier error que ocurra
            });
        },
        salir(){
            this.$router.push('/dashboard');
        }
    } */
}
</script>
<style scoped>
</style>