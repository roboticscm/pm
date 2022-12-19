<script>
    import InputText from "/src/components/input-text/index.svelte";
    import InputNumber from "/src/components/input-number/index.svelte";
    import Button from "/src/components/button/index.svelte";
    import { onMount } from "svelte";
    import { createEventDispatcher } from 'svelte';

    export let form;

    const dispatch = createEventDispatcher ();

    let nameRef;

    onMount(() => {
        nameRef && nameRef.myFocus();
    });

    const onSave = () => {
        dispatch('save', form)
    }

    const onClose = () => {
        dispatch('close')
    }
</script>

<div class="modal">
    <div class="form">
        <div class="form-content">
            <InputText value={form.id} label="ID" name="id" readonly={true} />
            <InputText
                bind:value={form.name}
                bind:this={nameRef}
                label="Name"
                name="name"
                placeholder="Enter product name"
            />
            <InputNumber
                bind:value={form.price}
                label="Price"
                name="price"
                placeholder="Enter product price"
            />
        </div>

        <div class="button-list">
            <Button label="Save" on:click={onSave} />
            <Button label="Close" style="color: red;" on:click={onClose} />
        </div>
       
    </div>
</div>


<style>
    .modal {
        position: fixed;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        background: rgb(87, 86, 86);
        opacity: 0.99;
        z-index: 999;
        width: 100%;
        height: 100%;
    }

    .form {
        width: 50%;
        height: fit-content;
        margin: 0 auto;
        background: wheat;  
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 12px;
        row-gap: 12px;
    }

    .form-content {
        display: flex;
        flex-direction: column;
        row-gap: 18px;
    }

    .button-list {
        display: flex;
        justify-content: center;
        column-gap: 12px;
    }
</style>