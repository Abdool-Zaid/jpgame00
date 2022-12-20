import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTestData = defineStore('testArray', () => {
const jpTest = [
  `/i/0/i//level/1/level//char/あ/char//trans/,a,/trans/`
]

  return jpTest
})
export const useReadArray= defineStore('readArray',(key)=>{
console.log(key)
})