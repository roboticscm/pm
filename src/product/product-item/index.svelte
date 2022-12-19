<script>
    export let item;
</script>

<div class="card">
    <div>
        ID: {item.id}
    </div>
    <div>
        Name: {item.name}
    </div>
    <div>
        Price: {item.price}
    </div>
</div>

<style>
    .card {
        border: 1px solid gray;
        border-radius: 10px;
        padding: 12px;
        background: rgb(238, 236, 236);
        min-width: 250px;
        flex: 1;
    }
</style>