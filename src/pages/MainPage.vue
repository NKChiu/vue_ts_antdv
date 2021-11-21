<template>
    <div>
        <Layout></Layout>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'
import Layout from "@/components/Layout.vue"

@Component({
    components:{Layout}
})
export default class MainPage extends Vue{
    
}
</script>