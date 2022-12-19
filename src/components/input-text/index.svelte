<script>
    export let label;
    export let value;
    export let name;
    export let placeholder;
    export let readonly;
</script>

<div class="input-wrapper">
    {#if label}
        <label for={name}>
            {label}
        </label>
    {/if}
    <input class="input" type="text" bind:value {placeholder} {readonly} on:input on:keyup/>
</div>

<style>
    .input-wrapper {
        display: flex;
        flex-direction: column;
        row-gap: 6px;
        width: 100%;
    }

    .input {
        width: 100%;
    }
</style>