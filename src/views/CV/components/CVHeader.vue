<template>
  <b-container class="screen" fluid>
    <b-row class="vh-85 justify-content-center" align-v="center">
      <b-col class="text-center">
        <h1 class="text-white">
          Dobrý den, jmenuji se <span class="colored">Jakub Trtík</span>.
        </h1>
        <h1 class="text-white">Jsem vývojář.</h1>
        <a href="../../../assets/cs_cv.pdf" download>
          <b-icon
            class="mt-4 pointer"
            scale="2"
            icon="file-earmark-arrow-down"
            variant="secondary"
          ></b-icon>
        </a>
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
.pointer {
  cursor: pointer;
}
</style>
