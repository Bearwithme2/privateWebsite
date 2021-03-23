<template>
  <b-navbar variant="primary">
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'CV' }">CV</b-nav-item>
      <b-nav-item :to="{ name: 'Blog' }">BLOG</b-nav-item>
      <b-nav-item :to="{ name: 'Admin' }">
        ADMINISTRATION
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <lang-select-dropdown />
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import LangSelectDropdown from "@/components/LangSelectDropdown";
export default {
  name: "Navigation",
  components: { LangSelectDropdown }
};
</script>
