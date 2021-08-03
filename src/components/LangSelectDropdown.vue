<template>
  <b-nav-item-dropdown :text="lang" right>
    <b-dropdown-item @click="selectLang('CS')">CS</b-dropdown-item>
    <!--    <b-dropdown-item @click="selectLang('EN')">EN</b-dropdown-item>-->
  </b-nav-item-dropdown>
</template>

<script>
export default {
  name: "LangSelectDropdown",
  data() {
    return {
      lang: "CS"
    };
  },
  methods: {
    selectLang(lang) {
      this.lang = lang;
    }
  }
};
</script>
