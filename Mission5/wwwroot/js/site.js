function calculatePrice() {
    // Get the value the user entered
    let userHours = Number($("#userHours").val());
    let $total = $("#total");

    if (userHours <= 0) {
        // Reset input value to 1
        $("#userHours").val(1);

        // Update total value text
        $total.text("$0.00");

        // Show error message, Hide result message
        $("#error").show();
    }
    else {
        let hourlyRate = 50000;
        let finalPrice = userHours * hourlyRate;

        // Formatting to currency
        let formattedPrice = finalPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

        // Update total value text
        $total.text(formattedPrice);

        // Show error message, Hide result message
        $("#error").hide();
    }
}