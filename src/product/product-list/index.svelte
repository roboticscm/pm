<script>
    import ProductItem from "../product-item/index.svelte";
    import Button from '/src/components/button/index.svelte';
    import EditProductModal from '../edit-product-modal/index.svelte';

    import { createEventDispatcher } from 'svelte';

    export let data;
    export let listView = true;

    const dispatch = createEventDispatcher();

    let showModal = false;
    let editForm = {};

    const onDelete = (event) => {
        dispatch('delete', event.detail)
    }

    const onEdit = (event) => {
        editForm = event.detail;
        showModal = true;
    }

    const onSave = (e) => {
        const newForm = e.detail;
        const foundIndex = data.findIndex((it) => it.id == newForm.id);

        if (foundIndex > -1) {
            data[foundIndex] = newForm;
        }
        showModal = false;
    }
    const onCloseModal = () => showModal = false;
</script>

{#if showModal}
    <EditProductModal form={editForm} on:save={onSave} on:close={onCloseModal}></EditProductModal>
{/if}

{#if listView}
    <div class="list">
        {#if Array.isArray(data)}
            {#each data as item}
                <ProductItem {item} on:edit={onEdit} on:delete={onDelete}/>
            {/each}
        {/if}
    </div>
{:else}
    <table border="1" class="table">
        <thead>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
        </thead>
        {#if Array.isArray(data)}
            <tbody>
                {#if data.length > 0}
                    {#each data as item, index}
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>
                                <Button label="Edit" on:click={()=>onEdit({detail: item})}></Button>
                                <Button on:click={() => onDelete({detail: item.id})} label="Del" style="color: red;"></Button>
                            </td>
                        </tr>
                    {/each}
                {:else}
                    <tr>
                        <td colspan="5">No more data</td>
                    </tr>
                {/if}
            </tbody>
        {/if}
    </table>
{/if}

<style>
    .list {
        display: flex;
        column-gap: 12px;
        row-gap: 12px;
        flex-wrap: wrap;
    }

    .table {
        width: 100%;
        border-collapse: collapse;
    }

    .table th {
        padding: 8px;
    }

    .table td {
        padding: 4px;
    }
</style>
