const { createApp } = Vue;

createApp({
  data() {
    return {
      toDo: [
        {
          text: "fare la spesa",
          done: true,
        },
        {
          text: "fare allenamento",
          done: false,
        },
        {
          text: "portare a spasso il cane",
          done: true,
        },
      ],
    };
  },
  methods: {
    rimuove(index) {
      this.toDo.splice(index, 1);
    },
  },
}).mount("#app");
