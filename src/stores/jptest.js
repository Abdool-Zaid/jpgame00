import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTestData = defineStore('testArray', () => {
const jpTest = [
  `/i/0/i//level/1/level//char/あ/char//ans/a,ア/ans/`,
  `/i/1/i//level/1/level//char/い/char//ans/イ,i/ans/`,
  `/i/2/i//level/1/level//char/う/char//ans/ウ,u/ans/`,
  `/i/3/i//level/1/level//char/え/char//ans/e,エ/ans/`,
  `/i/4/i//level/1/level//char/お/char//ans/o,オ/ans/`,
  `/i/5/i//level/1/level//char/ア/char//ans/a,あ/ans/`,
  `/i/6/i//level/1/level//char/イ/char//ans/i,い/ans/`,
  `/i/7/i//level/1/level//char/ウ/char//ans/u,う/ans/`,
  `/i/8/i//level/1/level//char/エ/char//ans/e,え/ans/`,
  `/i/9/i//level/1/level//char/オ/char//ans/o,お/ans/`,
]

  return jpTest
})
