<template>
  <div>
    <div class="lottie" ref="lottie"  @click="click"></div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import anim from '@/assets/data.json'

export default {
  data: () => ({
    lottieInstance: ''
  }),

  mounted() {
    this.lottieInstance = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: anim,
    });
    this.lottieInstance.setSpeed(.9)
    this.lottieInstance.play()

    this.lottieInstance.addEventListener('complete', () => {
      console.log('complete')
    })

    this.lottieInstance.addEventListener('enterFrame', () => {
      console.log('enterFrame')
    })

    this.lottieInstance.addEventListener('data_ready', () => {
      console.log('data_ready')
    })

    this.lottieInstance.addEventListener('segmentStart', () => {
      console.log('segmentStart')
    })

    this.lottieInstance.addEventListener('DOMLoaded', () => {
      console.log('DOMLoaded')
    })

    this.lottieInstance.addEventListener('destroy', () => {
      console.log('destroy')
    })
  },

  methods: {
    click() {
      this.lottieInstance.goToAndPlay(40)
    }
  }
}
</script>
