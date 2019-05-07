let initialized = false

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://9vz6omcjfd.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-csuvikg"
    process.env.AWS_REGION        = "eu-west-1"
    process.env.order_events_stream = 'orders-dev-csuvikg'
    process.env.restaurant_notification_topic = 'restaurants-dev-csuvikg'

    initialized = true
}

module.exports = {
    init
}
