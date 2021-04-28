export const myMixin = {
  created: function () {
    // this.hello()
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
