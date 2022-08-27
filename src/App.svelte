<script lang="ts">
    import './app.css'
    import {DEVICE_type} from 'uadetect'
import Header from './components/header.svelte'
import Form from './components/form.svelte'
</script>


{#if DEVICE_type === "mobile"}
    <Header />
    <Form />
{:else}
    <Header/>
    <Form />
{/if}