<template>
  <div>
    <h1>My Quest</h1>
    <div>
      <Todo/>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/commons/Todo";

export default {
  components: {
    Todo
  },
  data: () => ({
    questList: [
      {
        check: false,
        name: "리액트 공부하기",
        date: ["2020-01-20", "2020-01-22"],
        detail: ["구현하고 깃헙에 올리기.", "내용 정리하기"]
      },
      {
        check: false,
        name: "리액트 공부하기",
        date: ["2020-01-20", "2020-01-22"],
        detail: ["구현하고 깃헙에 올리기.", "내용 정리하기"]
      }
    ],
    dialog: false
  })
};
</script>

<style scoped>
.check {
  z-index: 1000;
}
</style>
