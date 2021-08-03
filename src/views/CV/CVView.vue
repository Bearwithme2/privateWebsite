<template>
  <div>
    <navigation />
    <full-page ref="fullpage" :options="options" id="fullpage">
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
  </div>
</template>

<script>
import WorkHistory from "@/views/CV/components/WorkHistory";
import CVHeader from "@/views/CV/components/CVHeader";
import CVAbout from "@/views/CV/components/CVAbout";
import Contact from "@/views/CV/components/Contact";
import Navigation from "@/components/Navigation";

export default {
  name: "CVView",
  components: { Navigation, Contact, CVAbout, CVHeader, WorkHistory },
  data() {
    return {
      options: {
        menu: "#menu",
        scrollOverflow: true,
        anchors: ["header", "about", "work-history", "contact"],
        sectionsColor: ["#284567", "#ffffff", "#284567", "#ffffff"],
        onLeave: origin => {
          if (origin.anchor === "work-history") {
            this.resetWorkHistory();
          }
        }
      }
    };
  },
  methods: {
    resetWorkHistory() {
      this.$store;
    }
  }
};
</script>
