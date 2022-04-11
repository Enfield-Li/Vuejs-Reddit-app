import { toRefs } from "vue";
import { useCounterStore } from "./counterStore";

export const useCounter = () => {
  const counterStore = useCounterStore();

  return toRefs(counterStore);
};

// const { counter, increment } = useCounter();
