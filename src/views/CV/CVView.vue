<template>
  <full-page ref="fullpage" :options="options">
    <div class="section">
      <c-v-header />
    </div>
    <div class="section">
      <c-v-about />
    </div>
    <div class="section">
      <work-history />
    </div>
    <div class="section">
      <contact />
    </div>
  </full-page>
</template>

<script>
import WorkHistory from "@/views/CV/components/WorkHistory";
import CVHeader from "@/views/CV/components/CVHeader";
import CVAbout from "@/views/CV/components/CVAbout";
import Contact from "@/views/CV/components/Contact";

export default {
  name: "CVView",
  components: { Contact, CVAbout, CVHeader, WorkHistory },
  data() {
    return {
      options: {
        scrollOverflow: true,
        anchors: ["header", "about", "work-history", "contact"],
        sectionsColor: ["#284567", "#ffffff", "#284567", "#ffffff"]
      }
    };
  }
};
</script>
