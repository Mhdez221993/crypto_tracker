// Components
// Utilities
import ChartPage from '@/views/ChartPage.vue'
import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'



describe('ChartPage.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = mount(ChartPage, {
      localVue,
      vuetify,
    })

    expect(wrapper.html()).toMatchSnapshot()

    // We could also verify this differently
    // by checking the text content
    const title = wrapper.find('#mydivheader')

    expect(title.text()).toBe('Click here to move')
  })
})