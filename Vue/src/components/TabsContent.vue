<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DxTabs, { DxItem } from 'devextreme-vue/tabs';
import notify from 'devextreme/ui/notify';
import type { ItemClickEvent } from 'devextreme/ui/tabs';

function showMessage(id: number): void {
  notify(
    {
      message: `Tab ${id} has been clicked!`,
      width: 250,
      position: {
        my: 'bottom',
        at: 'bottom',
        of: '#container',
      },
    },
    'info',
    500,
  );
}

function onItemClick(e: ItemClickEvent): void {
  showMessage(e.itemIndex + 1);
}
</script>

<template>
  <div id="container">
    <DxTabs
      :width="300"
      :selected-index="2"
      @item-click="onItemClick"
      selection-mode="multiple"
    >
      <DxItem badge="First"> </DxItem>
      <DxItem text="Second" :disabled="true"> </DxItem>
      <DxItem text="Third" icon="favorites"> </DxItem>
      <DxItem>
        <div id="fourth">Fourth</div>
      </DxItem>
    </DxTabs>
  </div>
</template>

<style scoped>
#container {
  width: 300px;
  height: 130px;
}

#fourth {
  text-align: center;
  font-style: italic;
  color: #f05b41;
}
</style>
