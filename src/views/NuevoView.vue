<template>
    <div>
        <AppHeader />
        <FormularioNuevo />
        <AppFooter />
    </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import FormularioNuevo from '@/components/FormularioNuevo.vue';
export default {
    name: 'NuevoView',
    components: {
        AppHeader,
        AppFooter,
        FormularioNuevo
    }
}
</script>
<style>
</style>