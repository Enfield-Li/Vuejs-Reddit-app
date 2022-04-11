import { toRefs } from "vue";
import { useCounterStore } from "./counter";

export const useCounter = () => {
  const counterStore = useCounterStore();

  return toRefs(counterStore);
};

// const { counter, increment } = useCounter();
