<template functional>
    <a-sub-menu style="text-align: left; padding-left:0px;">
        <span slot="title"
        ><a-icon
            :type="props.menuInfo.icon"
            v-if="props.menuInfo.icon"
        /><span>{{ props.menuInfo.title }}</span></span
        >
        <template v-for="item in props.menuInfo.children">
        <a-menu-item v-if="!item.children" :key="item.path"
            style="margin-top:0px;margin-bottom:-5px;padding-left:50px;">
            <router-link :to="{ path: item.path }">
            <a-icon :type="item.icon" v-if="item.icon" />
                <span style="font-size:16px">{{ item.title }}</span>
            </router-link>
        </a-menu-item>
        <sub-menu v-else :menuInfo="item" :key="item.path" style="margin-top:0px;margin-bottom:-5px;"/>
        </template>
    </a-sub-menu>
</template>