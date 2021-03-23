<template>
  <div>
    <b-container class="vh-100" fluid>
      <b-row class="justify-content-center vh-100" align-v="center">
        <b-col>
          <b-row class="justify-content-center">
            <b-col cols="0">
              <h1>
                KONTAKT
              </h1>
              <hr />
            </b-col>
          </b-row>
          <b-row class="justify-content-center mt-5">
            <b-col cols="5">
              <contact-mail />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <c-v-footer />
  </div>
</template>

<script>
import ContactMail from "@/components/ContactMail";
import CVFooter from "@/components/CVFooter";
export default {
  name: "Contact",
  components: { CVFooter, ContactMail }
};
</script>

<style scoped>
hr {
  border: none;
  height: 3px;
  width: 100px;
  /* Set the hr color */
  color: #333; /* old IE */
  background-color: #333; /* Modern Browsers */
}
</style>
