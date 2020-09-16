<template>
  <div>
    {{ postId }
  }</div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    postId: {
      type: String,
      required: true,
    },
  },
};
</script>
