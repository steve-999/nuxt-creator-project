export const AmenitiesContainer = () => import('../..\\components\\AmenitiesContainer.vue' /* webpackChunkName: "components/amenities-container" */).then(c => wrapFunctional(c.default || c))
export const Availability = () => import('../..\\components\\Availability.vue' /* webpackChunkName: "components/availability" */).then(c => wrapFunctional(c.default || c))
export const Contract = () => import('../..\\components\\Contract.vue' /* webpackChunkName: "components/contract" */).then(c => wrapFunctional(c.default || c))
export const DateTabs = () => import('../..\\components\\DateTabs.vue' /* webpackChunkName: "components/date-tabs" */).then(c => wrapFunctional(c.default || c))
export const Eligibility = () => import('../..\\components\\Eligibility.vue' /* webpackChunkName: "components/eligibility" */).then(c => wrapFunctional(c.default || c))
export const EnergyPerformance = () => import('../..\\components\\EnergyPerformance.vue' /* webpackChunkName: "components/energy-performance" */).then(c => wrapFunctional(c.default || c))
export const Facilities = () => import('../..\\components\\Facilities.vue' /* webpackChunkName: "components/facilities" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const GoogleMap = () => import('../..\\components\\GoogleMap.vue' /* webpackChunkName: "components/google-map" */).then(c => wrapFunctional(c.default || c))
export const Photos = () => import('../..\\components\\Photos.vue' /* webpackChunkName: "components/photos" */).then(c => wrapFunctional(c.default || c))
export const PriceCTA = () => import('../..\\components\\PriceCTA.vue' /* webpackChunkName: "components/price-c-t-a" */).then(c => wrapFunctional(c.default || c))
export const PropertyHeading = () => import('../..\\components\\PropertyHeading.vue' /* webpackChunkName: "components/property-heading" */).then(c => wrapFunctional(c.default || c))
export const PropertyInfo = () => import('../..\\components\\PropertyInfo.vue' /* webpackChunkName: "components/property-info" */).then(c => wrapFunctional(c.default || c))
export const PropertySummary = () => import('../..\\components\\PropertySummary.vue' /* webpackChunkName: "components/property-summary" */).then(c => wrapFunctional(c.default || c))
export const RoomDetails = () => import('../..\\components\\RoomDetails.vue' /* webpackChunkName: "components/room-details" */).then(c => wrapFunctional(c.default || c))
export const TopOfPageContainer = () => import('../..\\components\\TopOfPageContainer.vue' /* webpackChunkName: "components/top-of-page-container" */).then(c => wrapFunctional(c.default || c))
export const Utilities = () => import('../..\\components\\Utilities.vue' /* webpackChunkName: "components/utilities" */).then(c => wrapFunctional(c.default || c))
export const AdminEligibility = () => import('../..\\components\\admin\\AdminEligibility.vue' /* webpackChunkName: "components/admin-eligibility" */).then(c => wrapFunctional(c.default || c))
export const AdminEnergyPerformance = () => import('../..\\components\\admin\\AdminEnergyPerformance.vue' /* webpackChunkName: "components/admin-energy-performance" */).then(c => wrapFunctional(c.default || c))
export const AdminFacilities = () => import('../..\\components\\admin\\AdminFacilities.vue' /* webpackChunkName: "components/admin-facilities" */).then(c => wrapFunctional(c.default || c))
export const AdminSelectPropertyModal = () => import('../..\\components\\admin\\SelectPropertyModal.vue' /* webpackChunkName: "components/admin-select-property-modal" */).then(c => wrapFunctional(c.default || c))
export const GenericDisplayBooleanList = () => import('../..\\components\\generic\\DisplayBooleanList.vue' /* webpackChunkName: "components/generic-display-boolean-list" */).then(c => wrapFunctional(c.default || c))
export const GenericDisplayListForObject = () => import('../..\\components\\generic\\DisplayListForObject.vue' /* webpackChunkName: "components/generic-display-list-for-object" */).then(c => wrapFunctional(c.default || c))
export const GenericInputBooleanList = () => import('../..\\components\\generic\\InputBooleanList.vue' /* webpackChunkName: "components/generic-input-boolean-list" */).then(c => wrapFunctional(c.default || c))
export const GenericInputListForm = () => import('../..\\components\\generic\\InputListForm.vue' /* webpackChunkName: "components/generic-input-list-form" */).then(c => wrapFunctional(c.default || c))
export const GenericInputListWithLabels = () => import('../..\\components\\generic\\InputListWithLabels.vue' /* webpackChunkName: "components/generic-input-list-with-labels" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
