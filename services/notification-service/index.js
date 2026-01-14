exports.handler = async (event) => {
    console.log("Send email notification", event);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Notification sent" }),
    };
};