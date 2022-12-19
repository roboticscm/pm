<script>
    import Button from '/src/components/button/index.svelte';
    import { createEventDispatcher } from 'svelte';

    export let item;

    const dispatch = createEventDispatcher ();

    const onEdit = () => {
        dispatch('edit', item)
    }

    const onDelete = () => {
        dispatch('delete', item.id)
    }

    let showFloating = false;
</script>

<div class="card" on:mouseenter={()=>showFloating = true} on:mouseleave={()=>showFloating=false}>
    <div>
        ID: {item.id}
    </div>
    <div>
        Name: {item.name}
    </div>
    <div>
        Price: {item.price}
    </div>

    {#if showFloating}
        <div class="floating">
            <Button label="Edit" on:click={onEdit} />
            <Button
                on:click={onDelete}
                label="Del"
                style="color: red;"
            />
        </div>
    {/if}
</div>

<style>
    .card {
        position: relative;
        border: 1px solid gray;
        border-radius: 10px;
        padding: 12px;
        background: rgb(238, 236, 236);
        min-width: 250px;
        flex: 1;
    }

    .floating {
        position: absolute;
        top: 0;
        right: 0;
        background: rgb(231, 237, 196);
        display: flex;
        flex-direction: column;
        row-gap: 4px;
        padding: 6px;
    }
</style>
