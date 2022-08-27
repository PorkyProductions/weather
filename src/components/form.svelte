<script>
    import '../app.css'
    let location;
    const submit = (e) => {
        const formData = new FormData(e.target);
        const data = {};
        for (let field of formData) {
            const [key, value] = field;
            data[key] = value;
        }
        console.log(data)
        location = data.Location
        getConditions();
    }
    const getConditions = async () => {
        const response = await fetch(`https://goweather.herokuapp.com/weather/${location}`)
        console.log(`API called at ${location}`);
        const data = await response.json();
        const conditions = data.description;
        return conditions
    }
    let conditionPromise = getConditions()
</script>
<div class="m-auto">
    <form on:submit|preventDefault={submit} class="m-auto">
        <label for="Location" class="text-center">Town</label>
        <input
            type="text"
            id="Location"
            name="Location"
            value=""
            class="border border-black rounded"
            placeholder="Enter a town..."
        />
        <button type="submit" class="rounded-full bg-gray-300 hover:bg-gray-400 p-2">Submit</button>
    </form>
</div>



{#await conditionPromise}
    Loading...
{:then conditions} 
    <p>{conditions}</p>
{/await}