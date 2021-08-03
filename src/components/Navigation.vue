<template>
  <Responsive
    :breakpoints="{
      small: el => el.width <= 700
    }"
  >
    <div slot-scope="el">
      <b-navbar v-if="el.is.small" toggleable type="dark" variant="dark" sticky>
        <b-navbar-toggle class="ml-auto" target="navbar-toggle-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav id="menu">
            <b-nav-item data-menuanchor="header" href="#header">
              Úvod
            </b-nav-item>
            <b-nav-item data-menuanchor="about" href="#about">
              O mně
            </b-nav-item>
            <b-nav-item data-menuanchor="work-history" href="#work-history">
              Historie
            </b-nav-item>
            <b-nav-item data-menuanchor="contact" href="#contact">
              Kontakt
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <lang-select-dropdown />
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <b-navbar v-else variant="primary" type="dark" sticky>
        <b-navbar-nav id="menu">
          <b-nav-item data-menuanchor="header" href="#header">
            Úvod
          </b-nav-item>
          <b-nav-item data-menuanchor="about" href="#about">
            O mně
          </b-nav-item>
          <b-nav-item data-menuanchor="work-history" href="#work-history">
            Historie
          </b-nav-item>
          <b-nav-item data-menuanchor="contact" href="#contact">
            Kontakt
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <lang-select-dropdown />
        </b-navbar-nav>
      </b-navbar>
    </div>
  </Responsive>
</template>

<script>
import LangSelectDropdown from "@/components/LangSelectDropdown";
export default {
  name: "Navigation",
  components: { LangSelectDropdown }
};
</script>
