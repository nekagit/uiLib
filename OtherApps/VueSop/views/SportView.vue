<script setup lang="ts">
import type { ICustomCard } from '@/App.vue';
import HomePic from "../assets/image1.png";
import CustomCard from "../components/ui/card/CustomCard.vue";
import Card from "../views/AboutView.vue";
import Sponsors from "../assets/logoo.png"
const homeCard: ICustomCard = {
    title: "Welcome to SOP Rotterdam",
    description: "We offer information about serbian schooling and Rotterdam Sport Days",
    cardPic: HomePic,
    color: "rgba(58, 110, 241)",
    sectionHeaders: [
        {title: "Sponsors",img: Sponsors, description: "asdfasdfsadfsa",
        childComponent: Card,
    }
    ],
}
</script>

<template>
<CustomCard :data="homeCard" />
</template>

