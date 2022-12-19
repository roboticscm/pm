<script>
    export let label;
    export let value;
    export let name;
    export let placeholder;
    export let readonly;

    let ref;
    export const myFocus = () => ref && ref.focus();

    export const getRef  = () => ref;

</script>

<div class="input-wrapper">
    {#if label}
        <label for={name}>
            {label}
        </label>
    {/if}
    <input bind:this={ref} {name} class="input" type="text" bind:value {placeholder} {readonly} on:input on:keyup/>
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