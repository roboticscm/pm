<script>
    import { Store } from './store';
    import ProductList from './product-list/index.svelte';
    import InputText from '/src/components/input-text/index.svelte';
    import InputNumber from '/src/components/input-number/index.svelte';
    import Button from '/src/components/button/index.svelte';

    const store = new Store();
    let listView = true;

    store.find();
    const { productList$ } = store;

    const onSave = () => {

    }
</script>

<main class="main">
    <div class="form">
        <InputText label="ID" name="id" readonly={true}></InputText>
        <InputText label="Name" name="name" placeholder="Enter product name"></InputText>
        <InputNumber label="Price" name="price" placeholder="Enter product price"></InputNumber>
    </div>
    <Button label="Save" on:click={onSave}></Button>
    <div class="filter-wrapper">
        <InputText placeholder="Filter text"></InputText>
        <Button style="width: 80px;" label="{listView ? 'Table' : 'List'}" on:click={()=>listView=!listView}></Button>
    </div>
    <ProductList {listView} data={$productList$}></ProductList> 
</main>

<style>
    .main {
        margin: 0 auto;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 24px;
    }

    .form {
        width: 100%;
        display: flex;
        column-gap: 24px;
    }

    .filter-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        column-gap: 12px;
    }
</style>