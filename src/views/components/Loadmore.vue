<style lang="scss">
.load-more {
    width: 100%;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    cursor: pointer;
    &:hover {
        color: #fff;
        background-color: #9b9b9b
    }
}

</style>
<script>
export default {
  name: "p-loadmore",
  methods: {
    load() {
      this.$emit('click')
    }
  },
  render(_) {
    var data = {
      'class': "load-more",
      on: {
        click: this.load
      }
    }
    return _("div", data, ["阅读更多"])
  }
}

</script>
