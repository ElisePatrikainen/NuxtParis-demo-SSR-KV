<script setup>
import TheHero from './components/TheHero.vue';
import TheFooter from './components/TheFooter.vue';
const newTodo = ref();

const { data: items, refresh } = await useFetch("/api/items");

const addTodo = () => {
  $fetch("/api/todo", {
    method: "POST",
    body: {
      value: newTodo.value,
    },
  });
  refresh();
};
</script>

<template>
<div class="bg-[#F3F4F6]">
  <!-- <div class="container h-96 bg-slate-300 mx-auto rounded-lg">
              <img src="/img/img2.jpg" alt="image" class="object-cover h-96 w-full" />
  </div>
  Photo by <a href="https://unsplash.com/@nathsegato?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nathalia Segato</a> on <a href="https://unsplash.com/s/photos/nordic-furniture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
   -->
   <TheHero />
  <section class="pt-20 lg:pt-[120px]">
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <Item v-for="item in items" :key="name" :item="item" />
      </div>
    </div>
  </section>
  <TheFooter />
  </div>
</template>
