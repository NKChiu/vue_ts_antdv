<template>
    <div>
        <a-layout id="components-layout-demo-fixed-sider">
            <a-layout-sider
                :width="200"
                :style="{overflowX:'auto', overflow:'overlay', height:'100vh', position:'fixed', left:0, paddingRight:'5px'}"
                theme="dark">

                <a-row style="overflow-x: hidden;">
                    <a-col :span="22">
                        <div style="height:100%; padding-top: 30px; font-weight:bold">
                            <a-row>
                                <div style="font-size:40px; padding-left: 20px; color:white;">MENU</div>
                            </a-row>
                        </div>
                    </a-col>
                 </a-row>

            </a-layout-sider>

            <a-layout :style="{ marginLeft:'200px', overflow: 'hidden'}">
                <a-layout-header :style="{ background: '#FFF', padding: 0}">
                    <a-page-header :title="'TITLE'" :subTitle="'subtitle'">
                         <template slot="extra">
                            <a-row style="width:130px">
                                <a-col :span="12" style="margin-top:5px">
                                    <label name="" style="font-size:16px; text-align:center">{{ 'user' }}</label>
                                </a-col>
                                <a-col :span="12">
                                    <a-dropdown>
                                        <a-avatar
                                            icon="user"
                                            :style="{ 'background-color': '#99bd49'}">
                                            {{ 'user' }}
                                        </a-avatar>
                                        <a-menu slot="overlay">
                                            
                                        </a-menu>
                                    </a-dropdown>
                                </a-col>
                            </a-row>
                            </template>
                    </a-page-header>
                </a-layout-header>

                <a-layout-content style="background:#fff">
                    <div class="inner-content"></div>
                </a-layout-content>
            </a-layout>


        </a-layout>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component({
    components:{}
})
export default class Layout extends Vue{
    
}
</script>