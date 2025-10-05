<template>
    <div id="container">
        <dxTabs
            :width="300"
            :selected-index="2"
            @item-click="onItemClick"
            selection-mode="multiple"
        >
            <dxItem 
                badge="First"
            >
            </dxItem>
            <dxItem 
                text="Second"
                :disabled="true" 
            >
            </dxItem>
            <dxItem 
                text="Third"
                icon="favorites"
            >
            </dxItem>
            <dxItem>
                <div id="fourth">Fourth</div>
            </dxItem>
        </dxTabs>
    </div>
</template>

<script>
    import DxTabs, { DxItem } from 'devextreme-vue/tabs';
    import notify from "devextreme/ui/notify";

    export default {
        components: {
            DxTabs,
            DxItem
        },
        data() {
            return {
                
            };
        },
        methods: {    
            showMessage(id) {
                notify(
                    {
                        message: `Tab ${id} has been clicked!`,
                        width: 250,
                        position: {
                            my: 'bottom',
                            at: 'bottom',
                            of: '#container'
                        }
                    },
                    'info',
                    500
                );
            },
            onItemClick(e) {
                this.showMessage(e.itemIndex + 1);
            }
        }
    }
</script>

<style>
    #container {
        width: 300px;
        height: 130px;
    }

    #fourth {
        text-align: center;
        font-style: italic;
        color: #F05B41;
    }
</style>