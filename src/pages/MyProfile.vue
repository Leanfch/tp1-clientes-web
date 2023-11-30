<script>
import { subscribeToAuth } from '../services/auth'
import MainTitle from '../components/MainTitle.vue';

export default {
    name: 'MyProfile',
    data() {
        return {
            user: {
                id: null,
                email: null,
            }
        };
    },
    mounted() {
        subscribeToAuth(user => {
            this.user = { ...user };
        });
    },
    components: { MainTitle }
}
</script>

<template>
    <div class="flex flex-col items-center">
        <MainTitle class="text-center">Mi perfil</MainTitle>

        <div>
            <img src="/img/user.png" alt="" class="max-w-[150px]">
        </div>

        <div class="mt-5">
            <p class="font-bold">Email</p>
            <p>{{ user.email }}</p>
            <div class="mt-5">
                <router-link :to="`/usuario/bSl0DPiI9SabCjaYNEva1LzQjCP2/chat`"
                    class="text-red-950 bg-red-100 p-3 hover:p-5 border-solid border-2 border-red-700 rounded-sm hover:shadow-xl transition-all">Hablar
                    con el proveedor</router-link>
            </div>
        </div>
    </div>
</template>
