<script>
    import { Store } from './store';
    import ProductList from './product-list/index.svelte';
    import InputText from '/src/components/input-text/index.svelte';
    import InputNumber from '/src/components/input-number/index.svelte';
    import Button from '/src/components/button/index.svelte';
    import { onMount, onDestroy } from 'svelte';
    import { generateUUID } from '/src/lib/generate.js';
    import { fromEvent } from 'rxjs';
    import { debounceTime, switchMap, map, tap } from 'rxjs/operators';


    const store = new Store();
    let listView = true;
    let nameRef, filterRef;
    let form = {};

    store.find();
    const { productList$ } = store;

    $: filterProductList = $productList$;

    const onSave = () => {
        productList$.next([form, ...$productList$]);
        reset();
    }

    const onDelete = (e) => {
        const deleteId = e.detail;
        productList$.next($productList$.filter((it) => it.id != deleteId))
    }

    const reset = () => {
        nameRef.myFocus();
        form = {
            id: generateUUID(),
        }
    }

    onMount(() => {
        reset();
        const subscription = fromEvent(filterRef.getRef(), 'keyup').pipe(
            debounceTime(500),
            map(event => event.target.value.toLowerCase()),
            switchMap(filterText => filter(filterText))
        ).subscribe((res) => {
            filterProductList = res
        });

        return ()=> {
            subscription.unsubscribe();
        }
    })

    onDestroy(() => {
        console.log('onDestroy standalone')
    })


    const onFilter = async (e) => {
        // const filterText = e.target.value.toLowerCase();
        // filterProductList = await filter(filterText)
    }

    const filter = (filterText) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Server search')
                resolve($productList$.filter((it) => (it.name||'').toLowerCase().includes(filterText)));
            }, 300)
        })
    }

</script>

<main class="main">
    <div class="form">
        <InputText value={form.id} label="ID" name="id" readonly={true}></InputText>
        <InputText bind:value={form.name} bind:this={nameRef} label="Name" name="name" placeholder="Enter product name"></InputText>
        <InputNumber bind:value={form.price} label="Price" name="price" placeholder="Enter product price"></InputNumber>
    </div>
    <Button label="Save" on:click={onSave}></Button>
    <div class="filter-wrapper">
        <InputText bind:this={filterRef} on:input={onFilter} placeholder="Filter text"></InputText>
        <Button style="width: 80px;" label="{listView ? 'Table' : 'List'}" on:click={()=>listView=!listView}></Button>
    </div>
    <ProductList on:delete={onDelete} {listView} data={filterProductList}></ProductList> 
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