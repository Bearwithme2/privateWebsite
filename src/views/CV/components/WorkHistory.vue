<template>
  <b-container fluid>
    <b-row>
      <b-col class="text-center text-white">
        <h1>
          PRACOVNÍ HISTORIE
        </h1>
        <hr />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <timeline />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Timeline from "@/components/Timeline/Timeline";
export default {
  name: "WorkHistory",
  components: { Timeline }
};
</script>

<style scoped>
hr {
  border: none;
  height: 3px;
  width: 250px;
  /* Set the hr color */
  color: #fff; /* old IE */
  background-color: #fff; /* Modern Browsers */
}
</style>
