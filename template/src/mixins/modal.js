
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data () {
    return {
      modal: this.visible
    }
  },
  watch: {
    visible (newValue) {
      this.modal = newValue
    }
  },
  methods: {
    handleVisibleChange (visible) {
      this.$emit('update:visible', visible)
    }
  }
}
