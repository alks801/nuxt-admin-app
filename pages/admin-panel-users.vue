<template>
    <div>
        <AdminPanelUsers v-if="isUserAuthenticated"/>
        <SignInAdmin v-else/>
    </div>
</template>

<script>
import AdminPanelUsers from '@/components/AdminPanelUsers'
import SignInAdmin from '@/components/SignInAdmin'
export default {
  computed: {
    isUserAuthenticated: {
      get() {
        return this.$store.state.user.isUserAuthenticated
      }
    }
  },
  components: {
    AdminPanelUsers,
    SignInAdmin
  }
}
</script>
