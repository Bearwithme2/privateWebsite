<template>
  <b-card no-body class="mb-1">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle="'accordion-' + id" variant="secondary">
        {{ time }} {{ title }}
      </b-button>
    </b-card-header>
    <b-collapse
      :id="'accordion-' + id"
      accordion="my-accordion"
      role="tabpanel"
    >
      <b-card-body>
        <b-card-text>{{ description }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>

<script>
export default {
  name: "MobileTimelineItem",
  props: {
    id: {
      type: Number,
      required: true
    },
    time: {
      type: String,
      required: true,
      default() {
        return "";
      }
    },
    title: {
      type: String,
      required: true,
      default() {
        return "";
      }
    },
    description: {
      type: String,
      required: true,
      default() {
        return "";
      }
    }
  }
};
</script>
