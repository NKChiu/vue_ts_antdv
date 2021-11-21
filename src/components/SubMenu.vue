<template functional>
    <a-sub-menu>
        <span slot="title"
        ><a-icon
            :type="props.menuInfo.icon"
            v-if="props.menuInfo.icon"
        /><span>{{ props.menuInfo.title }}</span></span
        >
        <template v-for="item in props.menuInfo.children">
        <a-menu-item v-if="!item.children" :key="item.path">
            <router-link :to="{ path: item.path }">
            <a-icon :type="item.icon" v-if="item.icon" />
            <span>{{ item.title }}</span>
            </router-link>
        </a-menu-item>
        <sub-menu v-else :menuInfo="item" :key="item.path" />
        </template>
    </a-sub-menu>
</template>