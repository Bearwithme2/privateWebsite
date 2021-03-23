<template>
  <b-container class="screen" fluid>
    <b-row class="vh-100 justify-content-center" align-v="center" cols="3">
      <b-col cols="6" class="text-center">
        <h1 class="text-white">
          Dobrý den, jmenuji se <span class="colored">Jakub Trtík</span>.
        </h1>
        <h1 class="text-white">Jsem vývojář.</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CVHeader"
};
</script>

<style scoped>
.colored {
  color: #eefc57;
}
</style>
