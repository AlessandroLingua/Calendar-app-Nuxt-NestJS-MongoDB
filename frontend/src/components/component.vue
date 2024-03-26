<template>
    <div>
        <v-btn @click="getEvents">Carica Eventi</v-btn>
        <v-list v-for="event in events" :key="event._id">
            <v-list-item>{{ event.title }}</v-list-item>
        </v-list>
    </div>
</template>

<script>
    import { getEvents, createEvent } from './api.service';
    
    export default {
        data() {
        return {
            events: [],
        };
        },
        mounted() {
        this.getEvents();
        },
        methods: {
        getEvents() {
            getEvents().then((response) => {
            this.events = response.data;
            });
        },
        },
    };
</script>