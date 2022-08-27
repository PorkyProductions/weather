<script>
    import '../app.css'
    let lat;
    let lon;
    let geoValues;
    navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude; 
        lon = position.coords.longitude;
        geoValues = {lat, lon};
        console.log(geoValues);
        return geoValues;
    },
    // we then handle any errors it may have caused in the most gracful way possible
    () => console.log(`error`))
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
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`)
        await console.log(`API called at ${lat} and ${lon}`);
        const data = await response.json();
        const conditions = data.elevation;
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