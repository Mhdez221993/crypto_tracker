import App from "@/App.vue"
import Navbar from "@/components/Navbar.vue"
import router from "@/routes.js"
import { createLocalVue, mount } from "@vue/test-utils"
import VueRouter from "vue-router"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("renders a child component via routing", async () => {
    const wrapper = mount(App, {
      localVue,
      router
    })

    router.push("/table")
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(Navbar).exists()).toBe(true)
  })
})