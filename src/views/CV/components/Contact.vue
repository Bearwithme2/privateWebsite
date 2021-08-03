<template>
  <Responsive
    :breakpoints="{
      small: el => el.width <= 700
    }"
  >
    <b-container slot-scope="el" class="vh-100" fluid>
      <b-row
        :class="{
          'justify-content-center': el.is.small,
          'justify-content-center vh-85': !el.is.small
        }"
        align-v="center"
      >
        <b-col>
          <b-row class="justify-content-center mt-3">
            <b-col cols="0">
              <h1>
                KONTAKT
              </h1>
              <hr />
            </b-col>
          </b-row>
          <b-row class="justify-content-center mt-5">
            <b-col lg="5">
              <contact-mail />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row style="margin-top: 5.2rem">
        <b-col class="p-0">
          <c-v-footer />
        </b-col>
      </b-row>
    </b-container>
  </Responsive>
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
