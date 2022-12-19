<script>
    import ProductItem from "../product-item/index.svelte";
    import Button from '/src/components/button/index.svelte';

    export let data;
    export let listView = true;
</script>

{#if listView}
    <div class="list">
        {#if Array.isArray(data)}
            {#each data as item}
                <ProductItem {item} />
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
                {#each data as item, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                            <Button label="Edit"></Button>
                            <Button label="Del" style="color: red;"></Button>
                        </td>
                    </tr>
                {/each}
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
