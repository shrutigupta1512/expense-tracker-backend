// Ensure this is at the top of your script.js file
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("expense-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevent the default form submission

        const description = document.getElementById("description").value;
        const amount = document.getElementById("amount").value;

        // Make a POST request to your backend
        try {
            const response = await fetch("http://localhost:5500/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    description,
                    amount,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Expense added:", data);
                // Optionally clear the form fields
                form.reset();
            } else {
                console.error("Error adding expense:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });
});
