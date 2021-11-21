<template>
    <div>
        <a-layout id="components-layout-demo-fixed-sider">
            <a-layout-sider
                :width="200"
                :style="{overflowX:'auto', overflow:'overlay', height:'100vh', position:'fixed', left:0, paddingRight:'5px'}"
                theme="dark">

                <a-row style="overflow-x: hidden; overflow-y:hidden">
                    <a-col :span="22">
                        <div style="height:100%; padding-top: 30px; font-weight:bold">
                            <a-row>
                                <div style="font-size:40px; padding-left: 20px; color:white;">MENU</div>
                            </a-row>
                            <a-row>
                                <a-menu
                                mode="inline"
                                theme="dark"
                                :inlineCollapsed="collapsed"
                                v-model="selectedKeys"
                                :openKeys="openKeys"
                                @openChange="onOpenChange"
                                @click="itemClick">
                                    <template v-for="item in menuItems">
                                        <a-menu-item v-if="!item.children" :key="item.path">
                                        <router-link :to="{ path: item.path}">
                                            <a-icon :type="item.icon" filled-color="black" style="font-size:20px"></a-icon>
                                            <span>{{ item.title}}</span>
                                        </router-link>
                                        </a-menu-item>
                                        <sub-menu v-else :menuInfo="item" :key="item.path"/>
                                    </template>
                                </a-menu>
                            </a-row>
                        </div>
                    </a-col>
                 </a-row>

            </a-layout-sider>

            <a-layout :style="{ marginLeft:'200px', overflow: 'hidden'}">
                <a-layout-header :style="{ background: '#FFF', padding: 0}">
                    <a-page-header :title="title" :subTitle="subTitle">
                         <template slot="extra">
                            <a-row style="width:130px">
                                <a-col :span="12" style="margin-top:5px">
                                    <label name="" style="font-size:16px; text-align:center">{{ avatarText }}</label>
                                </a-col>
                                <a-col :span="12">
                                    <a-dropdown>
                                        <a-avatar
                                            icon="user"
                                            :style="{ 'background-color': '#99bd49'}">
                                            {{ avatarText }}
                                        </a-avatar>
                                        <a-menu slot="overlay">
                                            <a-menu-item v-for="action in avatarActions" :key="action.name">
                                                <a @click="onAvatarAction(action)">{{ action.title }}</a>
                                            </a-menu-item>
                                        </a-menu>
                                    </a-dropdown>
                                </a-col>
                            </a-row>
                            </template>
                    </a-page-header>
                </a-layout-header>

                <a-layout-content style="background:#fff">
                    <div class="inner-content">
                        <router-view/>
                    </div>
                </a-layout-content>
            </a-layout>


        </a-layout>
    </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import SubMenu from '@/components/SubMenu.vue';
import {AvatarAction, MenuItems} from './model';

@Component({
    components:{SubMenu}
})
export default class Layout extends Vue{

    public title: string = "TITLE";
    public subTitle: string = "subtitle";
    public avatarText: string = "user";
    
    public avatarActions: AvatarAction[]=[
        {
            name: "logout",
            title: "登出",
        }
    ];

    public collapsed: boolean = false;
    public selectedKeys: Array<any> = [];
    public openKeys: Array<any> = [];
    
    public menuMap: Object = {};

    public menuItems = MenuItems;


    created(){
        this.menuItems.forEach((m)=> this.pushMenuMap(m));
        
    }
    
    pushMenuMap(item){

        if(item.key){
            this.menuMap[item.key] = {
            title: item.title,
            path: item.path,
            uri: item.uri,
            icon: item.icon,
            disabled: item.disabled,
            parentId: item.parentId
            }
        }
        if(item.children){
            item.children.forEach((m) => this.pushMenuMap(m));
        }
      
    }

    onOpenChange(curOpenKey) {
      var latestOpenKey: string[] = new Array;

      if(curOpenKey.length == 0){
        // latestOpenKey.push(curOpenKey[curOpenKey.length-1]);
        this.openKeys = latestOpenKey;
      }else{
        latestOpenKey.push(curOpenKey[curOpenKey.length-1]);
        this.openKeys = latestOpenKey;
      }
    }

    itemClick({ item, key, keyPath }) {
        this.subTitle = this.menuMap[key].title;
    }


    onAvatarAction(action: AvatarAction){
        switch(action.name){
            case "logout":
                this.signOut();
                break;
        }
    }

    signOut(){
        console.log("signOut....");
    }
}
</script>