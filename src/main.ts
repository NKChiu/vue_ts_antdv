import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import store from './store'

// antdv
import {Row, Col, Transfer, Button, Layout, Menu, Icon, PageHeader, Avatar, Dropdown,
  Modal, Spin, Form, FormModel, Input, Select, InputNumber, Tag, Table, Divider, Badge,
  message, Tree, Switch, Card, Tooltip, Checkbox, Upload, Popover, TimePicker, Calendar,
  Tabs, Drawer, DatePicker, List, Collapse, Descriptions, Space } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'; 

Vue.use(FormModel);
Vue.use(Modal);
Vue.use(Upload);
Vue.use(Tabs);
Vue.use(Drawer);
Vue.use(List);
Vue.use(Collapse);
Vue.use(TimePicker);
Vue.use(Descriptions);
Vue.component(Space.name, Space);
Vue.component(Button.name, Button);
Vue.component(Transfer.name, Transfer);
Vue.component(Select.name, Select);
Vue.component(Select.Option.name, Select.Option);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Menu.name, Menu);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(PageHeader.name, PageHeader);
Vue.component(Avatar.name, Avatar);
Vue.component(Icon.name, Icon);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Modal.name, Modal);
Vue.component(Spin.name, Spin);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(FormModel.name, FormModel);
Vue.component(FormModel.Item.name, FormModel.Item);
Vue.component(Input.name, Input);
Vue.component(Input.TextArea.name, Input.TextArea);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Tag.name, Tag);
Vue.component(DatePicker.name, DatePicker);
Vue.component(DatePicker.RangePicker.name, DatePicker.RangePicker);
Vue.component(Table.name, Table);
Vue.component(Table.ColumnGroup.name, Table.ColumnGroup);
Vue.component(Table.Column.name, Table.Column);
Vue.component(Divider.name, Divider);
Vue.component(Badge.name, Badge);
Vue.component(Tree.name, Tree);
Vue.component(Switch.name, Switch);
Vue.component(Card.name, Card);
Vue.component(Card.Meta.name, Card.Meta);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Checkbox.Group.name, Checkbox.Group);
Vue.component(Upload.name, Upload);
Vue.component(Popover.name, Popover);
Vue.component(TimePicker.name, TimePicker);
Vue.component(Calendar.name, Calendar);
Vue.component(Tabs.name, Tabs);
Vue.component(List.name, List);

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
