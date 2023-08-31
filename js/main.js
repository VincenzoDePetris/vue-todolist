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
      newTask: {
        text: "",
        done: false,
      },
    };
  },
  methods: {
    rimuove(index) {
      this.toDo.splice(index, 1);
    },

    addMyText() {
      const newCopyTask = { ...this.newTask };
      this.toDo.unshift(newCopyTask);
      this.newTask.text = "";
    },
  },
}).mount("#app");
