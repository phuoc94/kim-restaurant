<template>
  <div class="container mx-auto mt-16 text-center">
    <h1>Make a Reservation</h1>
    <p>Get in touch with the restaurant</p>
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

<style scoped>
h1 {
  color: rgba(23, 23, 23, 0.8);
  font-family: Times New Roman;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
}

p {
  color: var(--171717, #171717);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
}
</style>
