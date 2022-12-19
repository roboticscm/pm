<script>
    export let label
    export let disabled;
    export let loading;
    export let style;
</script>

<button {style} class="button" {disabled} on:click>{loading ? 'Loading...' : label || 'Button' }</button>

<style>
    .button {
        padding: 4px 12px;
        border-radius: 8px;
    }
</style>