export default async function JobDetail({params}) {
    const {id} = await params;
    return(
        <main>
            <h1>Job Detail</h1>
            <p>You are viewing job ID: {id}</p>
        </main>
    );
}