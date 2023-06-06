import { defineStore } from 'pinia';
import { createTask } from '@/api/task';

export const useTaskStore = defineStore('task', {
  state: () => ({
    handleFlag: false,
  }),

  getters: {
    getHandleFlag: (state) => {
      console.log('useTaskStore getHandleFlag', state.handleFlag);
      return state.handleFlag;
    },
  },

  actions: {
    handleTask(state) {
      this.handleFlag = state;
    },
    newTask(data) {
      return createTask(data)
        .then((res) => {
          console.log('createTask', res);
          this.handleFlag = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
