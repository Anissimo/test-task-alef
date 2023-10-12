<template>
  <input
    v-model="value"
    required
    maxlength="24"
    :type="type"    
    :controls="false"
    :min="0"
  />
</template>

<script>
export default {
  props: {
    type: String,
    value: [Number, String],
  },
};
</script>
