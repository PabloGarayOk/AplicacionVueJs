<template>
    <div>
        <AppHeader />
        <div class="container">
            Hola desde editar
        </div>
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import axios from 'axios'
export default {
    name: 'EditarView',
    components: {
        AppHeader,
        AppFooter
    },
    // creamos la funcion data para obtener el id que nos pasan por parametro
    data:function(){
        return {
            pacienteId: null
        }
    },
    // creamos la funcion para buscar los datos correspondientes al id pasado por parametro
    mounted:function(){
        this.pacienteId = this.$route.params.id;
        let direccion = "https://apirest.pablogaray.com.ar/pacientes.php?id=" + this.pacienteId;
        axios.get(direccion).then( datos => {
            //this.listapacientes = data.data;
            console.log(datos);
        })
    }
}
</script>
<style>
</style>