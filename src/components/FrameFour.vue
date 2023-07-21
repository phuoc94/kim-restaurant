<template>
  <div class="container bg-white px-4 pt-16 text-center" id="reservation">
    <h1 class="h1 font-serif font-bold text-neutral-900/80">
      Make a Reservation
    </h1>
    <p class="font-montserrat text-neutral-900">
      Get in touch with the restaurant
    </p>
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "FrameFour",
  components: { ContactForm },
};
</script>
