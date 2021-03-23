<template>
  <b-form @submit.prevent="sendEmail">
    <b-form-input name="email" v-model="email" placeholder="Email" />
    <b-form-input name="name" v-model="name" class="mt-3" placeholder="Jméno" />
    <b-textarea
      name="content"
      v-model="content"
      class="mt-3"
      placeholder="Text"
    />
    <b-col class="mt-3 text-center">
      <b-button type="submit" variant="primary">Odeslat</b-button>
    </b-col>
  </b-form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactMail",
  data() {
    return {
      email: "",
      name: "",
      content: ""
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_tlrva1f",
          "template_mxeccep",
          e.target,
          "user_JIVO0YC6B62CTg3QJ141Z",
          {
            name: this.name,
            email: this.email,
            content: this.content
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.name = "";
      this.email = "";
      this.content = "";
    }
  }
};
</script>
