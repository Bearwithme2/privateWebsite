<template>
  <div class="screen">
    <div class="timeline-container">
      <ul>
        <timeline-item
          v-for="(item, key) in cvItems"
          :key="key"
          :time="item.time"
          :title="item.title"
          :description="item.description"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import TimelineItem from "@/components/Timeline/TimelineItem";

export default {
  name: "Timeline",
  components: { TimelineItem },
  data() {
    return {
      cvItems: [
        {
          time: "03 2020 - Current time",
          title: "Kontraktor PHP dev",
          description: "Vývoj aplikací pro zákazníky třetí strany."
        },
        {
          time: "10 2019 - 11 2019",
          title: "SnugDesign s.r.o.",
          description:
            "Pracovní pozice kontraktora. Práce na více různorodých menších webových aplikacích, správa majetku pro bankéře, letecké doručování balíků, apod."
        },
        {
          time: "10 2019 - 11 2019",
          title: "oXy Online s.r.o.",
          description:
            "e-commerce platforma, práce s jazykem PHP 7.0+, frameworkem Oxid a Symfony, ORM Doctrine, Docker, Linux"
        },
        {
          time: "11 2017 - 06 2019",
          title: "a-net group a.s.",
          description:
            "Práce na univerzálním e-commerce systému. Práce s PHP, Java-script, html, css, SQL, nginx."
        },
        {
          time: "11 2015 - 12 2016",
          title: "Moravia IT s.r.o.",
          description:
            "Analýza a zpracovávání dat, práce s databázemi a řešení problémů spojených s procesy na webových serverech."
        },
        {
          time: "02 2012 - 02 2012",
          title: "Trtík sport",
          description: "Praxe v rámci školy."
        }
      ]
    };
  }
};
</script>

<style scoped>
.timeline-container {
  width: 20%;
  margin: auto;
  display: block;
  position: relative;
}

ul {
  margin: 2em 0;
  padding: 0;
  display: inline-block;
}
</style>
