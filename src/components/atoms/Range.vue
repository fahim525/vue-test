<template>
<div class="content flex items-center">
  <span class="text-xs text-gray-500">{{ label }}</span>
  <div id="my-slider" :se-min="minThreshold" :se-step="step" :se-min-value="min" :se-max-value="max" :se-max="maxThreshold" class="slider">
    <div class="slider-touch-left">
      <span></span>
    </div>
    <div class="slider-touch-right">
      <span></span>
    </div>
    <div class="slider-line">
      <span class="bg-indigo-custom-100"></span>
    </div>
    <div @click="$emit('onIncrease', max)" class="absolute right-4 bg-indigo-custom-100 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer" style="top: 6px">
        <i class="far fa-plus text-white"></i>
    </div>
    <div @click="$emit('onDecrease', min)" class="absolute left-4 bg-indigo-custom-100 rounded-full w-5 h-5 flex justify-center items-center cursor-pointer" style="top: 6px">
        <i class="far fa-minus text-white"></i>
    </div>
  </div>
</div>
</template>

<script>
import ZbRangeSlider from './ZbRangeSlider'

export default {
  props: {
    minThreshold: {
      type: Number,
      default: 0
    },
    maxThreshold: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    label: String
  },
  data: function () {
    return {
      instance: undefined
    }
  },
  mounted: function () {
    this.processRangeSlide();
  },
  watch: {
      min: {
        handler: 'processRangeSlide',
        //immediate: true
      },
      max: {
        handler: 'processRangeSlide',
       // immediate: true
      }
  },
  destroyed: function () {

  },
  methods: {
    processRangeSlide(){
        this.instance = new ZbRangeSlider('my-slider')
        this.instance.onChange = (min, max) => this.updateValues(min, max)
    },
    updateValues: function (min, max) {
      this.$emit('update:min', min)
      this.$emit('update:max', max)
    }
  }
}
</script>

<style>
.slider {
  display: block;
  position: relative;
  height: 36px;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.slider .slider-touch-left,
.slider .slider-touch-right {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  display: block;
  position: absolute;
  height: 30px;
  width: 30px;
  padding: 6px;
  z-index: 2;
}
.slider .slider-touch-left span,
.slider .slider-touch-right span {
  display: block;
  width: 100%;
  height: 100%;
  background:rgba(97, 88, 167);
  border: 1px solid rgb(183, 176, 233);
}
.slider .slider-line {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 36px);
  left: 18px;
  top: 10px;
  height: 12px;
  border-radius: 10px;
  border: 1px solid rgba(97, 88, 167);
  z-index: 0;
  overflow: hidden;
}
.slider .slider-line span {
  display: block;
  height: 100%;
  width: 0%;
}
</style>
