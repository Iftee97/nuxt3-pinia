<template>
  <div>
    <form
      class="max-w-[360px] my-[60px] mx-auto p-[20px]"
      @submit.prevent="handleSubmit"
    >
      <h2 class="text-white text-2xl font-bold">add a product</h2>
      <label class="block my-[30px] mx-auto">
        <span class="block mb-[6px] text-white"> title: </span>
        <input
          class="py-[8px] px-[6px] text-[1rem] text-[#777] w-[100%]"
          type="text"
          v-model="title"
          required
        />
      </label>
      <label class="block my-[30px] mx-auto">
        <span class="block mb-[6px] text-white"> description: </span>
        <input
          class="py-[8px] px-[6px] text-[1rem] text-[#777] w-[100%]"
          type="text"
          v-model="description"
          required
        />
      </label>
      <label class="block my-[30px] mx-auto">
        <span class="block mb-[6px] text-white"> price: </span>
        <input
          class="py-[8px] px-[6px] text-[1rem] text-[#777] w-[100%]"
          type="text"
          v-model="price"
          required
        />
      </label>
      <!-- <label class="block my-[30px] mx-auto">
        <span class="block mb-[6px] text-white"> image: </span>
        <input
          class="py-[8px] px-[6px] text-[1rem] text-[#777] w-[100%]"
          type="file"
          required
        />
      </label> -->
      <button
        type="submit"
        class="
          py-[12px]
          px-[24px]
          text-white text-[1rem]
          border border-white
          hover:bg-white hover:text-dark
        "
      >
        add
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../stores/cartStore";
import { useRouter } from "vue-router";

const router = useRouter();

const title = ref("");
const description = ref("");
const price = ref("");

const handleSubmit = async () => {
  // useCartStore().addProduct({
  //   title,
  //   description,
  //   price,
  //   img: "https://picsum.photos/200",
  // });
  // router.push("/");
  console.log(title.value, description.value, price.value);
};
</script>