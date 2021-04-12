<template>
  <li>
    <div class="timestamp">
      {{ time }}
    </div>
    <h5 class="item-title">{{ title }}</h5>
    <p class="item-description">
      {{ description }}
    </p>
  </li>
</template>

<script>
export default {
  name: "TimelineItem",
  props: {
    time: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  margin: auto auto auto 10em;
  border-left: 1px dashed #20a4f3;
  padding: 0 0 5px 20px;
  position: relative;
}

li:last-child {
  border-left: 0;
}

li::before {
  position: absolute;
  left: -18%;
  top: -2%;
  content: " ";
  border: 8px solid #ccff66;
  border-radius: 500%;
  background: #20a4f3;
  height: 2.5em;
  width: 2.5em;
  transition: all 500ms ease-in-out;
}

li:hover::before {
  border-color: rgba(40, 69, 103, 1);
  transition: all 1000ms ease-in-out;
}

li {
  color: #20a4f3;
  position: relative;
  width: 200px;
  font-size: 12px;
}

.item-title {
  color: #20a4f3;
}
.item-description {
  color: #ccff66;
  cursor: pointer;
}
</style>
